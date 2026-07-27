# Week 08 · Day 4 — `async`/`await` and your first real request

[🛣️ The Road](../../../README.md) · [📅 Week 08](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 08 — Modern JS (ES6+), Promises & `async`/`await`](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Modern JS (ES6+), Promises & `async`/`await`
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info *async/await* + *Error handling with promises*.

## 2️⃣ Build — 2 hours

Convert every promise drill to `async`/`await`, then make your first real network call.

## 3️⃣ Must have — the checklist you are marked against

- [ ] All 10 drills rewritten with `async`/`await` in `day-4/`
- [ ] `try/catch/finally` used properly — `finally` turning off a loading flag
- [ ] A real `fetch` from [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users) — logged, then rendered as a simple list
- [ ] **`response.ok` is checked and a non-2xx throws** — the classic beginner bug is assuming `fetch` rejects on a 404. It does not. Demonstrate this with a deliberate 404 and comment on it.
- [ ] A parallel version with `await Promise.all([...])` and a comment comparing it to sequential awaits
- [ ] One deliberate network failure (turn on DevTools offline mode) handled with a friendly message

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Does `fetch` reject on a 404? Prove it. What *does* make it reject?
2. What does `await` actually do to the function it is in — does it block the page?
3. Why must a function be `async` to use `await` inside it? What does an `async` function always return?
4. Two independent requests, awaited one after the other — what is the cost, and how do you fix it?
5. **Prove it:** with DevTools throttled to Slow 3G, show your loading state working.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-08/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 08 day 4: async await and your first"
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

◀ [Day 3](../day-3/) · [⬆ Week 08 — Modern JS (ES6+), Promises & `async`/`await`](../README.md) · [Day 5](../day-5/) ▶
