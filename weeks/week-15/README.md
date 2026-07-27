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

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Effect drills — including three effects that should not exist | [`day-1/`](day-1/) | – |
| D2 | Fetching with loading, error & empty states | [`day-2/`](day-2/) | – |
| D3 | Race conditions, cleanup & abort | [`day-3/`](day-3/) | – |
| D4 | Extract a `useFetch` custom hook | [`day-4/`](day-4/) | – |
| D5 | Movie search rebuilt in React with your hooks | [`day-5/`](day-5/) | – |

---

## Day 1 — Effect drills

**Read first (1 hr):** react.dev *Synchronizing with effects* + *You might not need an effect*.

**Build (2 hr):** In `day-1/`, ten small demos, each in its own component.

Effects that **are** correct:
1. Set `document.title` from state
2. Add a `window` resize listener (with cleanup) showing live width
3. `setInterval` clock (with cleanup)
4. Focus an input on mount
5. Sync a value to localStorage
6. A `keydown` listener for a keyboard shortcut (with cleanup)

Effects that are **wrong** — write the bad version, screenshot the problem, then fix without an effect:
7. An effect that computes a derived value into state (infinite loop or lag) → derive during render
8. An effect that resets state when a prop changes → use a `key` instead
9. An effect that handles a button click → put it in the handler
10. An effect with a missing dependency → show the stale closure bug, then fix it

**Must have**
- [ ] All 10, each with a comment: what it does, why it is (or is not) a legitimate effect
- [ ] Every effect that subscribes to something has a cleanup function
- [ ] `day-1/effects.md`: your own rule for when an effect is warranted
- [ ] A demonstration of Strict Mode double-invocation, with an explanation of why React does it

**🧪 Test material**
1. What is an effect *for*, in one sentence?
2. What does the cleanup function do, and when exactly does React call it?
3. `[]` vs `[dep]` vs no dependency array — what does each mean?
4. Why does your effect run twice in development? Is that a bug?
5. **Prove it:** I describe a scenario; you tell me whether it needs an effect. Five in a row.

---

## Day 2 — Fetching properly

**Read first (1 hr):** react.dev *Lifecycle of reactive effects* + *Separating events from effects*.

**Build (2 hr):** A user browser against [jsonplaceholder](https://jsonplaceholder.typicode.com/) or [randomuser.me](https://randomuser.me/).

**Must have**
- [ ] Fetch on mount inside an effect with the right dependencies
- [ ] Four states handled explicitly: `loading`, `error`, `empty`, `success` — all four visibly different
- [ ] Skeleton loaders, not a spinner
- [ ] Retry button on error that actually refetches
- [ ] `response.ok` checked; non-2xx throws
- [ ] Refetch when a filter prop changes — and *not* on unrelated re-renders
- [ ] `day-2/states.md`: a state diagram of every path the UI can take
- [ ] Test all paths with DevTools throttling and offline mode; screenshot each

**🧪 Test material**
1. Why is `loading` starting as `true` usually right?
2. What happens if you forget the dependency array on a fetching effect?
3. How do you make sure the loading flag is turned off even when the fetch throws?
4. What is the difference between "no data yet" and "data is an empty list"? Why must the UI differ?
5. **Prove it:** show me all four states, on demand, without editing code.

---

## Day 3 — Race conditions & cleanup

**Read first (1 hr):** react.dev *Removing effect dependencies*.

**Build (2 hr):** A search-as-you-type against an API — the classic race-condition trap.

**Must have**
- [ ] **Demonstrate the race condition first.** Search "a", then quickly "ab", then "abc". With throttling on, make the results for "a" arrive last and overwrite "abc". Screenshot the wrong result. This is the most important screenshot of the week.
- [ ] Fix it with an `ignore` flag in the cleanup function — explain the mechanism in `day-3/race.md`
- [ ] Fix it a **second** way with `AbortController` — and explain the difference between "ignore the result" and "cancel the request"
- [ ] Debounce the input (reuse your own Week 9 debounce)
- [ ] `setState` after unmount avoided — navigate away mid-request and confirm no warnings
- [ ] Cache results in a `useRef` map so repeat searches skip the network

**🧪 Test material**
1. What is a race condition here? Draw the timeline of the failure.
2. How does an `ignore` flag in cleanup fix it? Which closure is the flag in?
3. What does `AbortController` do that the flag does not?
4. Why `useRef` for the cache and not `useState`?
5. **Prove it:** with Slow 3G on, type fast and show me the correct results every time.

---

## Day 4 — `useFetch`

**Read first (1 hr):** react.dev *Reusing logic with custom hooks*.

**Build (2 hr):** Extract everything from Days 2–3 into reusable hooks.

**Must have**
- [ ] `useFetch(url, options)` returning `{ data, loading, error, refetch }` — with abort and race protection built in
- [ ] `useDebounce(value, delay)`
- [ ] `useLocalStorage(key, initial)` returning a `[value, setValue]` pair that behaves like `useState`
- [ ] `usePrevious(value)`
- [ ] All in `src/hooks/`, one file each, each with a JSDoc comment
- [ ] Every hook used in at least one component, proving it works
- [ ] Rebuild Day 2's app using only these hooks — the component should now be almost entirely JSX
- [ ] `day-4/hooks.md`: the rules of hooks, in your own words, and why they exist

**🧪 Test material**
1. What makes a function a "hook"? Why must the name start with `use`?
2. What are the rules of hooks, and what breaks if you call one inside an `if`?
3. Do two components using `useFetch` share state? Why not?
4. How does `useLocalStorage` stay in sync with React state?
5. **Prove it:** write a new `useToggle` hook, live, in under 3 minutes.

---

## Day 5 — Movie search, React edition

**Read first (1 hr):** react.dev *`useRef`* + *Manipulating the DOM with refs*.

**Build (2 hr):** Rebuild the Week 9 movie search in React using your own hooks.

**Must have**
- [ ] Search with debounce, results grid, loading skeletons, error and empty states
- [ ] Built on `useFetch` + `useDebounce` — no raw `fetch` in any component
- [ ] Recent searches via `useLocalStorage`, shown as clickable chips
- [ ] Infinite scroll or "load more" with pagination
- [ ] A `useRef` used to focus the search input on mount and after clearing
- [ ] Images lazy-loaded with a blur-up placeholder
- [ ] `day-5/vanilla-vs-react.md`: this vs your Week 9 version — line counts, what got easier, what got harder, and which you would maintain

**🧪 Test material**
1. What is a ref, and how is it different from state?
2. When does changing a ref cause a re-render? (Trick question — answer it.)
3. Compare this with your vanilla version: what did React genuinely give you here?
4. How does your `useFetch` prevent the race condition inside this app?
5. **Prove it:** open the Profiler while typing. Show which components re-render per keystroke, and justify each one.

---

## ✅ End-of-week check

- [ ] You ask "does this need an effect?" and usually answer no
- [ ] Every effect that subscribes has a cleanup
- [ ] Race conditions are something you prevent by default, not discover in production
- [ ] You extract repeated logic into custom hooks naturally
- [ ] You can explain why libraries like TanStack Query exist — because you just built a worse version of one

Next week: multiple pages, shared state and your first taste of protected routes.
