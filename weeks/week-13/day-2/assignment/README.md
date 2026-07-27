# 🛠️ Assignment — Week 13 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 13](../../README.md)

## What to build

A "team manager" in `day-2/` that exercises every kind of update.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/components/` | the team manager |
| `mutation.md` | the mutation bug, why React did not re-render, and the immutable equivalents |

## ✅ Done when — this is the checklist you are marked against

- [ ] State is an array of member objects with a nested `address` object and a `skills` array
- [ ] Implemented, all immutably: add a member, remove by id, update one field, toggle a boolean, update a **nested** field, add to a nested array, remove from a nested array, reorder members
- [ ] Not a single `push`, `splice`, `sort` on state, or direct property assignment. Not one.
- [ ] A deliberate mutation bug demonstrated first (mutate, then `setState` with the same reference; the UI does not update), then fixed. Documented in `day-2/mutation.md` with *why* React did not re-render.
- [ ] `day-2/mutation.md` also lists the immutable equivalent for `push`, `pop`, `splice`, `sort`, `reverse`

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Why does React not re-render when you mutate state directly?
2. Rewrite `arr.push(x)`, `arr.splice(i,1)` and `arr.sort()` immutably. From memory.
3. How do you update `state.user.address.city` without mutating?
4. Is `{...obj}` deep or shallow? Where does that bite you here?
5. **Prove it:** I name a nested update; you write it immutably in under 2 minutes.

---

[← back to the day](../) · [📖 read first](../learn/)
