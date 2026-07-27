# 🛠️ Assignment — Week 20 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 20](../../README.md)

## What to build

Models for a blog domain — `User`, `Post`, `Comment` — in `day-3/models/`.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `models/User.js` | |
| `models/Post.js` | |
| `models/Comment.js` | |
| `models.md` | why unique isn't a validator, and how you handle both error types |

## ✅ Done when — this is the checklist you are marked against

- [ ] Every field typed, with `required`, `default`, `trim`, `lowercase`, `minlength`/`maxlength`, `min`/`max`, `enum` used where appropriate
- [ ] A custom validator (e.g. email format) with a clear message
- [ ] `timestamps: true` on every schema
- [ ] `unique: true` on email — and a note in `day-3/models.md` that this is an **index**, not a validator, and how its error differs (it surfaces as a driver error, not a Mongoose validation error). Handle both.
- [ ] A virtual field (e.g. `fullName`, or `commentCount`)
- [ ] An instance method and a static method, each used
- [ ] A `pre('save')` hook doing something visible (slug generation)
- [ ] A schema-level `toJSON` transform that removes `__v` and renames `_id` to `id` — so the API response shape is yours, not the database's
- [ ] `strict` mode understood: try to save an undeclared field and show what happens

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is a schema vs a model vs a document, in Mongoose?
2. Why is `unique: true` not really a validator? What error do you get on a duplicate?
3. Difference between an instance method, a static, and a virtual?
4. When does a `pre('save')` hook *not* run? (Hint: `updateOne`.) Why does that matter?
5. **Prove it:** try to save an invalid document. Show me the validation error object and how your API turns it into a 400.

---

[← back to the day](../) · [📖 read first](../learn/)
