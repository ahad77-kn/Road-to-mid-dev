# Week 11 · Day 5 — Tooling & polish

[🛣️ The Road](../../../README.md) · [📅 Week 11](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 11 — npm, DevTools & Debugging → Phase 3 Exam](../README.md) · [Week 12 · Day 1](../../week-12/day-1/) ▶

**Phase:** Phase 3 · Tooling · **Week topic:** npm, DevTools & Debugging → Phase 3 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Prettier docs + ESLint *Getting started*.

## 2️⃣ Build — 2 hours

Set up the tooling a professional project has, on your best project.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Prettier installed with a `.prettierrc`, and `npm run format` formatting the whole project
- [ ] ESLint installed and configured; fix **every** warning it reports (or disable a rule with a written justification)
- [ ] An `.editorconfig`
- [ ] Format-on-save enabled in your editor — screenshot the setting
- [ ] `npm run lint` and `npm run format` in `package.json` scripts
- [ ] The project README upgraded: badges, screenshot, feature list, setup steps, folder structure, a "known issues" section
- [ ] `day-5/tooling.md`: what ESLint caught that you did not know was wrong

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Prettier vs ESLint — what does each one do? Where do they overlap?
2. What is a linter *rule*, and when is disabling one legitimate?
3. Why does a team need a shared formatter at all? (Hint: it is about diffs, not taste.)
4. What did ESLint find in your code that surprised you?
5. **Prove it:** deliberately write badly formatted, lint-breaking code. Show both tools catching it.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-11/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 11 day 5: tooling polish"
git push
```

> ⚠️ **After this day comes the Phase 3 exam** — see [the week page](../README.md#-phase-3-exam) and put the work in [`../exam/`](../exam/).

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

◀ [Day 4](../day-4/) · [⬆ Week 11 — npm, DevTools & Debugging → Phase 3 Exam](../README.md) · [Week 12 · Day 1](../../week-12/day-1/) ▶
