# Week 12 · Day 5 — FAQ accordion

[🛣️ The Road](../../../README.md) · [📅 Week 12](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 12 — React Basics: Components, JSX, Props & State](../README.md) · [Week 13 · Day 1](../../week-13/day-1/) ▶

**Phase:** Phase 4 · React · **Week topic:** React Basics: Components, JSX, Props & State
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Render and commit*, *State as a snapshot*, *Conditional rendering*.

## 2️⃣ Build — 2 hours

A FAQ accordion — click a question, its answer expands.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Questions come from a data array, not hard-coded JSX
- [ ] Only **one** panel open at a time — held as `openId` in the parent, not as a boolean inside each item. This choice is the lesson of the day.
- [ ] A smooth CSS height/opacity transition
- [ ] Correct accessibility: `<button>` for the trigger, `aria-expanded`, `aria-controls`, keyboard operable
- [ ] A "close all" / "open all" control — which forces you to think about where the state lives
- [ ] A search box filtering the questions live
- [ ] `day-5/state-location.md`: why `openId` is in the parent. What would break if each `FaqItem` held its own `isOpen`?

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Where does state belong when two siblings must coordinate?
2. What would break with a boolean inside each item?
3. What is conditional rendering, and what are your three ways of doing it (`&&`, ternary, early return)?
4. Why is `key` needed on the mapped list, and what breaks if you use the array index while filtering?
5. **Prove it:** change it to allow multiple panels open at once. If your state is designed well this is a small change — show me.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-12/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 12 day 5: faq accordion"
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

◀ [Day 4](../day-4/) · [⬆ Week 12 — React Basics: Components, JSX, Props & State](../README.md) · [Week 13 · Day 1](../../week-13/day-1/) ▶
