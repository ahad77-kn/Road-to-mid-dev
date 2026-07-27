# 🛠️ Assignment — Week 15 Day 4 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 15](../../README.md)

## What to build

Extract everything from Days 2–3 into reusable hooks.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/hooks/useFetch.js` | |
| `src/hooks/useDebounce.js` | |
| `src/hooks/useLocalStorage.js` | |
| `src/hooks/usePrevious.js` | |
| `hooks.md` | the rules of hooks in your own words |

## ✅ Done when — this is the checklist you are marked against

- [ ] `useFetch(url, options)` returning `{ data, loading, error, refetch }` — with abort and race protection built in
- [ ] `useDebounce(value, delay)`
- [ ] `useLocalStorage(key, initial)` returning a `[value, setValue]` pair that behaves like `useState`
- [ ] `usePrevious(value)`
- [ ] All in `src/hooks/`, one file each, each with a JSDoc comment
- [ ] Every hook used in at least one component, proving it works
- [ ] Rebuild Day 2's app using only these hooks — the component should now be almost entirely JSX
- [ ] `day-4/hooks.md`: the rules of hooks, in your own words, and why they exist

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What makes a function a "hook"? Why must the name start with `use`?
2. What are the rules of hooks, and what breaks if you call one inside an `if`?
3. Do two components using `useFetch` share state? Why not?
4. How does `useLocalStorage` stay in sync with React state?
5. **Prove it:** write a new `useToggle` hook, live, in under 3 minutes.

---

[← back to the day](../) · [📖 read first](../learn/)
