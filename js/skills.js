// skills.js — optional, best-effort enrichment of spell/style/RA names with
// damage type + class/line, sourced from Eden's public charplan.json.
//
// This is pure decoration: every stat the app shows is already computed
// from the chat.log alone. If this fetch fails (offline, CORS, the endpoint
// changed) the app must look and work identically — just without the small
// "Body magic — Animist" subtitle under a spell name. Never await this
// before rendering primary stats.

const SOURCE_URL = 'https://eden-daoc.net/chrplan/charplan.json';
const CACHE_KEY = 'chatgator:skilldb:v1';
const CACHE_TTL_MS = 7 * 24 * 3600 * 1000; // 1 week

let indexPromise = null;

function attr(attributes, key) {
  if (!Array.isArray(attributes)) return null;
  const hit = attributes.find(a => Array.isArray(a) && a[0] === key);
  return hit ? hit[1] : null;
}

function flatten(classesArr) {
  const map = {};
  if (!Array.isArray(classesArr)) return map;
  for (const cls of classesArr) {
    const className = cls && cls.name;
    for (const ra of (cls && cls.realmAbilities) || []) {
      if (ra && ra.name && !map[ra.name]) {
        map[ra.name] = { kind: 'Realm Ability', class: className, icon: ra.icon || null };
      }
    }
    for (const spec of (cls && cls.specs) || []) {
      for (const group of (spec && spec.skillGroups) || []) {
        for (const skill of (group && group.skills) || []) {
          if (skill && skill.name && !map[skill.name]) {
            map[skill.name] = {
              kind: 'Style',
              class: className,
              line: group.name,
              icon: skill.icon || null,
              damageType: attr(skill.attributes, 'Damage Type'),
            };
          }
        }
      }
      for (const line of (spec && spec.spellLines) || []) {
        for (const group of (line && line.spellGroups) || []) {
          for (const skill of (group && group.skills) || []) {
            if (skill && skill.name && !map[skill.name]) {
              map[skill.name] = {
                kind: 'Spell',
                class: className,
                line: line.name,
                icon: skill.icon || null,
                damageType: attr(skill.attributes, 'Damage Type'),
                target: attr(skill.attributes, 'Target'),
              };
            }
          }
        }
      }
    }
  }
  return map;
}

export async function loadSkillIndex() {
  if (indexPromise) return indexPromise;
  indexPromise = (async () => {
    try {
      const cachedRaw = localStorage.getItem(CACHE_KEY);
      if (cachedRaw) {
        const cached = JSON.parse(cachedRaw);
        if (cached.ts && Date.now() - cached.ts < CACHE_TTL_MS && cached.map) {
          return cached.map;
        }
      }
    } catch { /* localStorage unavailable or corrupt — ignore */ }

    try {
      const res = await fetch(SOURCE_URL, { mode: 'cors' });
      if (!res.ok) throw new Error('bad status ' + res.status);
      const json = await res.json();
      const map = flatten(json);
      try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), map })); } catch { /* quota/private mode */ }
      return map;
    } catch (err) {
      console.warn('[chatgator] spell/RA enrichment unavailable (this does not affect your stats):', err && err.message);
      return {};
    }
  })();
  return indexPromise;
}

export function describeSkill(map, name) {
  const info = map && map[name];
  if (!info) return null;
  const bits = [info.damageType, info.line || info.kind, info.class].filter(Boolean);
  return bits.join(' · ');
}
