# 🛠️ Assignment — Week 15 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 15](../../README.md)

## What to build

A search-as-you-type against an API — the classic race-condition trap.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/components/Search.jsx` | |
| `race.md` | the race condition timeline, the ignore-flag fix and the AbortController fix |
| `screenshots/` | the wrong result, captured before you fixed it |

## ✅ Done when — this is the checklist you are marked against

- [ ] **Demonstrate the race condition first.** Search "a", then quickly "ab", then "abc". With throttling on, make the results for "a" arrive last and overwrite "abc". Screenshot the wrong result. This is the most important screenshot of the week.
- [ ] Fix it with an `ignore` flag in the cleanup function — explain the mechanism in `day-3/race.md`
- [ ] Fix it a **second** way with `AbortController` — and explain the difference between "ignore the result" and "cancel the request"
- [ ] Debounce the input (reuse your own Week 9 debounce)
- [ ] `setState` after unmount avoided — navigate away mid-request and confirm no warnings
- [ ] Cache results in a `useRef` map so repeat searches skip the network

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is a race condition here? Draw the timeline of the failure.
2. How does an `ignore` flag in cleanup fix it? Which closure is the flag in?
3. What does `AbortController` do that the flag does not?
4. Why `useRef` for the cache and not `useState`?
5. **Prove it:** with Slow 3G on, type fast and show me the correct results every time.

---

[← back to the day](../) · [📖 read first](../learn/)
