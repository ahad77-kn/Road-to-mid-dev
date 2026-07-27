# Week 20 · Day 5 — Relations, indexes & aggregation

[🛣️ The Road](../../../README.md) · [📅 Week 20](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 20 — MongoDB & Mongoose](../README.md) · [Week 21 · Day 1](../../week-21/day-1/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** MongoDB & Mongoose
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MongoDB *Data modelling*, *Embed vs reference*, *Indexes* + Mongoose *populate*.

## 2️⃣ Build — 2 hours

Add relationships and make queries fast.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Todos belong to a **list**, lists belong to a user: `Todo → List → User` via `ObjectId` refs
- [ ] `populate` used to fetch a todo with its list and owner — with `select` so you never over-fetch
- [ ] **One embedded relationship too** (e.g. comments/subtasks embedded in a todo) so you have built both patterns
- [ ] `day-5/modelling.md`: for each relationship, why you embedded or referenced. Use the real criteria — is it queried independently, is it unbounded in size, how often does it change, is it always needed together?
- [ ] Indexes on the fields you actually query (`owner`, `done`, `dueDate`, a text index for search), with `explain()` before/after evidence
- [ ] A compound index and an explanation of why field order matters in one
- [ ] An aggregation pipeline producing real statistics: todos per list, completion rate, overdue count, average time to complete
- [ ] The N+1 problem demonstrated (a loop of `findById`) and then fixed with `populate` or `$in`

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Embed or reference — give me your decision rule in one sentence, then apply it to three examples I name.
2. What does `populate` actually do — one query or two?
3. What is the N+1 problem? Show me yours and the fix.
4. Why does field order matter in a compound index?
5. **Prove it:** show `explain()` for your dashboard query before and after indexing. Numbers, not opinions.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-20/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 20 day 5: relations indexes aggregation"
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

◀ [Day 4](../day-4/) · [⬆ Week 20 — MongoDB & Mongoose](../README.md) · [Week 21 · Day 1](../../week-21/day-1/) ▶
