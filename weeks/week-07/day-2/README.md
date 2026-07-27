# Week 07 · Day 2 — Signup form, live validation

[🛣️ The Road](../../../README.md) · [📅 Week 07](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 07 — Events, Forms & Real Interactive Apps](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Events, Forms & Real Interactive Apps
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Client-side form validation* + *Web forms*.

## 2️⃣ Build — 2 hours

Take Week 1 Day 5's signup form and make it live.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Fields: name, email, password, confirm password, phone, terms checkbox
- [ ] Validation runs on `blur` (leaving the field) **and** re-validates on `input` once a field has already errored — so errors clear as you fix them, but do not appear while first typing
- [ ] Rules: name ≥ 3 chars; valid email; password ≥ 8 chars with a number and a letter; passwords match; phone is 11 digits; terms checked
- [ ] Each error shows under its field, in red, with `aria-invalid` and `aria-describedby` wired up
- [ ] A live password-strength meter (weak/medium/strong)
- [ ] Submit is disabled until every field is valid
- [ ] On successful submit: `preventDefault`, log the collected data as an object, show a success message
- [ ] Validation rules live in a config object/array — not 6 copies of the same `if` block

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Difference between the `input`, `change`, `blur` and `focus` events?
2. Why validate on blur rather than on every keystroke from the start?
3. What does `preventDefault()` do on a form submit? What is the browser's default here?
4. Is client-side validation security? Explain your answer in one sentence. (This matters in Week 21.)
5. **Prove it:** disable JavaScript in DevTools and submit the form. What happens? What *should* happen on a real site?

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-07/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 07 day 2: signup form live validation"
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

◀ [Day 1](../day-1/) · [⬆ Week 07 — Events, Forms & Real Interactive Apps](../README.md) · [Day 3](../day-3/) ▶
