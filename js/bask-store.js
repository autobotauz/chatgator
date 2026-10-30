// bask-store.js — remembers which chat.log file you were sharing in a bask, so
// a page refresh can pick it back up. A FileSystemFileHandle can only be kept
// in IndexedDB (not localStorage). Chrome still asks for a click before a
// reloaded page may read the file again, unless the person chose "allow on
// every visit"; bask.js handles both. Best-effort: any storage failure just
// means picking the file again.

const DB_NAME = 'chatgator-bask';
const STORE = 'handles';

function open() {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) { reject(new Error('indexedDB unavailable')); return; }
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => { req.result.createObjectStore(STORE); };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function run(mode, fn) {
  const db = await open();
  try {
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, mode);
      const req = fn(tx.objectStore(STORE));
      tx.oncomplete = () => resolve(req && req.result);
      tx.onerror = () => reject(tx.error);
    });
  } finally { db.close(); }
}

export async function saveHandle(code, handle) {
  try { await run('readwrite', (s) => s.put(handle, code)); } catch { /* ignore */ }
}
export async function loadHandle(code) {
  try { return (await run('readonly', (s) => s.get(code))) || null; } catch { return null; }
}
export async function forgetHandle(code) {
  try { await run('readwrite', (s) => s.delete(code)); } catch { /* ignore */ }
}
