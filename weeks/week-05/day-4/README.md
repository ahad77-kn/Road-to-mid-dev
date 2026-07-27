# Week 05 · Day 4 — Objects

[🛣️ The Road](../../../README.md) · [📅 Week 05](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 05 — Arrays, Objects & the Methods You Will Use Daily](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Arrays, Objects & the Methods You Will Use Daily
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info *Objects* + *Object methods, `this`*.

## 2️⃣ Build — 2 hours

In `day-4/`, model three real things as objects with both data and methods:

1. `bankAccount.js` — balance, `deposit()`, `withdraw()` (rejects overdraft), `getStatement()` returning a transaction history array
2. `library.js` — books with `borrow()`, `return()`, `isAvailable()`, `findByAuthor()`
3. `cart.js` — shopping cart: `addItem()`, `removeItem()`, `updateQty()`, `total()` (with tax), `itemCount()`

## 3️⃣ Must have — the checklist you are marked against

- [ ] Dot notation and bracket notation both used, with a comment on when bracket notation is *required*
- [ ] Nested objects and an array inside an object
- [ ] Object destructuring used at least 3 times
- [ ] Spread used to copy/update an object without mutating it
- [ ] `Object.keys` / `Object.values` / `Object.entries` each used at least once
- [ ] One method that uses `this` — plus a comment explaining what `this` refers to there

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. When *must* you use bracket notation instead of dot notation?
2. What does `this` refer to inside an object method? What happens if you make that method an arrow function?
3. `{...obj}` — is that a deep or shallow copy? Show a case where it bites you.
4. What do `Object.entries()` give you, and what shape is it?
5. **Prove it:** update a nested value in your cart object without mutating the original. Show the original unchanged.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-05/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 05 day 4: objects"
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

◀ [Day 3](../day-3/) · [⬆ Week 05 — Arrays, Objects & the Methods You Will Use Daily](../README.md) · [Day 5](../day-5/) ▶
