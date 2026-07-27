# Week 20 · Day 2 — The raw database

[🛣️ The Road](../../../README.md) · [📅 Week 20](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 20 — MongoDB & Mongoose](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** MongoDB & Mongoose
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MongoDB *CRUD* + *Query operators*.

## 2️⃣ Build — 2 hours

30 queries in `mongosh`, against a seeded dataset of 100+ documents. Save every query with its result in `day-2/queries.md`. **No Mongoose today** — knowing the layer underneath is what stops Mongoose being magic.

Cover: `insertOne`/`insertMany` · `find` with projection · `$gt`/`$lt`/`$gte`/`$in`/`$nin`/`$ne` · `$and`/`$or`/`$not` · `$regex` search · `$exists` · sort, limit, skip (pagination) · `countDocuments` · `updateOne` with `$set`/`$inc`/`$push`/`$pull` · `updateMany` · `upsert` · `deleteOne`/`deleteMany` · `distinct` · a two-stage aggregation with `$group` and `$sum` · `$match` + `$group` + `$sort` · `explain()` on one query, before and after adding an index

## 3️⃣ Must have — the checklist you are marked against

- [ ] All 30, each with the query, the result, and one line on what it demonstrates
- [ ] A seed script (`day-2/seed.js`) that generates realistic data
- [ ] Pagination proven: page 3 with 10 per page, and the correct total count
- [ ] `explain()` output before and after creating an index, with the docs-examined numbers compared

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Difference between `updateOne` with `$set` and replacing the whole document?
2. How do you paginate, and what is the performance problem with a large `skip`?
3. What does `$push` vs `$addToSet` do?
4. Read me your `explain()` output — how many documents were examined before and after the index?
5. **Prove it:** I describe a query in English; you write it in `mongosh` in under 2 minutes.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-20/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 20 day 2: the raw database"
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

◀ [Day 1](../day-1/) · [⬆ Week 20 — MongoDB & Mongoose](../README.md) · [Day 3](../day-3/) ▶
