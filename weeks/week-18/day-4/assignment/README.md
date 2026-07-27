# 🛠️ Assignment — Week 18 Day 4 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 18](../../README.md)

## What to build

Implement the API for real. Data in an in-memory array (the database arrives in Week 20).

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/` | the working API |
| `src/validators/` | validation kept out of the handlers |

## ✅ Done when — this is the checklist you are marked against

- [ ] All six endpoints working exactly as documented
- [ ] Validation on create and update: title required, 1–200 chars, `done` must be boolean, `dueDate` a valid date. Invalid input → 400 with a message naming the **field**.
- [ ] 404 for a missing id, on every endpoint that takes one
- [ ] `GET /api/todos` supports `?done=true`, `?search=`, `?sort=`, `?page=&limit=` — combinable
- [ ] The list response includes pagination metadata (`{ data, page, limit, total, totalPages }`)
- [ ] Ids generated server-side (`crypto.randomUUID()`); a client-supplied id is ignored — say why in a comment
- [ ] Route handlers stay thin: validation and business logic live in separate functions
- [ ] Nothing crashes the server. Malformed JSON, missing body, wrong types, huge payloads — all return a clean error.

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What happens if a client POSTs `{"title": 12345}`? Show me.
2. Why generate the id on the server?
3. How do you combine three query filters without a mess of `if`s?
4. What does your API return for `GET /api/todos?page=999`?
5. **Prove it:** I will try to crash your server with five malformed requests. It must survive all five.

---

[← back to the day](../) · [📖 read first](../learn/)
