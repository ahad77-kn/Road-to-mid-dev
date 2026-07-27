# 🛠️ Assignment — Week 19 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 19](../../README.md)

## What to build

Every endpoint validates its input before the handler ever runs.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/validators/` | one schema per endpoint |
| `validation.md` | your API rejecting a request your React form would never send |

## ✅ Done when — this is the checklist you are marked against

- [ ] A validation schema per endpoint, kept next to the route, not inside the handler
- [ ] Body, query params **and** path params all validated
- [ ] Types coerced properly — `?page=2` arrives as a string; the handler must receive a number
- [ ] Unknown fields rejected or stripped — decide which, and justify it
- [ ] A **consistent** 400 error shape listing every failing field at once, not just the first:
- [ ] Strings trimmed and sanitised; a length cap on every string field
- [ ] `day-2/validation.md`: **why client-side validation is not enough** — show your API rejecting a request that your React form would never have sent. This is the point of the day.

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Why validate on the server when the frontend already validates?
2. Where should validation live — in the route, the controller, or the model? Defend your answer.
3. Why return *all* validation errors rather than the first?
4. What happens to `?page=abc` in your API?
5. **Prove it:** bypass your frontend entirely with `curl` and try to create an invalid record. Show me the 400.

---

[← back to the day](../) · [📖 read first](../learn/)
