# 🛠️ Assignment — Week 20 Day 4 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 20](../../README.md)

## What to build

Replace the in-memory array in your Week 19 API with MongoDB. **The API contract must not change** — the same endpoints, the same responses. Your React frontend must work untouched.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/` | the API, now on MongoDB — the public contract unchanged |
| `seed.js` | + an `npm run seed` script |
| `migration.md` | what changed, and the longer list of what did NOT |

## ✅ Done when — this is the checklist you are marked against

- [ ] Connection handled in one place with error handling and retry; the server does not start if the database is unreachable
- [ ] All CRUD through Mongoose in the **service** layer — controllers never touch the model directly
- [ ] `.lean()` used on read-only queries, with a comment on what it changes
- [ ] Filtering, search (`$regex`, case-insensitive), sorting and pagination all done in the **database**, not in JavaScript after fetching everything. Explain why that distinction matters at 100,000 records.
- [ ] Mongoose validation errors mapped to your API's 400 shape
- [ ] Invalid `ObjectId` handled → 400, not a 500 (`mongoose.isValidObjectId`)
- [ ] A seed script and an `npm run seed`
- [ ] Graceful shutdown closing the connection on `SIGINT`
- [ ] `day-4/migration.md`: what changed in your code, and everything that did **not** — that list is the value of the layered structure you built in Week 19

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What did you have to change, and what did the layering save you from changing?
2. Why filter in the database instead of in JavaScript?
3. What does `.lean()` return, and what do you lose?
4. What happens on `GET /api/todos/not-an-id`? Show me.
5. **Prove it:** restart the server. The data is still there. Then point your Week 19 React app at it, unchanged, and use it.

---

[← back to the day](../) · [📖 read first](../learn/)
