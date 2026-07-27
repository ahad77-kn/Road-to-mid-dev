# Week 14 · Day 1 — Design first, then the form

[🛣️ The Road](../../../README.md) · [📅 Week 14](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 13 · Day 5](../../week-13/day-5/) · [⬆ Week 14 — State Design: Lifting State & `useReducer`](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 4 · React · **Week topic:** State Design: Lifting State & `useReducer`
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Choosing the state structure*.

## 2️⃣ Build — 2 hours

Start the **expense tracker** — the week's single project.

**Before any code**, write `day-1/DESIGN.md`:
- The full component tree, drawn
- Every piece of state, and which component owns it
- Every piece of **derived** data (total, filtered list, category breakdown) with a note that it is calculated, not stored
- The exact shape of one expense object

Then build the add-expense form: description, amount, category (select), date, and an optional note.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `DESIGN.md` written and committed **before** the component files (check the commit order — the teacher will)
- [ ] Controlled form, one state object, one `handleChange`
- [ ] Validation: description required, amount must be a positive number, date not in the future
- [ ] Submit adds to a list held in the parent and clears the form
- [ ] Amount stored as a **number**, not a string — convert at the boundary and say why in a comment
- [ ] Every expense gets a unique id (`crypto.randomUUID()`)

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Walk me through DESIGN.md. Which decisions changed once you started coding?
2. Which values did you decide *not* to put in state, and why?
3. Why store the amount as a number rather than a string?
4. Where does the form's own state live, and why not in `App`?
5. **Prove it:** point at any state variable and justify its location in one sentence.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-14/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 14 day 1: design first then the form"
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

◀ [Week 13 · Day 5](../../week-13/day-5/) · [⬆ Week 14 — State Design: Lifting State & `useReducer`](../README.md) · [Day 2](../day-2/) ▶
