# Week 21 · Day 2 — Login & tokens

[🛣️ The Road](../../../README.md) · [📅 Week 21](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 21 — Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

jwt.io *Introduction* + Copenhagen *Sessions*.

## 2️⃣ Build — 2 hours

`POST /api/auth/login` issuing a JWT.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Email + password verified with `bcrypt.compare`
- [ ] Wrong email and wrong password return the **identical** 401 message ("Invalid credentials") — explain user enumeration in `day-2/jwt.md`
- [ ] JWT signed with `jsonwebtoken`: payload `{ sub: userId, role }`, `expiresIn: "15m"`
- [ ] The secret in `.env`, long and random, never committed. `day-2/jwt.md` explains what someone with your secret can do (forge any user's token).
- [ ] **Decode your own token at [jwt.io](https://jwt.io) and paste the three parts into `day-2/jwt.md`** — header, payload, signature — with an explanation of each
- [ ] **Prove the payload is not encrypted**: decode it without the secret and show the user id in plain text. Then explain what the signature *does* guarantee.
- [ ] Tamper with the payload, re-send it, and show the server rejecting it
- [ ] `GET /api/auth/me` returning the current user from a valid token
- [ ] Rate limiting on login (5 attempts per 15 min per IP) → 429

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What are the three parts of a JWT? Which is secret?
2. Is a JWT payload encrypted? What may never go in it?
3. What does the signature prove, and what does it *not* prove?
4. Why the same error for wrong email and wrong password?
5. **Prove it:** change one character of your token's payload and call a protected route. Show the rejection and explain which check failed.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-21/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 21 day 2: login tokens"
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

◀ [Day 1](../day-1/) · [⬆ Week 21 — Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam](../README.md) · [Day 3](../day-3/) ▶
