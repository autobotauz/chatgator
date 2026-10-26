// session-store.js — persists the actively-watched session across a page
// refresh/reload, so hitting F5 (to pick up a freshly-deployed update, or
// just because the tab got reloaded) doesn't throw away the file you had
// open. See app.js's "Resume a watched session" section for the full
// picture of how this gets used, and its persistence comment for why saves
// are debounced before they ever reach here.
//
// What makes this possible at all: a FileSystemFileHandle (from the File
// System Access API — Chrome/Edge only, same as the rest of live-watch
// mode) is structured-cloneable, so IndexedDB can store the handle itself,
// not just data about it. localStorage/cookies can't hold a handle — only
// strings — which is why this needs IndexedDB specifically.
//
// Every operation here is best-effort: IndexedDB can be unavailable
// (private browsing in some browsers, a full/blocked storage quota) or the
// stored handle can simply turn out to be unusable later (permission
// revoked, file moved) — none of that is this module's problem to solve,
// it just needs to fail quietly so app.js's own fallback paths take over
// instead of a storage hiccup becoming a hard error.

const DB_NAME = 'chatgator-session';
const DB_VERSION = 1;
const STORE = 'session';
const KEY = 'current';

function openDb() {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) { reject(new Error('indexedDB unavailable')); return; }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => { req.result.createObjectStore(STORE); };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

// Saves the live file handle plus a plain-object snapshot of enough of
// app.js's `state` to redraw the view instantly on the next load, before
// we even know whether the handle's permission survived the reload.
export async function saveSession(handle, snapshot) {
  try {
    const db = await openDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put({ handle, snapshot, savedAt: Date.now() }, KEY);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  } catch { /* best-effort — see file header */ }
}

// Returns { handle, snapshot, savedAt } or null if there's nothing saved
// (or storage isn't available at all).
export async function loadSession() {
  try {
    const db = await openDb();
    const record = await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly');
      const req = tx.objectStore(STORE).get(KEY);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
    db.close();
    return record;
  } catch {
    return null;
  }
}

export async function clearSession() {
  try {
    const db = await openDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).delete(KEY);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  } catch { /* best-effort — see file header */ }
}
