# Week 13 · Day 4 — Controlled forms

[🛣️ The Road](../../../README.md) · [📅 Week 13](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 13 — Lists, Keys, Conditional Rendering & Controlled Forms](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 4 · React · **Week topic:** Lists, Keys, Conditional Rendering & Controlled Forms
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Sharing state between components*.

## 2️⃣ Build — 2 hours

The Week 7 signup form, in React, with the same validation rules.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Every input controlled — `value` + `onChange`, state as the single source of truth
- [ ] **One** state object for all fields, with a single generic `handleChange` using `event.target.name` — not six `useState` calls with six handlers
- [ ] A separate `errors` object and a `touched` object; errors show only after blur
- [ ] Validation rules in a config object, reused for both the live check and the submit check
- [ ] Submit disabled while invalid or while "submitting"; a fake 1.5s submit with a loading state
- [ ] A password strength meter
- [ ] A `<FormField>` component reused for every text input
- [ ] `day-4/controlled.md`: controlled vs uncontrolled inputs — what each means and when uncontrolled is legitimate

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What makes an input "controlled"? What happens if you set `value` but forget `onChange`?
2. Why one state object rather than six `useState` calls here? When would six be better?
3. What is the `touched` object for — what UX problem does it solve?
4. How does `event.target.name` let one handler serve every field?
5. **Prove it:** add a "date of birth" field. It should take under 5 minutes if your form is built right.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-13/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 13 day 4: controlled forms"
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

◀ [Day 3](../day-3/) · [⬆ Week 13 — Lists, Keys, Conditional Rendering & Controlled Forms](../README.md) · [Day 5](../day-5/) ▶
