# Week 17 · Day 3 — The cart

[🛣️ The Road](../../../README.md) · [📅 Week 17](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 17 — Phase Project: E-Commerce Front → Phase 4 Exam](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 4 · React · **Week topic:** Phase Project: E-Commerce Front → Phase 4 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Scaling up with reducer and context*.

## 2️⃣ Build — 2 hours

The heart of the app.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `CartContext` backed by `useReducer`
- [ ] Actions: `ADD_ITEM` (increments if already present), `REMOVE_ITEM`, `UPDATE_QTY`, `CLEAR_CART`
- [ ] A cart drawer/page: line items, per-line subtotal, quantity controls, remove
- [ ] Totals derived: subtotal, tax (17%), shipping (free above a threshold), grand total
- [ ] A live badge in the nav
- [ ] Persisted to localStorage — a refresh keeps the cart
- [ ] Empty-cart state with a link back to the catalogue
- [ ] A discount code field: `SAVE10` = 10% off, invalid codes show an error
- [ ] The reducer is a pure function in its own file and could be unit-tested without React

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What happens when you add a product already in the cart? Where is that logic?
2. Which cart numbers are stored and which are derived? Justify.
3. Why a reducer rather than `useState` here?
4. How would you unit-test the cart reducer with no browser?
5. **Prove it:** add 3 items, refresh, change a quantity to 0, apply a bad code, then a good one. Every step must behave.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-17/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 17 day 3: the cart"
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

◀ [Day 2](../day-2/) · [⬆ Week 17 — Phase Project: E-Commerce Front → Phase 4 Exam](../README.md) · [Day 4](../day-4/) ▶
