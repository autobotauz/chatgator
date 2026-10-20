// filewatch.js — optional "live" mode using the File System Access API.
// Chrome/Edge (and other Chromium browsers) let a page hold a handle to a
// local file and re-read it; Safari/Firefox don't implement this API, so
// callers should feature-detect with `isWatchSupported()` and fall back to
// plain re-upload (handled entirely in app.js — this module never touches
// the DOM).
//
// Nothing here uploads anything anywhere: the file handle and its bytes
// never leave the browser tab.

export function isWatchSupported() {
  return typeof window !== 'undefined' && 'showOpenFilePicker' in window;
}

export class LogWatcher {
  constructor({ onAppend, onError, pollMs = 2000 }) {
    this.onAppend = onAppend;
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
        if (file.size > this.lastSize) {
          const blob = file.slice(this.lastSize, file.size);
          const text = await blob.text();
          this.lastSize = file.size;
          this.onAppend(text);
        } else if (file.size < this.lastSize) {
          // file was truncated/rotated (e.g. client restarted) — re-read from scratch
          this.lastSize = 0;
          const text = await file.text();
          this.lastSize = file.size;
          this.onAppend(text, { reset: true });
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
