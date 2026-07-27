# 🛠️ Assignment — Week 22 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 22](../../README.md)

## What to build

`day-3/SCHEMA.md`. **You may not start Day 4 until the teacher approves this.** Fixing a schema in Week 23 costs days; fixing it now costs an hour.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `SCHEMA.md` | every collection, field, relationship decision, index and sample document |
| `erd.png` | the entity-relationship diagram |

## ✅ Done when — this is the checklist you are marked against

- [ ] Every collection, every field, every type, every constraint
- [ ] An entity-relationship diagram (paper or Excalidraw)
- [ ] For **each** relationship: embed or reference, with the reasoning — is it queried independently? is it unbounded? how often does it change? is it always needed together?
- [ ] The indexes you will need, derived from your actual queries — list the query, then the index that serves it
- [ ] A sample document for every collection, filled with realistic data
- [ ] The ten most common queries your app will run, written out
- [ ] How ownership/permissions are represented in the data
- [ ] What happens on delete — cascade, soft-delete, or orphan? Decide per relationship and justify.

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Defend three embed/reference decisions.
2. Show me the query that made you add each index.
3. What happens to related documents when a user deletes their account?
4. Where would this schema hurt at 100× the data?
5. What is the one part you are least sure about? (Say it now — that is the point of review.)

---

[← back to the day](../) · [📖 read first](../learn/)
