# 🛠️ Assignment — Week 21 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 21](../../README.md)

## What to build

`POST /api/auth/login` issuing a JWT.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/controllers/auth.controller.js` | login + /me |
| `jwt.md` | your token's three parts decoded, and what the signature does and does not prove |

## ✅ Done when — this is the checklist you are marked against

- [ ] Email + password verified with `bcrypt.compare`
- [ ] Wrong email and wrong password return the **identical** 401 message ("Invalid credentials") — explain user enumeration in `day-2/jwt.md`
- [ ] JWT signed with `jsonwebtoken`: payload `{ sub: userId, role }`, `expiresIn: "15m"`
- [ ] The secret in `.env`, long and random, never committed. `day-2/jwt.md` explains what someone with your secret can do (forge any user's token).
- [ ] **Decode your own token at [jwt.io](https://jwt.io) and paste the three parts into `day-2/jwt.md`** — header, payload, signature — with an explanation of each
- [ ] **Prove the payload is not encrypted**: decode it without the secret and show the user id in plain text. Then explain what the signature *does* guarantee.
- [ ] Tamper with the payload, re-send it, and show the server rejecting it
- [ ] `GET /api/auth/me` returning the current user from a valid token
- [ ] Rate limiting on login (5 attempts per 15 min per IP) → 429

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What are the three parts of a JWT? Which is secret?
2. Is a JWT payload encrypted? What may never go in it?
3. What does the signature prove, and what does it *not* prove?
4. Why the same error for wrong email and wrong password?
5. **Prove it:** change one character of your token's payload and call a protected route. Show the rejection and explain which check failed.

---

[← back to the day](../) · [📖 read first](../learn/)
