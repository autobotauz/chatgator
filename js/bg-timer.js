// bg-timer.js — setTimeout that keeps its pace in a background tab.
//
// Chrome slows timers in a tab that's been in the background for 5 minutes
// to about once a minute ("intensive throttling") — exactly while you're
// playing with Chat Gator behind the game window. Live watching runs on
// timers, so a new fight could take a minute or more to show up (seen in
// Bask: chart data reaching the server 50–80 seconds late).
//
// Timers inside a Web Worker aren't held back like that, so this runs the
// waiting in a tiny worker and only the callback on the page. Falls back to
// plain setTimeout wherever a worker can't be made.

let worker; // undefined = not tried yet, null = unavailable
let nextId = 1;
const callbacks = new Map();

function getWorker() {
  if (worker !== undefined) return worker;
  try {
    const src = `const t = new Map();
onmessage = (e) => {
  const { op, id, ms } = e.data;
  if (op === 'set') t.set(id, setTimeout(() => { t.delete(id); postMessage(id); }, ms));
  else if (op === 'clear') { clearTimeout(t.get(id)); t.delete(id); }
};`;
    worker = new Worker(URL.createObjectURL(new Blob([src], { type: 'text/javascript' })));
    worker.onmessage = (e) => {
      const fn = callbacks.get(e.data);
      callbacks.delete(e.data);
      if (fn) fn();
    };
    worker.onerror = () => { worker = null; };
  } catch {
    worker = null;
  }
  return worker;
}

// Returns a handle for clearBgTimeout.
export function setBgTimeout(fn, ms) {
  const w = getWorker();
  if (!w) return { native: setTimeout(fn, ms) };
  const id = nextId++;
  callbacks.set(id, fn);
  w.postMessage({ op: 'set', id, ms });
  return { id };
}

export function clearBgTimeout(handle) {
  if (!handle) return;
  if (handle.native != null) { clearTimeout(handle.native); return; }
  callbacks.delete(handle.id);
  worker?.postMessage({ op: 'clear', id: handle.id });
}
