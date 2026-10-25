// sample-data.js — "Try a sample log" picker data.
//
// Previously this held several short, fabricated solo-vs-training-dummy
// logs (one per class) inlined as JS text so the picker worked even under
// file://. Replaced with real exported sessions (a "Download snapshot"
// export, not raw chat.log text) at the user's explicit request: synthetic
// demo data out, real log data in, growing this list over time as more
// real sessions become available.
//
// Because a snapshot is pre-parsed JSON (events + rolled-up stats) rather
// than raw log text, each one is fetched on demand (app.js's btnSample
// handler) instead of inlined like the old text samples were — at 2-3MB
// apiece they'd bloat every page load otherwise, and the app's own
// <script type="module"> already requires being served over http(s) (ES
// modules are blocked under plain file:// in every major browser), so the
// file:// concern that originally justified inlining no longer buys
// anything here.
export const SAMPLE_LOGS = {
  bainshee: {
    label: 'Bainshee (real session — Whispra)',
    kind: 'snapshot',
    url: 'sample-logs/bainshee.json',
  },
  dexii: {
    label: 'Cleric (real session — Dexii)',
    kind: 'snapshot',
    url: 'sample-logs/dexii.json',
  },
};
