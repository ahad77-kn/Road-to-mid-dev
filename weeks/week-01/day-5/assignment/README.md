# 🛠️ Assignment — Week 01 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 01](../../README.md)

## What to build

A full signup form: name, email, password, confirm password, a checkbox for terms, and a submit button. No JavaScript this week — CSS states only.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |

## ✅ Done when — this is the checklist you are marked against

- [x] Every input has a real `<label>` linked with `for`/`id` (click the label, the input focuses — test it)
- [x] `:focus-visible` state — clearly visible, and **not** `outline: none` with nothing to replace it
- [x] Error state: red border + an error message under the field (styled with a class you toggle by hand for now)
- [x] `:disabled` button state — visibly different and `cursor: not-allowed`
- [x] `:hover` on the button, `:checked` styling on the checkbox
- [x] Correct `type` on every input (`email`, `password`) and a `placeholder` that is **not** a substitute for a label
- [x] Keyboard test: you can complete the whole form with Tab and Enter only

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Why is `outline: none` on focus an accessibility bug? What must you do if you remove it?
2. Difference between `:focus` and `:focus-visible`?
3. Why is a `placeholder` not a label?
4. What do `:hover`, `:active`, `:focus`, `:checked`, `:disabled` each mean — one line each?
5. **Prove it:** unplug your mouse. Fill in the whole form and submit it. Every focused element must be obvious.

---

[← back to the day](../) · [📖 read first](../learn/)
