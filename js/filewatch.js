// filewatch.js — optional "live" mode using the File System Access API.
// Chrome/Edge (and other Chromium browsers) let a page hold a handle to a
// local file and re-read it; Safari/Firefox don't implement this API, so
// callers should feature-detect with `isWatchSupported()` and fall back to
// plain re-upload (handled entirely in app.js — this module never touches
// the DOM).
//
// Nothing here uploads anything anywhere: the file handle and its bytes
// never leave the browser tab.
//
// Each poll reads only the bytes appended since last time (`file.slice`),
// not the whole file — a chat.log that's grown into the tens of thousands
// of lines over a long session would otherwise cost more to re-parse on
// every single poll as the session goes on, which is how "refresh every
// 2s" ends up taking the better part of a minute to actually show up once
// the file is big: the fixed poll interval stays the same, but the work
// behind each one keeps growing. parser.js's parseLogText() now accepts an
// optional `resume` state (the `state` field it returns) specifically so
// this can hand it just the new chunk and still get identical results to
// one big call — see the comment on parseLogText for what that carries.
//
// Two things this still has to get right on top of a plain byte-slice:
//   1. A poll can land mid-line if the game client is still writing when we
//      read — we only report *complete* lines (ending in '\n') to the
//      caller and hold the dangling remainder back for the next poll by
//      simply not advancing `lastSize` past it, so the next slice starts
//      from the same spot and picks up the rest once it's written.
//   2. If the file *shrinks* (restarted client -> fresh/rotated chat.log),
//      there's no "new tail" to speak of — that's reported as a full
//      reset (`{ reset: true }`) with the whole new file's text, and the
//      caller is expected to throw away any carried parser/UI state and
//      start over, exactly like loading a brand new file.

export function isWatchSupported() {
  return typeof window !== 'undefined' && 'showOpenFilePicker' in window;
}

export class LogWatcher {
  constructor({ onChange, onError, pollMs = 2000 }) {
    this.onChange = onChange;
    this.onError = onError;
    this.pollMs = pollMs;
    this.handle = null;
    this.lastSize = 0;
    this.timer = null;
    this.stopped = true;
  }

  async pickAndStart() {
    if (!isWatchSupported()) throw new Error('not-supported');
    const [handle] = await window.showOpenFilePicker({
      types: [{ description: 'DAoC chat log', accept: { 'text/plain': ['.log', '.txt'] } }],
      excludeAcceptAllOption: false,
    });
    return this.startWithHandle(handle);
  }

  // Same as pickAndStart(), but for a handle the caller already obtained
  // some other way — e.g. app.js's unified file picker (which needs the
  // handle in hand first to decide whether it's a .log to watch or a
  // .json snapshot to import once), or a drag-and-dropped file resolved
  // to a handle via DataTransferItem.getAsFileSystemHandle() in Chromium.
  async startWithHandle(handle) {
    this.handle = handle;
    const file = await handle.getFile();
    this.lastSize = 0; // caller decides whether to parse the existing content first via readAll()
    this._file = file;
    this.stopped = false;
    this._poll();
    return file;
  }

  async readAll() {
    const file = await this.handle.getFile();
    this.lastSize = file.size;
    return await file.text();
  }

  // A File (which is also a Blob) snapshot of the watched file's CURRENT
  // on-disk contents — for the "save a copy before clearing" feature in
  // app.js. Deliberately returns the raw File rather than decoded text: a
  // chat.log is windows-1252, not UTF-8, and handing the Blob straight to
  // a writable stream's write() copies every byte exactly as-is, with no
  // decode/re-encode round-trip that could mangle anything above 0x7F.
  async snapshotFile() {
    return this.handle.getFile();
  }

  // Truncates the actual watched file on disk to zero bytes. Requests
  // readwrite permission on our handle first if the browser hasn't
  // already granted it (requestPermission is undefined on handles from
  // older Chromium that predates it — treated as already-granted there,
  // same as createWritable() always was before the permission model
  // existed). Deliberately does NOT touch our own polling state: the next
  // scheduled poll sees file.size < this.lastSize exactly like an
  // external truncation or log rotation, and reports it the normal way
  // via onChange(text, { reset: true }) — see _poll() above — so the
  // caller doesn't need to special-case "I just cleared it myself".
  async clear() {
    if (typeof this.handle.requestPermission === 'function') {
      const perm = await this.handle.requestPermission({ mode: 'readwrite' });
      if (perm !== 'granted') {
        const err = new Error('Write permission was not granted for this file.');
        err.name = 'NotAllowedError';
        throw err;
      }
    }
    const writable = await this.handle.createWritable();
    await writable.write('');
    await writable.close();
  }

  _poll() {
    if (this.stopped) return;
    this.timer = setTimeout(async () => {
      try {
        const file = await this.handle.getFile();
        if (file.size < this.lastSize) {
          // Shrank — the client rotated or restarted logging to a fresh
          // file. There's no "new tail" relative to our old position, so
          // just report the whole (smaller) file as a full reset.
          const text = await file.text();
          this.lastSize = file.size;
          this.onChange(text, { reset: true });
        } else if (file.size > this.lastSize) {
          const chunk = await file.slice(this.lastSize).text();
          const cut = chunk.lastIndexOf('\n');
          if (cut === -1) {
            // Grown, but still no complete line in the new bytes yet (the
            // client is mid-write on a long line) — wait for more without
            // moving lastSize, so the next poll re-reads from the same spot.
          } else {
            const complete = chunk.slice(0, cut + 1);
            const remainder = chunk.slice(cut + 1);
            // Only advance lastSize past what we actually consumed — the
            // trailing partial line's bytes (if any) stay unconsumed so the
            // next poll's slice starts there and completes it, rather than
            // us guessing where a safe cut point is in character terms.
            this.lastSize = file.size - new TextEncoder().encode(remainder).length;
            this.onChange(complete, { reset: false });
          }
        }
        // file.size === this.lastSize: nothing new, nothing to do.
      } catch (err) {
        if (this.onError) this.onError(err);
      }
      this._poll();
    }, this.pollMs);
  }

  stop() {
    this.stopped = true;
    if (this.timer) clearTimeout(this.timer);
  }

  // Change how often we poll while already watching. Takes effect for the
  // *next* poll immediately — a timer already scheduled with setTimeout
  // keeps the delay it was given at schedule time, so without this we'd
  // only pick up the new interval one poll late. Clearing and
  // re-scheduling right away means turning the interval down (e.g. to
  // catch a 5s ability cooldown) takes effect at once instead of waiting
  // out whatever the old interval had left.
  setPollMs(ms) {
    this.pollMs = ms;
    if (this.stopped) return;
    if (this.timer) { clearTimeout(this.timer); this.timer = null; }
    this._poll();
  }
}
