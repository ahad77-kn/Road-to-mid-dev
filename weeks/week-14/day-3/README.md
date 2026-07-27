# Week 14 · Day 3 — Filters, sorting, search

[🛣️ The Road](../../../README.md) · [📅 Week 14](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 14 — State Design: Lifting State & `useReducer`](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 4 · React · **Week topic:** State Design: Lifting State & `useReducer`
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Extracting state logic into a reducer* (read it today, apply it tomorrow).

## 2️⃣ Build — 2 hours

Make the tracker genuinely usable.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Filter by category (multi-select), by date range, and by a min/max amount
- [ ] Search by description, debounced
- [ ] Sort by date / amount / description, ascending and descending
- [ ] All filters compose — they work together, not one at a time
- [ ] The filtered+sorted list is derived in one place, in the right order (filter → search → sort)
- [ ] A "clear all filters" button and a count: "showing 8 of 34"
- [ ] Notice how many `useState` calls you now have. Count them in `day-3/state-count.md` — that number is the argument for tomorrow.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. How many `useState` calls are in `App` now? Which ones always change together?
2. Why must filter/sort be derived rather than stored?
3. What order do you apply filter, search and sort — does it matter for correctness? For performance?
4. Where does the debounce live, and why there?
5. **Prove it:** apply three filters at once and show the count is right.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-14/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 14 day 3: filters sorting search"
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

◀ [Day 2](../day-2/) · [⬆ Week 14 — State Design: Lifting State & `useReducer`](../README.md) · [Day 4](../day-4/) ▶
