# Week 13 — Lists, Keys, Conditional Rendering & Controlled Forms

[← The Road](../../README.md) · Phase 4 · React · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 12](../week-12/) · **Next:** [Week 14 — State design →](../week-14/)

> **Goal:** rebuild apps you already know in React, so that "the React way" is the only new variable.

**Why this week matters:** you built the to-do and quiz apps by hand in Weeks 6–7. Rebuilding known apps is the fastest way to isolate what React actually changes. You are not learning the app — you are learning the framework.

---

## 📖 Learning material — 1 hr/day

| Day | Read + type | Source |
| --- | --- | --- |
| D1 | [Rendering lists](https://react.dev/learn/rendering-lists) · [Keeping components pure](https://react.dev/learn/keeping-components-pure) | react.dev |
| D2 | [Updating objects in state](https://react.dev/learn/updating-objects-in-state) · [Updating arrays in state](https://react.dev/learn/updating-arrays-in-state) | react.dev |
| D3 | [Reacting to input with state](https://react.dev/learn/reacting-to-input-with-state) · [Choosing the state structure](https://react.dev/learn/choosing-the-state-structure) | react.dev |
| D4 | [Sharing state between components](https://react.dev/learn/sharing-state-between-components) | react.dev |
| D5 | [Preserving and resetting state](https://react.dev/learn/preserving-and-resetting-state) | react.dev |

### 📰 Articles worth your time this week
- [react.dev: You might not need an effect](https://react.dev/learn/you-might-not-need-an-effect) — read it **now**, before Week 15, so you never write the bad version
- [Why keys matter, with the index-key bug demonstrated](https://react.dev/learn/rendering-lists#why-does-react-need-keys)
- [MDN: Controlled vs uncontrolled form fields](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) + [react.dev on controlled inputs](https://react.dev/reference/react-dom/components/input)

---

## 🗓️ The week at a glance

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Lists & keys — including the index-key bug, proved | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | Immutable state updates — arrays and objects | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | To-do app in React | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | Controlled forms — the signup form in React | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | Quiz app in React | [📄 open →](day-5/) | – |

---

## ✅ End-of-week check

- [ ] You never mutate state; the immutable form is the one that comes out of your fingers
- [ ] You use stable ids as keys and can explain the index-key bug
- [ ] You derive values at render instead of storing them
- [ ] Controlled forms are routine
- [ ] You clean up every effect that starts something

Next week: how to structure state when the app gets big enough that `useState` calls start multiplying.
