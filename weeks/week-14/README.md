# Week 14 — State Design: Lifting State & `useReducer`

[← The Road](../../README.md) · Phase 4 · React · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 13](../week-13/) · **Next:** [Week 15 — Effects & data fetching →](../week-15/)

> **Goal:** design state before writing components. Most React bugs are state-shape bugs wearing a costume.

**Why this week matters:** anyone can call `useState`. What separates a junior from a mid-level React developer is knowing *what* to put in state, *where* it should live, and what should be derived instead. Get this wrong and every feature after it fights you. One multi-component app, built properly, all week.

**The four questions to ask before every `useState`:**
1. Does this change over time? (No → it is a constant, not state.)
2. Can I calculate it from other state? (Yes → derive it, do not store it.)
3. Does it come from props unchanged? (Yes → do not copy it into state.)
4. Which components need it? (State goes in their closest common parent — and no higher.)

---

## 📖 Learning material — 1 hr/day

| Day | Read + type | Source |
| --- | --- | --- |
| D1 | [Choosing the state structure](https://react.dev/learn/choosing-the-state-structure) — the most useful page on the site | react.dev |
| D2 | [Sharing state between components](https://react.dev/learn/sharing-state-between-components) · [Thinking in React](https://react.dev/learn/thinking-in-react) | react.dev |
| D3 | [Extracting state logic into a reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer) | react.dev |
| D4 | [`useReducer` reference](https://react.dev/reference/react/useReducer) · [`useState` vs `useReducer`](https://react.dev/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer) | react.dev |
| D5 | [Preserving and resetting state](https://react.dev/learn/preserving-and-resetting-state) · [`useMemo`](https://react.dev/reference/react/useMemo) | react.dev |

### 📰 Articles worth your time this week
- [Kent C. Dodds: Application state management with React](https://kentcdodds.com/blog/application-state-management-with-react) — why you probably do not need Redux
- [Kent C. Dodds: State colocation](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster) — put state as low as it can go
- [react.dev: Passing data deeply with context](https://react.dev/learn/passing-data-deeply-with-context) — preview for Week 16

---

## 🗓️ The week at a glance

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Design the expense tracker on paper, then build the form | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | List, total & lifted state | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | Filters, sorting & derived values | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | Refactor the whole thing to `useReducer` | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | Charts, edit mode & polish | [📄 open →](day-5/) | – |

---

## ✅ End-of-week check

- [ ] You design state before writing components
- [ ] You derive rather than store, by default
- [ ] You know when `useReducer` earns its complexity
- [ ] You can justify the location of every piece of state in your app
- [ ] You measure before optimising

Next week the data stops being local and starts coming from a server — with all the waiting and failing that implies.
