# Week 19 · Day 3 — Errors

[🛣️ The Road](../../../README.md) · [📅 Week 19](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 19 — Middleware, Error Handling & Your First Full Stack](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Middleware, Error Handling & Your First Full Stack
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Express *Error handling* + RFC 9457.

## 2️⃣ Build — 2 hours

One place where all errors are handled.

## 3️⃣ Must have — the checklist you are marked against

- [ ] A central error-handling middleware (four arguments) registered **last**
- [ ] A custom `AppError` class with `statusCode` and `isOperational`; subclasses `NotFoundError`, `ValidationError`, `UnauthorizedError`
- [ ] A 404 handler for unmatched routes returning JSON, never HTML
- [ ] An `asyncHandler` wrapper so a rejected promise in any async route reaches the error middleware — **demonstrate the bug first**: throw inside an async handler without it and show the request hanging forever
- [ ] Stack traces logged on the server, **never sent to the client in production** — controlled by `NODE_ENV`
- [ ] Every error response uses one consistent shape
- [ ] `process.on('unhandledRejection')` and `uncaughtException` handled with a graceful shutdown
- [ ] `day-3/errors.md`: operational vs programmer errors — what you do differently with each

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. How does Express know a middleware is an error handler?
2. Why does a thrown error inside an `async` handler not reach it by default?
3. What must never appear in a production error response, and why?
4. Operational vs programmer error — an example of each from your code.
5. **Prove it:** trigger a database-style failure, a validation failure and an unknown route. All three must return the same JSON shape with different codes.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-19/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 19 day 3: errors"
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

◀ [Day 2](../day-2/) · [⬆ Week 19 — Middleware, Error Handling & Your First Full Stack](../README.md) · [Day 4](../day-4/) ▶
