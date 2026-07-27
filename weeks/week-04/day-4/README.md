# Week 04 · Day 4 — Functions

[🛣️ The Road](../../../README.md) · [📅 Week 04](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 04 — JavaScript Language Fundamentals](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** JavaScript Language Fundamentals
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info ch. 2.16–2.18.

## 2️⃣ Build — 2 hours

In `day-4/functions.js`, write and test at least 10 functions:

`isEven(n)` · `getGrade(marks)` · `celsiusToF(c)` · `reverseString(str)` · `countVowels(str)` · `isPalindrome(word)` · `factorial(n)` · `largest(a, b, c)` · `calculateTotal(price, qty, taxRate)` · `greet(name, greeting = "Hello")`

## 3️⃣ Must have — the checklist you are marked against

- [ ] Every function **returns** a value — none of them `console.log` inside. Logging happens only where you call them.
- [ ] One default parameter used
- [ ] One function written three ways — declaration, function expression, arrow — with a comment on the differences
- [ ] Each function called with at least 3 test inputs, including an edge case (0, empty string, negative)
- [ ] `day-4/scope.md`: demonstrate a variable that is not visible outside its function, and explain why

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Difference between a parameter and an argument?
2. What does a function return if you never write `return`?
3. What is hoisting — and which of the three function forms is *not* hoisted?
4. Why is returning better than logging inside the function?
5. **Prove it:** I give you a new function name and one sentence of spec — write it, working, in under 3 minutes.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-04/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 04 day 4: functions"
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

◀ [Day 3](../day-3/) · [⬆ Week 04 — JavaScript Language Fundamentals](../README.md) · [Day 5](../day-5/) ▶
