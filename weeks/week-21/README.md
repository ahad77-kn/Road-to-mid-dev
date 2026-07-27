# Week 21 — Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam

[← The Road](../../README.md) · Phase 5 · Backend · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 20](../week-20/) · **Next:** [Week 22 — Capstone planning →](../week-22/)

> **Goal:** users who can sign up, log in, stay logged in, and see **only their own data** — implemented correctly, and understood well enough to defend in an interview.

**Why this week matters:** this is the week most self-taught developers get wrong, and it is the most commonly probed topic in interviews. Everyone can make a login form. Far fewer can explain why the token is stored where it is, what happens when it expires, and why hiding a button protects nothing.

**Three sentences to have memorised by Friday:**
1. **Authentication** = who you are. **Authorisation** = what you are allowed to do. Different problems, different code, different failures.
2. A frontend guard is **UX**. The server must re-check **every single request**, because the client can lie about anything.
3. Never store a password. Store a slow, salted hash of it — `bcrypt` or `argon2`, always.

⚠️ **Do not invent your own crypto, token format, or hashing scheme this week.** Use the standard libraries. Understanding them deeply *is* the assignment.

---

## 📖 Learning material — 1 hr/day

| Day | Read | Source |
| --- | --- | --- |
| D1 | [The Copenhagen Book: Passwords](https://thecopenhagenbook.com/password-authentication) · [OWASP: Password storage cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) | Copenhagen / OWASP |
| D2 | [jwt.io: Introduction](https://jwt.io/introduction) · [Copenhagen Book: Sessions](https://thecopenhagenbook.com/sessions) | jwt.io / Copenhagen |
| D3 | [Express: writing middleware](https://expressjs.com/en/guide/writing-middleware.html) (again, for auth) · [OWASP: Authorization cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) | Express / OWASP |
| D4 | [MDN: Set-Cookie & `HttpOnly`/`SameSite`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) · [Auth0: refresh tokens](https://auth0.com/docs/secure/tokens/refresh-tokens) · [OWASP: Session management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) | MDN / Auth0 / OWASP |
| D5 | [OWASP Top 10](https://owasp.org/www-project-top-ten/) · [OWASP: CSRF prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) | OWASP |

### 📰 Read these properly — they are the week's core
- **[The Copenhagen Book](https://thecopenhagenbook.com/)** — read the whole thing this week. It is short, free, and the clearest auth material that exists.
- [OWASP: Authentication cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [Why storing JWTs in localStorage is risky](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage) — and what to do instead
- [OAuth 2.0 simplified](https://www.oauth.com/) — for "Login with Google" later; not required this week

---

## 🗓️ The week at a glance

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Password hashing & signup | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | Login & JWT issuing | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | Auth middleware — the real guard | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | Sessions vs JWT, cookies & refresh tokens | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | Per-user data + the React auth flow | [📄 open →](day-5/) | – |
| — | **Phase 5 exam** (take-home, 2 days + viva) | [📄 exam →](exam/) | – |

---

## 🎓 Phase 5 Exam — take-home, 2 days + a 30-minute viva

**Spec:** a **notes API** — users, signup/login, full CRUD on notes, MongoDB, each user seeing only their own notes — plus a minimal React frontend.

**Requirements:** proper hashing, working auth middleware, ownership enforcement, validation, consistent error shape, a README with the endpoint table, and a Postman collection.

**Then the viva (30 min).** The teacher will ask you to:
- Explain the auth flow end to end
- Explain one aggregation or query in your code
- Explain one middleware, line by line
- **Add a small feature live** (e.g. "notes can be shared read-only with another user" or "archive instead of delete")

**Passing (7/10):** secure, working, and explained. Any of these three is an automatic fail regardless of the rest:
- A password stored in a recoverable form
- A route that trusts a client-supplied user id
- A query that does not filter by owner

```bash
mkdir -p weeks/week-21/exam && cp _template/EXAM.md weeks/week-21/exam/EXAM.md
```

**Pass → Phase 6, the capstone, unlocked.**

---

## ✅ End-of-week check

- [ ] You can explain hashing, salting and why bcrypt is slow
- [ ] You know exactly what a JWT is, what it proves, and what it does not
- [ ] You can argue sessions vs JWT from both sides and pick one for a given app
- [ ] Every protected query in your code filters by the authenticated user
- [ ] You genuinely understand that frontend guards are cosmetic

**Phase 5 done — you are now a full-stack developer.** What remains is proving it with one real, deployed project of your own design.
