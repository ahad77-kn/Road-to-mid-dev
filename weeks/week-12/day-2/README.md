# Week 12 · Day 2 — Components

[🛣️ The Road](../../../README.md) · [📅 Week 12](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 12 — React Basics: Components, JSX, Props & State](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 4 · React · **Week topic:** React Basics: Components, JSX, Props & State
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Your first component*, *Importing and exporting*, *Writing markup with JSX*.

## 2️⃣ Build — 2 hours

Rebuild your Week 3 portfolio page as React components in `day-2/`.

## 3️⃣ Must have — the checklist you are marked against

- [ ] At least 8 components, one per file, in `src/components/`
- [ ] Sensible split: `Header`, `Nav`, `Hero`, `About`, `SkillList`, `SkillBadge`, `ProjectCard`, `Footer`
- [ ] Every component name is PascalCase and its file matches
- [ ] No component longer than 60 lines
- [ ] CSS handled with CSS Modules (`Component.module.css`) — explain in a comment what problem that solves
- [ ] `day-2/component-tree.md`: a diagram of your component tree and one paragraph on *why* you drew the boundaries where you did

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. When should something become its own component? Give your rule.
2. Where is the line between "too many small components" and "one giant one"?
3. What is the difference between a component and a regular function?
4. What problem do CSS Modules solve that a plain `.css` import does not?
5. **Prove it:** I point at a section of your page; you tell me which component renders it, without looking at the code.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-12/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 12 day 2: components"
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

◀ [Day 1](../day-1/) · [⬆ Week 12 — React Basics: Components, JSX, Props & State](../README.md) · [Day 3](../day-3/) ▶
