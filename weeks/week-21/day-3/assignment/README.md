# 🛠️ Assignment — Week 21 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 21](../../README.md)

## What to build

`requireAuth` and `requireRole` middleware.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/middleware/requireAuth.js` | |
| `src/middleware/requireRole.js` | |
| `guards.md` | 401 vs 403, ownership checks, and the curl proof that A cannot read B's data |

## ✅ Done when — this is the checklist you are marked against

- [ ] `requireAuth`: reads the `Authorization: Bearer <token>` header, verifies it, loads the user, attaches `req.user`, calls `next()`
- [ ] Every failure returns **401** with a distinct reason logged (missing header, malformed, expired, invalid signature, user deleted since issue) — note why the client message stays generic
- [ ] `requireRole("admin")` for role checks → **403**, not 401. `day-3/guards.md` must explain the difference: 401 = "I don't know who you are", 403 = "I know who you are, and no".
- [ ] **Ownership checks**: `GET /api/todos/:id` must 404 (not 403 — think about why) if the todo belongs to someone else. This is the check that everyone forgets.
- [ ] Applied to protect all `/api/todos` routes
- [ ] An admin-only route listing all users
- [ ] `day-3/guards.md` must contain, in your own words: **the frontend guard from Week 16 protected nothing.** Show it: log in as user A, take their token, and try to fetch user B's todos with `curl`. The server must refuse. Screenshot it.
- [ ] Token expiry demonstrated: set `expiresIn: "10s"`, wait, and show the 401

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. 401 vs 403 — the difference, and an example of each from your API.
2. Why might returning 404 be better than 403 for someone else's resource?
3. Where exactly does `req.user` come from, and can a client fake it?
4. Authentication vs authorisation — which is `requireAuth` and which is `requireRole`?
5. **Prove it:** with `curl` and user A's token, try five different ways to reach user B's data. All five must fail.

---

[← back to the day](../) · [📖 read first](../learn/)
