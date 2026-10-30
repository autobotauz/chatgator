// bask-config.js — where Bask (group sessions) keeps its shared state.
//
// This is a Supabase project's URL and its PUBLIC key (the "anon" /
// "publishable" key) — it's meant to ship in client code. What anyone holding
// it can and can't do is decided entirely by the row-level security rules in
// supabase/bask.sql. Never put the service_role / secret key here.
export const SUPABASE_URL = 'https://sslgpzbipiuvcdpnerjv.supabase.co';
export const SUPABASE_KEY = 'sb_publishable_4lsrfWv0HKecgRGCnlo0ZQ_sLLprBOs';
