# Week 24 · Day 5 — Prepare the defence

[🛣️ The Road](../../../README.md) · [📅 Week 24](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 24 — Capstone: Polish, Deploy, Demo → Final Exam](../README.md) · _end of the road_ 🎓

**Phase:** Phase 6 · Capstone · **Week topic:** Capstone: Polish, Deploy, Demo → Final Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

*How to demo software* + the STAR method.

## 2️⃣ Build — 2 hours

Rehearse. A great project demoed badly reads as a mediocre project.

## 3️⃣ Must have — the checklist you are marked against

- [ ] A 10-minute demo script: the problem (1 min) → live walkthrough of the main flow (5 min) → one technically interesting part (2 min) → what you would do next (1 min) → questions
- [ ] **Rehearsed out loud three times**, timed. Not read in your head — spoken.
- [ ] A backup: a recorded video of the demo, in case the internet fails on the day. This is not pessimism; it is professionalism.
- [ ] Demo data prepared so the app looks used, not empty
- [ ] `day-5/defence.md`: written answers to the questions you *expect*, including:
  - Why this schema? What would you change?
  - What happens when the token expires?
  - How do you prevent user A reading user B's data?
  - What is the biggest weakness in this codebase?
  - What was the hardest bug, and how did you find it?
  - What would you do differently starting again?
  - How would this cope with 10,000 users?
- [ ] A one-page project summary for your portfolio: problem, solution, stack, your role, outcome, links

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Give the demo, timed, no notes.
2. Answer three questions I pick at random from your own list.
3. What is the weakest part of your project? (An honest answer scores higher than a defensive one — every time.)

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-24/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 24 day 5: prepare the defence"
git push
```

> ⚠️ **After this day comes the Phase 6 exam** — see [the week page](../README.md#-phase-6-exam) and put the work in [`../exam/`](../exam/).

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

◀ [Day 4](../day-4/) · [⬆ Week 24 — Capstone: Polish, Deploy, Demo → Final Exam](../README.md) · _end of the road_ 🎓
