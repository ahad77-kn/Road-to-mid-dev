# Week 12 · Day 1 — Setup & JSX

[🛣️ The Road](../../../README.md) · [📅 Week 12](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 11 · Day 5](../../week-11/day-5/) · [⬆ Week 12 — React Basics: Components, JSX, Props & State](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 4 · React · **Week topic:** React Basics: Components, JSX, Props & State
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Vite guide + react.dev *Quick start*.

## 2️⃣ Build — 2 hours

A Vite React project in `day-1/`, then 10 JSX drills in one page.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Project runs with `npm run dev`; you can explain what `main.jsx`, `App.jsx` and `index.html` each do
- [ ] `day-1/jsx-notes.md`: the 6 rules of JSX (single root, `className`, closed tags, camelCase attributes, `{}` for expressions, no `if` statements inside JSX) — each with your own example
- [ ] 10 drills rendering: a variable, an expression, a conditional with `&&`, a ternary, a list with `.map`, an inline style object, an image with an imported asset, a fragment `<>`, a nested component, and a comment inside JSX
- [ ] One deliberate error of each kind, screenshotted with the error message and your explanation: missing key, unclosed tag, `class` instead of `className`, object rendered directly
- [ ] React DevTools installed; screenshot the component tree

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is JSX really — what does the browser receive?
2. Why `className` and not `class`?
3. Why must a component return a single root element, and what does `<>` solve?
4. What happens if you render `{someObject}` directly? What is the error?
5. **Prove it:** write a component that renders a name in uppercase only if it is longer than 5 characters — in JSX, no helper function.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-12/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 12 day 1: setup jsx"
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

◀ [Week 11 · Day 5](../../week-11/day-5/) · [⬆ Week 12 — React Basics: Components, JSX, Props & State](../README.md) · [Day 2](../day-2/) ▶
