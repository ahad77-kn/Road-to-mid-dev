# Week 19 · Day 2 — Validation

[🛣️ The Road](../../../README.md) · [📅 Week 19](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 19 — Middleware, Error Handling & Your First Full Stack](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Middleware, Error Handling & Your First Full Stack
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

express-validator or zod docs.

## 2️⃣ Build — 2 hours

Every endpoint validates its input before the handler ever runs.

## 3️⃣ Must have — the checklist you are marked against

- [ ] A validation schema per endpoint, kept next to the route, not inside the handler
- [ ] Body, query params **and** path params all validated
- [ ] Types coerced properly — `?page=2` arrives as a string; the handler must receive a number
- [ ] Unknown fields rejected or stripped — decide which, and justify it
- [ ] A **consistent** 400 error shape listing every failing field at once, not just the first:
  ```json
  { "error": "Validation failed",
    "details": [{ "field": "title", "message": "must be 1–200 characters" }] }
  ```
- [ ] Strings trimmed and sanitised; a length cap on every string field
- [ ] `day-2/validation.md`: **why client-side validation is not enough** — show your API rejecting a request that your React form would never have sent. This is the point of the day.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why validate on the server when the frontend already validates?
2. Where should validation live — in the route, the controller, or the model? Defend your answer.
3. Why return *all* validation errors rather than the first?
4. What happens to `?page=abc` in your API?
5. **Prove it:** bypass your frontend entirely with `curl` and try to create an invalid record. Show me the 400.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-19/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 19 day 2: validation"
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

◀ [Day 1](../day-1/) · [⬆ Week 19 — Middleware, Error Handling & Your First Full Stack](../README.md) · [Day 3](../day-3/) ▶
