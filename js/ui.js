// ui.js — renders each tab panel from a `stats` object (aggregate.js output)
// plus light context (skill enrichment map, unmatched-line sample, etc).
// Every render function clears its container first, so panels can be
// re-rendered freely when the user switches encounters.

import { statTile, barChart, legend, timelineChart, fmtNum, fmtExact, seriesColor } from './charts.js';
import { describeSkill } from './skills.js';

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

function dataTable(parent, { columns, rows }) {
  const table = document.createElement('table');
  table.className = 'data-table';
  const thead = document.createElement('thead');
  thead.innerHTML = '<tr>' + columns.map(c => `<th class="${c.num ? 'num' : ''}">${c.label}</th>`).join('') + '</tr>';
  table.appendChild(thead);
  const tbody = document.createElement('tbody');
  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="${columns.length}" class="empty-state">No data</td></tr>`;
  } else {
    for (const row of rows) {
      const tr = document.createElement('tr');
      tr.innerHTML = columns.map(c => `<td class="${c.num ? 'num' : ''}">${c.fmt ? c.fmt(row[c.key]) : row[c.key]}</td>`).join('');
      tbody.appendChild(tr);
    }
  }
  table.appendChild(tbody);
  parent.appendChild(table);
  return table;
}

function sourceMapToItems(bySource) {
  return Object.entries(bySource).map(([label, s]) => ({ label, value: s.dmg, ...s }));
}

function sourceMapToRows(bySource) {
  return Object.entries(bySource)
    .map(([name, s]) => ({ name, ...s }))
    .sort((a, b) => b.dmg - a.dmg);
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
  ]);
  timelineChart(tlCard, {
    series: [
      { name: 'Damage done', color: 'var(--series-1)', points: stats.damageOut.timeline.map(p => ({ t: p.t, v: p.v })) },
      { name: 'Healing done', color: 'var(--series-3)', points: stats.healOut.timeline.map(p => ({ t: p.t, v: p.v })) },
      { name: 'Damage taken', color: 'var(--series-8)', points: stats.damageIn.timeline.map(p => ({ t: p.t, v: p.v })) },
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
  const items = sourceMapToItems(stats.damageOut.bySource);
  barChart(outCard, { items, colorFn: (_, i) => seriesColor(i) });
  const rows = sourceMapToRows(stats.damageOut.bySource);
  dataTable(outCard, {
    columns: [
      { key: 'name', label: 'Source' },
      { key: 'totalHits', label: 'Hits', num: true },
      { key: 'crits', label: 'Crits', num: true },
      { key: 'critRate', label: 'Crit %', num: true, fmt: v => v + '%' },
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
  const spellItems = sourceMapToItems(stats.healOut.bySpell);
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
    rows: sourceMapToRows(stats.healOut.bySpell),
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
  statTile(g, { label: 'Bonus RP (guild buff)', value: fmtExact(rp.bonusTotal) });
  statTile(g, { label: 'Deathblows', value: fmtExact(stats.kills.deathblows) });

  const tlSec = section(container);
  h3(tlSec, 'Realm points over time');
  const tlCard = card(tlSec);
  timelineChart(tlCard, { series: [{ name: 'RP', color: 'var(--series-4)', points: rp.timeline.map(p => ({ t: p.t, v: p.v })) }] });

  const bySec = section(container);
  h3(bySec, 'Realm points by source');
  const byCard = card(bySec);
  const items = Object.entries(rp.byReason).map(([label, value]) => ({ label, value }));
  barChart(byCard, { items, colorFn: (_, i) => seriesColor(i) });
}

// ===========================================================================
export function renderSpells(container, stats, ctx) {
  clear(container);
  const skillMap = ctx && ctx.skillMap || {};
  const byName = {};
  for (const [name, s] of Object.entries(stats.damageOut.bySource)) {
    if (name.startsWith('Melee')) continue;
    byName[name] = { name, role: 'Damage', ...s };
  }
  // Healing spells (e.g. "Greater Restoration") are attributed by name via
  // the "You cast a ... spell!" line that precedes each heal result line —
  // merged in here alongside damage abilities so one table shows everything
  // a character cast, whichever role it played.
  for (const [name, s] of Object.entries(stats.healOut.bySpell || {})) {
    if (name === 'Heal (spell not identified)') continue;
    if (byName[name]) {
      byName[name] = { ...byName[name], role: 'Damage + Heal' };
    } else {
      byName[name] = { name, role: 'Heal', ...s };
    }
  }
  const rows = Object.values(byName).sort((a, b) => b.dmg - a.dmg);

  const castOnly = stats.spellsCast.filter(n => !byName[n]);

  const s = section(container);
  h3(s, 'Spells, styles &amp; abilities used');
  const c = card(s);
  dataTable(c, {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'role', label: 'Role' },
      { key: 'info', label: 'Type' },
      { key: 'totalHits', label: 'Hits', num: true },
      { key: 'crits', label: 'Crits', num: true },
      { key: 'critRate', label: 'Crit %', num: true, fmt: v => v + '%' },
      { key: 'dmg', label: 'Total dmg/heal', num: true, fmt: fmtExact },
      { key: 'avg', label: 'Avg', num: true },
    ],
    rows: rows.map(r => ({ ...r, info: describeSkill(skillMap, r.name) || '—' })),
  });

  if (castOnly.length) {
    const s2 = section(container);
    h3(s2, 'Also cast (no direct damage/heal logged — buffs, debuffs, CC, pets…)');
    const c2 = card(s2);
    c2.innerHTML = castOnly.map(n => `<span class="pill" style="margin:3px">${n}</span>`).join('');
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
