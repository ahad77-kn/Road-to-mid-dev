# Week 22 · Day 3 — The schema ⚠️ teacher approval required

[🛣️ The Road](../../../README.md) · [📅 Week 22](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 22 — Capstone: Plan the App & Build the API](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 6 · Capstone · **Week topic:** Capstone: Plan the App & Build the API
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MongoDB *Data modelling* + *anti-patterns*.

## 2️⃣ Build — 2 hours

`day-3/SCHEMA.md`. **You may not start Day 4 until the teacher approves this.** Fixing a schema in Week 23 costs days; fixing it now costs an hour.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Every collection, every field, every type, every constraint
- [ ] An entity-relationship diagram (paper or Excalidraw)
- [ ] For **each** relationship: embed or reference, with the reasoning — is it queried independently? is it unbounded? how often does it change? is it always needed together?
- [ ] The indexes you will need, derived from your actual queries — list the query, then the index that serves it
- [ ] A sample document for every collection, filled with realistic data
- [ ] The ten most common queries your app will run, written out
- [ ] How ownership/permissions are represented in the data
- [ ] What happens on delete — cascade, soft-delete, or orphan? Decide per relationship and justify.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Defend three embed/reference decisions.
2. Show me the query that made you add each index.
3. What happens to related documents when a user deletes their account?
4. Where would this schema hurt at 100× the data?
5. What is the one part you are least sure about? (Say it now — that is the point of review.)

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-22/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 22 day 3: the schema teacher approval required"
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

◀ [Day 2](../day-2/) · [⬆ Week 22 — Capstone: Plan the App & Build the API](../README.md) · [Day 4](../day-4/) ▶
