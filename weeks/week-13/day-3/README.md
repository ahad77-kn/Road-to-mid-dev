# Week 13 · Day 3 — To-do in React

[🛣️ The Road](../../../README.md) · [📅 Week 13](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 13 — Lists, Keys, Conditional Rendering & Controlled Forms](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 4 · React · **Week topic:** Lists, Keys, Conditional Rendering & Controlled Forms
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Reacting to input with state* + *Choosing the state structure*.

## 2️⃣ Build — 2 hours

The Week 7 to-do app, in React, feature for feature.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Add, delete, toggle done, edit in place, filter (All/Active/Done), clear completed, live count
- [ ] Components: `App`, `TodoForm`, `TodoList`, `TodoItem`, `TodoFilters`, `TodoStats`
- [ ] All state in `App`, passed down as props; children call handler props
- [ ] The filter is **derived** at render time — not stored as a second array in state. This is the day's real lesson.
- [ ] Persisted to localStorage (a plain effect is fine here; you will refine it in Week 15)
- [ ] `day-3/comparison.md`: your vanilla-JS to-do vs this one. Line count, what disappeared, what appeared, and which you would rather maintain.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is derived state, and why is storing the filtered list separately a bug waiting to happen?
2. Where did your `render()` function go?
3. How does a child tell the parent something happened?
4. Name three things React removed compared with your vanilla version. Name one thing it made harder.
5. **Prove it:** add a "due date" field to every todo. If your state structure is good, it is a small change.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-13/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 13 day 3: to do in react"
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

◀ [Day 2](../day-2/) · [⬆ Week 13 — Lists, Keys, Conditional Rendering & Controlled Forms](../README.md) · [Day 4](../day-4/) ▶
