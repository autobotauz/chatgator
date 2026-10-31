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
// Time-axis charts with drag-to-zoom and collapsible idle time.
//
// timeFrame() below is the shared machinery -- the x axis, zoom, drag
// selection, "Hide idle time" squeezing and the controls row. Two charts
// sit on it: timelineChart (bucketed lines/areas: Overview, Realm Points)
// and dotTimelineChart (one dot per ability use: Spells & Styles).
//
//   domain:   [startClock, endClock] -- the x range of the full view.
//   idleGaps: [{ start, end }] -- stretches with no encounter for an hour+
//             (aggregate.js meta.idleGaps). With "Hide idle time" on, each
//             is squeezed into a narrow shaded band labelled with its
//             length; with it off they're drawn at true scale.
//   id:       remembers the zoom window across re-renders (a live watch
//             re-renders every poll -- without this, every new log line
//             would throw away the window you'd selected).
//
// Drag across the plot to zoom to that window; double-click or "Reset zoom"
// to go back. "Hide idle time" is one setting shared by every chart
// (remembered in localStorage).
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
const svgNS = 'http://www.w3.org/2000/svg';
const svgEl = (tag, attrs) => { const n = document.createElementNS(svgNS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); return n; };
const swatch = (color, round) => `<span class="swatch" style="display:inline-block;width:8px;height:8px;border-radius:${round ? '50%' : '2px'};background:${color};margin-right:5px;"></span>`;

function fmtDuration(ms) {
  const m = Math.round(ms / 60000);
  const h = Math.floor(m / 60), mm = m % 60;
  if (h >= 24) { const d = Math.floor(h / 24); return `${d}d ${h % 24}h`; }
  return h ? (mm ? `${h}h ${mm}m` : `${h}h`) : `${mm}m`;
}

// Builds the frame and calls `render(frame)` to draw the chart's own
// content each time the view changes (zoom, reset, idle toggle). `render`
// returns { onHover(ev, sx, sy), onLeave() } for the tooltip. `pad.left`
// can be widened by the caller (the dot chart needs room for row labels).
function timeFrame(container, { domain, idleGaps = [], id, width, height, pad, timeFmt, render }) {
  const wrap = document.createElement('div');
  wrap.className = 'timeline-chart';
  container.appendChild(wrap);
  const [dataMin, rawMax] = domain;
  const dataMax = Math.max(rawMax, dataMin + 1000);
  const gaps = idleGaps
    .filter(g => g.end > dataMin && g.start < dataMax)
    .map(g => ({ start: Math.max(g.start, dataMin), end: Math.min(g.end, dataMax) }))
    .sort((a, b) => a.start - b.start);

  const draw = () => {
    wrap.innerHTML = '';
    hideTooltip();
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

    const innerW = width - pad.left - pad.right;
    const innerH = height - pad.top - pad.bottom;
    const X = (t) => pad.left + ((c(t) - cLo) / cSpan) * innerW; // real time -> px
    const svg = svgEl('svg', { viewBox: `0 0 ${width} ${height}`, width: '100%' });
    svg.style.display = 'block';
    svg.style.overflow = 'visible';
    svg.style.touchAction = 'pan-y';

    // idle-gap bands (only when squeezed)
    if (hideIdle) {
      for (const g of gaps) {
        if (g.end <= lo || g.start >= hi) continue;
        const x1 = X(Math.max(g.start, lo)), x2 = X(Math.min(g.end, hi));
        const band = svgEl('rect', { x: x1, y: pad.top, width: Math.max(2, x2 - x1), height: innerH, fill: 'var(--text-muted)', opacity: 0.12 });
        const title = svgEl('title', {});
        title.textContent = `Idle ${fmtDuration(g.end - g.start)} (${fmtClock(g.start)} – ${fmtClock(g.end)}) — hidden`;
        band.appendChild(title);
        svg.appendChild(band);
        const lab = svgEl('text', { x: (x1 + x2) / 2, y: pad.top - 5, 'text-anchor': 'middle', 'font-size': 9.5, fill: 'var(--text-muted)' });
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
      const t = svgEl('text', { x: pad.left + (innerW * i) / 4, y: height - 6, 'text-anchor': i === 0 ? 'start' : i === 4 ? 'end' : 'middle', 'font-size': 10.5, fill: 'var(--text-muted)' });
      t.textContent = fmtT(real);
      svg.appendChild(t);
    }

    const frame = { svg, el: svgEl, X, c, cinv, lo, hi, cLo, cHi, cSpan, zoomed: !!z, innerW, innerH, pad, width, height, fmtT };
    const hooks = render(frame) || {};

    // ---- drag-to-zoom + hover ----
    const sel = svgEl('rect', { y: pad.top, height: innerH, fill: 'var(--series-1)', opacity: 0.15 });
    sel.style.display = 'none';
    const overlay = svgEl('rect', { x: pad.left, y: pad.top, width: innerW, height: innerH, fill: 'transparent' });
    overlay.style.cursor = 'crosshair';
    svg.append(sel, overlay);

    const svgPoint = (ev) => {
      const rect = svg.getBoundingClientRect();
      const k = width / rect.width;
      return {
        sx: Math.min(pad.left + innerW, Math.max(pad.left, (ev.clientX - rect.left) * k)),
        sy: (ev.clientY - rect.top) * k,
      };
    };
    const fromSvgX = (sx) => cinv(cLo + ((sx - pad.left) / innerW) * cSpan);
    let dragFrom = null;
    overlay.addEventListener('pointerdown', (ev) => {
      if (ev.button !== 0) return;
      dragFrom = svgPoint(ev).sx;
      overlay.setPointerCapture(ev.pointerId);
      hideTooltip();
      if (hooks.onLeave) hooks.onLeave();
    });
    overlay.addEventListener('pointermove', (ev) => {
      const { sx, sy } = svgPoint(ev);
      if (dragFrom != null) {
        sel.setAttribute('x', Math.min(dragFrom, sx));
        sel.setAttribute('width', Math.abs(sx - dragFrom));
        sel.style.display = 'block';
        return;
      }
      if (hooks.onHover) hooks.onHover(ev, sx, sy);
    });
    overlay.addEventListener('pointerup', (ev) => {
      if (dragFrom == null) return;
      const { sx } = svgPoint(ev);
      const a = Math.min(dragFrom, sx), b = Math.max(dragFrom, sx);
      dragFrom = null;
      sel.style.display = 'none';
      if (b - a < 6 || !id) return; // a click, not a drag
      const zLo = fromSvgX(a), zHi = fromSvgX(b);
      if (zHi - zLo < 5000) return; // don't zoom below ~5 seconds
      zoomById.set(id, { lo: zLo, hi: zHi });
      draw();
    });
    overlay.addEventListener('pointercancel', () => { dragFrom = null; sel.style.display = 'none'; });
    overlay.addEventListener('dblclick', () => { if (id && zoomById.has(id)) { zoomById.delete(id); draw(); } });
    overlay.addEventListener('mouseleave', () => { if (dragFrom == null) { hideTooltip(); if (hooks.onLeave) hooks.onLeave(); } });

    wrap.appendChild(svg);
  };

  draw();
  return wrap;
}

// Vertical marker rules (deathblows, deaths, checkpoint seams, user tags).
// Solid ones (checkpoint seams) go under dashed ones (events). Outside the
// full view they're pinned to the nearest edge; outside a zoomed window
// they're not drawn. A marker with `text` (a user @tag) also gets that text
// written at the top of its line.
function drawMarkers(svg, el, markers, { X, lo, hi, zoomed, top, bottom, labelY = top + 9 }) {
  const visible = markers.filter(m => zoomed ? (m.t >= lo && m.t <= hi) : true);
  [...visible.filter(m => m.solid), ...visible.filter(m => !m.solid)].forEach((m) => {
    const mx = X(Math.min(hi, Math.max(lo, m.t)));
    const rule = el('line', { x1: mx, x2: mx, y1: top, y2: bottom, stroke: m.color || 'var(--series-7)' });
    if (m.solid) { rule.setAttribute('stroke-width', '1'); rule.setAttribute('opacity', '0.35'); }
    else { rule.setAttribute('stroke-width', '1.5'); rule.setAttribute('stroke-dasharray', '3,3'); rule.setAttribute('opacity', '0.75'); }
    svg.appendChild(rule);
    if (m.text) {
      const t = el('text', { x: mx + 3, y: labelY, 'font-size': 10, 'font-weight': 600, fill: m.color || 'var(--series-7)' });
      t.textContent = m.text.length > 24 ? m.text.slice(0, 23) + '…' : m.text;
      const title = el('title', {});
      title.textContent = m.label || m.text;
      t.appendChild(title);
      svg.appendChild(t);
    }
  });
}

function emptyChart(container) {
  const div = document.createElement('div');
  div.className = 'empty-state';
  div.textContent = 'No activity in this window.';
  container.appendChild(div);
  return div;
}
function rawDomain(domain, points) {
  if (domain && domain[0] != null && domain[1] != null) return domain;
  if (!points.length) return null;
  return [Math.min(...points.map(p => p.clock)), Math.max(...points.map(p => p.clock))];
}

// ---------------------------------------------------------------------------
// Bucketed line / stacked-area chart over time.
//   series: [{ name, color, raw: [{ clock, amount }] }] -- RAW points,
//   bucketed here (60 buckets) for whatever window is on screen, so zooming
//   gives real detail. Raw points outside `domain` are pinned to the
//   nearest edge so totals still add up.
//   markers: [{ t, color, label, solid, excludeFromTooltip }] -- vertical
//   rules (deathblows, deaths, checkpoint seams).
// ---------------------------------------------------------------------------
export function timelineChart(container, { series, domain, idleGaps = [], id, width = 1040, height = 220, stacked = false, valueFmt = fmtNum, timeFmt, markers = [] }) {
  const allRaw = series.flatMap(s => s.raw || []);
  const dom = rawDomain(domain, allRaw);
  if (!allRaw.length || !dom) return emptyChart(container);
  const [dataMin, dataMax] = dom;

  return timeFrame(container, {
    domain: dom, idleGaps, id, width, height, timeFmt,
    pad: { top: 18, right: 16, bottom: 26, left: 48 },
    render: ({ svg, el, X, c, cinv, lo, hi, cLo, cHi, cSpan, zoomed, innerW, innerH, pad, fmtT }) => {
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
      // bucket centres, in real time (X() takes real time)
      const centers = Array.from({ length: nB }, (_, i) => cinv(cLo + Math.min(cSpan, (i + 0.5) * size)));

      let maxV = 1;
      for (let i = 0; i < nB; i++) {
        if (stacked) { const sum = bucketed.reduce((a, v) => a + v[i], 0); if (sum > maxV) maxV = sum; }
        else for (const v of bucketed) if (v[i] > maxV) maxV = v[i];
      }
      maxV = niceMax(maxV);
      const Y = (v) => pad.top + innerH - (v / maxV) * innerH;

      // gridlines + y ticks (inserted first so they sit under everything)
      const grid = [];
      for (let i = 0; i <= 4; i++) {
        const v = (maxV / 4) * i, yy = Y(v);
        grid.push(el('line', { x1: pad.left, x2: pad.left + innerW, y1: yy, y2: yy, stroke: 'var(--grid)', 'stroke-width': 1 }));
        const t = el('text', { x: pad.left - 8, y: yy + 4, 'text-anchor': 'end', 'font-size': 10.5, fill: 'var(--text-muted)' });
        t.textContent = valueFmt(v);
        grid.push(t);
      }
      svg.prepend(...grid);

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
      svg.appendChild(el('line', { x1: pad.left, x2: pad.left + innerW, y1: Y(0), y2: Y(0), stroke: 'var(--baseline)', 'stroke-width': 1 }));

      drawMarkers(svg, el, markers, { X, lo, hi, zoomed, top: pad.top, bottom: pad.top + innerH });

      const crosshair = el('line', { y1: pad.top, y2: pad.top + innerH, stroke: 'var(--baseline)', 'stroke-width': 1 });
      crosshair.style.display = 'none';
      svg.appendChild(crosshair);

      return {
        onLeave: () => { crosshair.style.display = 'none'; },
        onHover: (ev, sx) => {
          const i = Math.min(nB - 1, Math.max(0, Math.floor(((sx - pad.left) / innerW) * nB)));
          const px = X(centers[i]);
          crosshair.setAttribute('x1', px); crosshair.setAttribute('x2', px);
          crosshair.style.display = 'block';
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
        },
      };
    },
  });
}

// ---------------------------------------------------------------------------
// Dot timeline: one row ("swim lane") per name, one dot per use.
//   rows:  [{ name, color }] in display order
//   dots:  [{ clock, name, ...anything }] -- `name` picks the row
//   dotTooltip(dotsAtPoint) -> html for the dots under the pointer
//   (several when they overlap, e.g. an AoE landing on 3 targets at once).
// Dots in the same row that would overlap are stacked a few px apart
// vertically (within the row) so simultaneous uses stay visible as more
// than one dot.
// ---------------------------------------------------------------------------
export function dotTimelineChart(container, { rows, dots, domain, idleGaps = [], id, width = 1040, rowHeight = 20, labelWidth = 170, dotTooltip, timeFmt, markers = [] }) {
  const dom = rawDomain(domain, dots);
  if (!dots.length || !rows.length || !dom) return emptyChart(container);
  const rowIndex = new Map(rows.map((r, i) => [r.name, i]));
  const pad = { top: 18, right: 16, bottom: 26, left: labelWidth };
  const height = pad.top + pad.bottom + rows.length * rowHeight;

  return timeFrame(container, {
    domain: dom, idleGaps, id, width, height, timeFmt, pad,
    render: ({ svg, el, X, lo, hi, innerW, fmtT, zoomed }) => {
      const rowY = (i) => pad.top + i * rowHeight + rowHeight / 2;
      // row stripes + labels
      rows.forEach((r, i) => {
        if (i % 2 === 1) svg.appendChild(el('rect', { x: pad.left, y: pad.top + i * rowHeight, width: innerW, height: rowHeight, fill: 'var(--surface-2)', opacity: 0.6 }));
        const label = el('text', { x: pad.left - 8, y: rowY(i) + 4, 'text-anchor': 'end', 'font-size': 11, fill: 'var(--text-secondary)' });
        label.textContent = r.name.length > 24 ? r.name.slice(0, 23) + '…' : r.name;
        const title = el('title', {});
        title.textContent = r.name;
        label.appendChild(title);
        svg.appendChild(label);
      });
      svg.appendChild(el('line', { x1: pad.left, x2: pad.left, y1: pad.top, y2: pad.top + rows.length * rowHeight, stroke: 'var(--baseline)', 'stroke-width': 1 }));
      // tag text goes just above the rows -- inside them it'd sit under the dots
      drawMarkers(svg, el, markers, { X, lo, hi, zoomed, top: pad.top - 12, bottom: pad.top + rows.length * rowHeight, labelY: pad.top - 4 });

      // place dots; stack ones that would overlap within a row
      const R = 3.5;
      const placed = [];
      const lastInRow = new Map(); // row -> [{ px, n }]
      for (const d of dots) {
        if (d.clock < lo || d.clock > hi) continue;
        const ri = rowIndex.get(d.name);
        if (ri == null) continue;
        const px = X(d.clock);
        const prev = lastInRow.get(ri);
        let n = 0;
        if (prev && px - prev.px < R * 1.6) n = prev.n + 1; else lastInRow.set(ri, { px, n: 0 });
        if (n) lastInRow.set(ri, { px: prev.px, n });
        // 0, -1, +1, -2, +2 ... steps of 3px, clamped inside the row
        const step = n === 0 ? 0 : (n % 2 ? -1 : 1) * Math.ceil(n / 2) * 3;
        const py = rowY(ri) + Math.max(-(rowHeight / 2 - R), Math.min(rowHeight / 2 - R, step));
        const color = rows[ri].color;
        const circle = el('circle', { cx: px, cy: py, r: d.crit ? R + 1 : R, fill: color, 'fill-opacity': d.kind === 'cast' ? 0.45 : 0.9 });
        if (d.crit) { circle.setAttribute('stroke', 'var(--text-primary)'); circle.setAttribute('stroke-width', '1'); }
        svg.appendChild(circle);
        placed.push({ d, px, py, ri });
      }

      const ring = el('circle', { r: R + 3, fill: 'none', stroke: 'var(--text-primary)', 'stroke-width': 1.5 });
      ring.style.display = 'none';
      svg.appendChild(ring);

      return {
        onLeave: () => { ring.style.display = 'none'; },
        onHover: (ev, sx, sy) => {
          const ri = Math.floor((sy - pad.top) / rowHeight);
          if (ri < 0 || ri >= rows.length) { ring.style.display = 'none'; hideTooltip(); return; }
          // every dot in this row within a few px of the pointer
          const near = placed.filter(p => p.ri === ri && Math.abs(p.px - sx) <= 4.5);
          if (!near.length) { ring.style.display = 'none'; hideTooltip(); return; }
          near.sort((a, b) => Math.abs(a.px - sx) - Math.abs(b.px - sx));
          ring.setAttribute('cx', near[0].px); ring.setAttribute('cy', near[0].py);
          ring.style.display = 'block';
          const list = near.map(p => p.d).sort((a, b) => a.clock - b.clock);
          showTooltip(ev.clientX, ev.clientY, dotTooltip ? dotTooltip(list, fmtT) : `<div class="tt-title">${esc(list[0].name)}</div>`);
        },
      };
    },
  });
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
