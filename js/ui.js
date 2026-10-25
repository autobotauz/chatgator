// ui.js — renders each tab panel from a `stats` object (aggregate.js output)
// plus light context (skill enrichment map, unmatched-line sample, etc).
// Every render function clears its container first, so panels can be
// re-rendered freely when the user switches encounters.

import { statTile, barChart, legend, timelineChart, fmtNum, fmtExact, fmtClock, seriesColor } from './charts.js';
import { describeSkill } from './skills.js';
import { ABILITY_DATABASE } from './ability-database.js';

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

function dataTable(parent, { columns, rows, filterable = true }) {
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
    th.title = 'Click to sort';
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
      tr.innerHTML = columns.map(c => `<td class="${c.num ? 'num' : ''}">${c.fmt ? c.fmt(row[c.key]) : row[c.key]}</td>`).join('');
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
  ]);
  timelineChart(tlCard, {
    series: [
      { name: 'Damage done', color: 'var(--series-1)', points: stats.damageOut.timeline.map(p => ({ t: p.t, v: p.v })) },
      { name: 'Healing done', color: 'var(--series-3)', points: stats.healOut.timeline.map(p => ({ t: p.t, v: p.v })) },
      { name: 'Damage taken', color: 'var(--series-8)', points: stats.damageIn.timeline.map(p => ({ t: p.t, v: p.v })) },
      { name: 'Realm points', color: 'var(--series-4)', points: stats.realmPoints.timeline.map(p => ({ t: p.t, v: p.v })) },
    ],
    // Deathblows are discrete "it happened" moments, not a quantity worth
    // its own line — plotted as markers so they can be read against the
    // damage/heal/RP lines rather than against each other. No victim name
    // here by design (just the dot + time); the Realm Points tab's
    // Deathblows table has the per-kill detail.
    markers: stats.kills.deathblowLog.map(d => ({ t: d.clock, color: 'var(--series-7)', label: 'Deathblow' })),
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
export function renderDamage(container, stats, ctx) {
  clear(container);
  const g = grid(section(container), 4);
  statTile(g, { label: 'Total damage done', value: fmtNum(stats.damageOut.total) });
  statTile(g, { label: 'DPS (this view)', value: fmtNum(stats.damageOut.dps) });
  statTile(g, { label: 'Melee crit rate', value: stats.damageOut.melee.critRate + '%', sub: `${stats.damageOut.melee.crits} / ${stats.damageOut.melee.hits + stats.damageOut.melee.crits} swings` });
  statTile(g, { label: 'Damage taken', value: fmtNum(stats.damageIn.total), sub: `${fmtNum(stats.damageIn.dtps)}/sec` });

  const outSec = section(container);
  h3(outSec, 'Damage done by spell / style / weapon');
  const outCard = card(outSec);
  const damageOutBySource = filterGhostSource(stats.damageOut.bySource, stats.meta.inferredClass);
  const items = sourceMapToItems(damageOutBySource);
  barChart(outCard, { items, colorFn: (_, i) => seriesColor(i) });
  const rows = sourceMapToRows(damageOutBySource);
  dataTable(outCard, {
    columns: [
      { key: 'name', label: 'Source' },
      { key: 'weapon', label: 'Weapon', fmt: v => v || '—' },
      { key: 'totalHits', label: 'Hits', num: true },
      { key: 'crits', label: 'Crits', num: true },
      { key: 'critRate', label: 'Crit %', num: true, fmt: v => v + '%' },
      { key: 'ccLanded', label: 'Landed (CC)', num: true, fmt: v => v || 0 },
      { key: 'resists', label: 'Resists', num: true, fmt: v => v || 0 },
      { key: 'resistRate', label: 'Resist %', num: true, fmt: v => (v || 0) + '%' },
      { key: 'dmg', label: 'Total dmg', num: true, fmt: fmtExact },
      { key: 'avg', label: 'Avg', num: true },
      { key: 'min', label: 'Min', num: true },
      { key: 'max', label: 'Max', num: true },
    ],
    rows,
  });

  const inSec = section(container);
  h3(inSec, 'Damage taken by attacker');
  const inCard = card(inSec);
  const inItems = sourceMapToItems(stats.damageIn.bySource);
  barChart(inCard, { items: inItems, maxItems: 12, colorFn: () => 'var(--series-8)' });
  dataTable(inCard, {
    columns: [
      { key: 'name', label: 'Attacker' },
      { key: 'totalHits', label: 'Hits', num: true },
      { key: 'crits', label: 'Crits', num: true },
      { key: 'dmg', label: 'Total dmg', num: true, fmt: fmtExact },
      { key: 'avg', label: 'Avg', num: true },
      { key: 'max', label: 'Max', num: true },
    ],
    rows: sourceMapToRows(stats.damageIn.bySource),
  });
}

// ===========================================================================
export function renderHealing(container, stats, ctx) {
  clear(container);
  const g = grid(section(container), 4);
  statTile(g, { label: 'Total healing done', value: fmtNum(stats.healOut.total) });
  statTile(g, { label: 'HPS (this view)', value: fmtNum(stats.healOut.hps) });
  statTile(g, { label: 'Heal crit rate', value: stats.healOut.critRate + '%', sub: `${stats.healOut.crits} crit heals` });
  statTile(g, { label: 'Healing received', value: fmtNum(stats.healIn.total) });

  const spellSec = section(container);
  h3(spellSec, 'Healing done by spell');
  const spellCard = card(spellSec);
  const healOutBySpell = filterGhostSource(stats.healOut.bySpell, stats.meta.inferredClass);
  const spellItems = sourceMapToItems(healOutBySpell);
  barChart(spellCard, { items: spellItems, colorFn: (_, i) => seriesColor(i + 2) });
  dataTable(spellCard, {
    columns: [
      { key: 'name', label: 'Spell' },
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
      { key: 'name', label: 'Target' },
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
      { key: 'name', label: 'Healer' },
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
          ${tile('Landed (CC/debuff)', fmtExact(p.ccLanded || 0))}
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
  statTile(g, { label: 'Attacks mitigated', value: `${d.blocks + d.youParries + d.youEvades} / ${d.totalIncomingAttackAttempts}` });

  const g2 = grid(section(container), 4);
  statTile(g2, { label: 'Your attacks blocked by enemy', value: fmtExact(d.enemyBlockedYou) });
  statTile(g2, { label: 'Your attacks parried by enemy', value: fmtExact(d.enemyParriedYou) });
  statTile(g2, { label: 'Your attacks evaded by enemy', value: fmtExact(d.enemyEvadedYou) });
  statTile(g2, { label: 'Spell/effect resists landed on enemies', value: fmtExact(d.resistCount) });

  const resSec = section(container);
  h3(resSec, 'Resists by spell / effect (enemy resisted you)');
  const resCard = card(resSec);
  const items = Object.entries(d.resistBySource).map(([label, value]) => ({ label, value }));
  barChart(resCard, { items, unit: ' resists', colorFn: () => 'var(--series-5)' });
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
    stacked: true,
    series: reasonEntries.map(([label]) => ({
      name: label,
      color: colorForReason.get(label),
      points: (rp.timelineByReason[label] || []).map(p => ({ t: p.t, v: p.v })),
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
        { key: 'victim', label: 'Killed' },
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
function isAbilityGhost(name, inferredClass) {
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
function roleOrType(name, naiveRole, skillMap) {
  const info = ABILITY_DATABASE[name];
  if (info && info.type) {
    const bits = [info.type, info.classes && info.classes.length ? info.classes.join('/') : null].filter(Boolean);
    return bits.join(' · ');
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

export function renderSpells(container, stats, ctx) {
  clear(container);
  const skillMap = ctx && ctx.skillMap || {};
  const inferredClass = stats.meta.inferredClass;
  const byName = {};
  for (const [key, s] of Object.entries(stats.damageOut.bySource)) {
    if (key.startsWith('Melee')) continue;
    // Checked against the bare name (s.displayName), not the raw composite
    // "Style (Weapon)" key — see filterGhostSource's comment above for why.
    if (isAbilityGhost(s.displayName || key, inferredClass)) continue;
    // Keep per-weapon rows distinct (same composite key as the Damage tab —
    // see aggregate.js) but show the bare style/spell name here, same idea
    // as sourceMapToRows.
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
      byName[name] = { ...byName[name], ...mergeSpellStats(byName[name], s), name, role: 'Damage + Heal' };
    } else {
      byName[name] = { name, role: 'Heal', ...s };
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
  const noDamageRows = [
    ...zeroRows.map(r => ({
      name: r.name, role: r.role,
      ccLanded: r.ccLanded || 0, resists: r.resists || 0, resistRate: r.resistRate || 0,
      castCount: castCountByName[r.name] || 0,
    })),
    ...castOnlyNames.map(n => ({
      name: n, role: 'Other',
      ccLanded: 0, resists: 0, resistRate: 0,
      castCount: castCountByName[n] || 0,
    })),
  ].sort((a, b) => (b.castCount - a.castCount) || (b.ccLanded - a.ccLanded) || (b.resists - a.resists));

  const s = section(container);
  h3(s, 'Spells, styles & abilities used');
  if (inferredClass) {
    const p = document.createElement('p');
    p.className = 'sub';
    p.textContent = `Detected class: ${inferredClass.name} (from the abilities cast in this view) — used above to hide rows that can only belong to some other class.`;
    s.appendChild(p);
  }
  const c = card(s);
  dataTable(c, {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'weapon', label: 'Weapon', fmt: v => v || '—' },
      { key: 'info', label: 'Type' },
      { key: 'totalHits', label: 'Hits', num: true },
      { key: 'crits', label: 'Crits', num: true },
      { key: 'critRate', label: 'Crit %', num: true, fmt: v => v + '%' },
      { key: 'ccLanded', label: 'Landed (CC)', num: true, fmt: v => v || 0 },
      { key: 'resists', label: 'Resists', num: true, fmt: v => v || 0 },
      { key: 'resistRate', label: 'Resist %', num: true, fmt: v => (v || 0) + '%' },
      { key: 'dmg', label: 'Total dmg/heal', num: true, fmt: fmtExact },
      { key: 'avg', label: 'Avg', num: true },
    ],
    rows: rows.map(r => ({ ...r, info: roleOrType(r.name, r.role, skillMap) })),
  });

  if (noDamageRows.length) {
    const s2 = section(container);
    h3(s2, 'No damage/heal logged (buffs, debuffs, cures, CC, pet summons…)');
    const p2 = document.createElement('p');
    p2.className = 'sub';
    p2.textContent = 'Everything else cast in this view — the rest of the kit a damage/heal number alone would hide. Shows how many times each one lands, gets resisted, or (for a pure buff with no trackable result at all) was simply cast.';
    s2.appendChild(p2);
    const c2 = card(s2);
    dataTable(c2, {
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'info', label: 'Type' },
        { key: 'castCount', label: 'Times cast', num: true, fmt: v => v || '—' },
        { key: 'ccLanded', label: 'Landed (CC)', num: true, fmt: v => v || 0 },
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
function escHtml(s) { return String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c])); }

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
