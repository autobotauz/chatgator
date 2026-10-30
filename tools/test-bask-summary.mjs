import { readFileSync } from 'fs';
const { GroupSummarizer } = await import(new URL('../js/bask-summary.js', import.meta.url));
for (const f of ['dexii','bainshee']) {
  const d = JSON.parse(readFileSync(new URL(`../sample-logs/${f}.json`, import.meta.url)));
  const s = new GroupSummarizer({ player: d.player, toWall: c => c, since: 0, cooldowns: {'Frigid Torment':{cooldownSeconds:30}} });
  s.primePets(d.events); s.ingest(d.events);
  const snap = s.snapshot();
  const j = JSON.stringify(snap);
  console.log(f, 'bytes', j.length, 'dmgOut', snap.dmgOut.total, 'exportSummary', JSON.stringify(d.summary).slice(0,300));
  console.log(' dmgIn', snap.dmgIn.total, 'healOut', snap.healOut.total, 'healIn', snap.healIn.total, 'res', snap.resists.total, 'int', snap.interrupts.total, 'db', snap.deathblows.length, 'deaths', snap.deaths.length, 'pets', Object.keys(snap.pets), 'cd', Object.keys(snap.cooldowns), 'class', snap.cls);
  const ticks = s.takeDirtyTicks(); console.log(' ticks', ticks.length, JSON.stringify(ticks[ticks.length-1]));
}
