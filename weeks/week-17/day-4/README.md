# Week 17 · Day 4 — Checkout & polish

[🛣️ The Road](../../../README.md) · [📅 Week 17](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 17 — Phase Project: E-Commerce Front → Phase 4 Exam](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 4 · React · **Week topic:** Phase Project: E-Commerce Front → Phase 4 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

web.dev *Core Web Vitals* + react.dev *Profiler*.

## 2️⃣ Build — 2 hours

## 3️⃣ Must have — the checklist you are marked against

- [ ] A multi-step checkout: shipping details → payment (fake) → review → confirmation
- [ ] Full form validation, controlled inputs, errors per field (Week 13 skills)
- [ ] Step state preserved when going back
- [ ] An order summary alongside every step
- [ ] Order confirmation with a generated order number; cart cleared afterwards
- [ ] Order history saved to localStorage and viewable at `/orders`
- [ ] A wishlist, saved and toggleable from cards and the detail page
- [ ] A toast system for feedback (write your own — it is a good context exercise)

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. How is multi-step form state managed? Why there?
2. What happens if the user refreshes on step 2?
3. What is the difference between the cart and an order once placed?
4. Which parts re-render when a toast appears? Is that acceptable?

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-17/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 17 day 4: checkout polish"
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

◀ [Day 3](../day-3/) · [⬆ Week 17 — Phase Project: E-Commerce Front → Phase 4 Exam](../README.md) · [Day 5](../day-5/) ▶
