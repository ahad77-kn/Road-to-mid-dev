# Week 04 · Day 1 — Variables, types, operators

[🛣️ The Road](../../../README.md) · [📅 Week 04](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 03 · Day 5](../../week-03/day-5/) · [⬆ Week 04 — JavaScript Language Fundamentals](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** JavaScript Language Fundamentals
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info ch. 2.1–2.8.

## 2️⃣ Build — 2 hours

Five small programs in `day-1/`, one file each, each printing labelled output with `console.log`.

1. `bmi.js` — height and weight in variables, print BMI to 1 decimal place plus the category
2. `temperature.js` — convert 25°C to Fahrenheit and 98°F to Celsius
3. `shopping.js` — 3 item prices, print subtotal, 17% GST, and total, formatted to 2 decimals
4. `types.js` — declare one of each: string, number, boolean, `null`, `undefined`, and one object. `console.log(typeof x)` for each and write a comment explaining any result that surprised you
5. `swap.js` — swap two variables' values **without** a third variable, then again **with** one. Explain which you would use in real code and why

## 3️⃣ Must have — the checklist you are marked against

- [ ] `const` by default; `let` only where the value genuinely changes; **no `var` anywhere** — and you can say why
- [ ] Descriptive names — `totalPrice`, not `t` or `x`
- [ ] Template literals for all output, not `+` concatenation
- [ ] `day-1/notes.md` answering: what surprised you about `typeof null`?

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Difference between `let`, `const` and `var` — in scope, and in reassignment?
2. What are the 7 primitive types in JavaScript?
3. What does `typeof null` return, and why is it wrong?
4. What is the difference between `null` and `undefined` — when would you deliberately use each?
5. **Prove it:** predict the output of `console.log("5" + 3, "5" - 3, 5 + null, "5" == 5, "5" === 5)` *before* running it. Then run it.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-04/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 04 day 1: variables types operators"
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

◀ [Week 03 · Day 5](../../week-03/day-5/) · [⬆ Week 04 — JavaScript Language Fundamentals](../README.md) · [Day 2](../day-2/) ▶
