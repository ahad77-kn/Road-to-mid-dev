# Week 17 · Day 1 — Plan & product grid

[🛣️ The Road](../../../README.md) · [📅 Week 17](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 16 · Day 5](../../week-16/day-5/) · [⬆ Week 17 — Phase Project: E-Commerce Front → Phase 4 Exam](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 4 · React · **Week topic:** Phase Project: E-Commerce Front → Phase 4 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

*Thinking in React* + the API docs.

## 2️⃣ Build — 2 hours

`PLAN.md` first, then the catalogue.

**`PLAN.md` must contain** (committed before any component):
- Component tree, drawn
- Every route
- Every piece of state and where it lives (local / context / URL)
- The product and cart-item data shapes
- What is derived, not stored

## 3️⃣ Must have — the checklist you are marked against

- [ ] Product grid from the API, responsive (Phase 1 skills)
- [ ] Category filter, price range, sort by price/rating — **all in the URL**
- [ ] Search with debounce
- [ ] Loading skeletons, error state with retry, empty state
- [ ] Product cards: image, title (truncated cleanly), price, rating stars, category
- [ ] Pagination or infinite scroll

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Walk me through PLAN.md. What did you get wrong once you started?
2. Which state is in the URL and why?
3. How are you handling images of wildly different aspect ratios?
4. What is derived in this app?

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-17/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 17 day 1: plan product grid"
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

◀ [Week 16 · Day 5](../../week-16/day-5/) · [⬆ Week 17 — Phase Project: E-Commerce Front → Phase 4 Exam](../README.md) · [Day 2](../day-2/) ▶
