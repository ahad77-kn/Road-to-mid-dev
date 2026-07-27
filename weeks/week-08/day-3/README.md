# Week 08 · Day 3 — Promises, by hand

[🛣️ The Road](../../../README.md) · [📅 Week 08](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 08 — Modern JS (ES6+), Promises & `async`/`await`](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Modern JS (ES6+), Promises & `async`/`await`
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info *Callbacks*, *Promise basics*, *Chaining*. **Then watch the event-loop video.**

## 2️⃣ Build — 2 hours

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

## 3️⃣ Must have — the checklist you are marked against

- [ ] All 10 drills, each with a comment explaining what it demonstrates
- [ ] Drill 10's prediction written *before* running, and a note on whether you were right
- [ ] Every promise has a `.catch` — no unhandled rejections left
- [ ] `day-3/notes.md`: pending/fulfilled/rejected explained in your own words

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What are the three states of a promise? Can it change state twice?
2. Why does `Promise.all` finish faster than three chained `.then`s? Draw the timeline.
3. What is the difference between `Promise.all` and `Promise.allSettled`? When do you want each?
4. Explain the output order in drill 10 — why does the promise callback beat the `setTimeout(0)`?
5. **Prove it:** given a snippet with a missing `return` inside a `.then` chain, find the bug.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-08/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 08 day 3: promises by hand"
git push
```

## 🤖 The AI rule for today

Every `LEARNED.md` has this mandatory line:

```
**AI used?** yes / no — what for:
```

| What you did | Allowed? | Your maximum score |
| --- | --- | --- |
| Wrote it yourself using docs and search | ✅ | **10/10** |
| Asked AI to *explain* a concept, then wrote the code yourself | ✅ | **10/10** |
| AI wrote part of the code — and you say exactly which part | ⚠️ | 7/10 |
| AI wrote it, you say so honestly | ⚠️ | 4/10 → redo by hand |
| AI wrote it and you did not say so | ❌ | **0/10** |

Asking AI *"explain how the box model works"* costs you nothing and is smart learning.
Asking it *"write my pricing card"* and staying quiet is the one thing here that scores zero.
Full policy: [GRADING.md](../../../GRADING.md).

## 🆘 Stuck?

1. Re-read the error message. All of it — file name and line number included.
2. Go back to the **Read first** links above. The answer is usually in the paragraph you skimmed.
3. Search like a developer: `mdn <the exact property>`, not "how do I".
4. Still stuck after 30 minutes? Write the question down in `LEARNED.md` and ask the teacher.
   Being stuck is not failure — hiding that you were stuck is.
5. Deeper reading on every topic: [📚 RESOURCES.md](../../../RESOURCES.md)

## 📂 Files in this folder

| File | Who writes it | Required | Done |
| --- | --- | --- | --- |
| Your code (`.html`, `.css`, `.js`, …) | you | ✅ | ⬜ |
| `LEARNED.md` | you, the same day | ✅ | ⬜ |
| `ASSESSMENT.md` | the teacher | – | ⬜ |

**No folder + no `LEARNED.md` = this assignment does not exist.**

---

◀ [Day 2](../day-2/) · [⬆ Week 08 — Modern JS (ES6+), Promises & `async`/`await`](../README.md) · [Day 4](../day-4/) ▶
