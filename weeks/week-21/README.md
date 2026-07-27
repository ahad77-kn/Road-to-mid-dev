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

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Password hashing & signup | [`day-1/`](day-1/) | – |
| D2 | Login & JWT issuing | [`day-2/`](day-2/) | – |
| D3 | Auth middleware — the real guard | [`day-3/`](day-3/) | – |
| D4 | Sessions vs JWT, cookies & refresh tokens | [`day-4/`](day-4/) | – |
| D5 | Per-user data + the React auth flow | [`day-5/`](day-5/) | – |
| — | **Phase 5 exam** (take-home, 2 days + viva) | [`exam/`](exam/) | – |

---

## Day 1 — Passwords

**Read first (1 hr):** Copenhagen Book *Password authentication* + OWASP *Password storage*.

**Build (2 hr):** A `User` model and a signup endpoint.

**Must have**
- [ ] `User` schema: `email` (unique, lowercase, trimmed, validated), `password`, `name`, `role` (enum: `user`/`admin`), `createdAt`
- [ ] `POST /api/auth/signup` — validate, check email is not taken, hash, save, return the user **without the password**
- [ ] `bcrypt` with a cost factor of at least 10 — and `day-1/hashing.md` explaining what the cost factor does and why slowness is the *feature*
- [ ] Hashing in a `pre('save')` hook, guarded with `isModified('password')` so a name change does not re-hash the hash
- [ ] `select: false` on the password field so it never leaks into a normal query
- [ ] Password rules: min 8 chars, checked server-side (never trust the client)
- [ ] Duplicate email → **409**, with a message that does not confirm which emails exist — and a note on the trade-off between UX and user enumeration
- [ ] `day-1/hashing.md` also answers: what is a salt, why is it stored alongside the hash, and why are two hashes of the same password different?
- [ ] **Demonstrate**: hash `"password123"` three times and show three different outputs, then show `bcrypt.compare` matching all three

**🧪 Test material**
1. Why hash instead of encrypt? What is the difference?
2. What is a salt and what attack does it defeat? (Name it.)
3. Why is bcrypt deliberately slow? What does the cost factor control?
4. Why does the same password hash differently each time, and how does `compare` still work?
5. **Prove it:** show me the database. If I can read a password, you score 0 for the day.

---

## Day 2 — Login & tokens

**Read first (1 hr):** jwt.io *Introduction* + Copenhagen *Sessions*.

**Build (2 hr):** `POST /api/auth/login` issuing a JWT.

**Must have**
- [ ] Email + password verified with `bcrypt.compare`
- [ ] Wrong email and wrong password return the **identical** 401 message ("Invalid credentials") — explain user enumeration in `day-2/jwt.md`
- [ ] JWT signed with `jsonwebtoken`: payload `{ sub: userId, role }`, `expiresIn: "15m"`
- [ ] The secret in `.env`, long and random, never committed. `day-2/jwt.md` explains what someone with your secret can do (forge any user's token).
- [ ] **Decode your own token at [jwt.io](https://jwt.io) and paste the three parts into `day-2/jwt.md`** — header, payload, signature — with an explanation of each
- [ ] **Prove the payload is not encrypted**: decode it without the secret and show the user id in plain text. Then explain what the signature *does* guarantee.
- [ ] Tamper with the payload, re-send it, and show the server rejecting it
- [ ] `GET /api/auth/me` returning the current user from a valid token
- [ ] Rate limiting on login (5 attempts per 15 min per IP) → 429

**🧪 Test material**
1. What are the three parts of a JWT? Which is secret?
2. Is a JWT payload encrypted? What may never go in it?
3. What does the signature prove, and what does it *not* prove?
4. Why the same error for wrong email and wrong password?
5. **Prove it:** change one character of your token's payload and call a protected route. Show the rejection and explain which check failed.

---

## Day 3 — The guard that actually guards

**Read first (1 hr):** Express *writing middleware* + OWASP *Authorization*.

**Build (2 hr):** `requireAuth` and `requireRole` middleware.

**Must have**
- [ ] `requireAuth`: reads the `Authorization: Bearer <token>` header, verifies it, loads the user, attaches `req.user`, calls `next()`
- [ ] Every failure returns **401** with a distinct reason logged (missing header, malformed, expired, invalid signature, user deleted since issue) — note why the client message stays generic
- [ ] `requireRole("admin")` for role checks → **403**, not 401. `day-3/guards.md` must explain the difference: 401 = "I don't know who you are", 403 = "I know who you are, and no".
- [ ] **Ownership checks**: `GET /api/todos/:id` must 404 (not 403 — think about why) if the todo belongs to someone else. This is the check that everyone forgets.
- [ ] Applied to protect all `/api/todos` routes
- [ ] An admin-only route listing all users
- [ ] `day-3/guards.md` must contain, in your own words: **the frontend guard from Week 16 protected nothing.** Show it: log in as user A, take their token, and try to fetch user B's todos with `curl`. The server must refuse. Screenshot it.
- [ ] Token expiry demonstrated: set `expiresIn: "10s"`, wait, and show the 401

**🧪 Test material**
1. 401 vs 403 — the difference, and an example of each from your API.
2. Why might returning 404 be better than 403 for someone else's resource?
3. Where exactly does `req.user` come from, and can a client fake it?
4. Authentication vs authorisation — which is `requireAuth` and which is `requireRole`?
5. **Prove it:** with `curl` and user A's token, try five different ways to reach user B's data. All five must fail.

---

## Day 4 — Sessions, cookies & refresh

**Read first (1 hr):** MDN *Set-Cookie* + Auth0 *Refresh tokens* + OWASP *Session management*.

**Build (2 hr):** Implement the **other** approach, then compare them honestly.

**Must have**
- [ ] A session-based login built alongside the JWT one: a session id stored server-side (MongoDB), sent as an `HttpOnly` cookie
- [ ] Cookie flags set correctly: `HttpOnly`, `Secure`, `SameSite=Lax` (or `Strict`), `maxAge` — each explained in `day-4/sessions-vs-jwt.md`
- [ ] `POST /api/auth/logout` that **actually works** for sessions (delete the session server-side)
- [ ] Then the honest problem: show that logging out a JWT does **not** invalidate it — the token still works until it expires. Demonstrate it. Then implement a token denylist or short expiry + refresh.
- [ ] A refresh-token flow: short-lived access token (15m) + long-lived refresh token (7d) in an `HttpOnly` cookie, with a `/api/auth/refresh` endpoint
- [ ] Refresh-token rotation — a used refresh token is invalidated. Explain what attack rotation detects.
- [ ] `day-4/sessions-vs-jwt.md`: a proper comparison table — where state lives, revocation, scaling, mobile clients, XSS exposure, CSRF exposure — ending with **which you would choose for your capstone and why**
- [ ] Explain why `HttpOnly` cookies defeat XSS token theft but introduce CSRF, and what you do about that

**🧪 Test material**
1. Sessions vs JWT — where is the state in each? What does that cost you?
2. Why can you not really "log out" a JWT? Name three real mitigations.
3. What does `HttpOnly` prevent? What does `SameSite` prevent? Are they the same attack?
4. What is refresh-token rotation and what does it detect?
5. **Prove it:** open DevTools console and try to read your session cookie with JavaScript. Explain why you cannot.

---

## Day 5 — The full loop

**Read first (1 hr):** OWASP Top 10 + CSRF prevention.

**Build (2 hr):** Wire the React app to real auth, and make every user's data their own.

**Must have**
- [ ] Every todo has an `owner` ref; **every** query filters by `req.user.id` — a missing filter here is the single most common real-world data leak
- [ ] Create sets the owner from the token, never from the request body. Demonstrate that sending `{"owner": "<someone else's id>"}` is ignored.
- [ ] React: signup, login, logout, and a `/profile` page
- [ ] `AuthContext` holding the user; the token attached to every request (a `fetch` wrapper or axios interceptor — not repeated in every call)
- [ ] `<ProtectedRoute>` redirecting to `/login`, returning the user to where they were after
- [ ] A 401 response anywhere → auto-logout and redirect, with a "session expired" message
- [ ] Automatic token refresh on 401, retrying the original request once
- [ ] The UI shows different options for `admin` vs `user` — **and** the server enforces it independently. Demonstrate the server refusing an admin action when the UI is hacked to show the button.
- [ ] `day-5/auth-flow.md`: the complete flow drawn — signup → login → token issued → stored where → attached how → verified where → refresh → logout — with a note at each step on what an attacker would try.

**🧪 Test material**
1. Trace one request end to end: React click → header → middleware → ownership check → response.
2. Where is your token stored on the client, and what is the risk of that choice? What did you accept?
3. How do you stop user A creating a todo owned by user B?
4. What happens when the token expires mid-session? Walk me through what the user experiences.
5. **Prove it:** log in as two users in two browsers. From A's console and from `curl`, try to read, modify and delete B's data. Every attempt must fail, and you must explain which line of code stopped each one.

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
