# Week 13 · Day 2 — Immutable updates

[🛣️ The Road](../../../README.md) · [📅 Week 13](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 13 — Lists, Keys, Conditional Rendering & Controlled Forms](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 4 · React · **Week topic:** Lists, Keys, Conditional Rendering & Controlled Forms
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Updating objects in state* + *Updating arrays in state*.

## 2️⃣ Build — 2 hours

A "team manager" in `day-2/` that exercises every kind of update.

## 3️⃣ Must have — the checklist you are marked against

- [ ] State is an array of member objects with a nested `address` object and a `skills` array
- [ ] Implemented, all immutably: add a member, remove by id, update one field, toggle a boolean, update a **nested** field, add to a nested array, remove from a nested array, reorder members
- [ ] Not a single `push`, `splice`, `sort` on state, or direct property assignment. Not one.
- [ ] A deliberate mutation bug demonstrated first (mutate, then `setState` with the same reference; the UI does not update), then fixed. Documented in `day-2/mutation.md` with *why* React did not re-render.
- [ ] `day-2/mutation.md` also lists the immutable equivalent for `push`, `pop`, `splice`, `sort`, `reverse`

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why does React not re-render when you mutate state directly?
2. Rewrite `arr.push(x)`, `arr.splice(i,1)` and `arr.sort()` immutably. From memory.
3. How do you update `state.user.address.city` without mutating?
4. Is `{...obj}` deep or shallow? Where does that bite you here?
5. **Prove it:** I name a nested update; you write it immutably in under 2 minutes.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-13/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 13 day 2: immutable updates"
git push
```

## 🤖 The AI rule for today

Every `LEARNED.md` has this mandatory line:

```
**AI used?** yes / no — what for:
```

| What you did | Allowed? | Your maximum score |
| --- | --- | --- |
| Wrote it yourself using docs and search | ✅ | **10/10** |
| Asked AI to *explain* a concept, then wrote the code yourself | ✅ | **10/10** |
| AI wrote part of the code — and you say exactly which part | ⚠️ | 7/10 |
| AI wrote it, you say so honestly | ⚠️ | 4/10 → redo by hand |
| AI wrote it and you did not say so | ❌ | **0/10** |

Asking AI *"explain how the box model works"* costs you nothing and is smart learning.
Asking it *"write my pricing card"* and staying quiet is the one thing here that scores zero.
Full policy: [GRADING.md](../../../GRADING.md).

## 🆘 Stuck?

1. Re-read the error message. All of it — file name and line number included.
2. Go back to the **Read first** links above. The answer is usually in the paragraph you skimmed.
3. Search like a developer: `mdn <the exact property>`, not "how do I".
4. Still stuck after 30 minutes? Write the question down in `LEARNED.md` and ask the teacher.
   Being stuck is not failure — hiding that you were stuck is.
5. Deeper reading on every topic: [📚 RESOURCES.md](../../../RESOURCES.md)

## 📂 Files in this folder

| File | Who writes it | Required | Done |
| --- | --- | --- | --- |
| Your code (`.html`, `.css`, `.js`, …) | you | ✅ | ⬜ |
| `LEARNED.md` | you, the same day | ✅ | ⬜ |
| `ASSESSMENT.md` | the teacher | – | ⬜ |

**No folder + no `LEARNED.md` = this assignment does not exist.**

---

◀ [Day 1](../day-1/) · [⬆ Week 13 — Lists, Keys, Conditional Rendering & Controlled Forms](../README.md) · [Day 3](../day-3/) ▶
