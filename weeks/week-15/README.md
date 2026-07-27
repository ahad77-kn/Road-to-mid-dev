# Week 15 — `useEffect`, Data Fetching & Custom Hooks

[← The Road](../../README.md) · Phase 4 · React · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 14](../week-14/) · **Next:** [Week 16 — Router & Context →](../week-16/)

> **Goal:** connect React to a server, handle every failure mode, and extract the pattern into a reusable hook.

**Why this week matters:** `useEffect` is the most misused hook in React. Most beginners reach for it constantly and most of those uses are wrong. This week you learn when it is genuinely needed (synchronising with something outside React) and — more importantly — when it is not.

**Read this before you write a single effect:** [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect). If your effect only transforms data for rendering, or handles a user event, it should not be an effect.

---

## 📖 Learning material — 1 hr/day

| Day | Read + type | Source |
| --- | --- | --- |
| D1 | [Synchronizing with effects](https://react.dev/learn/synchronizing-with-effects) · [You might not need an effect](https://react.dev/learn/you-might-not-need-an-effect) | react.dev |
| D2 | [Lifecycle of reactive effects](https://react.dev/learn/lifecycle-of-reactive-effects) · [Separating events from effects](https://react.dev/learn/separating-events-from-effects) | react.dev |
| D3 | [Removing effect dependencies](https://react.dev/learn/removing-effect-dependencies) | react.dev |
| D4 | [Reusing logic with custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) | react.dev |
| D5 | [`useRef`](https://react.dev/learn/referencing-values-with-refs) · [Manipulating the DOM with refs](https://react.dev/learn/manipulating-the-dom-with-refs) | react.dev |

### 📰 Articles worth your time this week
- [react.dev: Fetching data in effects — the caveats](https://react.dev/learn/synchronizing-with-effects#fetching-data) — read the "what are good alternatives" box carefully
- [TanStack Query: motivation](https://tanstack.com/query/latest/docs/framework/react/overview) — what a real app uses instead; you are hand-rolling it this week to understand *why* it exists
- [MDN: `AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) — again, now inside React
- [react.dev: `<StrictMode>`](https://react.dev/reference/react/StrictMode) — why your effect runs twice in dev, and why that is a feature

---

## 🗓️ The week at a glance

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Effect drills — including three effects that should not exist | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | Fetching with loading, error & empty states | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | Race conditions, cleanup & abort | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | Extract a `useFetch` custom hook | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | Movie search rebuilt in React with your hooks | [📄 open →](day-5/) | – |

---

## ✅ End-of-week check

- [ ] You ask "does this need an effect?" and usually answer no
- [ ] Every effect that subscribes has a cleanup
- [ ] Race conditions are something you prevent by default, not discover in production
- [ ] You extract repeated logic into custom hooks naturally
- [ ] You can explain why libraries like TanStack Query exist — because you just built a worse version of one

Next week: multiple pages, shared state and your first taste of protected routes.
