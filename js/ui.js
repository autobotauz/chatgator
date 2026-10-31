// ui.js — renders each tab panel from a `stats` object (aggregate.js output)
// plus light context (skill enrichment map, unmatched-line sample, etc).
// Every render function clears its container first, so panels can be
// re-rendered freely when the user switches encounters.

import { statTile, barChart, legend, timelineChart, dotTimelineChart, fmtNum, fmtExact, fmtClock, seriesColor } from './charts.js';
import { describeSkill } from './skills.js';
import { ABILITY_DATABASE } from './ability-database.js';
import { CL_ABILITY_DATABASE } from './cl-ability-database.js';
import { iconHtml } from './icons.js';

function clear(el) { el.innerHTML = ''; }
function h3(el, text) { const h = document.createElement('h3'); h.textContent = text; el.appendChild(h); }
function section(parent, cls = '') { const s = document.createElement('div'); s.className = 'section ' + cls; parent.appendChild(s); return s; }
function grid(parent, cols = 4) { const g = document.createElement('div'); g.className = `grid cols-${cols}`; parent.appendChild(g); return g; }
function card(parent) { const c = document.createElement('div'); c.className = 'card'; parent.appendChild(c); return c; }

function durationLabel(ms) {
  const sec = Math.round(ms / 1000);
  const m = Math.floor(sec / 60), s = sec % 60;
  return m ? `${m}m ${s}s` : `${s}s`;
}

// Numbers in a row can arrive either raw (e.g. 1076) or already formatted by
// a column's own `fmt` into display text (e.g. "1,076", "18.8%", "—") — some
// callers pre-format before the row even reaches here. Sorting always wants
// the numeric value regardless of which form it's in, so a "num" column's
// cells are coerced back to a number for comparison; "—"/blank sorts as the
// lowest value rather than throwing comparisons off as NaN.
function sortableValue(v, isNum) {
  if (!isNum) return (v == null ? '' : String(v)).toLowerCase();
  if (typeof v === 'number') return v;
  const n = parseFloat(String(v).replace(/[,%]/g, ''));
  return isNaN(n) ? -Infinity : n;
}

// Column options: key, label, num, fmt(value) — plus html(row), display-only
// markup for the cell (e.g. an icon before the name). Filtering and sorting
// always use the plain value/fmt text, never html, so an icon's markup can't
// leak into "Filter…" matches.
const nameWithIcon = (row) => `${iconHtml(row.name)}${row.name}`;

function dataTable(parent, { columns, rows, filterable = true }) {
  // A column marked hideIfEmpty is left out entirely when no row has a value
  // for it (e.g. Weapon for a pure caster, the cast columns for pure melee),
  // so wide tables only spend width on columns that say something.
  columns = columns.filter(c => !c.hideIfEmpty || rows.some(r => r[c.key] != null && r[c.key] !== ''));
  const wrap = document.createElement('div');
  wrap.className = 'data-table-wrap';

  let filterInput = null;
  if (filterable && rows.length > 6) {
    filterInput = document.createElement('input');
    filterInput.type = 'search';
    filterInput.placeholder = 'Filter…';
    filterInput.className = 'table-filter';
    wrap.appendChild(filterInput);
  }

  const table = document.createElement('table');
  table.className = 'data-table';
  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');
  columns.forEach((c) => {
    const th = document.createElement('th');
    th.className = (c.num ? 'num ' : '') + 'sortable';
    th.textContent = c.label;
    th.title = c.title ? `${c.title} — click to sort` : 'Click to sort';
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  wrap.appendChild(table);
  parent.appendChild(wrap);

  let sortIdx = null, sortDir = 1;

  function renderBody() {
    let displayRows = rows;
    if (filterInput && filterInput.value.trim()) {
      const q = filterInput.value.trim().toLowerCase();
      displayRows = displayRows.filter(row =>
        columns.some(c => String(c.fmt ? c.fmt(row[c.key]) : (row[c.key] ?? '')).toLowerCase().includes(q)));
    }
    if (sortIdx != null) {
      const c = columns[sortIdx];
      displayRows = displayRows.slice().sort((a, b) => {
        const av = sortableValue(a[c.key], c.num), bv = sortableValue(b[c.key], c.num);
        return av < bv ? -sortDir : av > bv ? sortDir : 0;
      });
    }
    tbody.innerHTML = '';
    if (!displayRows.length) {
      tbody.innerHTML = `<tr><td colspan="${columns.length}" class="empty-state">No data</td></tr>`;
      return;
    }
    for (const row of displayRows) {
      const tr = document.createElement('tr');
      tr.innerHTML = columns.map(c => `<td class="${c.num ? 'num' : ''}">${c.html ? c.html(row) : c.fmt ? c.fmt(row[c.key]) : row[c.key]}</td>`).join('');
      tbody.appendChild(tr);
    }
  }

  Array.from(headRow.children).forEach((th, i) => {
    th.addEventListener('click', () => {
      if (sortIdx === i) sortDir *= -1; else { sortIdx = i; sortDir = 1; }
      Array.from(headRow.children).forEach(h => h.classList.remove('sort-asc', 'sort-desc'));
      th.classList.add(sortDir === 1 ? 'sort-asc' : 'sort-desc');
      renderBody();
    });
  });
  if (filterInput) filterInput.addEventListener('input', renderBody);

  renderBody();
  return table;
}

function sourceMapToItems(bySource) {
  return Object.entries(bySource).map(([label, s]) => ({ label, value: s.dmg, ...s }));
}

function sourceMapToRows(bySource) {
  return Object.entries(bySource)
    // A style thrown with more than one weapon gets one row per weapon (see
    // aggregate.js), each internally keyed by "Style (Weapon)" so the rows
    // stay distinct — displayName puts the bare style back in the Name
    // column, with the specific weapon shown in its own Weapon column.
    .map(([name, s]) => ({ ...s, name: s.displayName || name }))
    .sort((a, b) => b.dmg - a.dmg);
}

// Drops "ghost" entries (see isAbilityGhost, defined further down this file
// — hoisted, so callable from here) from a bySource/bySpell map BEFORE it's
// turned into chart items or table rows. Only safe to use on maps keyed by
// ability/spell name (damageOut.bySource, healOut.bySpell) — never on maps
// keyed by player/attacker/target name (damageIn.bySource, healIn.bySource,
// healOut.byTarget), where a name happening to match a ghost ability would
// be a real person, not a ghost. `inferredClass` is stats.meta.inferredClass
// — pass it through so the class-mismatch half of the ghost check applies
// here exactly as it does in the Spells & Styles tab. Checked against
// s.displayName when present rather than the raw map key, since a style
// thrown with more than one weapon is keyed by a composite "Style (Weapon)"
// string (see aggregate.js) that would never match ABILITY_DATABASE's own
// bare-name keys at all — silently skipping the ghost check on every
// multi-weapon style row, not just correctly leaving non-ghosts alone.
function filterGhostSource(bySource, inferredClass) {
  const out = {};
  for (const [key, s] of Object.entries(bySource)) {
    if (isAbilityGhost(s.displayName || key, inferredClass)) continue;
    out[key] = s;
  }
  return out;
}

// ===========================================================================
export function renderOverview(container, stats, ctx) {
  clear(container);

  const g = grid(section(container), 4);
  statTile(g, { label: 'Damage done', value: fmtNum(stats.damageOut.total), sub: `${fmtNum(stats.damageOut.dps)} / sec`, colorVar: '--series-1' });
  statTile(g, { label: 'Healing done', value: fmtNum(stats.healOut.total), sub: `${fmtNum(stats.healOut.hps)} / sec`, colorVar: '--series-3' });
  statTile(g, { label: 'Damage taken', value: fmtNum(stats.damageIn.total), sub: `${fmtNum(stats.damageIn.dtps)} / sec`, colorVar: '--series-8' });
  statTile(g, { label: 'Realm points', value: fmtExact(stats.realmPoints.total), sub: `${fmtNum(stats.realmPoints.perHour)} / hr`, colorVar: '--series-4' });

  const g2 = grid(section(container), 4);
  statTile(g2, { label: 'Healing received', value: fmtNum(stats.healIn.total), colorVar: '--series-3' });
  statTile(g2, { label: 'Pet damage', value: fmtNum(stats.pets.combinedDmg), sub: stats.meta.petNames.length ? stats.meta.petNames.join(', ') : 'no pet seen', colorVar: '--series-7' });
  statTile(g2, { label: 'Deathblows', value: fmtExact(stats.kills.deathblows) });
  statTile(g2, { label: 'Deaths', value: fmtExact(stats.kills.deaths) });

  const tlSection = section(container);
  h3(tlSection, 'Activity over time');
  const tlCard = card(tlSection);
  legend(tlCard, [
    { color: 'var(--series-1)', label: 'Damage done' },
    { color: 'var(--series-3)', label: 'Healing done' },
    { color: 'var(--series-8)', label: 'Damage taken' },
    { color: 'var(--series-4)', label: 'Realm points' },
    { color: 'var(--series-7)', label: 'Deathblow' },
    { color: 'var(--status-critical)', label: 'Death' },
    { color: 'var(--text-primary)', label: 'Checkpoint' },
    // one entry per distinct tag, named by the tag itself ("koth"), not "@tag"
    ...[...new Set((stats.meta.userTags || []).map(t => t.text))].map(text => ({ color: 'var(--user-tag)', label: text })),
  ]);
  timelineChart(tlCard, {
    id: 'overview-activity',
    domain: [stats.meta.startClock, stats.meta.endClock],
    idleGaps: stats.meta.idleGaps,
    series: [
      { name: 'Damage done', color: 'var(--series-1)', raw: stats.damageOut.points },
      { name: 'Healing done', color: 'var(--series-3)', raw: stats.healOut.points },
      { name: 'Damage taken', color: 'var(--series-8)', raw: stats.damageIn.points },
      { name: 'Realm points', color: 'var(--series-4)', raw: stats.realmPoints.points },
    ],
    // Deathblows and your own deaths are both discrete "it happened"
    // moments, not a quantity worth their own line — plotted as markers so
    // they can be read against the damage/heal/RP lines rather than
    // against each other. No victim/killer name here by design (just the
    // dot + time); the Realm Points tab's Deathblows table has the
    // per-kill detail.
    //
    // Checkpoint boundaries (each 'Statistics for X this Session:' header
    // within whatever's currently in view) are a different kind of thing
    // entirely -- not an event that happened TO you, but a seam in the data
    // itself -- so they're drawn as solid full-height lines instead of
    // dashed colored ones, underneath everything else (see timelineChart),
    // and deliberately left out of the per-bucket hover tooltip's event
    // count: a count of "how many checkpoints are in this one bucket" isn't
    // a useful thing to tell someone, unlike "how many deathblows".
    // Encounter boundaries were the other option here, but a single
    // farming session can have dozens of them a few seconds apart -- so
    // dense they'd turn the chart into a picket fence instead of adding
    // signal. Checkpoints (a re-run /stats, or truly a new one) are far
    // rarer and far more meaningful as a "something changed here" marker.
    markers: [
      ...stats.meta.checkpointStarts.map(t => ({ t, color: 'var(--text-primary)', solid: true, excludeFromTooltip: true })),
      ...stats.kills.deathblowLog.map(d => ({ t: d.clock, color: 'var(--series-7)', label: 'Deathblow' })),
      ...stats.kills.deathLog.map(d => ({ t: d.clock, color: 'var(--status-critical)', label: 'Death' })),
      ...tagMarkers(stats),
    ],
  });

  if (stats.meta.latestSnapshot) {
    const snapSection = section(container);
    h3(snapSection, 'As reported by in-game /stats');
    const c = card(snapSection);
    const s = stats.meta.latestSnapshot;
    c.innerHTML = `
      <div class="grid cols-4" style="gap:10px">
        ${tile('Total RP', fmtExact(s.totalRP))}
        ${tile('Deathblows', s.deathblows)}
        ${tile('Solo kills', s.soloKills)}
        ${tile('Deaths', s.deaths)}
        ${tile('RP / hour', s.rpPerHour ? fmtNum(s.rpPerHour) : '—')}
        ${tile('Kills / death', s.killsPerDeath ?? '—')}
        ${tile('Online time', s.onlineTime || '—')}
        ${tile('Resurrections', s.resurrections ?? '—')}
      </div>
      <p class="sub" style="margin-top:10px">This is the game's own last <code>/stats</code> snapshot for the whole file (lifetime for that login), separate from the chart above which reflects only the encounter currently selected.</p>
    `;
  }
}
function tile(label, value) {
  return `<div><div class="sub">${label}</div><div style="font-size:16px;font-weight:600">${value}</div></div>`;
}

// ===========================================================================
// Damage by PLAYER, not by spell/style/weapon — that per-ability breakdown
// (every one of your own abilities and swings, full hit/crit/resist table)
// lives on the Spells & Styles tab instead (see renderSpells below), since
// "what did I hit with" is already answered there and showing it twice was
// just two tables answering the same question. This tab answers the other
// question: who did it land on, and who landed it on you.
export function renderDamage(container, stats, ctx) {
  clear(container);
  const dmgOutRows = Object.values(stats.damageOut.byTarget || {});
  const hitsDealt = dmgOutRows.reduce((a, s) => a + s.totalHits, 0);
  const critsDealt = dmgOutRows.reduce((a, s) => a + s.crits, 0);
  const critRateDealt = hitsDealt ? +(100 * critsDealt / hitsDealt).toFixed(1) : 0;

  const dmgInRows = Object.values(stats.damageIn.bySource);
  const hitsTaken = dmgInRows.reduce((a, s) => a + s.totalHits, 0);
  const critsTaken = dmgInRows.reduce((a, s) => a + s.crits, 0);
  const critRateTaken = hitsTaken ? +(100 * critsTaken / hitsTaken).toFixed(1) : 0;

  const g = grid(section(container), 4);
  statTile(g, { label: 'Damage done', value: fmtNum(stats.damageOut.total), sub: `${fmtNum(stats.damageOut.dps)}/sec` });
  statTile(g, { label: 'Hits dealt', value: fmtNum(hitsDealt), sub: `${critRateDealt}% crit` });
  statTile(g, { label: 'Damage taken', value: fmtNum(stats.damageIn.total), sub: `${fmtNum(stats.damageIn.dtps)}/sec` });
  statTile(g, { label: 'Hits taken', value: fmtNum(hitsTaken), sub: `${critRateTaken}% crit` });

  const outSec = section(container);
  h3(outSec, 'Damage Out');
  const outCard = card(outSec);
  const outItems = sourceMapToItems(stats.damageOut.byTarget || {});
  barChart(outCard, { items: outItems, maxItems: 12, colorFn: () => 'var(--series-1)' });
  dataTable(outCard, {
    columns: [
      { key: 'name', label: 'Target', fmt: heraldLink },
      { key: 'totalHits', label: 'Hits', num: true },
      { key: 'crits', label: 'Crits', num: true },
      { key: 'dmg', label: 'Total dmg', num: true, fmt: fmtExact },
      { key: 'avg', label: 'Avg', num: true },
      { key: 'max', label: 'Max', num: true },
    ],
    rows: sourceMapToRows(stats.damageOut.byTarget || {}),
  });

  const inSec = section(container);
  h3(inSec, 'Damage In');
  const inCard = card(inSec);
  const inItems = sourceMapToItems(stats.damageIn.bySource);
  barChart(inCard, { items: inItems, maxItems: 12, colorFn: () => 'var(--series-8)' });
  dataTable(inCard, {
    columns: [
      { key: 'name', label: 'Attacker', fmt: heraldLink },
      { key: 'totalHits', label: 'Hits', num: true },
      { key: 'crits', label: 'Crits', num: true },
      { key: 'dmg', label: 'Total dmg', num: true, fmt: fmtExact },
      { key: 'avg', label: 'Avg', num: true },
      { key: 'max', label: 'Max', num: true },
    ],
    rows: sourceMapToRows(stats.damageIn.bySource),
  });
}

// Links a player name to their Eden Herald profile
// (https://eden-daoc.net/herald?n=player&k=<name>) -- used for every player
// name this app shows (Damage In/Out, Healing done/received, deathblow
// victims, the character name in the encounter bar -- see each caller's own
// `fmt: heraldLink` column or direct call). A real DAoC character name is
// always a single word, so a name containing a space is treated as NOT a
// real player (a keep guard, a siege hazard like "The cauldron of boiling
// oil", a pet, etc.) and is shown as plain text with no link at all. For a
// single-word name we still don't check that it's actually a real player
// with herald data: asked for directly, since a dead link for something
// that was never a player is harmless and obvious for anyone who knows the
// game, and Eden's own herald lookup appears to require being logged into
// their site to even check from here. `name` is escaped since it comes
// straight from the parsed log text, not written by us.
export function heraldLink(name) {
  const safe = escHtml(name);
  if (/\s/.test(name)) return safe;
  const url = `https://eden-daoc.net/herald?n=player&k=${encodeURIComponent(name)}`;
  return `<a class="herald-link" href="${url}" target="_blank" rel="noopener noreferrer" title="View ${safe} on the Eden Herald">${safe}</a>`;
}

// ===========================================================================
// Resurrections & cure mezz (aggregate.js stats.support) -- laid out like
// Bask's Healing page: a count in each heading, who-was-rezzed/cured bars,
// and a table. Shown only when there's something to show.
function renderSupport(container, stats) {
  const sup = stats.support;
  if (!sup || (!sup.rezzes.length && !sup.cures.length)) return;
  const who = (n) => (n ? heraldLink(n) : '<span class="sub">target unknown</span>');
  const countBy = (list, f) => { const m = {}; for (const x of list) { const k = f(x); if (k) m[k] = (m[k] || 0) + 1; } return Object.entries(m).map(([label, value]) => ({ label, value })); };
  const countFmt = v => fmtExact(v);

  const sr = section(container);
  h3(sr, `Resurrections (${sup.rezzes.length})`);
  const pr = document.createElement('p');
  pr.className = 'sub';
  pr.textContent = 'Rezzes you cast and rezzes you received. The log doesn\'t say who your rez landed on, so that side shows your target when you cast it.';
  sr.appendChild(pr);
  if (sup.rezzes.length) {
    const g = grid(sr, 2);
    const c1 = card(g); h3(c1, 'Rezzed by'); barChart(c1, { items: countBy(sup.rezzes, x => x.by), valueFmt: countFmt, colorFn: () => 'var(--series-3)' });
    const c2 = card(g); h3(c2, 'Player rezzed'); barChart(c2, { items: countBy(sup.rezzes, x => x.on), valueFmt: countFmt, colorFn: () => 'var(--series-6)' });
    const c3 = card(sr);
    dataTable(c3, {
      columns: [
        { key: 'clock', label: 'Time', fmt: v => fmtClock(v, true) },
        { key: 'by', label: 'Rezzed by', fmt: who },
        { key: 'on', label: 'Player rezzed', fmt: who },
        { key: 'spell', label: 'Spell', html: (r) => (r.spell ? `${iconHtml(r.spell)}${escHtml(r.spell)}` : '') },
      ],
      rows: sup.rezzes.slice().reverse(),
    });
  }

  if (sup.cures.length) {
    const sc = section(container);
    h3(sc, `Cure mezz (${sup.cures.length})`);
    const pc = document.createElement('p');
    pc.className = 'sub';
    pc.textContent = 'Your Cure Mezz casts, and on whom (your target when you cast it; group cures may show no target).';
    sc.appendChild(pc);
    const c1 = card(sc); h3(c1, 'Cured'); barChart(c1, { items: countBy(sup.cures, x => x.on), valueFmt: countFmt, colorFn: () => 'var(--series-5)' });
    const c2 = card(sc);
    dataTable(c2, {
      columns: [
        { key: 'clock', label: 'Time', fmt: v => fmtClock(v, true) },
        { key: 'on', label: 'On', fmt: who },
        { key: 'spell', label: 'Spell', html: (r) => `${iconHtml(r.spell)}${escHtml(r.spell)}` },
      ],
      rows: sup.cures.slice().reverse(),
    });
  }
}

export function renderHealing(container, stats, ctx) {
  clear(container);
  const g = grid(section(container), 4);
  statTile(g, { label: 'Total healing done', value: fmtNum(stats.healOut.total) });
  statTile(g, { label: 'HPS (this view)', value: fmtNum(stats.healOut.hps) });
  statTile(g, { label: 'Heal crit rate', value: stats.healOut.critRate + '%', sub: `${stats.healOut.crits} crit heals` });
  statTile(g, { label: 'Healing received', value: fmtNum(stats.healIn.total) });

  renderSupport(container, stats);

  const spellSec = section(container);
  h3(spellSec, 'Healing done by spell');
  const spellCard = card(spellSec);
  const healOutBySpell = filterGhostSource(stats.healOut.bySpell, stats.meta.inferredClass);
  const spellItems = sourceMapToItems(healOutBySpell);
  barChart(spellCard, { items: spellItems, colorFn: (_, i) => seriesColor(i + 2) });
  dataTable(spellCard, {
    columns: [
      { key: 'name', label: 'Spell', html: nameWithIcon },
      { key: 'totalHits', label: 'Heals', num: true },
      { key: 'crits', label: 'Crit heals', num: true },
      { key: 'critRate', label: 'Crit %', num: true, fmt: v => v + '%' },
      { key: 'dmg', label: 'Total healed', num: true, fmt: fmtExact },
      { key: 'avg', label: 'Avg', num: true },
      { key: 'max', label: 'Max', num: true },
    ],
    rows: sourceMapToRows(healOutBySpell),
  });

  const outSec = section(container);
  h3(outSec, 'Healing done by target');
  const outCard = card(outSec);
  const items = sourceMapToItems(stats.healOut.byTarget);
  barChart(outCard, { items, colorFn: (_, i) => seriesColor(i + 2) });
  dataTable(outCard, {
    columns: [
      { key: 'name', label: 'Target', fmt: heraldLink },
      { key: 'totalHits', label: 'Heals', num: true },
      { key: 'crits', label: 'Crit heals', num: true },
      { key: 'critRate', label: 'Crit %', num: true, fmt: v => v + '%' },
      { key: 'dmg', label: 'Total healed', num: true, fmt: fmtExact },
      { key: 'avg', label: 'Avg', num: true },
      { key: 'max', label: 'Max', num: true },
    ],
    rows: sourceMapToRows(stats.healOut.byTarget),
  });

  const inSec = section(container);
  h3(inSec, 'Healing received by healer');
  const inCard = card(inSec);
  const inItems = sourceMapToItems(stats.healIn.bySource);
  barChart(inCard, { items: inItems, colorFn: () => 'var(--series-3)' });
  dataTable(inCard, {
    columns: [
      { key: 'name', label: 'Healer', fmt: heraldLink },
      { key: 'totalHits', label: 'Heals', num: true },
      { key: 'dmg', label: 'Total received', num: true, fmt: fmtExact },
      { key: 'avg', label: 'Avg', num: true },
    ],
    rows: sourceMapToRows(stats.healIn.bySource),
  });
}

// ===========================================================================
export function renderPets(container, stats, ctx) {
  clear(container);
  const names = Object.keys(stats.pets.byPet);
  const g = grid(section(container), 3);
  statTile(g, { label: 'Combined pet damage', value: fmtNum(stats.pets.combinedDmg) });
  statTile(g, { label: 'Combined pet self-heals', value: fmtNum(stats.pets.combinedHeals) });
  statTile(g, { label: 'Pets seen', value: names.length, sub: names.join(', ') || '—' });

  if (!names.length) {
    const s = section(container);
    const c = card(s);
    c.innerHTML = '<div class="empty-state">No pet activity in this view.</div>';
    return;
  }

  const cmpSec = section(container);
  h3(cmpSec, 'Damage by pet');
  const cmpCard = card(cmpSec);
  barChart(cmpCard, {
    items: names.map(n => ({ label: n, value: stats.pets.byPet[n].dmg })),
    colorFn: (_, i) => seriesColor(i + 4),
  });

  // One line per pet, same zoom / hide-idle-time behaviour as Overview.
  if (names.some(n => (stats.pets.byPet[n].points || []).length)) {
    const tlSec = section(container);
    h3(tlSec, 'Pet damage over time');
    const tlCard = card(tlSec);
    legend(tlCard, names.map((n, i) => ({ color: seriesColor(i + 4), label: n })));
    timelineChart(tlCard, {
      id: 'pets-damage',
      markers: tagMarkers(stats),
      domain: [stats.meta.startClock, stats.meta.endClock],
      idleGaps: stats.meta.idleGaps,
      series: names.map((n, i) => ({ name: n, color: seriesColor(i + 4), raw: stats.pets.byPet[n].points || [] })),
    });
  }

  for (const name of names) {
    const p = stats.pets.byPet[name];
    const s = section(container);
    h3(s, `${name} — ${fmtExact(p.dmg)} damage, ${fmtExact(p.heals)} self-healed`);
    if (p.spellsCast) {
      const spellSub = card(s);
      // Pet spells (e.g. a CC/root cast) rarely show a damage number on the
      // result line itself, so there's nothing to put in the breakdown table
      // below — but cast count and resist rate are both fully known (the
      // resist line always names the pet directly, however varied the
      // actual effect text is spell to spell), so they get their own strip.
      spellSub.innerHTML = `
        <div class="grid cols-4" style="gap:10px">
          ${tile('Spells cast', fmtExact(p.spellsCast))}
          ${tile('Landed', fmtExact(p.ccLanded || 0))}
          ${tile('Resisted', fmtExact(p.resists || 0))}
          ${tile('Resist %', (p.resistRate || 0) + '%')}
        </div>`;
    }
    const c = card(s);
    dataTable(c, {
      columns: [
        { key: 'name', label: 'Source' },
        { key: 'totalHits', label: 'Hits', num: true },
        { key: 'crits', label: 'Crits', num: true },
        { key: 'dmg', label: 'Total dmg', num: true, fmt: fmtExact },
        { key: 'avg', label: 'Avg', num: true },
        { key: 'max', label: 'Max', num: true },
      ],
      rows: sourceMapToRows(p.bySource),
    });
  }
}

// ===========================================================================
export function renderDefense(container, stats, ctx) {
  clear(container);
  const d = stats.defense;
  const g = grid(section(container), 4);
  statTile(g, { label: 'Block rate', value: d.blockRate + '%', sub: `${d.blocks} blocks` });
  statTile(g, { label: 'Parry rate', value: d.parryRate + '%', sub: `${d.youParries} parries` });
  statTile(g, { label: 'Evade rate', value: d.evadeRate + '%', sub: `${d.youEvades} evades` });
  statTile(g, { label: 'Attacks mitigated', value: `${d.blocks + d.youParries + d.youEvades + d.bladeturns} / ${d.totalIncomingAttackAttempts}` });

  // Your absorb buffs: an ablative soaks part of a hit; a bladeturn stops one
  // outright. (Your spells resisted by enemies used to be charted here too --
  // that's on the Spells & Styles tab already, per spell.)
  const g2 = grid(section(container), 4);
  statTile(g2, { label: 'Ablative absorbed', value: fmtExact(d.ablativeAbsorbed), sub: `${fmtExact(d.ablativeHits)} hits soaked` });
  statTile(g2, { label: 'Bladeturns', value: fmtExact(d.bladeturns), sub: `${d.bladeturnRate}% of attacks` });

  const g3 = grid(section(container), 4);
  statTile(g3, { label: 'Your attacks blocked by enemy', value: fmtExact(d.enemyBlockedYou) });
  statTile(g3, { label: 'Your attacks parried by enemy', value: fmtExact(d.enemyParriedYou) });
  statTile(g3, { label: 'Your attacks evaded by enemy', value: fmtExact(d.enemyEvadedYou) });
}

// ===========================================================================
export function renderRealm(container, stats, ctx) {
  clear(container);
  const rp = stats.realmPoints;
  const g = grid(section(container), 4);
  statTile(g, { label: 'Realm points (this view)', value: fmtExact(rp.total) });
  statTile(g, { label: 'RP / hour', value: fmtNum(rp.perHour) });
  statTile(g, { label: 'Bonus RP', value: fmtExact(rp.bonusTotal) });
  statTile(g, { label: 'Deathblows', value: fmtExact(stats.kills.deathblows) });

  // Same descending-by-total order drives both charts below, and the color
  // for a given reason is looked up by name (not by position) so the two
  // stay in sync even if one chart's own internal sort ties differently.
  const reasonEntries = Object.entries(rp.byReason).sort((a, b) => b[1] - a[1]);
  const colorForReason = new Map(reasonEntries.map(([label], i) => [label, seriesColor(i)]));

  const tlSec = section(container);
  h3(tlSec, 'Realm points by source over time');
  const tlCard = card(tlSec);
  legend(tlCard, reasonEntries.map(([label]) => ({ color: colorForReason.get(label), label })));
  timelineChart(tlCard, {
    id: 'rp-by-source',
    markers: tagMarkers(stats),
    stacked: true,
    domain: [stats.meta.startClock, stats.meta.endClock],
    idleGaps: stats.meta.idleGaps,
    series: reasonEntries.map(([label]) => ({
      name: label,
      color: colorForReason.get(label),
      raw: rp.pointsByReason[label] || [],
    })),
  });

  const bySec = section(container);
  h3(bySec, 'Realm points by source');
  const byCard = card(bySec);
  const items = reasonEntries.map(([label, value]) => ({ label, value }));
  barChart(byCard, { items, colorFn: (item) => colorForReason.get(item.label) });

  // Bonus lines ("You get an additional N realm points due to X!") are
  // already folded into the kill/assist total above (see aggregate.js's
  // own comment on rpBonusTotal) and deliberately excluded from
  // reasonEntries so this breakdown and the main one never double-count —
  // this is purely a separate view onto where the "Bonus RP" tile's total
  // actually came from. Reported directly: before bonusByReason existed,
  // every bonus source (realm rank, a guild buff, a personal buff, ...)
  // was blended into that one tile with no way to tell them apart, under a
  // label ("Bonus RP (realm rank)") that was already wrong the moment a
  // second bonus source showed up in the same log. Shown only when there's
  // at least one bonus line in this view, so a log with none doesn't get an
  // empty chart.
  const bonusEntries = Object.entries(rp.bonusByReason || {}).sort((a, b) => b[1] - a[1]);
  if (bonusEntries.length) {
    const bonusSec = section(container);
    h3(bonusSec, 'Realm point bonuses by source');
    const bonusCard = card(bonusSec);
    const bonusItems = bonusEntries.map(([label, value], i) => ({
      label: label.charAt(0).toUpperCase() + label.slice(1),
      value,
      color: seriesColor(i),
    }));
    barChart(bonusCard, { items: bonusItems, colorFn: (item) => item.color });
  }

  const dbSec = section(container);
  h3(dbSec, 'Deathblows');
  const dbCard = card(dbSec);
  const log = stats.kills.deathblowLog || [];
  if (!log.length) {
    dbCard.innerHTML = `<p class="sub" style="margin:0">No deathblows credited to you in this view (the log only shows a kill as yours when the kill-feed line names you as the killer).</p>`;
  } else {
    dbCard.innerHTML = `<p class="sub" style="margin:0 0 10px">${fmtExact(log.length)} deathblow${log.length === 1 ? '' : 's'} · ${fmtExact(stats.kills.deathblowRpTotal)} RP attributed to them (the realm-point line right after a kill isn't addressed to a name, so this matches it by timing and can miss or misattribute during heavy, simultaneous zerg kills).</p>`;
    dataTable(dbCard, {
      columns: [
        { key: 'time', label: 'Time' },
        { key: 'victim', label: 'Killed', fmt: heraldLink },
        { key: 'zone', label: 'Zone' },
        { key: 'rp', label: 'RP', num: true },
      ],
      rows: log.slice().reverse().map(d => ({
        time: fmtClock(d.clock, true),
        victim: d.victim,
        zone: d.zone || '—',
        rp: d.rpKnown ? fmtExact(d.rp) : '—',
      })),
    });
  }
}

// ===========================================================================
// Same name, lowercased, since the game refers to a pet in third person in
// lowercase ("the underhill ally casts a spell!") while charplan's own
// entry for the summon that creates it is properly-cased ("Underhill
// Ally") — built once per module load, not per lookup.
const ABILITY_DATABASE_BY_LOWER = (() => {
  const m = new Map();
  for (const name of Object.keys(ABILITY_DATABASE)) {
    const lower = name.toLowerCase();
    if (!m.has(lower)) m.set(lower, ABILITY_DATABASE[name]);
  }
  return m;
})();

// Is `name` a row that has no business being in a by-ability table at all,
// given what we positively know about it? Two independent reasons, either
// one sufficient on its own:
//
//   1. It's a pet-summon ability (e.g. "Underhill Ally", the pet itself
//      showing up as "underhill ally" in third person in the log) — not a
//      player-cast spell/style outcome, just the summon's name picking up
//      a stray cc-landed/resist count (see parser.js's isSelfTargetingPet-
//      Cast and aggregate.js's ccLandedBySource). Always filtered, with no
//      dependency on knowing the log's class — a pet-summon row is never a
//      legitimate damage/heal source in this table for ANY class. Matched
//      case-insensitively, see ABILITY_DATABASE_BY_LOWER above.
//   2. `inferredClass` is set (i.e. aggregate.js's inferClass() was
//      confident — see that function's own comment for the thresholds) and
//      ABILITY_DATABASE positively knows which class(es) train this name,
//      none of which is the inferred one. This is the general form of (1):
//      an ability we can see for certain belongs to some OTHER class is
//      exactly the kind of cross-talk (another player's pet, another
//      player's AE landing on/near this character) that produces a ghost
//      row, whether or not it happens to be a pet summon specifically. Only
//      applied when inferredClass is non-null, so an unconfident/unknown
//      class guess changes nothing — same permissive-by-default rule as
//      everywhere else this database is consulted.
//
// Checked FIRST, before any of the above: is `name` a champion-level
// ability (CL_ABILITY_DATABASE)? CL abilities are trainable by any class
// once CL is high enough, so one can never be a cross-class ghost — and a
// handful of them happen to share a name with an unrelated class spell in
// ABILITY_DATABASE (e.g. "Onslaught" is also Armsman/Paladin's own style),
// which would otherwise wrongly ghost a real CL-ability row whenever the
// inferred class isn't one of that coincidental name's classes.
function isAbilityGhost(name, inferredClass) {
  if (CL_ABILITY_DATABASE[name]) return false;
  const info = ABILITY_DATABASE[name] || ABILITY_DATABASE_BY_LOWER.get(String(name).toLowerCase());
  if (!info) return false;
  // isPetSummon (not a plain `info.type.startsWith('Summon')` check) is what
  // catches a turret like "Forest's Core": it has TWO charplan entries under
  // that one name (its own Direct Damage effect, and a "Summon ..." Type for
  // the pet-summon component), which build-ability-database.py's ambiguous-
  // Type handling leaves `type` null for — isPetSummon carries the signal
  // through regardless of what else the name is ambiguous with.
  if (info.isPetSummon) return true;
  if (inferredClass && info.classes && info.classes.length && !info.classes.includes(inferredClass.name)) return true;
  return false;
}

// Single merged Role/Type value for one row. These used to be two separate
// columns (a naive Damage/Heal "Role" derived from which table a name
// happened to end up in, plus a "Type" column repeating ABILITY_DATABASE's
// real charplan Type right next to it) which were redundant most of the
// time (Role: Damage, Type: Direct Damage · Bainshee) and actively
// confusing the rest of the time (Role already silently became the Type
// string whenever it was known to be wrong — see the old trueRole — making
// the dedicated Type column alongside it pure repetition). One column now:
//   1. ABILITY_DATABASE's Type (+ training classes) when known — the same
//      authoritative source the damage/heal gating itself uses, so this
//      label and the gating decision can never disagree with each other.
//   2. Else the live best-effort skills.js fetch, when it has this name
//      (covers names not yet in this build's bundled charplan export).
//   3. Else the naive Damage/Heal/Damage+Heal role, corrected to "Other"
//      only when ABILITY_DATABASE positively rules it out, same
//      permissive-by-default rule as the parser-level fix — never
//      corrected on a name we have no data for at all.
//   4. CL_ABILITY_DATABASE (champion-level abilities) is consulted anywhere
//      ABILITY_DATABASE would otherwise come up empty — it has no `classes`
//      list (not class-specific at all, see that file's header), so it's
//      labelled "Champion Ability" in its place rather than a class name.
//      Only reached when ABILITY_DATABASE has no entry at all for the name:
//      a handful of CL names happen to collide with an unrelated class
//      spell/style of the same name (e.g. "Onslaught" is also Armsman/
//      Paladin's own style) — those still display with the class-side
//      label here, since there's no way to tell which one a given cast
//      actually was. isAbilityGhost above is the one place this collision
//      is handled unconditionally regardless of which side "wins" the
//      label, since silently dropping the row is the only mistake that
//      can't be shrugged off as a cosmetic label pick.
function roleOrType(name, naiveRole, skillMap) {
  const info = ABILITY_DATABASE[name];
  const clInfo = CL_ABILITY_DATABASE[name];
  if (info && info.type) {
    const bits = [info.type, info.classes && info.classes.length ? info.classes.join('/') : null].filter(Boolean);
    return bits.join(' · ');
  }
  if (!info && clInfo && clInfo.type) {
    return [clInfo.type, 'Champion Ability'].join(' · ');
  }
  const live = describeSkill(skillMap, name);
  if (live) return live;
  if (info) {
    const wantsDamage = naiveRole === 'Damage' || naiveRole === 'Damage + Heal';
    const wantsHeal = naiveRole === 'Heal' || naiveRole === 'Damage + Heal';
    if (wantsDamage && info.isDamage === false) return 'Other';
    if (wantsHeal && info.isHeal === false) return 'Other';
    // No specific Type (e.g. its Type string genuinely differs between the
    // classes that train it — see build-ability-database.py's ambiguous-
    // types handling) but we do know who trains it at all, which is still
    // worth showing alongside the naive role rather than silently dropping.
    if (info.classes && info.classes.length) return [naiveRole, info.classes.join('/')].join(' · ');
  }
  if (!info && clInfo) {
    const wantsDamage = naiveRole === 'Damage' || naiveRole === 'Damage + Heal';
    const wantsHeal = naiveRole === 'Heal' || naiveRole === 'Damage + Heal';
    if (wantsDamage && clInfo.isDamage === false) return 'Other';
    if (wantsHeal && clInfo.isHeal === false) return 'Other';
    return [naiveRole, 'Champion Ability'].join(' · ');
  }
  return naiveRole;
}

// Combines two "source stat" objects (the shape bump()/finalizeSourceMap()
// in aggregate.js produce) for the SAME ability name into one. Needed for a
// name that shows up on both sides below — most commonly NOT a spell that
// genuinely both damages and heals, but a heal/HoT whose name also picked
// up a ccLanded/resist count in aggregate.js's dmgOutBySourceFinal (that
// merge backstops a pure-CC ability having no damage entry at all — see its
// own comment — and runs unconditionally, with no way to know in advance
// whether a name is about to turn out to also be a real heal elsewhere).
// Reported directly: real heal totals for "Greater Reviction"/"Gift of the
// Host"/etc (tens of thousands of healing) were vanishing from this table
// entirely, landing as if they were zero-value entries, because the OLD
// code here only kept whichever side's object reference happened to exist
// first (`{ ...byName[name], role: 'Damage + Heal' }`, discarding `s` — the
// side that actually carried the real heal hits/dmg — completely) instead
// of combining the two. Sums every count-like field (correct whichever side
// is the zero-padded placeholder, since 0 + real is just real) and
// recomputes the derived rates from those combined totals, the same way
// aggregate.js itself derives them.
export function mergeSpellStats(a, b) {
  const hits = (a.hits || 0) + (b.hits || 0);
  const crits = (a.crits || 0) + (b.crits || 0);
  const dmg = (a.dmg || 0) + (b.dmg || 0);
  const critDmg = (a.critDmg || 0) + (b.critDmg || 0);
  const misses = (a.misses || 0) + (b.misses || 0);
  const ccLanded = (a.ccLanded || 0) + (b.ccLanded || 0);
  const resists = (a.resists || 0) + (b.resists || 0);
  const mins = [a.min, b.min].filter(v => v != null);
  const totalHits = hits + crits;
  const attempts = totalHits + ccLanded + resists;
  return {
    hits, crits, dmg, critDmg, misses, ccLanded, resists, totalHits,
    min: mins.length ? Math.min(...mins) : null,
    max: Math.max(a.max || 0, b.max || 0),
    avg: totalHits ? Math.round(dmg / totalHits) : 0,
    critRate: totalHits ? +(100 * crits / totalHits).toFixed(1) : 0,
    resistRate: attempts ? +(100 * resists / attempts).toFixed(1) : 0,
  };
}

// Joins two role labels for a name that turns out to play more than one
// part (e.g. a spell that both damages and heals, or — see powerOut below —
// damages/heals AND transfers power). Idempotent: combining the same role
// into itself twice (a name seen via more than one bySpell/bySource map
// that both happen to already say "Heal", say) doesn't duplicate it.
function combineRole(existing, added) {
  if (!existing) return added;
  const parts = existing.split(' + ');
  return parts.includes(added) ? existing : [...parts, added].join(' + ');
}

// Shared by both Spells & Styles tables. A null value (a style or plain
// weapon swing -- nothing is ever "cast") shows as "—".
const castFmt = v => (v == null ? '—' : v);
const CAST_COLUMNS = [
  { key: 'attempted', label: 'Attempted', num: true, fmt: castFmt, hideIfEmpty: true, title: 'Started casting it ("You begin casting"), plus instant casts' },
  { key: 'casted', label: 'Casted', num: true, fmt: castFmt, hideIfEmpty: true, title: 'The cast went off ("You cast")' },
  { key: 'interrupted', label: 'Interrupted', num: true, fmt: castFmt, hideIfEmpty: true, title: 'Cut off by moving or being hit' },
  { key: 'failed', label: 'Failed', num: true, fmt: castFmt, hideIfEmpty: true, title: 'Went off, but the target already had the effect, was immune, or was out of range' },
];

// "Abilities & styles over time": one row per ability/style, one dot per
// time it landed (aggregate.js abilityTimeline). Rows ordered by how often
// each was used; capped so a huge kit doesn't make the chart a wall.
const ABILITY_TIMELINE_MAX_ROWS = 30;
const EFFECT_WORDS = { immobilize: 'rooted', rooted: 'rooted', stunned: 'stunned', mesmerized: 'mezzed', mesmerize: 'mezzed', snare: 'snared', debuff: 'weakened' };
function renderAbilityTimeline(container, stats, inferredClass) {
  const all = (stats.abilityTimeline || []).filter(d => !isAbilityGhost(d.name, inferredClass));
  if (!all.length) return;
  const counts = new Map();
  for (const d of all) counts.set(d.name, (counts.get(d.name) || 0) + 1);
  const names = [...counts.keys()].sort((a, b) => counts.get(b) - counts.get(a));
  const shown = names.slice(0, ABILITY_TIMELINE_MAX_ROWS);
  const rows = shown.map((name, i) => ({ name, color: seriesColor(i) }));
  const shownSet = new Set(shown);

  const s = section(container);
  h3(s, 'Abilities & styles over time');
  const p = document.createElement('p');
  p.className = 'sub';
  p.textContent = 'One dot each time an ability or style landed — a hit, a heal, a confirmed CC/debuff, or (for spells that land silently) a cast that wasn\'t resisted and didn\'t fail, shown faded. Ringed dots are crits. Hover a dot for the target, when the log names one.'
    + (names.length > shown.length ? ` Showing your ${shown.length} most-used of ${names.length}.` : '');
  s.appendChild(p);
  const c = card(s);
  dotTimelineChart(c, {
    id: 'spells-ability-timeline',
    markers: tagMarkers(stats),
    rows,
    dots: all.filter(d => shownSet.has(d.name)),
    domain: [stats.meta.startClock, stats.meta.endClock],
    idleGaps: stats.meta.idleGaps,
    dotTooltip: (list) => {
      const first = list[0];
      const head = `<div class="tt-title">${escHtml(first.name)}</div>`;
      const lines = list.slice(0, 8).map(d => {
        let what;
        if (d.kind === 'cast') what = 'landed';
        else if (d.kind === 'effect') what = (d.target ? `on ${escHtml(d.target)} ` : '') + `(${EFFECT_WORDS[d.effect] || 'landed'})`;
        else {
          const amt = d.amount != null ? `${fmtExact(d.amount)}${d.crit === true ? ' (crit)' : d.crit ? ` +${fmtExact(d.crit)} crit` : ''}` : '';
          const verb = d.kind === 'heal' ? 'healed' : 'hit';
          what = `${verb}${d.target ? ` ${escHtml(d.target)}` : ''}${amt ? ` for ${amt}` : ''}${d.weapon ? ` <span style="opacity:.7">(${escHtml(d.weapon)})</span>` : ''}`;
        }
        return `<div class="tt-row"><span>${fmtClock(d.clock, true)}</span><span>${what}</span></div>`;
      }).join('');
      const more = list.length > 8 ? `<div class="tt-row"><span></span><span>+${list.length - 8} more</span></div>` : '';
      return head + lines + more;
    },
  });
}

// Marker lines for your own "@tag <text>" chat lines (aggregate.js
// meta.userTags) -- added to every time-series chart.
function tagMarkers(stats) {
  return (stats.meta.userTags || []).map(t => ({ t: t.clock, color: 'var(--user-tag)', label: t.text, text: t.text }));
}

export function renderSpells(container, stats, ctx) {
  clear(container);
  const skillMap = ctx && ctx.skillMap || {};
  const inferredClass = stats.meta.inferredClass;

  // Top-of-page summary tiles — moved here from the Damage tab (now just
  // "Damage taken"/renderDamage above) along with the per-ability table
  // below: this is the one place that answers "what did I actually do",
  // so the headline numbers for it belong here too.
  const g = grid(section(container), 3);
  statTile(g, { label: 'Total damage done', value: fmtNum(stats.damageOut.total) });
  statTile(g, { label: 'DPS (this view)', value: fmtNum(stats.damageOut.dps) });
  statTile(g, { label: 'Melee crit rate', value: stats.damageOut.melee.critRate + '%', sub: `${stats.damageOut.melee.crits} / ${stats.damageOut.melee.hits + stats.damageOut.melee.crits} swings` });

  renderAbilityTimeline(container, stats, inferredClass);

  const byName = {};
  for (const [key, s] of Object.entries(stats.damageOut.bySource)) {
    // Used to skip every "Melee"/"Melee: <weapon>" key here — a plain
    // unstyled weapon swing isn't a *named* spell or style, so it didn't
    // seem to belong on a "spells & styles" page. But that just meant a
    // raw weapon-swing breakdown had nowhere to live at all once the
    // Damage tab's identical table (which DID include it — see its own
    // comment) got folded into this one instead of duplicating it. Rather
    // than drop that data, this page absorbs it too: "spell / style /
    // weapon" was the Damage tab's own description of what that table
    // covered, and that's exactly what this table covers now.
    //
    // Checked against the bare name (s.displayName), not the raw composite
    // "Style (Weapon)" key — see filterGhostSource's comment above for why.
    // A plain "Melee"/"Melee: <weapon>" key has no displayName (only a
    // named style does — see aggregate.js's dmgOutBaseName), so it falls
    // through to the key itself, which isAbilityGhost correctly never
    // recognizes as any class's ability and so never filters out.
    if (isAbilityGhost(s.displayName || key, inferredClass)) continue;
    // Keep per-weapon rows distinct (composite key — see aggregate.js) but
    // show the bare style/spell name here, same idea as sourceMapToRows.
    byName[key] = { name: s.displayName || key, role: 'Damage', ...s };
  }
  // Healing spells (e.g. "Greater Restoration") are attributed by name via
  // the "You cast a ... spell!" line that precedes each heal result line —
  // merged in here alongside damage abilities so one table shows everything
  // a character cast, whichever role it played. See mergeSpellStats above
  // for why this has to be a real merge, not just a relabel.
  for (const [name, s] of Object.entries(stats.healOut.bySpell || {})) {
    if (name === 'Heal (spell not identified)') continue;
    if (isAbilityGhost(name, inferredClass)) continue;
    if (byName[name]) {
      byName[name] = { ...byName[name], ...mergeSpellStats(byName[name], s), name, role: combineRole(byName[name].role, 'Heal') };
    } else {
      byName[name] = { name, role: 'Heal', ...s };
    }
  }
  // Power transfer (e.g. Occultist's "Gift of Arawn" — ABILITY_DATABASE
  // type "Power Transfer") moves a real, meaningful amount just like a
  // heal does, so it's merged in the same way rather than treated as a
  // no-output ability — see aggregate.js's powerOut for where this comes
  // from, and parser.js's power_transfer rule for the real log line.
  for (const [name, s] of Object.entries(stats.powerOut?.bySpell || {})) {
    if (name === 'Power transfer (spell not identified)') continue;
    if (isAbilityGhost(name, inferredClass)) continue;
    if (byName[name]) {
      byName[name] = { ...byName[name], ...mergeSpellStats(byName[name], s), name, role: combineRole(byName[name].role, 'Power Transfer') };
    } else {
      byName[name] = { name, role: 'Power Transfer', ...s };
    }
  }
  const allRows = Object.values(byName);

  // Split in two by whether the ability actually dealt any real damage or
  // healing at all. Reported directly: a pure CC/cure spell (e.g. "Pulsing
  // Cure Disease II") has a real entry in dmgOutBySource — aggregate.js
  // folds its Landed(CC)/Resists count in there precisely so that count
  // doesn't vanish (see its own comment) — but with dmg permanently 0,
  // which was landing it in THIS table as an all-zeroes row sitting right
  // next to genuine damage/heal spells, diluting the one table that's
  // supposed to answer "how hard does this kit hit". Anything with dmg>0
  // stays here; everything else (that kind of zero-damage entry, plus the
  // plain "cast but produced no trackable result at all" names that used
  // to be a flat list of pills below) moves into the second table instead.
  const rows = allRows.filter(r => r.dmg > 0).sort((a, b) => b.dmg - a.dmg);
  const zeroRows = allRows.filter(r => !(r.dmg > 0));

  // byName can now hold several rows for one style name (one per weapon —
  // see aggregate.js), each keyed by its own composite string, so "already
  // covered" has to be checked against the bare names actually shown, not
  // the raw map keys. Checked against ALL of byName (not just the nonzero
  // `rows`), so a zero-damage entry already caught above isn't also
  // double-listed here as if it had never been seen at all.
  const coveredNames = new Set(allRows.map(r => r.name));
  const castOnlyNames = stats.spellsCast.filter(n => !coveredNames.has(n) && !isAbilityGhost(n, inferredClass));

  const castCountByName = stats.castCountByName || {};
  const castFailedByName = stats.castFailedByName || {};
  // Attempted ("You begin casting X", plus instant casts), Casted ("You cast
  // X"), Interrupted and Failed for one name -- shared by both tables below.
  // Styles/melee have no cast lines, so they get null ("—") rather than 0.
  const castCounts = (name) => {
    const casted = castCountByName[name] || 0;
    const attempted = (stats.castAttemptedByName || {})[name] || 0;
    if (!casted && !attempted) return { attempted: null, casted: null, interrupted: null, failed: null };
    return {
      attempted: Math.max(attempted, casted),
      casted,
      interrupted: (stats.castInterruptedByName || {})[name] || 0,
      failed: castFailedByName[name] || 0,
    };
  };
  const noDamageRows = [
    // `landed` (aggregate.js) also counts casts that went off with no resist
    // -- many debuffs never log a landing line at all; ccLanded is only the
    // landings the game explicitly confirmed.
    ...zeroRows.map(r => ({
      name: r.name, role: r.role,
      ccLanded: r.landed ?? r.ccLanded ?? 0, resists: r.resists || 0, resistRate: r.resistRate || 0,
      ...castCounts(r.name),
    })),
    ...castOnlyNames.map(n => ({
      name: n, role: 'Other',
      // Never resisted: every cast that didn't fizzle went off.
      ccLanded: Math.max(0, (castCountByName[n] || 0) - (castFailedByName[n] || 0)), resists: 0, resistRate: 0,
      ...castCounts(n),
    })),
  ].sort((a, b) => ((b.casted || 0) - (a.casted || 0)) || (b.ccLanded - a.ccLanded) || (b.resists - a.resists));

  const s = section(container);
  h3(s, 'Spells, styles & abilities used');
  const c = card(s);
  dataTable(c, {
    columns: [
      { key: 'name', label: 'Name', html: nameWithIcon },
      { key: 'weapon', label: 'Weapon', fmt: v => v || '—', hideIfEmpty: true },
      { key: 'info', label: 'Type' },
      ...CAST_COLUMNS,
      { key: 'totalHits', label: 'Hits', num: true },
      { key: 'crits', label: 'Crits', num: true },
      { key: 'critRate', label: 'Crit %', num: true, fmt: v => v + '%' },
      { key: 'ccLanded', label: 'Landed', num: true, fmt: v => v || 0 },
      { key: 'resists', label: 'Resists', num: true, fmt: v => v || 0 },
      { key: 'resistRate', label: 'Resist %', num: true, fmt: v => (v || 0) + '%' },
      { key: 'dmg', label: 'Total', num: true, fmt: fmtExact, title: 'Total damage or healing' },
      { key: 'avg', label: 'Avg', num: true },
    ],
    rows: rows.map(r => ({
      ...r, ...castCounts(r.name),
      ccLanded: r.landed ?? r.ccLanded ?? 0,
      info: roleOrType(r.name, r.role, skillMap),
    })),
  });

  if (noDamageRows.length) {
    const s2 = section(container);
    h3(s2, 'No damage/heal logged (buffs, debuffs, cures, CC, pet summons…)');
    const p2 = document.createElement('p');
    p2.className = 'sub';
    p2.textContent = 'Everything else cast in this view — the rest of the kit a damage/heal number alone would hide. Shows how many times each one lands, gets resisted, or (for a pure buff with no trackable result at all) was simply cast. Attempted = started casting (plus instant casts); Casted = the cast went off; Interrupted = cut off by moving or being hit; Failed = went off but the target already had the effect, was immune, or was out of range (not counted toward Resist %). Many debuffs print nothing when they land, so a cast that wasn\'t resisted and didn\'t fail counts as landed.';
    s2.appendChild(p2);
    const c2 = card(s2);
    dataTable(c2, {
      columns: [
        { key: 'name', label: 'Name', html: nameWithIcon },
        { key: 'info', label: 'Type' },
        ...CAST_COLUMNS,
        { key: 'ccLanded', label: 'Landed', num: true, fmt: v => v || 0 },
        { key: 'resists', label: 'Resists', num: true, fmt: v => v || 0 },
        { key: 'resistRate', label: 'Resist %', num: true, fmt: v => (v || 0) + '%' },
      ],
      rows: noDamageRows.map(r => ({ ...r, info: roleOrType(r.name, r.role, skillMap) })),
    });
  }
}

// ===========================================================================
export function renderDebug(container, stats, ctx) {
  clear(container);
  const s = section(container);
  const c = card(s);
  c.innerHTML = `
    <p>This view is here to build trust in the numbers above: it shows what the parser recognized and what it skipped.</p>
    <div class="grid cols-3" style="margin:14px 0">
      ${tile('Events parsed (this view)', fmtExact(ctx.eventCount || 0))}
      ${tile('Unrecognized lines (whole file)', fmtExact((ctx.unmatched || []).length) + (ctx.unmatchedTruncated ? '+' : ''))}
      ${tile('Pets detected', stats.meta.petNames.length)}
    </div>
    <details class="debug" ${(ctx.unmatched || []).length ? '' : 'hidden'}>
      <summary>Show a sample of unrecognized lines (${(ctx.unmatched || []).length})</summary>
      <pre>${(ctx.unmatched || []).slice(0, 300).map(escHtml).join('\n')}</pre>
      <p class="sub">If you see lines in here that look like they should count toward damage, healing, or RP, that's useful to report — the parser is pattern-based and Eden/live wording can vary.</p>
    </details>
  `;
}
// Escapes for both HTML text content AND a double-quoted HTML attribute —
// renderDamage's heraldLink() above uses this inside a title="..." attribute,
// where a bare `"` in the name (nothing stops a shared/crafted log or
// snapshot file — see README's "Share a session" — from having one) would
// otherwise close the attribute early and let the rest of the name's text
// be parsed as more attributes on that element. escHtml used to only cover
// &/</>, which is enough for the plain text content it was originally
// written for (renderDebug's unmatched-lines dump below) but not for an
// attribute value, so this now escapes quotes too — a strict superset, so
// every other existing use of this function is unaffected.
export function escHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export const renderers = {
  overview: renderOverview,
  damage: renderDamage,
  healing: renderHealing,
  pets: renderPets,
  defense: renderDefense,
  realm: renderRealm,
  spells: renderSpells,
  debug: renderDebug,
};
