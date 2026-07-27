# Week 14 · Day 4 — `useReducer`

[🛣️ The Road](../../../README.md) · [📅 Week 14](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 14 — State Design: Lifting State & `useReducer`](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 4 · React · **Week topic:** State Design: Lifting State & `useReducer`
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *`useReducer` reference* + *`useState` vs `useReducer`*.

## 2️⃣ Build — 2 hours

Refactor everything to a reducer. **No new features today** — a pure refactor, which is a skill in itself.

## 3️⃣ Must have — the checklist you are marked against

- [ ] One `expensesReducer` handling: `ADD`, `DELETE`, `UPDATE`, `CLEAR_ALL`, `IMPORT`
- [ ] One `filtersReducer` (or a combined one) handling all filter actions plus `RESET_FILTERS`
- [ ] Action objects with `{ type, payload }`; the reducer is a pure function with **no side effects** in it
- [ ] `default:` case throws on an unknown action type — explain why that is better than silently returning state
- [ ] The reducer lives in its own file and could be tested without React at all
- [ ] `day-4/reducer.md`: `useState` vs `useReducer` — your own rule for when to reach for each, and what got better/worse in this refactor
- [ ] The app behaves **identically** to Day 3 — prove it with before/after screenshots

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is a reducer, mathematically? (state, action) → ?
2. Why must a reducer be pure? What breaks in React Strict Mode if it is not?
3. When is `useReducer` worth it over `useState`?
4. How would you unit-test your reducer with no browser involved?
5. **Prove it:** add an `UNDO_DELETE` action. With a reducer this should be straightforward — do it live.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-14/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 14 day 4: usereducer"
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

◀ [Day 3](../day-3/) · [⬆ Week 14 — State Design: Lifting State & `useReducer`](../README.md) · [Day 5](../day-5/) ▶
