# 🛠️ Assignment — Week 07 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 07](../../README.md)

## What to build

Take Week 1 Day 5's signup form and make it live.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `script.js` | all the JavaScript |

## ✅ Done when — this is the checklist you are marked against

- [ ] Fields: name, email, password, confirm password, phone, terms checkbox
- [ ] Validation runs on `blur` (leaving the field) **and** re-validates on `input` once a field has already errored — so errors clear as you fix them, but do not appear while first typing
- [ ] Rules: name ≥ 3 chars; valid email; password ≥ 8 chars with a number and a letter; passwords match; phone is 11 digits; terms checked
- [ ] Each error shows under its field, in red, with `aria-invalid` and `aria-describedby` wired up
- [ ] A live password-strength meter (weak/medium/strong)
- [ ] Submit is disabled until every field is valid
- [ ] On successful submit: `preventDefault`, log the collected data as an object, show a success message
- [ ] Validation rules live in a config object/array — not 6 copies of the same `if` block

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Difference between the `input`, `change`, `blur` and `focus` events?
2. Why validate on blur rather than on every keystroke from the start?
3. What does `preventDefault()` do on a form submit? What is the browser's default here?
4. Is client-side validation security? Explain your answer in one sentence. (This matters in Week 21.)
5. **Prove it:** disable JavaScript in DevTools and submit the form. What happens? What *should* happen on a real site?

---

[← back to the day](../) · [📖 read first](../learn/)
