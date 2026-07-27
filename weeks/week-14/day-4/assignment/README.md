# 🛠️ Assignment — Week 14 Day 4 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 14](../../README.md)

## What to build

Refactor everything to a reducer. **No new features today** — a pure refactor, which is a skill in itself.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/reducers/expensesReducer.js` | pure, testable without React |
| `src/reducers/filtersReducer.js` | |
| `reducer.md` | your rule for useState vs useReducer, and what this refactor changed |

## ✅ Done when — this is the checklist you are marked against

- [ ] One `expensesReducer` handling: `ADD`, `DELETE`, `UPDATE`, `CLEAR_ALL`, `IMPORT`
- [ ] One `filtersReducer` (or a combined one) handling all filter actions plus `RESET_FILTERS`
- [ ] Action objects with `{ type, payload }`; the reducer is a pure function with **no side effects** in it
- [ ] `default:` case throws on an unknown action type — explain why that is better than silently returning state
- [ ] The reducer lives in its own file and could be tested without React at all
- [ ] `day-4/reducer.md`: `useState` vs `useReducer` — your own rule for when to reach for each, and what got better/worse in this refactor
- [ ] The app behaves **identically** to Day 3 — prove it with before/after screenshots

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is a reducer, mathematically? (state, action) → ?
2. Why must a reducer be pure? What breaks in React Strict Mode if it is not?
3. When is `useReducer` worth it over `useState`?
4. How would you unit-test your reducer with no browser involved?
5. **Prove it:** add an `UNDO_DELETE` action. With a reducer this should be straightforward — do it live.

---

[← back to the day](../) · [📖 read first](../learn/)
