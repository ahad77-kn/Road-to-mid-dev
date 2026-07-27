# Week 19 · Day 4 — Structure

[🛣️ The Road](../../../README.md) · [📅 Week 19](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 19 — Middleware, Error Handling & Your First Full Stack](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Middleware, Error Handling & Your First Full Stack
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Express skeleton* + 12-factor *config*.

## 2️⃣ Build — 2 hours

Restructure the whole API. No new features — organisation only.

```
src/
├── app.js              ← express app, middleware wiring (no listen)
├── server.js           ← starts the server (imports app)
├── config/index.js     ← env vars validated at boot
├── routes/todos.routes.js
├── controllers/todos.controller.js   ← req/res only
├── services/todos.service.js         ← business logic, no req/res
├── middleware/
├── utils/
└── validators/
```

## 3️⃣ Must have — the checklist you are marked against

- [ ] The structure above, fully applied
- [ ] Controllers touch `req`/`res`; services do not — this separation is the whole assignment. A service function must be callable from a CLI script with no HTTP involved.
- [ ] `.env` with `PORT`, `NODE_ENV`, `CORS_ORIGIN`; `.env.example` committed; `.env` gitignored
- [ ] Config validated at startup — a missing required env var stops the server with a clear message, rather than failing at 3am on a random request
- [ ] `app.js` separate from `server.js` (this makes it testable — note why)
- [ ] A `/api/health` endpoint returning uptime and version
- [ ] `day-4/structure.md`: what each folder is for and one rule for what may import what

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why separate controllers from services?
2. Why is `app.js` separate from `server.js`?
3. Where does a new feature go — walk me through adding "categories" folder by folder.
4. Why validate environment config at startup?
5. **Prove it:** call a service function directly from a Node script, with no HTTP server running.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-19/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 19 day 4: structure"
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

◀ [Day 3](../day-3/) · [⬆ Week 19 — Middleware, Error Handling & Your First Full Stack](../README.md) · [Day 5](../day-5/) ▶
