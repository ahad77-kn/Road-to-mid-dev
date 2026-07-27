# Week 12 — React Basics: Components, JSX, Props & State

[← The Road](../../README.md) · Phase 4 · React · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 11](../week-11/) · **Next:** [Week 13 — Lists & forms →](../week-13/)

> **Goal:** think in components. Stop asking "how do I change this element?" and start asking "what data does this piece of UI need?"

**Why this week matters:** React is the most-demanded frontend skill in job listings, in Pakistan and remote. But the reason we did Week 6 by hand first is that React is *not magic* — it is the `state → render()` pattern you already built, with the DOM updates automated. This week you will recognise most of it.

**The one sentence that explains React:** your UI is a function of your state. Change the state, React works out the minimum DOM changes needed, and does them. You never touch the DOM again.

---

## 📖 Learning material — 1 hr/day

| Day | Read + type | Source |
| --- | --- | --- |
| D1 | [Vite guide: getting started](https://vite.dev/guide/) · [react.dev: Quick start](https://react.dev/learn) | Vite / react.dev |
| D2 | [Your first component](https://react.dev/learn/your-first-component) · [Importing & exporting](https://react.dev/learn/importing-and-exporting-components) · [Writing markup with JSX](https://react.dev/learn/writing-markup-with-jsx) | react.dev |
| D3 | [Passing props to a component](https://react.dev/learn/passing-props-to-a-component) · [JavaScript in JSX](https://react.dev/learn/javascript-in-jsx-with-curly-braces) | react.dev |
| D4 | [Responding to events](https://react.dev/learn/responding-to-events) · [State: a component's memory](https://react.dev/learn/state-a-components-memory) | react.dev |
| D5 | [Render and commit](https://react.dev/learn/render-and-commit) · [State as a snapshot](https://react.dev/learn/state-as-a-snapshot) · [Conditional rendering](https://react.dev/learn/conditional-rendering) | react.dev |

### 📰 Articles worth your time this week
- [react.dev: Thinking in React](https://react.dev/learn/thinking-in-react) — read it on Day 1 and again on Day 5; it means something different each time
- [react.dev: Keeping components pure](https://react.dev/learn/keeping-components-pure)
- [react.dev: Queueing a series of state updates](https://react.dev/learn/queueing-a-series-of-state-updates) — the answer to "why is my state one step behind?"
- Install [React DevTools](https://react.dev/learn/react-developer-tools) today. Use it every day from now on.

**Setup for the whole phase:**
```bash
npm create vite@latest my-app -- --template react
cd my-app && npm install && npm run dev
```

---

## 🗓️ The week at a glance

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Vite setup + JSX drills | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | Split a page into components | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | Profile card reused 5× with different props | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | Counter in React — `useState` and events | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | FAQ accordion — conditional rendering | [📄 open →](day-5/) | – |

---

## ✅ End-of-week check

- [ ] You can create a Vite React project and be productive in 5 minutes
- [ ] You split UI into components without being told where to cut
- [ ] Props and state are clearly different things in your head
- [ ] You use the functional update form when the new state depends on the old
- [ ] You can say where a piece of state should live and defend it

Next week: lists, keys and controlled forms — and rebuilding the to-do app the React way.
