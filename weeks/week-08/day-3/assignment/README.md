# 🛠️ Assignment — Week 08 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 08](../../README.md)

## What to build

In `day-3/`, write promise drills from scratch. **No `fetch` today** — fake the delays with `setTimeout`. Understanding the machine before using it is the whole point.

1. `delay(ms)` — returns a promise resolving after ms. Use it: `delay(1000).then(() => console.log("done"))`
2. `fakeFetchUser(id)` — resolves with a user object after 1s; **rejects** if id < 1
3. Chain three of them so user → posts → comments load in sequence. Log the total time.
4. Now run the same three in parallel with `Promise.all`. Log the time. Explain the difference in a comment.
5. `Promise.allSettled` — with one of them failing. Show what you get back.
6. `Promise.race` — implement a 2-second timeout on a slow operation
7. A `retry(fn, times)` helper that retries a failing promise up to n times
8. Deliberately create an unhandled rejection, see the console error, then fix it
9. Convert one callback-style function to a promise-based one
10. `day-3/order.js` — predict the output order of a mixed `console.log` / `setTimeout` / `Promise.resolve().then()` block, **write your prediction as a comment first**, then run it

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `promises.js` | all 10 drills, each commented |
| `order.js` | your predicted output order as a comment, then the real one |
| `notes.md` | pending/fulfilled/rejected in your own words |

## ✅ Done when — this is the checklist you are marked against

- [ ] All 10 drills, each with a comment explaining what it demonstrates
- [ ] Drill 10's prediction written *before* running, and a note on whether you were right
- [ ] Every promise has a `.catch` — no unhandled rejections left
- [ ] `day-3/notes.md`: pending/fulfilled/rejected explained in your own words

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What are the three states of a promise? Can it change state twice?
2. Why does `Promise.all` finish faster than three chained `.then`s? Draw the timeline.
3. What is the difference between `Promise.all` and `Promise.allSettled`? When do you want each?
4. Explain the output order in drill 10 — why does the promise callback beat the `setTimeout(0)`?
5. **Prove it:** given a snippet with a missing `return` inside a `.then` chain, find the bug.

---

[← back to the day](../) · [📖 read first](../learn/)
