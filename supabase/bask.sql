-- Chat Gator "Bask" — shared group sessions (1-8 players per invite code).
--
-- Everything here is deliberately ephemeral: a session (and every member
-- row and time bucket hanging off it, via ON DELETE CASCADE) expires 48h
-- after its invite code was created. Expired rows are hidden by RLS the
-- moment they expire and physically deleted by the hourly pg_cron job at
-- the bottom. Nothing in these tables is sensitive: player names, the names
-- of who they hit/healed/were hit by, and numbers. No chat, no raw log lines.
--
-- The page talks to this with the project's public (anon/publishable) key
-- straight from the browser, so the rules below are the whole security model:
-- anyone can create a session; anyone holding a code can read it and write
-- member/tick rows for it while it's alive; nobody can change a session's
-- expiry or delete anything, except through the functions at the bottom:
-- the bask's leader can boot/ban/unban, and a player can leave.
--
-- Leadership: the earliest-joined player still in the bask who has written
-- in the last 5 minutes. It only moves when the current leader leaves, is
-- removed, or goes quiet; someone who leaves and rejoins goes to the back of
-- the line. A player proves who they are with a per-join secret their
-- browser keeps (only its SHA-256 is stored, in bask_members.key_hash).
--
-- Safe to re-run: every statement is idempotent.

-- ---------------------------------------------------------------- tables --
create table if not exists public.bask_sessions (
  code        text primary key check (code ~ '^[A-Z2-9]{6}$'),
  created_at  timestamptz not null default now(),
  expires_at  timestamptz not null default now() + interval '48 hours',
  leader      text            -- maintained by bask_fix_leader(); clients can't set it
);
alter table public.bask_sessions drop column if exists host_hash;  -- from an earlier version
alter table public.bask_sessions add column if not exists leader text;

create table if not exists public.bask_members (
  code        text not null references public.bask_sessions(code) on delete cascade,
  player      text not null check (char_length(player) between 1 and 40),
  joined_at   timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  totals      jsonb not null default '{}'::jsonb check (pg_column_size(totals) <= 65536),
  key_hash    text check (key_hash is null or key_hash ~ '^[0-9a-f]{64}$'),
  left_at     timestamptz,     -- set by bask_leave(); numbers stay, spot frees up
  primary key (code, player)
);
alter table public.bask_members add column if not exists key_hash text check (key_hash is null or key_hash ~ '^[0-9a-f]{64}$');
alter table public.bask_members add column if not exists left_at timestamptz;

create table if not exists public.bask_ticks (
  code        text not null,
  player      text not null,
  t           timestamptz not null,               -- start of a 15s bucket
  updated_at  timestamptz not null default now(),
  data        jsonb not null check (pg_column_size(data) <= 4096),
  primary key (code, player, t),
  foreign key (code, player) references public.bask_members(code, player) on delete cascade
);
create index if not exists bask_ticks_code_updated on public.bask_ticks (code, updated_at);

-- Names the leader banned. They can't rejoin that bask under the same name
-- (any capitalization). Only reachable through bask_kick(); no direct access.
-- (A plain boot isn't recorded anywhere: the player can simply rejoin.)
create table if not exists public.bask_banned (
  code        text not null references public.bask_sessions(code) on delete cascade,
  player      text not null,
  banned_at   timestamptz not null default now(),
  primary key (code, player)
);

-- ------------------------------------------------------------- triggers --
-- Server-side clock for updated_at, so viewers' "give me what changed since
-- X" polling never depends on a player's PC clock being right.
create or replace function public.bask_touch() returns trigger
language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists bask_members_touch on public.bask_members;
create trigger bask_members_touch before insert or update on public.bask_members
  for each row execute function public.bask_touch();
drop trigger if exists bask_ticks_touch on public.bask_ticks;
create trigger bask_ticks_touch before insert or update on public.bask_ticks
  for each row execute function public.bask_touch();

-- Session must be alive, the name not banned, and at most 8 active players
-- per code. Runs as definer so the count sees every member regardless of RLS.
-- On update joined_at and key_hash are pinned, so an upsert can't rewrite
-- history or take over someone's seat -- except when a player who left
-- rejoins: they go to the back of the line with a fresh secret.
create or replace function public.bask_member_guard() returns trigger
language plpgsql security definer set search_path = public as $$
declare rejoining boolean;
begin
  if not exists (select 1 from bask_sessions s where s.code = new.code and s.expires_at > now()) then
    raise exception 'This bask has expired or does not exist.' using errcode = 'P0001';
  end if;
  if exists (select 1 from bask_banned b where b.code = new.code and lower(b.player) = lower(new.player)) then
    raise exception 'The bask leader banned % from this bask.', new.player using errcode = 'P0001';
  end if;
  rejoining := tg_op = 'UPDATE' and old.left_at is not null and new.left_at is null;
  if tg_op = 'INSERT' or rejoining then
    perform pg_advisory_xact_lock(hashtext(new.code));
    if (select count(*) from bask_members m where m.code = new.code and m.left_at is null
          and lower(m.player) <> lower(new.player)) >= 8 then
      raise exception 'This bask is full (8 gators max).' using errcode = 'P0001';
    end if;
  end if;
  if tg_op = 'UPDATE' then
    if rejoining then
      new.joined_at := now();
    else
      new.joined_at := old.joined_at;
      new.key_hash := coalesce(old.key_hash, new.key_hash);
    end if;
  end if;
  return new;
end $$;

drop trigger if exists bask_members_guard on public.bask_members;
create trigger bask_members_guard before insert or update on public.bask_members
  for each row execute function public.bask_member_guard();

-- Leadership is sticky: it only moves when the current leader has left, been
-- removed, or gone quiet for 5 minutes; then it goes to the earliest-joined
-- active player. Re-checked on every member write (players write at least
-- once a minute while their page is open).
create or replace function public.bask_fix_leader() returns trigger
language plpgsql security definer set search_path = public as $$
declare c text := coalesce(new.code, old.code);
begin
  update bask_sessions s set leader = (
      select m.player from bask_members m
      where m.code = c and m.left_at is null and m.updated_at > now() - interval '5 minutes'
      order by m.joined_at limit 1)
  where s.code = c and (s.leader is null or not exists (
      select 1 from bask_members m where m.code = c and m.player = s.leader
        and m.left_at is null and m.updated_at > now() - interval '5 minutes'));
  return null;
end $$;
drop trigger if exists bask_members_leader on public.bask_members;
create trigger bask_members_leader after insert or update or delete on public.bask_members
  for each row execute function public.bask_fix_leader();

-- Time buckets can only be written while their session is alive.
create or replace function public.bask_tick_guard() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from bask_sessions s where s.code = new.code and s.expires_at > now()) then
    raise exception 'This bask has expired or does not exist.' using errcode = 'P0001';
  end if;
  return new;
end $$;

drop trigger if exists bask_ticks_guard on public.bask_ticks;
create trigger bask_ticks_guard before insert or update on public.bask_ticks
  for each row execute function public.bask_tick_guard();

-- -------------------------------------------------------------- access --
alter table public.bask_sessions enable row level security;
alter table public.bask_members  enable row level security;
alter table public.bask_ticks    enable row level security;

grant usage on schema public to anon;
grant select, insert         on public.bask_sessions to anon;
grant select, insert, update on public.bask_members  to anon;
grant select, insert, update on public.bask_ticks    to anon;

drop policy if exists bask_sessions_read   on public.bask_sessions;
drop policy if exists bask_sessions_create on public.bask_sessions;
create policy bask_sessions_read on public.bask_sessions
  for select to anon using (expires_at > now());
-- A new session always gets the default 48h; the client can't pick its own.
create policy bask_sessions_create on public.bask_sessions
  for insert to anon with check (
    created_at between now() - interval '1 minute' and now() + interval '1 minute'
    and expires_at <= now() + interval '48 hours 1 minute'
  );

drop policy if exists bask_members_read  on public.bask_members;
drop policy if exists bask_members_write on public.bask_members;
drop policy if exists bask_members_edit  on public.bask_members;
create policy bask_members_read on public.bask_members
  for select to anon using (exists (select 1 from public.bask_sessions s where s.code = bask_members.code and s.expires_at > now()));
create policy bask_members_write on public.bask_members
  for insert to anon with check (exists (select 1 from public.bask_sessions s where s.code = bask_members.code and s.expires_at > now()));
create policy bask_members_edit on public.bask_members
  for update to anon using (exists (select 1 from public.bask_sessions s where s.code = bask_members.code and s.expires_at > now()));

drop policy if exists bask_ticks_read  on public.bask_ticks;
drop policy if exists bask_ticks_write on public.bask_ticks;
drop policy if exists bask_ticks_edit  on public.bask_ticks;
create policy bask_ticks_read on public.bask_ticks
  for select to anon using (exists (select 1 from public.bask_sessions s where s.code = bask_ticks.code and s.expires_at > now()));
create policy bask_ticks_write on public.bask_ticks
  for insert to anon with check (exists (select 1 from public.bask_sessions s where s.code = bask_ticks.code and s.expires_at > now()));
create policy bask_ticks_edit on public.bask_ticks
  for update to anon using (exists (select 1 from public.bask_sessions s where s.code = bask_ticks.code and s.expires_at > now()));

-- -------------------------------------------- leader actions, leaving --
alter table public.bask_banned enable row level security;
revoke all on public.bask_banned from anon;
grant select on public.bask_banned to anon;   -- the group can see who's banned
drop policy if exists bask_banned_read on public.bask_banned;
create policy bask_banned_read on public.bask_banned for select to anon
  using (exists (select 1 from public.bask_sessions s where s.code = bask_banned.code and s.expires_at > now()));

drop function if exists public.bask_kick(text, text, text);            -- earlier versions
drop function if exists public.bask_kick(text, text, text, boolean);

-- True when p_key is the per-join secret of active player p_me.
create or replace function public.bask_is_member(p_code text, p_me text, p_key text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from bask_members m where m.code = p_code and m.player = p_me and m.left_at is null
    and p_key is not null and m.key_hash = encode(sha256(convert_to(p_key, 'UTF8')), 'hex'));
$$;
create or replace function public.bask_require_leader(p_code text, p_me text, p_key text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not bask_is_member(p_code, p_me, p_key)
     or not exists (select 1 from bask_sessions s where s.code = p_code and s.expires_at > now() and s.leader = p_me) then
    raise exception 'Only the bask leader can do that.' using errcode = 'P0001';
  end if;
end $$;

-- Boot: remove the player and their time buckets; they can join again.
-- With p_ban, also keep that name out (works for names not in the bask too).
create or replace function public.bask_kick(p_code text, p_me text, p_key text, p_player text, p_ban boolean default false) returns void
language plpgsql security definer set search_path = public as $$
begin
  perform bask_require_leader(p_code, p_me, p_key);
  if lower(p_player) = lower(p_me) then
    raise exception 'The leader can''t boot themselves (use Leave).' using errcode = 'P0001';
  end if;
  if p_ban then
    insert into bask_banned (code, player) values (p_code, left(p_player, 40)) on conflict do nothing;
  end if;
  delete from bask_members m where m.code = p_code and lower(m.player) = lower(p_player);
end $$;

create or replace function public.bask_unban(p_code text, p_me text, p_key text, p_player text) returns void
language plpgsql security definer set search_path = public as $$
begin
  perform bask_require_leader(p_code, p_me, p_key);
  delete from bask_banned b where b.code = p_code and lower(b.player) = lower(p_player);
end $$;

-- Leaving keeps your numbers in the bask but frees your spot (and hands off
-- leadership if you had it); joining again puts you at the back of the line.
create or replace function public.bask_leave(p_code text, p_me text, p_key text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not bask_is_member(p_code, p_me, p_key) then return; end if;
  update bask_members m set left_at = now() where m.code = p_code and m.player = p_me;
end $$;

revoke all on function public.bask_is_member(text, text, text) from public;
revoke all on function public.bask_require_leader(text, text, text) from public;
revoke all on function public.bask_kick(text, text, text, text, boolean) from public;
revoke all on function public.bask_unban(text, text, text, text) from public;
revoke all on function public.bask_leave(text, text, text) from public;
grant execute on function public.bask_kick(text, text, text, text, boolean) to anon;
grant execute on function public.bask_unban(text, text, text, text) to anon;
grant execute on function public.bask_leave(text, text, text) to anon;

-- Let the REST API see new functions right away.
notify pgrst, 'reload schema';

-- ------------------------------------------------------------- cleanup --
-- Hourly: physically delete every expired session; members and ticks go with
-- it via ON DELETE CASCADE. RLS already hides them from the moment they expire.
create extension if not exists pg_cron;
select cron.unschedule('bask-cleanup') where exists (select 1 from cron.job where jobname = 'bask-cleanup');
select cron.schedule('bask-cleanup', '7 * * * *',
  $$delete from public.bask_sessions where expires_at < now()$$);
