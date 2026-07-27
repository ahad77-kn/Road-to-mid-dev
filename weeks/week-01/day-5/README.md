# Week 01 · Day 5 — Signup form with real states

[🛣️ The Road](../../../README.md) · [📅 Week 01](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 01 — CSS Fundamentals, Selectors & the Box Model](../README.md) · [Week 02 · Day 1](../../week-02/day-1/) ▶

**Phase:** Phase 1 · CSS Mastery · **Week topic:** CSS Fundamentals, Selectors & the Box Model
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Styling web forms* + *Pseudo-classes*.

## 2️⃣ Build — 2 hours

A full signup form: name, email, password, confirm password, a checkbox for terms, and a submit button. No JavaScript this week — CSS states only.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Every input has a real `<label>` linked with `for`/`id` (click the label, the input focuses — test it)
- [ ] `:focus-visible` state — clearly visible, and **not** `outline: none` with nothing to replace it
- [ ] Error state: red border + an error message under the field (styled with a class you toggle by hand for now)
- [ ] `:disabled` button state — visibly different and `cursor: not-allowed`
- [ ] `:hover` on the button, `:checked` styling on the checkbox
- [ ] Correct `type` on every input (`email`, `password`) and a `placeholder` that is **not** a substitute for a label
- [ ] Keyboard test: you can complete the whole form with Tab and Enter only

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why is `outline: none` on focus an accessibility bug? What must you do if you remove it?
2. Difference between `:focus` and `:focus-visible`?
3. Why is a `placeholder` not a label?
4. What do `:hover`, `:active`, `:focus`, `:checked`, `:disabled` each mean — one line each?
5. **Prove it:** unplug your mouse. Fill in the whole form and submit it. Every focused element must be obvious.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-01/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 01 day 5: signup form with real states"
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

◀ [Day 4](../day-4/) · [⬆ Week 01 — CSS Fundamentals, Selectors & the Box Model](../README.md) · [Week 02 · Day 1](../../week-02/day-1/) ▶
