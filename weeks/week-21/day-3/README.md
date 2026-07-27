# Week 21 · Day 3 — The guard that actually guards

[🛣️ The Road](../../../README.md) · [📅 Week 21](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 21 — Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Express *writing middleware* + OWASP *Authorization*.

## 2️⃣ Build — 2 hours

`requireAuth` and `requireRole` middleware.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `requireAuth`: reads the `Authorization: Bearer <token>` header, verifies it, loads the user, attaches `req.user`, calls `next()`
- [ ] Every failure returns **401** with a distinct reason logged (missing header, malformed, expired, invalid signature, user deleted since issue) — note why the client message stays generic
- [ ] `requireRole("admin")` for role checks → **403**, not 401. `day-3/guards.md` must explain the difference: 401 = "I don't know who you are", 403 = "I know who you are, and no".
- [ ] **Ownership checks**: `GET /api/todos/:id` must 404 (not 403 — think about why) if the todo belongs to someone else. This is the check that everyone forgets.
- [ ] Applied to protect all `/api/todos` routes
- [ ] An admin-only route listing all users
- [ ] `day-3/guards.md` must contain, in your own words: **the frontend guard from Week 16 protected nothing.** Show it: log in as user A, take their token, and try to fetch user B's todos with `curl`. The server must refuse. Screenshot it.
- [ ] Token expiry demonstrated: set `expiresIn: "10s"`, wait, and show the 401

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. 401 vs 403 — the difference, and an example of each from your API.
2. Why might returning 404 be better than 403 for someone else's resource?
3. Where exactly does `req.user` come from, and can a client fake it?
4. Authentication vs authorisation — which is `requireAuth` and which is `requireRole`?
5. **Prove it:** with `curl` and user A's token, try five different ways to reach user B's data. All five must fail.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-21/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 21 day 3: the guard that actually guards"
git push
```

## 🤖 The AI rule for today

Every `LEARNED.md` has this mandatory line:

```
**AI used?** yes / no — what for:
```

| What you did | Allowed? | Your maximum score |
| --- | --- | --- |
| Wrote it yourself using docs and search | ✅ | **10/10** |
| Asked AI to *explain* a concept, then wrote the code yourself | ✅ | **10/10** |
| AI wrote part of the code — and you say exactly which part | ⚠️ | 7/10 |
| AI wrote it, you say so honestly | ⚠️ | 4/10 → redo by hand |
| AI wrote it and you did not say so | ❌ | **0/10** |

Asking AI *"explain how the box model works"* costs you nothing and is smart learning.
Asking it *"write my pricing card"* and staying quiet is the one thing here that scores zero.
Full policy: [GRADING.md](../../../GRADING.md).

## 🆘 Stuck?

1. Re-read the error message. All of it — file name and line number included.
2. Go back to the **Read first** links above. The answer is usually in the paragraph you skimmed.
3. Search like a developer: `mdn <the exact property>`, not "how do I".
4. Still stuck after 30 minutes? Write the question down in `LEARNED.md` and ask the teacher.
   Being stuck is not failure — hiding that you were stuck is.
5. Deeper reading on every topic: [📚 RESOURCES.md](../../../RESOURCES.md)

## 📂 Files in this folder

| File | Who writes it | Required | Done |
| --- | --- | --- | --- |
| Your code (`.html`, `.css`, `.js`, …) | you | ✅ | ⬜ |
| `LEARNED.md` | you, the same day | ✅ | ⬜ |
| `ASSESSMENT.md` | the teacher | – | ⬜ |

**No folder + no `LEARNED.md` = this assignment does not exist.**

---

◀ [Day 2](../day-2/) · [⬆ Week 21 — Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam](../README.md) · [Day 4](../day-4/) ▶
