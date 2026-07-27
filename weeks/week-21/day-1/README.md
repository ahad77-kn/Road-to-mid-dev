# Week 21 · Day 1 — Passwords

[🛣️ The Road](../../../README.md) · [📅 Week 21](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 20 · Day 5](../../week-20/day-5/) · [⬆ Week 21 — Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Copenhagen Book *Password authentication* + OWASP *Password storage*.

## 2️⃣ Build — 2 hours

A `User` model and a signup endpoint.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `User` schema: `email` (unique, lowercase, trimmed, validated), `password`, `name`, `role` (enum: `user`/`admin`), `createdAt`
- [ ] `POST /api/auth/signup` — validate, check email is not taken, hash, save, return the user **without the password**
- [ ] `bcrypt` with a cost factor of at least 10 — and `day-1/hashing.md` explaining what the cost factor does and why slowness is the *feature*
- [ ] Hashing in a `pre('save')` hook, guarded with `isModified('password')` so a name change does not re-hash the hash
- [ ] `select: false` on the password field so it never leaks into a normal query
- [ ] Password rules: min 8 chars, checked server-side (never trust the client)
- [ ] Duplicate email → **409**, with a message that does not confirm which emails exist — and a note on the trade-off between UX and user enumeration
- [ ] `day-1/hashing.md` also answers: what is a salt, why is it stored alongside the hash, and why are two hashes of the same password different?
- [ ] **Demonstrate**: hash `"password123"` three times and show three different outputs, then show `bcrypt.compare` matching all three

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why hash instead of encrypt? What is the difference?
2. What is a salt and what attack does it defeat? (Name it.)
3. Why is bcrypt deliberately slow? What does the cost factor control?
4. Why does the same password hash differently each time, and how does `compare` still work?
5. **Prove it:** show me the database. If I can read a password, you score 0 for the day.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-21/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 21 day 1: passwords"
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

◀ [Week 20 · Day 5](../../week-20/day-5/) · [⬆ Week 21 — Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam](../README.md) · [Day 2](../day-2/) ▶
