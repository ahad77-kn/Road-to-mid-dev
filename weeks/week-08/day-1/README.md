# Week 08 · Day 1 — ES6 refactor

[🛣️ The Road](../../../README.md) · [📅 Week 08](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 07 · Day 5](../../week-07/day-5/) · [⬆ Week 08 — Modern JS (ES6+), Promises & `async`/`await`](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Modern JS (ES6+), Promises & `async`/`await`
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info *Destructuring*, *Rest & spread*, *Optional chaining*.

## 2️⃣ Build — 2 hours

Copy the quiz and to-do apps into `day-1/` and modernise them.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Arrow functions where they make sense — and at least one place where you **kept** a regular function, with a comment on why
- [ ] Template literals everywhere; zero string concatenation with `+`
- [ ] Destructuring in function parameters (`function render({ text, done, id })`)
- [ ] Spread used for immutable array and object updates — no `push`/direct assignment on state
- [ ] Default parameters replacing `x = x || 5` patterns
- [ ] Optional chaining `?.` and nullish coalescing `??` used where they genuinely help
- [ ] `day-1/before-after.md`: three code snippets shown old vs new, each with one line on what improved

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. How does `this` behave differently in an arrow function? Give a case where an arrow function is the *wrong* choice.
2. Rewrite `const name = user && user.profile && user.profile.name` with optional chaining.
3. Difference between `||` and `??` — show an input where they disagree.
4. What does `const [first, ...rest] = arr` give you?
5. **Prove it:** I show you an old-style snippet; you modernise it live in under a minute.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-08/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 08 day 1: es6 refactor"
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

◀ [Week 07 · Day 5](../../week-07/day-5/) · [⬆ Week 08 — Modern JS (ES6+), Promises & `async`/`await`](../README.md) · [Day 2](../day-2/) ▶
