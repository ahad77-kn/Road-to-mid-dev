# Week 20 · Day 4 — The to-do API, on a real database

[🛣️ The Road](../../../README.md) · [📅 Week 20](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 20 — MongoDB & Mongoose](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** MongoDB & Mongoose
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Mongoose *Queries* + *Middleware*.

## 2️⃣ Build — 2 hours

Replace the in-memory array in your Week 19 API with MongoDB. **The API contract must not change** — the same endpoints, the same responses. Your React frontend must work untouched.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Connection handled in one place with error handling and retry; the server does not start if the database is unreachable
- [ ] All CRUD through Mongoose in the **service** layer — controllers never touch the model directly
- [ ] `.lean()` used on read-only queries, with a comment on what it changes
- [ ] Filtering, search (`$regex`, case-insensitive), sorting and pagination all done in the **database**, not in JavaScript after fetching everything. Explain why that distinction matters at 100,000 records.
- [ ] Mongoose validation errors mapped to your API's 400 shape
- [ ] Invalid `ObjectId` handled → 400, not a 500 (`mongoose.isValidObjectId`)
- [ ] A seed script and an `npm run seed`
- [ ] Graceful shutdown closing the connection on `SIGINT`
- [ ] `day-4/migration.md`: what changed in your code, and everything that did **not** — that list is the value of the layered structure you built in Week 19

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What did you have to change, and what did the layering save you from changing?
2. Why filter in the database instead of in JavaScript?
3. What does `.lean()` return, and what do you lose?
4. What happens on `GET /api/todos/not-an-id`? Show me.
5. **Prove it:** restart the server. The data is still there. Then point your Week 19 React app at it, unchanged, and use it.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-20/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 20 day 4: the to do api on"
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

◀ [Day 3](../day-3/) · [⬆ Week 20 — MongoDB & Mongoose](../README.md) · [Day 5](../day-5/) ▶
