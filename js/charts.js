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
// Timeline area/line chart. series = [{ name, color, points:[{t,v}] }]
// Single x-axis (time), single y-axis (value) — stacked areas when
// `stacked` is true, overlaid lines otherwise.
// ---------------------------------------------------------------------------
export function timelineChart(container, { series, width = 1040, height = 220, stacked = false, valueFmt = fmtNum, timeFmt, markers = [] }) {
  const pad = { top: 14, right: 16, bottom: 26, left: 48 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;

  const allPoints = series.flatMap(s => s.points);
  if (!allPoints.length) {
    const div = document.createElement('div');
    div.className = 'empty-state';
    div.textContent = 'No activity in this window.';
    container.appendChild(div);
    return div;
  }
  const allT = allPoints.map(p => p.t).concat(markers.map(m => m.t));
  const minT = Math.min(...allT);
  const maxT = Math.max(...allT);
  const spanT = Math.max(1, maxT - minT);

  let maxV;
  if (stacked) {
    const n = allPoints.length ? series[0].points.length : 0;
    maxV = 0;
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (const s of series) sum += (s.points[i] ? s.points[i].v : 0);
      if (sum > maxV) maxV = sum;
    }
  } else {
    maxV = Math.max(1, ...allPoints.map(p => p.v));
  }
  maxV = niceMax(maxV);

  const x = (t) => pad.left + ((t - minT) / spanT) * innerW;
  const y = (v) => pad.top + innerH - (v / maxV) * innerH;

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.setAttribute('width', '100%');
  svg.style.display = 'block';
  svg.style.overflow = 'visible';

  // gridlines + y ticks
  const ticks = 4;
  for (let i = 0; i <= ticks; i++) {
    const v = (maxV / ticks) * i;
    const yy = y(v);
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', pad.left); line.setAttribute('x2', width - pad.right);
    line.setAttribute('y1', yy); line.setAttribute('y2', yy);
    line.setAttribute('stroke', 'var(--grid)'); line.setAttribute('stroke-width', '1');
    svg.appendChild(line);
    const label = document.createElementNS(svgNS, 'text');
    label.setAttribute('x', pad.left - 8); label.setAttribute('y', yy + 4);
    label.setAttribute('text-anchor', 'end'); label.setAttribute('font-size', '10.5');
    label.setAttribute('fill', 'var(--text-muted)');
    label.textContent = valueFmt(v);
    svg.appendChild(label);
  }
  // x ticks (start / mid / end as clock time)
  const fmtT = timeFmt || ((t) => fmtClock(t, false));
  [minT, minT + spanT / 2, maxT].forEach((t) => {
    const label = document.createElementNS(svgNS, 'text');
    label.setAttribute('x', x(t)); label.setAttribute('y', height - 6);
    label.setAttribute('text-anchor', 'middle'); label.setAttribute('font-size', '10.5');
    label.setAttribute('fill', 'var(--text-muted)');
    label.textContent = fmtT(t);
    svg.appendChild(label);
  });

  if (stacked) {
    let cum = series[0].points.map(() => 0);
    series.forEach((s, si) => {
      const top = s.points.map((p, i) => { cum[i] += p.v; return cum[i]; });
      const bottom = s.points.map((p, i) => cum[i] - p.v);
      const pts = s.points;
      let d = `M ${x(pts[0].t)} ${y(bottom[0])}`;
      for (let i = 0; i < pts.length; i++) d += ` L ${x(pts[i].t)} ${y(top[i])}`;
      for (let i = pts.length - 1; i >= 0; i--) d += ` L ${x(pts[i].t)} ${y(bottom[i])}`;
      d += ' Z';
      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', d);
      path.setAttribute('fill', s.color);
      path.setAttribute('fill-opacity', '0.75');
      svg.appendChild(path);
    });
  } else {
    series.forEach((s) => {
      if (!s.points.length) return;
      let d = `M ${x(s.points[0].t)} ${y(s.points[0].v)}`;
      for (let i = 1; i < s.points.length; i++) d += ` L ${x(s.points[i].t)} ${y(s.points[i].v)}`;
      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', d);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', s.color);
      path.setAttribute('stroke-width', '2');
      path.setAttribute('stroke-linejoin', 'round');
      path.setAttribute('stroke-linecap', 'round');
      svg.appendChild(path);
    });
  }

  // baseline
  const base = document.createElementNS(svgNS, 'line');
  base.setAttribute('x1', pad.left); base.setAttribute('x2', width - pad.right);
  base.setAttribute('y1', y(0)); base.setAttribute('y2', y(0));
  base.setAttribute('stroke', 'var(--baseline)'); base.setAttribute('stroke-width', '1');
  svg.appendChild(base);

  // Discrete point-in-time events (e.g. a deathblow) rather than a
  // continuous quantity — a thin dashed rule across the plot at the exact
  // moment it happened, for correlating by eye against the series lines.
  // Deliberately NOT its own hover target: a busy session can have dozens
  // of these within a few pixels of each other, where individually
  // hoverable dots would mostly just shadow one another. Hovering the chart
  // anywhere (below) reports a plain count for whichever bucket it lands
  // in instead, which degrades gracefully no matter how many land together.
  //
  // A `solid` marker (e.g. a checkpoint boundary) is a seam in the data
  // itself rather than something that happened, so it's drawn full-height
  // and undashed, at lower opacity, and -- crucially -- rendered in its own
  // pass BEFORE the dashed event markers below, so a checkpoint line never
  // visually sits on top of (and dims out) a death/deathblow rule that
  // lands at the same moment.
  const solidMarkers = markers.filter(m => m.solid);
  const dashedMarkers = markers.filter(m => !m.solid);
  [...solidMarkers, ...dashedMarkers].forEach((m) => {
    const mx = x(m.t);
    const rule = document.createElementNS(svgNS, 'line');
    rule.setAttribute('x1', mx); rule.setAttribute('x2', mx);
    rule.setAttribute('y1', pad.top); rule.setAttribute('y2', pad.top + innerH);
    rule.setAttribute('stroke', m.color || 'var(--series-7)');
    if (m.solid) {
      rule.setAttribute('stroke-width', '1');
      rule.setAttribute('opacity', '0.35');
    } else {
      rule.setAttribute('stroke-width', '1.5');
      rule.setAttribute('stroke-dasharray', '3,3');
      rule.setAttribute('opacity', '0.75');
    }
    svg.appendChild(rule);
  });

  // hover crosshair + tooltip via an invisible overlay rect
  const overlay = document.createElementNS(svgNS, 'rect');
  overlay.setAttribute('x', pad.left); overlay.setAttribute('y', pad.top);
  overlay.setAttribute('width', innerW); overlay.setAttribute('height', innerH);
  overlay.setAttribute('fill', 'transparent');
  const crosshair = document.createElementNS(svgNS, 'line');
  crosshair.setAttribute('y1', pad.top); crosshair.setAttribute('y2', pad.top + innerH);
  crosshair.setAttribute('stroke', 'var(--baseline)'); crosshair.setAttribute('stroke-width', '1');
  crosshair.style.display = 'none';
  svg.appendChild(crosshair);
  svg.appendChild(overlay);

  const basePoints = series[0] ? series[0].points : [];
  // Bucket width, derived from the (uniform, by construction) spacing
  // between consecutive series points — used below to count how many
  // markers fall in whichever bucket the pointer is nearest to.
  const bucketWidth = basePoints.length > 1 ? basePoints[1].t - basePoints[0].t : spanT;
  overlay.addEventListener('mousemove', (ev) => {
    const rect = svg.getBoundingClientRect();
    const scale = width / rect.width;
    const mx = (ev.clientX - rect.left) * scale;
    const t = minT + ((mx - pad.left) / innerW) * spanT;
    let idx = 0, best = Infinity;
    basePoints.forEach((p, i) => { const d = Math.abs(p.t - t); if (d < best) { best = d; idx = i; } });
    const px = basePoints.length ? x(basePoints[idx].t) : mx;
    crosshair.setAttribute('x1', px); crosshair.setAttribute('x2', px);
    crosshair.style.display = 'block';
    const rows = series.map(s => {
      const p = s.points[idx];
      return `<div class="tt-row"><span><span class="swatch" style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${s.color};margin-right:5px;"></span>${esc(s.name)}</span><span>${p ? fmtExact(p.v) : 0}</span></div>`;
    }).join('');
    const bucketCenter = basePoints[idx] ? basePoints[idx].t : t;
    // excludeFromTooltip markers (checkpoint boundaries) are a seam in the
    // data, not an event -- "1 checkpoint" in the hover readout wouldn't
    // tell anyone anything useful the solid line itself doesn't already.
    const nearbyMarkers = markers.filter(m => !m.excludeFromTooltip && Math.abs(m.t - bucketCenter) <= bucketWidth / 2);
    const markerRows = [];
    for (const m of nearbyMarkers) {
      const existing = markerRows.find(r => r.label === (m.label || 'Event'));
      if (existing) existing.count++; else markerRows.push({ label: m.label || 'Event', color: m.color, count: 1 });
    }
    const markerHtml = markerRows.map(r =>
      `<div class="tt-row"><span><span class="swatch" style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${r.color || 'var(--series-7)'};margin-right:5px;"></span>${esc(r.label)}</span><span>${r.count}</span></div>`
    ).join('');
    const timeLabel = basePoints[idx] ? fmtT(basePoints[idx].t) : '';
    showTooltip(ev.clientX, ev.clientY, `<div class="tt-title">${timeLabel}</div>${rows}${markerHtml}`);
  });
  overlay.addEventListener('mouseleave', () => { crosshair.style.display = 'none'; hideTooltip(); });

  container.appendChild(svg);
  return svg;
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
