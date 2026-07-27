# Week 12 · Day 3 — Props

[🛣️ The Road](../../../README.md) · [📅 Week 12](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 12 — React Basics: Components, JSX, Props & State](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 4 · React · **Week topic:** React Basics: Components, JSX, Props & State
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Passing props* + *JavaScript in JSX*.

## 2️⃣ Build — 2 hours

One `ProfileCard` component, rendered 5 times with completely different data.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `ProfileCard` takes props: `name`, `role`, `avatar`, `bio`, `skills` (array), `social` (object), `isAvailable` (boolean)
- [ ] Props destructured in the parameter list
- [ ] Default props via default parameter values
- [ ] Conditional rendering based on `isAvailable` — an "Available for work" badge
- [ ] The `skills` array rendered with `.map` and proper `key`s
- [ ] A `children` prop used somewhere — a `<Card>` wrapper that renders whatever is inside it
- [ ] One component that takes a **function** as a prop (`onContactClick`) and calls it
- [ ] Data lives in a `profiles.js` array; the page maps over it — **zero** hard-coded cards in the JSX
- [ ] `day-3/props.md`: why props are read-only, and what happens if you try to modify one

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Are props mutable? What happens if you assign to one?
2. What is `children` and when is it better than a named prop?
3. How do you pass a function down, and why would you?
4. What is prop drilling? Show where it would start to hurt in your own code.
5. **Prove it:** add a 6th profile by editing only the data file.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-12/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 12 day 3: props"
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

◀ [Day 2](../day-2/) · [⬆ Week 12 — React Basics: Components, JSX, Props & State](../README.md) · [Day 4](../day-4/) ▶
