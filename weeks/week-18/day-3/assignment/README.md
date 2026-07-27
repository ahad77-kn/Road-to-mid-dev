# 🛠️ Assignment — Week 18 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 18](../../README.md)

## What to build

Design before implementing. `day-3/API.md` is today's real deliverable.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `API.md` | every endpoint documented BEFORE it exists — the day's real deliverable |
| `src/routes/todos.routes.js` | route skeletons returning hardcoded examples |

## ✅ Done when — this is the checklist you are marked against

- [ ] `API.md` documenting every endpoint of the to-do API **before** you write it:
- [ ] The exact JSON shape of a todo, a list response, and an **error** response — one consistent error shape for the whole API
- [ ] Justification for each status code chosen
- [ ] `express.Router()` used to mount routes at `/api/todos` from a separate file
- [ ] Route skeletons implemented, each returning a hardcoded example matching the doc

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. `PUT` vs `PATCH` — what is the actual difference, and which do your clients need?
2. Why 201 for create, and what header should accompany it?
3. Why 204 for delete rather than 200?
4. What does *idempotent* mean? Which of your endpoints are, and which are not?
5. **Prove it:** hand me API.md. I should be able to write a frontend against it without asking a single question.

---

[← back to the day](../) · [📖 read first](../learn/)
