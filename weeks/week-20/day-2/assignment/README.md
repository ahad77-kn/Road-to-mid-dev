# 🛠️ Assignment — Week 20 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 20](../../README.md)

## What to build

30 queries in `mongosh`, against a seeded dataset of 100+ documents. Save every query with its result in `day-2/queries.md`. **No Mongoose today** — knowing the layer underneath is what stops Mongoose being magic.

Cover: `insertOne`/`insertMany` · `find` with projection · `$gt`/`$lt`/`$gte`/`$in`/`$nin`/`$ne` · `$and`/`$or`/`$not` · `$regex` search · `$exists` · sort, limit, skip (pagination) · `countDocuments` · `updateOne` with `$set`/`$inc`/`$push`/`$pull` · `updateMany` · `upsert` · `deleteOne`/`deleteMany` · `distinct` · a two-stage aggregation with `$group` and `$sum` · `$match` + `$group` + `$sort` · `explain()` on one query, before and after adding an index

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `queries.md` | all 30 queries with results and what each demonstrates |
| `seed.js` | generates 100+ realistic documents |
| `explain.md` | docs examined before and after the index |

## ✅ Done when — this is the checklist you are marked against

- [ ] All 30, each with the query, the result, and one line on what it demonstrates
- [ ] A seed script (`day-2/seed.js`) that generates realistic data
- [ ] Pagination proven: page 3 with 10 per page, and the correct total count
- [ ] `explain()` output before and after creating an index, with the docs-examined numbers compared

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Difference between `updateOne` with `$set` and replacing the whole document?
2. How do you paginate, and what is the performance problem with a large `skip`?
3. What does `$push` vs `$addToSet` do?
4. Read me your `explain()` output — how many documents were examined before and after the index?
5. **Prove it:** I describe a query in English; you write it in `mongosh` in under 2 minutes.

---

[← back to the day](../) · [📖 read first](../learn/)
