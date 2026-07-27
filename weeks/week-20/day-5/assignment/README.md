# 🛠️ Assignment — Week 20 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 20](../../README.md)

## What to build

Add relationships and make queries fast.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `models/` | with refs, one embedded relationship and your indexes |
| `modelling.md` | embed or reference, decided per relationship, with reasons |
| `aggregation.js` | the stats pipeline |

## ✅ Done when — this is the checklist you are marked against

- [ ] Todos belong to a **list**, lists belong to a user: `Todo → List → User` via `ObjectId` refs
- [ ] `populate` used to fetch a todo with its list and owner — with `select` so you never over-fetch
- [ ] **One embedded relationship too** (e.g. comments/subtasks embedded in a todo) so you have built both patterns
- [ ] `day-5/modelling.md`: for each relationship, why you embedded or referenced. Use the real criteria — is it queried independently, is it unbounded in size, how often does it change, is it always needed together?
- [ ] Indexes on the fields you actually query (`owner`, `done`, `dueDate`, a text index for search), with `explain()` before/after evidence
- [ ] A compound index and an explanation of why field order matters in one
- [ ] An aggregation pipeline producing real statistics: todos per list, completion rate, overdue count, average time to complete
- [ ] The N+1 problem demonstrated (a loop of `findById`) and then fixed with `populate` or `$in`

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Embed or reference — give me your decision rule in one sentence, then apply it to three examples I name.
2. What does `populate` actually do — one query or two?
3. What is the N+1 problem? Show me yours and the fix.
4. Why does field order matter in a compound index?
5. **Prove it:** show `explain()` for your dashboard query before and after indexing. Numbers, not opinions.

---

[← back to the day](../) · [📖 read first](../learn/)
