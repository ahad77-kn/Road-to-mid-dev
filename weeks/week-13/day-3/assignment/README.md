# 🛠️ Assignment — Week 13 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 13](../../README.md)

## What to build

The Week 7 to-do app, in React, feature for feature.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/components/` | App, TodoForm, TodoList, TodoItem, TodoFilters, TodoStats |
| `comparison.md` | vanilla vs React: line count, what vanished, what appeared |

## ✅ Done when — this is the checklist you are marked against

- [ ] Add, delete, toggle done, edit in place, filter (All/Active/Done), clear completed, live count
- [ ] Components: `App`, `TodoForm`, `TodoList`, `TodoItem`, `TodoFilters`, `TodoStats`
- [ ] All state in `App`, passed down as props; children call handler props
- [ ] The filter is **derived** at render time — not stored as a second array in state. This is the day's real lesson.
- [ ] Persisted to localStorage (a plain effect is fine here; you will refine it in Week 15)
- [ ] `day-3/comparison.md`: your vanilla-JS to-do vs this one. Line count, what disappeared, what appeared, and which you would rather maintain.

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is derived state, and why is storing the filtered list separately a bug waiting to happen?
2. Where did your `render()` function go?
3. How does a child tell the parent something happened?
4. Name three things React removed compared with your vanilla version. Name one thing it made harder.
5. **Prove it:** add a "due date" field to every todo. If your state structure is good, it is a small change.

---

[← back to the day](../) · [📖 read first](../learn/)
