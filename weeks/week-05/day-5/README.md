# Week 05 · Day 5 — Console contact book

[🛣️ The Road](../../../README.md) · [📅 Week 05](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 05 — Arrays, Objects & the Methods You Will Use Daily](../README.md) · [Week 06 · Day 1](../../week-06/day-1/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Arrays, Objects & the Methods You Will Use Daily
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info *Object copying by reference* + *keys/values/entries*.

## 2️⃣ Build — 2 hours

A complete contact book in `day-5/contacts.js` — an array of contact objects, driven entirely from the console.

Required: `addContact` · `deleteContact(id)` · `updateContact(id, changes)` · `searchByName(query)` (case-insensitive, partial match) · `searchByCity(city)` · `listAll()` (sorted) · `groupByCity()` · `exportToJSON()` and `importFromJSON(str)`

## 3️⃣ Must have — the checklist you are marked against

- [ ] Each contact: `id`, `name`, `phone`, `email`, `city`, `tags` (array)
- [ ] Unique IDs generated, not hard-coded
- [ ] Immutable updates throughout — no direct mutation, ever
- [ ] Search is partial and case-insensitive (`"ah"` finds `"Ahad"`)
- [ ] Validation: reject a contact with no name or a phone shorter than 10 chars, with a clear message
- [ ] `groupByCity()` returns `{ Lahore: [...], Karachi: [...] }` — built with `reduce`
- [ ] At least 10 contacts and a demo run at the bottom of the file exercising every function

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why generate IDs instead of using the array index?
2. How does your update function avoid mutating? Show the line.
3. Walk me through `groupByCity`'s `reduce` — what is the accumulator on each step?
4. What does `JSON.stringify` do to a `Date`, a function, and `undefined` inside your object?
5. **Prove it:** I name a new feature — "find all contacts with the tag *work*" — write it in under 3 minutes.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-05/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 05 day 5: console contact book"
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

◀ [Day 4](../day-4/) · [⬆ Week 05 — Arrays, Objects & the Methods You Will Use Daily](../README.md) · [Week 06 · Day 1](../../week-06/day-1/) ▶
