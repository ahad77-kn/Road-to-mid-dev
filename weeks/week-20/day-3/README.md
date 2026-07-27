# Week 20 · Day 3 — Mongoose

[🛣️ The Road](../../../README.md) · [📅 Week 20](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 20 — MongoDB & Mongoose](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** MongoDB & Mongoose
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Mongoose *Schemas*, *SchemaTypes*, *Validation*.

## 2️⃣ Build — 2 hours

Models for a blog domain — `User`, `Post`, `Comment` — in `day-3/models/`.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Every field typed, with `required`, `default`, `trim`, `lowercase`, `minlength`/`maxlength`, `min`/`max`, `enum` used where appropriate
- [ ] A custom validator (e.g. email format) with a clear message
- [ ] `timestamps: true` on every schema
- [ ] `unique: true` on email — and a note in `day-3/models.md` that this is an **index**, not a validator, and how its error differs (it surfaces as a driver error, not a Mongoose validation error). Handle both.
- [ ] A virtual field (e.g. `fullName`, or `commentCount`)
- [ ] An instance method and a static method, each used
- [ ] A `pre('save')` hook doing something visible (slug generation)
- [ ] A schema-level `toJSON` transform that removes `__v` and renames `_id` to `id` — so the API response shape is yours, not the database's
- [ ] `strict` mode understood: try to save an undeclared field and show what happens

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is a schema vs a model vs a document, in Mongoose?
2. Why is `unique: true` not really a validator? What error do you get on a duplicate?
3. Difference between an instance method, a static, and a virtual?
4. When does a `pre('save')` hook *not* run? (Hint: `updateOne`.) Why does that matter?
5. **Prove it:** try to save an invalid document. Show me the validation error object and how your API turns it into a 400.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-20/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 20 day 3: mongoose"
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

◀ [Day 2](../day-2/) · [⬆ Week 20 — MongoDB & Mongoose](../README.md) · [Day 4](../day-4/) ▶
