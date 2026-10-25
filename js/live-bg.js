// live-bg.js — a subtle animated "data flowing" background, shown only
// while actively watching a live chat.log (see app.js's beginWatch() /
// stopWatching()). A network of slowly-drifting nodes, connected by edges
// (lines) when close enough, with occasional little pulses traveling along
// those edges — a visual cue that something is genuinely being tailed
// right now, distinct from (and easier to notice at a glance than) the
// green "Watching live" dot in the header. Deliberately NOT shown for a
// static/one-time-loaded file: there's no ongoing "flow" to represent.
//
// The nodes/edges are tinted green by default, but app.js calls
// setColor() (see js/realm.js) to match them to the selected player's
// class's realm instead whenever that's known — Albion red, Midgard blue,
// Hibernia green — so this one default is also exactly Hibernia's color.
//
// Respects prefers-reduced-motion (never starts at all) and pauses itself
// while the tab is backgrounded (document.hidden), so it doesn't burn
// CPU/battery animating something nobody can see.

const NODE_COUNT = 42;
const LINK_DIST = 140;            // px — nodes closer than this get a connecting line
const NODE_SPEED = 0.12;          // px/frame of drift — gentle, not distracting
const PULSE_SPAWN_CHANCE = 0.012; // per linked pair, per frame
const PULSE_STEP = 0.02;          // fraction of the link traveled per frame
const DEFAULT_COLOR = '12, 163, 12'; // rgb triple for --status-good (#0ca30c), used in rgba()
let COLOR = DEFAULT_COLOR;

let canvas = null;
let ctx = null;
let rafId = null;
let running = false;
let nodes = [];
let pulses = []; // { ax, ay, bx, by, t }
let listenersAttached = false;

function prefersReducedMotion() {
  return typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function makeNode(w, h) {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * NODE_SPEED * 2,
    vy: (Math.random() - 0.5) * NODE_SPEED * 2,
    r: 1.5 + Math.random() * 1.5,
  };
}

function resize() {
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function onVisibilityChange() {
  if (document.hidden) {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  } else if (running && !rafId) {
    step();
  }
}

function step() {
  if (!running || !ctx) return;
  const w = window.innerWidth, h = window.innerHeight;
  ctx.clearRect(0, 0, w, h);

  for (const n of nodes) {
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > w) n.vx *= -1;
    if (n.y < 0 || n.y > h) n.vy *= -1;
    n.x = Math.max(0, Math.min(w, n.x));
    n.y = Math.max(0, Math.min(h, n.y));
  }

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const dist = Math.hypot(dx, dy);
      if (dist < LINK_DIST) {
        const alpha = (1 - dist / LINK_DIST) * 0.35;
        ctx.strokeStyle = `rgba(${COLOR}, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        if (Math.random() < PULSE_SPAWN_CHANCE) {
          pulses.push({ ax: a.x, ay: a.y, bx: b.x, by: b.y, t: 0 });
        }
      }
    }
  }

  for (const n of nodes) {
    ctx.fillStyle = `rgba(${COLOR}, 0.55)`;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fill();
  }

  pulses = pulses.filter(p => p.t < 1);
  for (const p of pulses) {
    p.t += PULSE_STEP;
    const x = p.ax + (p.bx - p.ax) * p.t;
    const y = p.ay + (p.by - p.ay) * p.t;
    const fade = p.t < 0.15 ? p.t / 0.15 : Math.max(0, 1 - p.t);
    ctx.fillStyle = `rgba(${COLOR}, ${fade})`;
    ctx.beginPath();
    ctx.arc(x, y, 2.2, 0, Math.PI * 2);
    ctx.fill();
  }

  rafId = requestAnimationFrame(step);
}

export function startLiveBackground() {
  if (running || prefersReducedMotion()) return;
  canvas = document.getElementById('liveBgCanvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  resize();
  nodes = Array.from({ length: NODE_COUNT }, () => makeNode(window.innerWidth, window.innerHeight));
  pulses = [];
  running = true;
  canvas.classList.add('active');
  if (!listenersAttached) {
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibilityChange);
    listenersAttached = true;
  }
  step();
}

export function stopLiveBackground() {
  running = false;
  if (rafId) cancelAnimationFrame(rafId);
  rafId = null;
  if (canvas) canvas.classList.remove('active');
}

// Sets the rgb() triple the nodes/edges/pulses are drawn with, picked up
// on the very next frame — safe to call whether or not the background is
// currently running (it just sits unused until it is). Pass a falsy value
// to go back to the default green. Called from app.js every time the
// active view re-renders, so switching to a different character/class (or
// first getting a confident class guess at all) re-tints it immediately
// instead of waiting for the next watch session to start.
export function setColor(rgbTriple) {
  COLOR = rgbTriple || DEFAULT_COLOR;
}
