# Week 20 · Day 1 — Concepts & setup

[🛣️ The Road](../../../README.md) · [📅 Week 20](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 19 · Day 5](../../week-19/day-5/) · [⬆ Week 20 — MongoDB & Mongoose](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** MongoDB & Mongoose
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MongoDB manual intro + Atlas getting started + *Documents*.

## 2️⃣ Build — 2 hours

## 3️⃣ Must have — the checklist you are marked against

- [ ] A free Atlas M0 cluster running, connection string in `.env` (**never** committed — check `git log` to be sure)
- [ ] Network access and a database user configured; note what you set and why in `day-1/setup.md`
- [ ] Connected from `mongosh` **and** from Compass
- [ ] A `learning` database with a `books` collection, 15 documents inserted by hand — deliberately give two of them an extra field the others do not have, then explain what that means
- [ ] `day-1/concepts.md` mapping the vocabulary: database / collection / document / field / `_id` — against the SQL words (table, row, column) and against JavaScript (array of objects)
- [ ] What an `ObjectId` is and what it contains (hint: a timestamp)
- [ ] `day-1/setup.md`: the exact steps you took, so you can repeat this in 5 minutes next time

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Collection vs document vs field — map each to a JavaScript concept.
2. What is `_id`, who creates it, and what is embedded inside an `ObjectId`?
3. What does "schemaless" actually mean, and why is it dangerous without discipline?
4. Where is your connection string, and what would happen if it reached GitHub?
5. **Prove it:** insert a document from `mongosh` and see it appear in Compass without refreshing your understanding of where it went.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-20/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 20 day 1: concepts setup"
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

◀ [Week 19 · Day 5](../../week-19/day-5/) · [⬆ Week 20 — MongoDB & Mongoose](../README.md) · [Day 2](../day-2/) ▶
