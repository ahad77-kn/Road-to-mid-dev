# 🛠️ Assignment — Week 13 Day 4 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 13](../../README.md)

## What to build

The Week 7 signup form, in React, with the same validation rules.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/components/SignupForm.jsx` | |
| `src/components/FormField.jsx` | |
| `controlled.md` | controlled vs uncontrolled, and when uncontrolled is fine |

## ✅ Done when — this is the checklist you are marked against

- [ ] Every input controlled — `value` + `onChange`, state as the single source of truth
- [ ] **One** state object for all fields, with a single generic `handleChange` using `event.target.name` — not six `useState` calls with six handlers
- [ ] A separate `errors` object and a `touched` object; errors show only after blur
- [ ] Validation rules in a config object, reused for both the live check and the submit check
- [ ] Submit disabled while invalid or while "submitting"; a fake 1.5s submit with a loading state
- [ ] A password strength meter
- [ ] A `<FormField>` component reused for every text input
- [ ] `day-4/controlled.md`: controlled vs uncontrolled inputs — what each means and when uncontrolled is legitimate

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What makes an input "controlled"? What happens if you set `value` but forget `onChange`?
2. Why one state object rather than six `useState` calls here? When would six be better?
3. What is the `touched` object for — what UX problem does it solve?
4. How does `event.target.name` let one handler serve every field?
5. **Prove it:** add a "date of birth" field. It should take under 5 minutes if your form is built right.

---

[← back to the day](../) · [📖 read first](../learn/)
