# Week 13 · Day 5 — Quiz in React

[🛣️ The Road](../../../README.md) · [📅 Week 13](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 13 — Lists, Keys, Conditional Rendering & Controlled Forms](../README.md) · [Week 14 · Day 1](../../week-14/day-1/) ▶

**Phase:** Phase 4 · React · **Week topic:** Lists, Keys, Conditional Rendering & Controlled Forms
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Preserving and resetting state*.

## 2️⃣ Build — 2 hours

The Week 7 quiz app, in React, with everything it had plus a review screen.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Questions from data; one at a time; progress bar; Previous/Next with answers remembered
- [ ] A per-question timer with `useEffect` cleanup that does **not** leak (this is the day's trap — an uncleaned interval will fire after the component unmounts)
- [ ] Score screen with per-question review and explanations
- [ ] "Try again" fully resets — including the timer and shuffle
- [ ] A `key` on the question component used deliberately to **reset** child state between questions. Explain in `day-5/reset.md` why that works.
- [ ] Shuffle happens once per run, not on every render (note *why* that is a problem, and how you avoided it)

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. How does changing a component's `key` reset its state? Why is that useful here?
2. What does the cleanup function returned from `useEffect` do, and what breaks without it?
3. Why does shuffling inside the render body cause a bug?
4. Where does the timer state live, and why there?
5. **Prove it:** open React DevTools, move through 3 questions, and show me the state changing at each step.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-13/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 13 day 5: quiz in react"
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

◀ [Day 4](../day-4/) · [⬆ Week 13 — Lists, Keys, Conditional Rendering & Controlled Forms](../README.md) · [Week 14 · Day 1](../../week-14/day-1/) ▶
