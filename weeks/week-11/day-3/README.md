# Week 11 · Day 3 — Breakpoints

[🛣️ The Road](../../../README.md) · [📅 Week 11](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 11 — npm, DevTools & Debugging → Phase 3 Exam](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 3 · Tooling · **Week topic:** npm, DevTools & Debugging → Phase 3 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Chrome *JavaScript debugging* + *Breakpoints*.

## 2️⃣ Build — 2 hours

Debug your own Week 7 quiz app **without adding a single `console.log`**.

## 3️⃣ Must have — the checklist you are marked against

- [ ] A line-of-code breakpoint set, hit, and stepped through — screenshot the paused state with the Scope panel visible
- [ ] **Conditional breakpoint** (e.g. only when `questionIndex === 5`) — this is the one that changes your life
- [ ] A DOM change breakpoint (break when an element's attributes change)
- [ ] An event listener breakpoint (break on any click)
- [ ] Step over / step into / step out used and explained — the difference in your own words
- [ ] The Call Stack read and explained for one paused moment: what called what
- [ ] Watch expressions used to track a variable through a loop
- [ ] `day-3/debugging.md`: one real bug you found or created, and the exact steps you took to locate it

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Step over vs step into — when is each right?
2. What does the Call Stack tell you that a `console.log` cannot?
3. When is a conditional breakpoint better than 50 log lines?
4. How do you pause on the exact moment an element's class changes?
5. **Prove it:** I plant a bug in your code; you find it with breakpoints in under 10 minutes, narrating as you go.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-11/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 11 day 3: breakpoints"
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

◀ [Day 2](../day-2/) · [⬆ Week 11 — npm, DevTools & Debugging → Phase 3 Exam](../README.md) · [Day 4](../day-4/) ▶
