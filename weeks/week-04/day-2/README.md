# Week 04 · Day 2 — Conditionals

[🛣️ The Road](../../../README.md) · [📅 Week 04](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 04 — JavaScript Language Fundamentals](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** JavaScript Language Fundamentals
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info ch. 2.9–2.13.

## 2️⃣ Build — 2 hours

Six programs in `day-2/`:

1. `grade.js` — a marks number → grade A/B/C/D/F, with the boundaries as named constants
2. `biggest.js` — biggest of three numbers, without `Math.max`
3. `even-odd.js` — for a number, print even/odd, positive/negative/zero, and whether it is prime
4. `leap-year.js` — proper leap-year rule (divisible by 4, not 100, unless 400). Test 1900, 2000, 2024, 2025
5. `ticket-price.js` — cinema price by age *and* day of week (child/adult/senior, weekday/weekend discount). Use `switch` for the day
6. `login-check.js` — given `username` and `password` variables, print one of: "missing username", "password too short", "welcome" — with the **guard clause** pattern

## 3️⃣ Must have — the checklist you are marked against

- [ ] `===` everywhere; if you use `==` once, justify it in a comment
- [ ] At least one `switch`, one ternary, and one guard-clause early return
- [ ] No nesting deeper than 2 levels — flatten with early returns
- [ ] Each program tested with at least 4 different inputs, results recorded in a comment block at the bottom

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. List the 6 falsy values in JavaScript.
2. What does `&&` return — a boolean, or something else? What about `||`?
3. Difference between `||` and `??`? Give a case where they behave differently.
4. When is a ternary better than an `if`, and when is it worse?
5. **Prove it:** rewrite one of your nested `if` chains as guard clauses and explain why it reads better.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-04/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 04 day 2: conditionals"
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

◀ [Day 1](../day-1/) · [⬆ Week 04 — JavaScript Language Fundamentals](../README.md) · [Day 3](../day-3/) ▶
