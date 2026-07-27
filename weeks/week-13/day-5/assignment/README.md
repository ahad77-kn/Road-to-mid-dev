# 🛠️ Assignment — Week 13 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 13](../../README.md)

## What to build

The Week 7 quiz app, in React, with everything it had plus a review screen.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/components/` | the quiz |
| `reset.md` | how changing `key` resets child state |

## ✅ Done when — this is the checklist you are marked against

- [ ] Questions from data; one at a time; progress bar; Previous/Next with answers remembered
- [ ] A per-question timer with `useEffect` cleanup that does **not** leak (this is the day's trap — an uncleaned interval will fire after the component unmounts)
- [ ] Score screen with per-question review and explanations
- [ ] "Try again" fully resets — including the timer and shuffle
- [ ] A `key` on the question component used deliberately to **reset** child state between questions. Explain in `day-5/reset.md` why that works.
- [ ] Shuffle happens once per run, not on every render (note *why* that is a problem, and how you avoided it)

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. How does changing a component's `key` reset its state? Why is that useful here?
2. What does the cleanup function returned from `useEffect` do, and what breaks without it?
3. Why does shuffling inside the render body cause a bug?
4. Where does the timer state live, and why there?
5. **Prove it:** open React DevTools, move through 3 questions, and show me the state changing at each step.

---

[← back to the day](../) · [📖 read first](../learn/)
