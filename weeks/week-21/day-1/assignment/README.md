# 🛠️ Assignment — Week 21 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 21](../../README.md)

## What to build

A `User` model and a signup endpoint.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `models/User.js` | with a pre-save bcrypt hook and select:false on the password |
| `src/controllers/auth.controller.js` | signup |
| `hashing.md` | salt, cost factor, and why the same password hashes differently each time |

## ✅ Done when — this is the checklist you are marked against

- [ ] `User` schema: `email` (unique, lowercase, trimmed, validated), `password`, `name`, `role` (enum: `user`/`admin`), `createdAt`
- [ ] `POST /api/auth/signup` — validate, check email is not taken, hash, save, return the user **without the password**
- [ ] `bcrypt` with a cost factor of at least 10 — and `day-1/hashing.md` explaining what the cost factor does and why slowness is the *feature*
- [ ] Hashing in a `pre('save')` hook, guarded with `isModified('password')` so a name change does not re-hash the hash
- [ ] `select: false` on the password field so it never leaks into a normal query
- [ ] Password rules: min 8 chars, checked server-side (never trust the client)
- [ ] Duplicate email → **409**, with a message that does not confirm which emails exist — and a note on the trade-off between UX and user enumeration
- [ ] `day-1/hashing.md` also answers: what is a salt, why is it stored alongside the hash, and why are two hashes of the same password different?
- [ ] **Demonstrate**: hash `"password123"` three times and show three different outputs, then show `bcrypt.compare` matching all three

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Why hash instead of encrypt? What is the difference?
2. What is a salt and what attack does it defeat? (Name it.)
3. Why is bcrypt deliberately slow? What does the cost factor control?
4. Why does the same password hash differently each time, and how does `compare` still work?
5. **Prove it:** show me the database. If I can read a password, you score 0 for the day.

---

[← back to the day](../) · [📖 read first](../learn/)
