# 🛠️ Assignment — Week 15 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 15](../../README.md)

## What to build

A user browser against [jsonplaceholder](https://jsonplaceholder.typicode.com/) or [randomuser.me](https://randomuser.me/).

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/components/` | the user browser |
| `states.md` | a state diagram of every UI path |
| `screenshots/` | all four states captured |

## ✅ Done when — this is the checklist you are marked against

- [ ] Fetch on mount inside an effect with the right dependencies
- [ ] Four states handled explicitly: `loading`, `error`, `empty`, `success` — all four visibly different
- [ ] Skeleton loaders, not a spinner
- [ ] Retry button on error that actually refetches
- [ ] `response.ok` checked; non-2xx throws
- [ ] Refetch when a filter prop changes — and *not* on unrelated re-renders
- [ ] `day-2/states.md`: a state diagram of every path the UI can take
- [ ] Test all paths with DevTools throttling and offline mode; screenshot each

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Why is `loading` starting as `true` usually right?
2. What happens if you forget the dependency array on a fetching effect?
3. How do you make sure the loading flag is turned off even when the fetch throws?
4. What is the difference between "no data yet" and "data is an empty list"? Why must the UI differ?
5. **Prove it:** show me all four states, on demand, without editing code.

---

[← back to the day](../) · [📖 read first](../learn/)
