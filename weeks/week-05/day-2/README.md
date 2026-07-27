# Week 05 · Day 2 — `map`, `filter`, `reduce`

[🛣️ The Road](../../../README.md) · [📅 Week 05](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 05 — Arrays, Objects & the Methods You Will Use Daily](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Arrays, Objects & the Methods You Will Use Daily
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info *Array methods* — the whole chapter.

## 2️⃣ Build — 2 hours

Rewrite all ten of yesterday's drills using array methods, in `day-2/`, then add five more:

11. From a list of names, produce a list of their lengths
12. From a list of prices, get the total after 17% tax
13. Group a list of words by their first letter (`reduce` into an object)
14. Given `["a,1", "b,2"]`, produce `[{key:"a", value:1}, …]`
15. Chain it: from a product list, get the names of in-stock items under 1000 rupees, sorted by price

## 3️⃣ Must have — the checklist you are marked against

- [ ] Side-by-side: `day-2/comparison.md` showing the loop version and the method version of 3 drills, with a line on which reads better and why
- [ ] At least 3 uses of `reduce`, one of which reduces to an **object**, not a number
- [ ] One chained expression using `.filter().map().sort()` together
- [ ] Arrow functions throughout
- [ ] No `for` loop anywhere in this folder

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What does `map` return when the array is empty? What about `reduce` with no initial value?
2. Difference between `find` and `filter`? Between `some` and `every`?
3. Explain `reduce`'s two parameters — the accumulator and the current value — using your own code as the example.
4. Which array methods mutate the original array? Name at least four.
5. **Prove it:** turn a `for` loop I write on the spot into a single chained expression, live.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-05/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 05 day 2: map filter reduce"
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

◀ [Day 1](../day-1/) · [⬆ Week 05 — Arrays, Objects & the Methods You Will Use Daily](../README.md) · [Day 3](../day-3/) ▶
