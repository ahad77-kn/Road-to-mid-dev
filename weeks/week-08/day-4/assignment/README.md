# 🛠️ Assignment — Week 08 Day 4 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 08](../../README.md)

## What to build

Convert every promise drill to `async`/`await`, then make your first real network call.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `async.js` | all 10 drills rewritten with async/await |
| `index.html` | the page markup |
| `fetch.js` | your first real request, with response.ok checked |

## ✅ Done when — this is the checklist you are marked against

- [ ] All 10 drills rewritten with `async`/`await` in `day-4/`
- [ ] `try/catch/finally` used properly — `finally` turning off a loading flag
- [ ] A real `fetch` from [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users) — logged, then rendered as a simple list
- [ ] **`response.ok` is checked and a non-2xx throws** — the classic beginner bug is assuming `fetch` rejects on a 404. It does not. Demonstrate this with a deliberate 404 and comment on it.
- [ ] A parallel version with `await Promise.all([...])` and a comment comparing it to sequential awaits
- [ ] One deliberate network failure (turn on DevTools offline mode) handled with a friendly message

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Does `fetch` reject on a 404? Prove it. What *does* make it reject?
2. What does `await` actually do to the function it is in — does it block the page?
3. Why must a function be `async` to use `await` inside it? What does an `async` function always return?
4. Two independent requests, awaited one after the other — what is the cost, and how do you fix it?
5. **Prove it:** with DevTools throttled to Slow 3G, show your loading state working.

---

[← back to the day](../) · [📖 read first](../learn/)
