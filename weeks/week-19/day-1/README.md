# Week 19 · Day 1 — Middleware, by hand

[🛣️ The Road](../../../README.md) · [📅 Week 19](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 18 · Day 5](../../week-18/day-5/) · [⬆ Week 19 — Middleware, Error Handling & Your First Full Stack](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Middleware, Error Handling & Your First Full Stack
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Express *Using middleware* + *Writing middleware*.

## 2️⃣ Build — 2 hours

Write five middleware functions yourself, in `day-1/middleware/`. No libraries today — writing them is how the concept lands.

1. `requestLogger` — logs `METHOD /path 200 12ms` including response time and status. (Hint: hook `res.on('finish')`.)
2. `requestId` — attaches a UUID to every request, echoes it in an `X-Request-Id` header, and includes it in the log
3. `apiKeyCheck` — applied to one route group only; rejects with 401 if the `X-API-Key` header is missing
4. `rateLimiter` — max 10 requests per minute per IP, in-memory, returning **429** with a `Retry-After` header
5. `responseTime` + a `slowRequestWarning` that logs anything over 100ms

## 3️⃣ Must have — the checklist you are marked against

- [ ] All five written by hand, each in its own file
- [ ] Applied at three levels — app-wide, router-level and single-route — with a comment on each
- [ ] `day-1/middleware.md`: what happens if you forget `next()`? Demonstrate it (the request hangs) and screenshot the browser waiting.
- [ ] Order deliberately demonstrated: put the logger after the routes, show it never runs, then move it back and explain why order is everything

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What are the three arguments of a middleware function? What is the fourth for?
2. What happens if you call `next()` *and* send a response?
3. Why does middleware order matter? Give a real example from your own code.
4. How do you apply middleware to one route group only?
5. **Prove it:** hit your rate limiter. Show the 429 and the `Retry-After` header in the response.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-19/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 19 day 1: middleware by hand"
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

◀ [Week 18 · Day 5](../../week-18/day-5/) · [⬆ Week 19 — Middleware, Error Handling & Your First Full Stack](../README.md) · [Day 2](../day-2/) ▶
