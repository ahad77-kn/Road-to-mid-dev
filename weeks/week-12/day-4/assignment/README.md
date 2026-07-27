# 🛠️ Assignment — Week 12 Day 4 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 12](../../README.md)

## What to build

The Week 6 counter, in React — then compare the two.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/components/Counter.jsx` | |
| `vanilla-vs-react.md` | your Week 6 counter vs this one — where did render() go? |

## ✅ Done when — this is the checklist you are marked against

- [ ] Counter with +, −, reset, and a step input, all via `useState`
- [ ] Colour class changes below/above zero
- [ ] Buttons disabled at min/max
- [ ] The **functional update form** `setCount(c => c + 1)` used, with a comment on why it is safer than `setCount(count + 1)`
- [ ] A deliberate demonstration of the stale-state trap: call `setCount(count + 1)` three times in one handler, show it only increments by 1, then fix it with the functional form and explain
- [ ] A second independent counter on the same page — proving state is per-instance
- [ ] `day-4/vanilla-vs-react.md`: your Week 6 counter and this one side by side. What did React remove? What did it add? Where is the `render()` function now?

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Why can you not just write `count = count + 1`?
2. What does "state is a snapshot" mean? Explain your three-increments demo.
3. When is `setCount(c => c + 1)` required rather than optional?
4. Two `<Counter />` components on one page — do they share state? Why not?
5. **Prove it:** predict the output of a handler I write that calls `setState` twice, before running it.

---

[← back to the day](../) · [📖 read first](../learn/)
