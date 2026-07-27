# Week 11 · Day 4 — Bug hunt

[🛣️ The Road](../../../README.md) · [📅 Week 11](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 11 — npm, DevTools & Debugging → Phase 3 Exam](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 3 · Tooling · **Week topic:** npm, DevTools & Debugging → Phase 3 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Chrome *Network* panel + MDN *Troubleshooting JavaScript*.

## 2️⃣ Build — 2 hours

The teacher takes three of your finished projects and plants **3 bugs in each** (9 total) across different categories: a logic bug, a CSS bug, an async/timing bug, an event bug, a data-shape bug.

**Rules:** you get the broken repo and the symptom description only, never the diff. Use DevTools. `git diff` against your own history is **not** allowed — that would defeat the point.

## 3️⃣ Must have — the checklist you are marked against

- [ ] All 9 bugs found and fixed
- [ ] `day-4/bug-report.md`, one entry each: **symptom → how I narrowed it down → root cause → fix → how I would have prevented it**
- [ ] Time recorded per bug
- [ ] Each fix on its own branch with its own PR
- [ ] At least one bug found in the Network panel (a request that never fires, or fires with the wrong params)

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Which bug took longest and why?
2. Describe your general process for a bug with no error message.
3. What is the difference between a symptom and a root cause? Give an example from today.
4. Which bug would a test have caught?
5. **Prove it:** live, with me watching, find bug #10 that I plant right now.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-11/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 11 day 4: bug hunt"
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

◀ [Day 3](../day-3/) · [⬆ Week 11 — npm, DevTools & Debugging → Phase 3 Exam](../README.md) · [Day 5](../day-5/) ▶
