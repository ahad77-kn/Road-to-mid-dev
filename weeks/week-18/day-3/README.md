# Week 18 · Day 3 — Designing the contract

[🛣️ The Road](../../../README.md) · [📅 Week 18](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 18 — Node.js & Express: Building the API](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Node.js & Express: Building the API
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Express *Routing* + MDN *HTTP methods* + restfulapi.net.

## 2️⃣ Build — 2 hours

Design before implementing. `day-3/API.md` is today's real deliverable.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `API.md` documenting every endpoint of the to-do API **before** you write it:

| Method | Path | Purpose | Request body | Success | Errors |
| --- | --- | --- | --- | --- | --- |
| GET | `/api/todos` | list, with `?done=&search=&page=` | – | 200 + array | 400 bad query |
| POST | `/api/todos` | create | `{title, dueDate?}` | 201 + created | 400 validation |
| GET | `/api/todos/:id` | one | – | 200 | 404 |
| PUT | `/api/todos/:id` | replace | full object | 200 | 400, 404 |
| PATCH | `/api/todos/:id` | partial update | partial | 200 | 400, 404 |
| DELETE | `/api/todos/:id` | remove | – | 204 | 404 |

- [ ] The exact JSON shape of a todo, a list response, and an **error** response — one consistent error shape for the whole API
- [ ] Justification for each status code chosen
- [ ] `express.Router()` used to mount routes at `/api/todos` from a separate file
- [ ] Route skeletons implemented, each returning a hardcoded example matching the doc

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. `PUT` vs `PATCH` — what is the actual difference, and which do your clients need?
2. Why 201 for create, and what header should accompany it?
3. Why 204 for delete rather than 200?
4. What does *idempotent* mean? Which of your endpoints are, and which are not?
5. **Prove it:** hand me API.md. I should be able to write a frontend against it without asking a single question.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-18/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 18 day 3: designing the contract"
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

◀ [Day 2](../day-2/) · [⬆ Week 18 — Node.js & Express: Building the API](../README.md) · [Day 4](../day-4/) ▶
