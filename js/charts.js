// charts.js — tiny, dependency-free SVG/HTML chart components.
// No charting library is used: everything here is plain SVG + CSS, styled
// with the design tokens in css/styles.css (the validated default palette
// from the dataviz skill). Each function renders into a container element.

const SERIES_VARS = ['--series-1', '--series-2', '--series-3', '--series-4', '--series-5', '--series-6', '--series-7', '--series-8'];

export function seriesColor(i) { return `var(${SERIES_VARS[i % SERIES_VARS.length]})`; }

let tooltipEl = null;
function tooltip() {
  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.className = 'viz-tooltip';
    document.body.appendChild(tooltipEl);
  }
  return tooltipEl;
}
export function showTooltip(x, y, html) {
  const t = tooltip();
  t.innerHTML = html;
  t.style.display = 'block';
  const pad = 14;
  let left = x + pad, top = y + pad;
  const rect = t.getBoundingClientRect();
  if (left + rect.width > window.innerWidth) left = x - rect.width - pad;
  if (top + rect.height > window.innerHeight) top = y - rect.height - pad;
  t.style.left = left + 'px';
  t.style.top = top + 'px';
}
export function hideTooltip() { if (tooltipEl) tooltipEl.style.display = 'none'; }

export function fmtNum(n) {
  n = Math.round(n);
  if (Math.abs(n) >= 1e6) return (n / 1e6).toFixed(n % 1e6 === 0 ? 0 : 1) + 'M';
  if (Math.abs(n) >= 1e4) return (n / 1e3).toFixed(0) + 'K';
  if (Math.abs(n) >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
  return n.toLocaleString();
}
export function fmtExact(n) { return Math.round(n).toLocaleString(); }

// Formats a parser `clock`/`t` value (elapsed ms from an arbitrary, non-real
// anchor — see parser.js) as a bare time-of-day string. This deliberately
// does NOT go through `new Date(ms).toLocaleTimeString()`: that would run the
// value through the viewer's browser timezone, shifting the displayed hour
// away from what's literally printed in the log. We also never show a
// calendar date — the log doesn't give us a reliable one for a session that
// may span multiple real days, so showing one would just be a guess dressed
// up as a fact. Plain modular arithmetic reproduces exactly the HH:MM:SS the
// parser read off the log line, plus a "+Nd" marker once the elapsed time
// has wrapped past 24h (so multi-day gaps are still visible as gaps, not
// silently folded back onto day one).
export function fmtClock(ms, withSeconds) {
  if (ms == null || !isFinite(ms)) return '';
  const totalSec = Math.floor(ms / 1000);
  const days = Math.floor(totalSec / 86400);
  const sec = totalSec - days * 86400;
  const hh = Math.floor(sec / 3600) % 24;
  const mm = Math.floor(sec / 60) % 60;
  const ss = sec % 60;
  const p2 = n => String(n).padStart(2, '0');
  const time = withSeconds ? `${p2(hh)}:${p2(mm)}:${p2(ss)}` : `${p2(hh)}:${p2(mm)}`;
  return days > 0 ? `${time} (+${days}d)` : time;
}

// ---------------------------------------------------------------------------
// Stat tile: label + big number + optional sub-text + optional accent dot
// ---------------------------------------------------------------------------
export function statTile(container, { label, value, sub, colorVar, title }) {
  const div = document.createElement('div');
  div.className = 'card stat-tile';
  if (title) div.title = title;
  div.innerHTML = `
    <div class="label">${colorVar ? `<span class="accent-dot" style="background:var(${colorVar})"></span>` : ''}${esc(label)}</div>
    <div class="value">${esc(value)}</div>
    ${sub ? `<div class="sub">${esc(sub)}</div>` : ''}
  `;
  container.appendChild(div);
  return div;
}

// ---------------------------------------------------------------------------
// Horizontal bar breakdown chart: items = [{label, value, hits, crits, extra}]
// Renders bars + a legend-free list (single hue per the "one series" rule
// unless `colorFn` is supplied for categorical coloring).
// ---------------------------------------------------------------------------
export function barChart(container, { items, unit = '', colorFn, valueFmt = fmtNum, maxItems = 12, onHover }) {
  const wrap = document.createElement('div');
  wrap.className = 'barchart';
  const sorted = items.slice().sort((a, b) => b.value - a.value).slice(0, maxItems);
  const max = Math.max(1, ...sorted.map(i => i.value));

  sorted.forEach((item, i) => {
    const row = document.createElement('div');
    row.className = 'barchart-row';
    const color = colorFn ? colorFn(item, i) : seriesColor(0);
    const pctWidth = Math.max(1.5, (item.value / max) * 100);
    row.innerHTML = `
      <div class="bc-label" title="${esc(item.label)}">${esc(item.label)}</div>
      <div class="bc-track"><div class="bc-fill" style="width:${pctWidth}%;background:${color}"></div></div>
      <div class="bc-value">${valueFmt(item.value)}${unit}</div>
    `;
    row.addEventListener('mousemove', (ev) => {
      showTooltip(ev.clientX, ev.clientY, tooltipHtml(item));
      if (onHover) onHover(item);
    });
    row.addEventListener('mouseleave', hideTooltip);
    wrap.appendChild(row);
  });

  if (!sorted.length) {
    wrap.innerHTML = '<div class="empty-state">No data for this view.</div>';
  }
  container.appendChild(wrap);
  return wrap;
}

function tooltipHtml(item) {
  const rows = [];
  rows.push(`<div class="tt-row"><span>Total</span><span>${fmtExact(item.value)}</span></div>`);
  if (item.hits != null) rows.push(`<div class="tt-row"><span>Hits</span><span>${item.hits}</span></div>`);
  if (item.crits != null) rows.push(`<div class="tt-row"><span>Crits</span><span>${item.crits}</span></div>`);
  if (item.critRate != null) rows.push(`<div class="tt-row"><span>Crit rate</span><span>${item.critRate}%</span></div>`);
  if (item.avg != null) rows.push(`<div class="tt-row"><span>Avg</span><span>${item.avg}</span></div>`);
  if (item.max != null) rows.push(`<div class="tt-row"><span>Max</span><span>${item.max}</span></div>`);
  return `<div class="tt-title">${esc(item.label)}</div>${rows.join('')}`;
}

// ---------------------------------------------------------------------------
// Legend
// ---------------------------------------------------------------------------
export function legend(container, entries) {
  const div = document.createElement('div');
  div.className = 'legend';
  div.innerHTML = entries.map(e => `<span class="item"><span class="swatch" style="background:${e.color}"></span>${esc(e.label)}</span>`).join('');
  container.appendChild(div);
  return div;
}

// ---------------------------------------------------------------------------
// Time-series chart with drag-to-zoom and collapsible idle time.
//
// Takes RAW points ({ clock, amount }) rather than pre-bucketed ones, and
// buckets them itself for whatever window is on screen -- that's what makes
// zooming useful: a 10-minute window of a 6-hour session gets its own ~60
// buckets instead of the one or two it would get from the full-session
// bucketing.
//
//   series:   [{ name, color, raw: [{ clock, amount }] }]
//   domain:   [startClock, endClock] -- the x range of the full view (raw
//             points outside it are pinned to the nearest edge, so totals
//             still add up, same as the old pre-bucketed timelines did)
//   idleGaps: [{ start, end }] -- stretches with no encounter for an hour+
//             (aggregate.js meta.idleGaps). With "Hide idle time" on, each
//             is squeezed into a narrow shaded band labelled with its
//             length; with it off they're drawn at true scale.
//   id:       remembers the zoom window across re-renders (a live watch
//             re-renders every poll -- without this, every new log line
//             would throw away the window you'd selected).
//
// Drag across the plot to zoom to that window; double-click or "Reset zoom"
// to go back. The "Hide idle time" choice is one setting shared by every
// chart (remembered in localStorage).
// ---------------------------------------------------------------------------
const zoomById = new Map();
const HIDE_IDLE_KEY = 'chatgator:hideIdleTime';
function getHideIdle() {
  try { return localStorage.getItem(HIDE_IDLE_KEY) !== '0'; } catch { return true; }
}
function setHideIdle(on) {
  try { localStorage.setItem(HIDE_IDLE_KEY, on ? '1' : '0'); } catch { /* ignore */ }
}
const BUCKETS = 60;

function fmtDuration(ms) {
  const m = Math.round(ms / 60000);
  const h = Math.floor(m / 60), mm = m % 60;
  if (h >= 24) { const d = Math.floor(h / 24); return `${d}d ${h % 24}h`; }
  return h ? (mm ? `${h}h ${mm}m` : `${h}h`) : `${mm}m`;
}

export function timelineChart(container, { series, domain, idleGaps = [], id, width = 1040, height = 220, stacked = false, valueFmt = fmtNum, timeFmt, markers = [] }) {
  const wrap = document.createElement('div');
  wrap.className = 'timeline-chart';
  container.appendChild(wrap);

  const allRaw = series.flatMap(s => s.raw || []);
  let [dataMin, dataMax] = domain && domain[0] != null ? domain : [null, null];
  if (dataMin == null && allRaw.length) {
    dataMin = Math.min(...allRaw.map(p => p.clock));
    dataMax = Math.max(...allRaw.map(p => p.clock));
  }
  if (!allRaw.length || dataMin == null) {
    const div = document.createElement('div');
    div.className = 'empty-state';
    div.textContent = 'No activity in this window.';
    wrap.appendChild(div);
    return wrap;
  }
  dataMax = Math.max(dataMax, dataMin + 1000);
  const gaps = idleGaps
    .filter(g => g.end > dataMin && g.start < dataMax)
    .map(g => ({ start: Math.max(g.start, dataMin), end: Math.min(g.end, dataMax) }))
    .sort((a, b) => a.start - b.start);

  const draw = () => {
    wrap.innerHTML = '';
    const hideIdle = getHideIdle() && gaps.length > 0;

    // Compressed time: each collapsed gap keeps only `keep` ms of width.
    // c() is strictly increasing, so it can be inverted for the axis
    // labels and for turning a dragged pixel range back into real times.
    const gapTotal = gaps.reduce((a, g) => a + (g.end - g.start), 0);
    const keep = Math.max(60000, ((dataMax - dataMin) - gapTotal) * 0.025);
    const c = (t) => {
      if (!hideIdle) return t;
      let out = t;
      for (const g of gaps) {
        const L = g.end - g.start;
        if (L <= keep) continue;
        if (t >= g.end) out -= (L - keep);
        else if (t > g.start) out -= (t - g.start) * (L - keep) / L;
      }
      return out;
    };
    const cinv = (cv) => {
      let lo = dataMin - 1, hi = dataMax + 1;
      for (let i = 0; i < 60; i++) { const mid = (lo + hi) / 2; if (c(mid) < cv) lo = mid; else hi = mid; }
      return (lo + hi) / 2;
    };

    // View window (real time), from the remembered zoom if it still overlaps.
    let z = id ? zoomById.get(id) : null;
    if (z && (z.hi <= dataMin || z.lo >= dataMax)) { zoomById.delete(id); z = null; }
    const lo = z ? Math.max(z.lo, dataMin) : dataMin;
    const hi = z ? Math.min(z.hi, dataMax) : dataMax;
    const cLo = c(lo), cHi = c(hi), cSpan = Math.max(1000, cHi - cLo);

    // ---- controls row ----
    const controls = document.createElement('div');
    controls.className = 'chart-controls';
    const hint = document.createElement('span');
    hint.className = 'chart-hint';
    hint.textContent = z ? `Zoomed: ${fmtClock(lo, true)} – ${fmtClock(hi, true)}` : 'Drag across the chart to zoom in';
    controls.appendChild(hint);
    if (gaps.length) {
      const lbl = document.createElement('label');
      lbl.className = 'chart-toggle';
      lbl.title = 'Squeeze stretches of an hour or more with no fights down to a thin band, so the chart isn\'t mostly empty space';
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = getHideIdle();
      cb.addEventListener('change', () => { setHideIdle(cb.checked); draw(); });
      lbl.append(cb, ` Hide idle time (${gaps.length} gap${gaps.length > 1 ? 's' : ''} of 1h+)`);
      controls.appendChild(lbl);
    }
    if (z) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chart-reset';
      btn.textContent = 'Reset zoom';
      btn.addEventListener('click', () => { zoomById.delete(id); draw(); });
      controls.appendChild(btn);
    }
    wrap.appendChild(controls);

    // ---- bucket raw points for this window ----
    const size = Math.max(1000, cSpan / BUCKETS);
    const nB = Math.max(1, Math.ceil(cSpan / size));
    const bucketed = series.map(s => {
      const vals = new Array(nB).fill(0);
      for (const p of (s.raw || [])) {
        const t = Math.min(dataMax, Math.max(dataMin, p.clock));
        if (t < lo || t > hi) continue;
        const idx = Math.min(nB - 1, Math.floor((c(t) - cLo) / size));
        if (idx >= 0) vals[idx] += p.amount;
      }
      return vals;
    });
    const centers = Array.from({ length: nB }, (_, i) => cLo + Math.min(cSpan, (i + 0.5) * size));

    let maxV = 1;
    for (let i = 0; i < nB; i++) {
      if (stacked) { const sum = bucketed.reduce((a, v) => a + v[i], 0); if (sum > maxV) maxV = sum; }
      else for (const v of bucketed) if (v[i] > maxV) maxV = v[i];
    }
    maxV = niceMax(maxV);

    const pad = { top: 18, right: 16, bottom: 26, left: 48 };
    const innerW = width - pad.left - pad.right;
    const innerH = height - pad.top - pad.bottom;
    const X = (cv) => pad.left + ((cv - cLo) / cSpan) * innerW;
    const Y = (v) => pad.top + innerH - (v / maxV) * innerH;

    const svgNS = 'http://www.w3.org/2000/svg';
    const el = (tag, attrs) => { const n = document.createElementNS(svgNS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); return n; };
    const svg = el('svg', { viewBox: `0 0 ${width} ${height}`, width: '100%' });
    svg.style.display = 'block';
    svg.style.overflow = 'visible';
    svg.style.touchAction = 'pan-y';

    // gridlines + y ticks
    for (let i = 0; i <= 4; i++) {
      const v = (maxV / 4) * i, yy = Y(v);
      svg.appendChild(el('line', { x1: pad.left, x2: width - pad.right, y1: yy, y2: yy, stroke: 'var(--grid)', 'stroke-width': 1 }));
      const t = el('text', { x: pad.left - 8, y: yy + 4, 'text-anchor': 'end', 'font-size': 10.5, fill: 'var(--text-muted)' });
      t.textContent = valueFmt(v);
      svg.appendChild(t);
    }

    // idle-gap bands (only meaningful, and only labelled, when collapsed)
    if (hideIdle) {
      for (const g of gaps) {
        if (g.end <= lo || g.start >= hi) continue;
        const x1 = X(c(Math.max(g.start, lo))), x2 = X(c(Math.min(g.end, hi)));
        const band = el('rect', { x: x1, y: pad.top, width: Math.max(2, x2 - x1), height: innerH, fill: 'var(--text-muted)', opacity: 0.12 });
        const title = el('title', {});
        title.textContent = `Idle ${fmtDuration(g.end - g.start)} (${fmtClock(g.start)} – ${fmtClock(g.end)}) — hidden`;
        band.appendChild(title);
        svg.appendChild(band);
        const lab = el('text', { x: (x1 + x2) / 2, y: pad.top - 5, 'text-anchor': 'middle', 'font-size': 9.5, fill: 'var(--text-muted)' });
        lab.textContent = `⋯ ${fmtDuration(g.end - g.start)} idle`;
        svg.appendChild(lab);
      }
    }

    // x ticks: 5 evenly spaced in (compressed) screen space
    const withSec = (hi - lo) < 20 * 60000;
    const fmtT = timeFmt || ((t) => fmtClock(t, withSec));
    for (let i = 0; i <= 4; i++) {
      const cv = cLo + (cSpan * i) / 4;
      const real = cinv(cv);
      // A label inside a squeezed gap would name some arbitrary moment of
      // idle time -- the band's own "⋯ 2h 29m idle" label covers it.
      if (hideIdle && i > 0 && i < 4 && gaps.some(g => real > g.start && real < g.end)) continue;
      const t = el('text', { x: X(cv), y: height - 6, 'text-anchor': i === 0 ? 'start' : i === 4 ? 'end' : 'middle', 'font-size': 10.5, fill: 'var(--text-muted)' });
      t.textContent = fmtT(real);
      svg.appendChild(t);
    }

    // series
    if (stacked) {
      const cum = new Array(nB).fill(0);
      series.forEach((s, si) => {
        const bottom = cum.slice();
        bucketed[si].forEach((v, i) => { cum[i] += v; });
        let d = `M ${X(centers[0])} ${Y(bottom[0])}`;
        for (let i = 0; i < nB; i++) d += ` L ${X(centers[i])} ${Y(cum[i])}`;
        for (let i = nB - 1; i >= 0; i--) d += ` L ${X(centers[i])} ${Y(bottom[i])}`;
        svg.appendChild(el('path', { d: d + ' Z', fill: s.color, 'fill-opacity': 0.75 }));
      });
    } else {
      series.forEach((s, si) => {
        let d = '';
        bucketed[si].forEach((v, i) => { d += `${i ? ' L' : 'M'} ${X(centers[i])} ${Y(v)}`; });
        svg.appendChild(el('path', { d, fill: 'none', stroke: s.color, 'stroke-width': 2, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }));
      });
    }
    svg.appendChild(el('line', { x1: pad.left, x2: width - pad.right, y1: Y(0), y2: Y(0), stroke: 'var(--baseline)', 'stroke-width': 1 }));

    // Markers: solid (checkpoint seams) under dashed (events). Outside the
    // full view they're pinned to the nearest edge as before; outside a
    // zoomed window they're simply not drawn.
    const visibleMarkers = markers.filter(m => z ? (m.t >= lo && m.t <= hi) : true);
    [...visibleMarkers.filter(m => m.solid), ...visibleMarkers.filter(m => !m.solid)].forEach((m) => {
      const mx = X(c(Math.min(hi, Math.max(lo, m.t))));
      const rule = el('line', { x1: mx, x2: mx, y1: pad.top, y2: pad.top + innerH, stroke: m.color || 'var(--series-7)' });
      if (m.solid) { rule.setAttribute('stroke-width', '1'); rule.setAttribute('opacity', '0.35'); }
      else { rule.setAttribute('stroke-width', '1.5'); rule.setAttribute('stroke-dasharray', '3,3'); rule.setAttribute('opacity', '0.75'); }
      svg.appendChild(rule);
    });

    // ---- hover tooltip + drag-to-zoom ----
    const crosshair = el('line', { y1: pad.top, y2: pad.top + innerH, stroke: 'var(--baseline)', 'stroke-width': 1 });
    crosshair.style.display = 'none';
    const sel = el('rect', { y: pad.top, height: innerH, fill: 'var(--series-1)', opacity: 0.15 });
    sel.style.display = 'none';
    const overlay = el('rect', { x: pad.left, y: pad.top, width: innerW, height: innerH, fill: 'transparent' });
    overlay.style.cursor = 'crosshair';
    svg.append(crosshair, sel, overlay);

    const toSvgX = (ev) => {
      const rect = svg.getBoundingClientRect();
      return Math.min(pad.left + innerW, Math.max(pad.left, (ev.clientX - rect.left) * (width / rect.width)));
    };
    const fromSvgX = (sx) => cinv(cLo + ((sx - pad.left) / innerW) * cSpan);
    let dragFrom = null;

    overlay.addEventListener('pointerdown', (ev) => {
      if (ev.button !== 0) return;
      dragFrom = toSvgX(ev);
      overlay.setPointerCapture(ev.pointerId);
      hideTooltip();
      crosshair.style.display = 'none';
    });
    overlay.addEventListener('pointermove', (ev) => {
      const sx = toSvgX(ev);
      if (dragFrom != null) {
        sel.setAttribute('x', Math.min(dragFrom, sx));
        sel.setAttribute('width', Math.abs(sx - dragFrom));
        sel.style.display = 'block';
        return;
      }
      const i = Math.min(nB - 1, Math.max(0, Math.floor(((sx - pad.left) / innerW) * nB)));
      const px = X(centers[i]);
      crosshair.setAttribute('x1', px); crosshair.setAttribute('x2', px);
      crosshair.style.display = 'block';
      const swatch = (color) => `<span class="swatch" style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${color};margin-right:5px;"></span>`;
      const rows = series.map((s, si) => `<div class="tt-row"><span>${swatch(s.color)}${esc(s.name)}</span><span>${fmtExact(bucketed[si][i])}</span></div>`).join('');
      const bStart = cinv(cLo + i * size), bEnd = cinv(Math.min(cHi, cLo + (i + 1) * size));
      const counts = [];
      for (const m of markers) {
        if (m.excludeFromTooltip || m.t < bStart || m.t > bEnd) continue;
        const r = counts.find(x => x.label === (m.label || 'Event'));
        if (r) r.count++; else counts.push({ label: m.label || 'Event', color: m.color, count: 1 });
      }
      const markerHtml = counts.map(r => `<div class="tt-row"><span>${swatch(r.color || 'var(--series-7)')}${esc(r.label)}</span><span>${r.count}</span></div>`).join('');
      showTooltip(ev.clientX, ev.clientY, `<div class="tt-title">${fmtT(bStart)} – ${fmtT(bEnd)}</div>${rows}${markerHtml}`);
    });
    const endDrag = (ev) => {
      if (dragFrom == null) return;
      const sx = toSvgX(ev);
      const a = Math.min(dragFrom, sx), b = Math.max(dragFrom, sx);
      dragFrom = null;
      sel.style.display = 'none';
      if (b - a < 6 || !id) return; // a click, not a drag
      const zLo = fromSvgX(a), zHi = fromSvgX(b);
      if (zHi - zLo < 5000) return; // don't zoom below ~5 seconds
      zoomById.set(id, { lo: zLo, hi: zHi });
      hideTooltip();
      draw();
    };
    overlay.addEventListener('pointerup', endDrag);
    overlay.addEventListener('pointercancel', () => { dragFrom = null; sel.style.display = 'none'; });
    overlay.addEventListener('dblclick', () => { if (id && zoomById.has(id)) { zoomById.delete(id); draw(); } });
    overlay.addEventListener('mouseleave', () => { if (dragFrom == null) { crosshair.style.display = 'none'; hideTooltip(); } });

    wrap.appendChild(svg);
  };

  draw();
  return wrap;
}

function niceMax(v) {
  if (v <= 0) return 1;
  const mag = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / mag;
  let nice;
  if (n <= 1) nice = 1; else if (n <= 2) nice = 2; else if (n <= 5) nice = 5; else nice = 10;
  return nice * mag;
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
