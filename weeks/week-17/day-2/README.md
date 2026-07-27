# Week 17 · Day 2 — Product detail

[🛣️ The Road](../../../README.md) · [📅 Week 17](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 17 — Phase Project: E-Commerce Front → Phase 4 Exam](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 4 · React · **Week topic:** Phase Project: E-Commerce Front → Phase 4 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

web.dev *Responsive images* + react.dev *Suspense*.

## 2️⃣ Build — 2 hours

`/product/:id` — the page that has to sell the thing.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Full details: large image, title, price, description, rating, category, stock
- [ ] Quantity selector with min/max validation
- [ ] "Add to cart" with visible feedback (toast or animation)
- [ ] "Related products" from the same category
- [ ] Breadcrumbs reflecting the real navigation path
- [ ] A shareable URL; refresh loads correctly
- [ ] Invalid id → a proper not-found page
- [ ] Images: correct `aspect-ratio`, `object-fit`, lazy loading below the fold, a blur/skeleton placeholder

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. How do you prevent layout shift while the image loads? (Name the metric this affects.)
2. What happens on a direct visit to `/product/999999`?
3. Where does "add to cart" state go, and what does the user see?
4. How are related products fetched — one request or many?

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-17/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 17 day 2: product detail"
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

◀ [Day 1](../day-1/) · [⬆ Week 17 — Phase Project: E-Commerce Front → Phase 4 Exam](../README.md) · [Day 3](../day-3/) ▶
