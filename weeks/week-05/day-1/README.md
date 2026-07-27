# Week 05 · Day 1 — Arrays the manual way

[🛣️ The Road](../../../README.md) · [📅 Week 05](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 04 · Day 5](../../week-04/day-5/) · [⬆ Week 05 — Arrays, Objects & the Methods You Will Use Daily](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Arrays, Objects & the Methods You Will Use Daily
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info *Arrays*.

## 2️⃣ Build — 2 hours

In `day-1/`, solve all ten with **`for` loops only** — no array methods yet. This is on purpose: tomorrow you replace each one and feel the difference.

1. Sum of an array of numbers
2. Average
3. Largest and smallest
4. Count how many are above the average
5. Reverse an array without `.reverse()`
6. Remove duplicates
7. Merge two arrays and sort ascending
8. Find the index of a value (without `indexOf`)
9. Split an array into evens and odds
10. Rotate an array left by n positions

## 3️⃣ Must have — the checklist you are marked against

- [ ] Loops only — no `map`, `filter`, `reduce`, `find`, `includes`
- [ ] Each drill is a function taking the array as a parameter and returning the result
- [ ] None of them mutate the input array — prove it by logging the original after each call
- [ ] Tested with: a normal array, an empty array, and a single-element array

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Are arrays a primitive type in JavaScript? What are they really?
2. What happens when you do `const a = [1,2]; const b = a; b.push(3);` — what is `a` now, and why?
3. Difference between `arr.length = 0` and `arr = []`?
4. Why can you `push` into a `const` array?
5. **Prove it:** show me one of your functions accidentally mutating the input, then fix it.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-05/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 05 day 1: arrays the manual way"
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

◀ [Week 04 · Day 5](../../week-04/day-5/) · [⬆ Week 05 — Arrays, Objects & the Methods You Will Use Daily](../README.md) · [Day 2](../day-2/) ▶
