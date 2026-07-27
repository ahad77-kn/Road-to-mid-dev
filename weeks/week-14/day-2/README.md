# Week 14 · Day 2 — List, total, lifted state

[🛣️ The Road](../../../README.md) · [📅 Week 14](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 14 — State Design: Lifting State & `useReducer`](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 4 · React · **Week topic:** State Design: Lifting State & `useReducer`
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Sharing state between components* + *Thinking in React*.

## 2️⃣ Build — 2 hours

Add the list, the total, and per-category summaries.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `ExpenseList` → `ExpenseItem` components; delete works
- [ ] A total that is **calculated during render** — a stored `total` state variable is an automatic fail this week
- [ ] A summary strip: total, this month's total, average, count, biggest single expense — all derived
- [ ] Category breakdown with percentages
- [ ] Currency formatted with `Intl.NumberFormat` (PKR), dates with `Intl.DateTimeFormat`
- [ ] `day-2/derived.md`: list every derived value and write what bug would appear if you stored it in state instead

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why is a stored total a bug waiting to happen? Describe the exact failure.
2. What does "lifting state up" mean — what problem did it solve here?
3. What is `Intl.NumberFormat` and why is it better than `"Rs " + amount.toFixed(2)`?
4. Is your total recalculated on every render? Is that a problem? How would you know?
5. **Prove it:** add a "total this week" figure. It must be one line of derived code.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-14/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 14 day 2: list total lifted state"
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

◀ [Day 1](../day-1/) · [⬆ Week 14 — State Design: Lifting State & `useReducer`](../README.md) · [Day 3](../day-3/) ▶
