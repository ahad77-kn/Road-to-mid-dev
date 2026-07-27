# 🛠️ Assignment — Week 21 Day 4 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 21](../../README.md)

## What to build

Implement the **other** approach, then compare them honestly.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/models/Session.js` | |
| `src/controllers/session.controller.js` | + refresh + rotation |
| `sessions-vs-jwt.md` | the comparison table, ending in your choice for the capstone |

## ✅ Done when — this is the checklist you are marked against

- [ ] A session-based login built alongside the JWT one: a session id stored server-side (MongoDB), sent as an `HttpOnly` cookie
- [ ] Cookie flags set correctly: `HttpOnly`, `Secure`, `SameSite=Lax` (or `Strict`), `maxAge` — each explained in `day-4/sessions-vs-jwt.md`
- [ ] `POST /api/auth/logout` that **actually works** for sessions (delete the session server-side)
- [ ] Then the honest problem: show that logging out a JWT does **not** invalidate it — the token still works until it expires. Demonstrate it. Then implement a token denylist or short expiry + refresh.
- [ ] A refresh-token flow: short-lived access token (15m) + long-lived refresh token (7d) in an `HttpOnly` cookie, with a `/api/auth/refresh` endpoint
- [ ] Refresh-token rotation — a used refresh token is invalidated. Explain what attack rotation detects.
- [ ] `day-4/sessions-vs-jwt.md`: a proper comparison table — where state lives, revocation, scaling, mobile clients, XSS exposure, CSRF exposure — ending with **which you would choose for your capstone and why**
- [ ] Explain why `HttpOnly` cookies defeat XSS token theft but introduce CSRF, and what you do about that

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Sessions vs JWT — where is the state in each? What does that cost you?
2. Why can you not really "log out" a JWT? Name three real mitigations.
3. What does `HttpOnly` prevent? What does `SameSite` prevent? Are they the same attack?
4. What is refresh-token rotation and what does it detect?
5. **Prove it:** open DevTools console and try to read your session cookie with JavaScript. Explain why you cannot.

---

[← back to the day](../) · [📖 read first](../learn/)
