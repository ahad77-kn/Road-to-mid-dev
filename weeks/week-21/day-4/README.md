# Week 21 · Day 4 — Sessions, cookies & refresh

[🛣️ The Road](../../../README.md) · [📅 Week 21](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 21 — Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Set-Cookie* + Auth0 *Refresh tokens* + OWASP *Session management*.

## 2️⃣ Build — 2 hours

Implement the **other** approach, then compare them honestly.

## 3️⃣ Must have — the checklist you are marked against

- [ ] A session-based login built alongside the JWT one: a session id stored server-side (MongoDB), sent as an `HttpOnly` cookie
- [ ] Cookie flags set correctly: `HttpOnly`, `Secure`, `SameSite=Lax` (or `Strict`), `maxAge` — each explained in `day-4/sessions-vs-jwt.md`
- [ ] `POST /api/auth/logout` that **actually works** for sessions (delete the session server-side)
- [ ] Then the honest problem: show that logging out a JWT does **not** invalidate it — the token still works until it expires. Demonstrate it. Then implement a token denylist or short expiry + refresh.
- [ ] A refresh-token flow: short-lived access token (15m) + long-lived refresh token (7d) in an `HttpOnly` cookie, with a `/api/auth/refresh` endpoint
- [ ] Refresh-token rotation — a used refresh token is invalidated. Explain what attack rotation detects.
- [ ] `day-4/sessions-vs-jwt.md`: a proper comparison table — where state lives, revocation, scaling, mobile clients, XSS exposure, CSRF exposure — ending with **which you would choose for your capstone and why**
- [ ] Explain why `HttpOnly` cookies defeat XSS token theft but introduce CSRF, and what you do about that

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Sessions vs JWT — where is the state in each? What does that cost you?
2. Why can you not really "log out" a JWT? Name three real mitigations.
3. What does `HttpOnly` prevent? What does `SameSite` prevent? Are they the same attack?
4. What is refresh-token rotation and what does it detect?
5. **Prove it:** open DevTools console and try to read your session cookie with JavaScript. Explain why you cannot.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-21/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 21 day 4: sessions cookies refresh"
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

◀ [Day 3](../day-3/) · [⬆ Week 21 — Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam](../README.md) · [Day 5](../day-5/) ▶
