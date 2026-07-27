# Week 07 · Day 3 — Quiz app

[🛣️ The Road](../../../README.md) · [📅 Week 07](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 07 — Events, Forms & Real Interactive Apps](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Events, Forms & Real Interactive Apps
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info *Forms & form events* + *change/input events*.

## 2️⃣ Build — 2 hours

A working quiz with questions from an array of objects.

## 3️⃣ Must have — the checklist you are marked against

- [ ] At least 10 questions in an array: `{ id, question, options: [], correctIndex, explanation }`
- [ ] One question on screen at a time, with a progress indicator ("Question 3 of 10")
- [ ] Selecting an answer highlights it; you can change it before confirming
- [ ] Next/Previous navigation with answers remembered
- [ ] A 20-second-per-question timer that auto-advances when it runs out
- [ ] Final score screen: score, percentage, which ones you got wrong, and the explanation for each
- [ ] "Try again" resets everything cleanly, including the timer
- [ ] Questions shuffled on each run (write your own shuffle, then read about Fisher–Yates)

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Where is the user's state — how do you remember answers across navigation?
2. How do `setTimeout` and `setInterval` differ? What does `clearInterval` prevent, and what bug appears if you forget it?
3. Why must you clear the timer when the user clicks Next early?
4. How would you add a "review your answers" screen without restructuring everything?
5. **Prove it:** rapidly click Next 5 times. Does the timer break? Does the score break? Show me.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-07/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 07 day 3: quiz app"
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

◀ [Day 2](../day-2/) · [⬆ Week 07 — Events, Forms & Real Interactive Apps](../README.md) · [Day 4](../day-4/) ▶
