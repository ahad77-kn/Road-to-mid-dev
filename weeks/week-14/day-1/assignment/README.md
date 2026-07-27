# 🛠️ Assignment — Week 14 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 14](../../README.md)

## What to build

Start the **expense tracker** — the week's single project.

**Before any code**, write `day-1/DESIGN.md`:
- The full component tree, drawn
- Every piece of state, and which component owns it
- Every piece of **derived** data (total, filtered list, category breakdown) with a note that it is calculated, not stored
- The exact shape of one expense object

Then build the add-expense form: description, amount, category (select), date, and an optional note.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `DESIGN.md` | component tree, every state, every derived value — committed BEFORE the code |
| `src/components/ExpenseForm.jsx` | |

## ✅ Done when — this is the checklist you are marked against

- [ ] `DESIGN.md` written and committed **before** the component files (check the commit order — the teacher will)
- [ ] Controlled form, one state object, one `handleChange`
- [ ] Validation: description required, amount must be a positive number, date not in the future
- [ ] Submit adds to a list held in the parent and clears the form
- [ ] Amount stored as a **number**, not a string — convert at the boundary and say why in a comment
- [ ] Every expense gets a unique id (`crypto.randomUUID()`)

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Walk me through DESIGN.md. Which decisions changed once you started coding?
2. Which values did you decide *not* to put in state, and why?
3. Why store the amount as a number rather than a string?
4. Where does the form's own state live, and why not in `App`?
5. **Prove it:** point at any state variable and justify its location in one sentence.

---

[← back to the day](../) · [📖 read first](../learn/)
