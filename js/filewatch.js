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
// Each poll re-reads and reports the WHOLE file, not just the bytes
// appended since last time. parseLogText() carries running state (the
// day-rollover clock and every cast/style/heal attribution tracker) only
// for the one call it's made in — feeding it a byte-slice per poll would
// reset all of that every ~2s, which silently breaks any attribution whose
// two halves happen to fall on opposite sides of a poll boundary, and (once
// the watched file has crossed a day boundary) hands out-of-scale clock
// values to new events that sort as if they happened before everything
// already loaded. Re-parsing the whole file each poll costs some redundant
// work, but these logs parse in well under a second even at 180k+ lines, so
// against a multi-second poll interval it's not a real cost — and it's the
// same single-call path the initial load already uses, so it's correct by
// construction instead of by careful bookkeeping across calls.

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

  _poll() {
    if (this.stopped) return;
    this.timer = setTimeout(async () => {
      try {
        const file = await this.handle.getFile();
        // Cheap size check first — only pay for a full read+reparse when the
        // file actually changed (grew during normal play, or shrank/rotated,
        // e.g. the game client was restarted and started a fresh chat.log).
        if (file.size !== this.lastSize) {
          const text = await file.text();
          this.lastSize = file.size;
          this.onChange(text);
        }
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
}
