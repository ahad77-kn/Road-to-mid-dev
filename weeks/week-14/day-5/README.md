# Week 14 · Day 5 — Polish

[🛣️ The Road](../../../README.md) · [📅 Week 14](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 14 — State Design: Lifting State & `useReducer`](../README.md) · [Week 15 · Day 1](../../week-15/day-1/) ▶

**Phase:** Phase 4 · React · **Week topic:** State Design: Lifting State & `useReducer`
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Preserving and resetting state* + *`useMemo`*.

## 2️⃣ Build — 2 hours

Finish the tracker.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Edit an existing expense — the form fills with its values and switches to "update" mode
- [ ] The form resets cleanly between edit and add (use a `key` to force a reset and explain why)
- [ ] A simple bar chart of spend per category — **CSS only**, no chart library
- [ ] Monthly view: group by month with subtotals
- [ ] Export to JSON and import back
- [ ] Empty state, loading skeletons, and a confirm step before deletion
- [ ] `useMemo` applied to **one** expensive derived value — and `day-5/memo.md` explaining how you measured that it was actually needed. "It felt slow" is not a measurement; use the React DevTools Profiler.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. When does `useMemo` help and when is it just noise?
2. How did you *measure* that the memo was needed?
3. How does changing `key` on the form reset it, and why is that better than manually clearing every field?
4. What is the most complex piece of derived data in your app? Walk me through it.
5. **Prove it:** open the Profiler, record an interaction, and show me which components re-rendered and why.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-14/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 14 day 5: polish"
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

◀ [Day 4](../day-4/) · [⬆ Week 14 — State Design: Lifting State & `useReducer`](../README.md) · [Week 15 · Day 1](../../week-15/day-1/) ▶
