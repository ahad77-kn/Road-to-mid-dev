# Week 11 · Day 2 — Elements & Console

[🛣️ The Road](../../../README.md) · [📅 Week 11](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 11 — npm, DevTools & Debugging → Phase 3 Exam](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 3 · Tooling · **Week topic:** npm, DevTools & Debugging → Phase 3 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Chrome DevTools *Elements* + *CSS features*.

## 2️⃣ Build — 2 hours

Take a **live production site** (any big Pakistani or international site) and investigate it. Write `day-2/devtools-report.md`.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Find an element whose colour comes from an inherited rule — show the chain in the Computed tab
- [ ] Use `:hov` to force `:hover` and `:focus` states, screenshot a state you could not otherwise catch
- [ ] Find the CSS custom properties the site defines in `:root` and list 5
- [ ] Use the Layout panel to overlay their grid or flexbox and screenshot it
- [ ] Console utilities used and explained: `$0`, `$$('a')`, `console.table`, `console.group`, `copy()`, `monitorEvents($0)`
- [ ] Find one accessibility issue with the Accessibility pane and write how you would fix it
- [ ] Use the Coverage tool to find unused CSS on the page — record the percentage

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is `$0` in the console?
2. Computed tab vs Styles tab — when is each the one you want?
3. How do you inspect an element that disappears the moment you move the mouse?
4. What does `console.table` do that `console.log` does not?
5. **Prove it:** on a site you have never seen, find why a specific button is the colour it is, in under 60 seconds.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-11/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 11 day 2: elements console"
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

◀ [Day 1](../day-1/) · [⬆ Week 11 — npm, DevTools & Debugging → Phase 3 Exam](../README.md) · [Day 3](../day-3/) ▶
