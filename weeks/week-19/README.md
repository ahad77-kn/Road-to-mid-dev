# Week 19 — Middleware, Error Handling & Your First Full Stack

[← The Road](../../README.md) · Phase 5 · Backend · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 18](../week-18/) · **Next:** [Week 20 — MongoDB →](../week-20/)

> **Goal:** structure a backend the way a real one is structured — and connect your own React frontend to your own API for the first time.

**Why this week matters:** Friday is the milestone of the whole course. Your React app, calling your Express API, on your machine, end to end. Everything before was half a system. But first: middleware, which is the concept Express is actually built on, and error handling, which is what separates an API you can trust from one that returns HTML stack traces to your users.

**The one idea:** a request passes through a *pipeline*. Each middleware can read it, change it, stop it, or pass it on with `next()`. Auth, logging, validation, rate limiting, error handling — all of them are just functions in that pipeline. Understand this and Express holds no more surprises.

---

## 📖 Learning material — 1 hr/day

| Day | Read + type | Source |
| --- | --- | --- |
| D1 | [Express: Using middleware](https://expressjs.com/en/guide/using-middleware.html) · [Writing middleware](https://expressjs.com/en/guide/writing-middleware.html) | Express |
| D2 | [express-validator](https://express-validator.github.io/docs/) or [zod](https://zod.dev/) — pick one and read its basics | library docs |
| D3 | [Express: Error handling](https://expressjs.com/en/guide/error-handling.html) · [RFC 9457 problem details](https://www.rfc-editor.org/rfc/rfc9457.html) | Express / RFC |
| D4 | [MDN: Express tutorial part 2 — structure](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) · [12-factor: config](https://12factor.net/config) | MDN / 12factor |
| D5 | [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) · [Express: cors middleware](https://expressjs.com/en/resources/middleware/cors.html) | MDN / Express |

### 📰 Articles worth your time this week
- [Express: Security best practices](https://expressjs.com/en/advanced/best-practice-security.html) — read it all; it is short
- [helmet](https://helmetjs.github.io/) — the security headers you get for one line
- [OWASP: Injection prevention](https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html) — relevant next week when a real database appears
- [Never commit `.env`](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning)

---

## 🗓️ The week at a glance

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Write five middleware functions by hand | [`day-1/`](day-1/) | – |
| D2 | Validation middleware for the whole API | [`day-2/`](day-2/) | – |
| D3 | Central error handling, 404s & custom errors | [`day-3/`](day-3/) | – |
| D4 | Restructure: routes / controllers / services | [`day-4/`](day-4/) | – |
| D5 | **Connect React to your own API** | [`day-5/`](day-5/) | – |

---

## Day 1 — Middleware, by hand

**Read first (1 hr):** Express *Using middleware* + *Writing middleware*.

**Build (2 hr):** Write five middleware functions yourself, in `day-1/middleware/`. No libraries today — writing them is how the concept lands.

1. `requestLogger` — logs `METHOD /path 200 12ms` including response time and status. (Hint: hook `res.on('finish')`.)
2. `requestId` — attaches a UUID to every request, echoes it in an `X-Request-Id` header, and includes it in the log
3. `apiKeyCheck` — applied to one route group only; rejects with 401 if the `X-API-Key` header is missing
4. `rateLimiter` — max 10 requests per minute per IP, in-memory, returning **429** with a `Retry-After` header
5. `responseTime` + a `slowRequestWarning` that logs anything over 100ms

**Must have**
- [ ] All five written by hand, each in its own file
- [ ] Applied at three levels — app-wide, router-level and single-route — with a comment on each
- [ ] `day-1/middleware.md`: what happens if you forget `next()`? Demonstrate it (the request hangs) and screenshot the browser waiting.
- [ ] Order deliberately demonstrated: put the logger after the routes, show it never runs, then move it back and explain why order is everything

**🧪 Test material**
1. What are the three arguments of a middleware function? What is the fourth for?
2. What happens if you call `next()` *and* send a response?
3. Why does middleware order matter? Give a real example from your own code.
4. How do you apply middleware to one route group only?
5. **Prove it:** hit your rate limiter. Show the 429 and the `Retry-After` header in the response.

---

## Day 2 — Validation

**Read first (1 hr):** express-validator or zod docs.

**Build (2 hr):** Every endpoint validates its input before the handler ever runs.

**Must have**
- [ ] A validation schema per endpoint, kept next to the route, not inside the handler
- [ ] Body, query params **and** path params all validated
- [ ] Types coerced properly — `?page=2` arrives as a string; the handler must receive a number
- [ ] Unknown fields rejected or stripped — decide which, and justify it
- [ ] A **consistent** 400 error shape listing every failing field at once, not just the first:
  ```json
  { "error": "Validation failed",
    "details": [{ "field": "title", "message": "must be 1–200 characters" }] }
  ```
- [ ] Strings trimmed and sanitised; a length cap on every string field
- [ ] `day-2/validation.md`: **why client-side validation is not enough** — show your API rejecting a request that your React form would never have sent. This is the point of the day.

**🧪 Test material**
1. Why validate on the server when the frontend already validates?
2. Where should validation live — in the route, the controller, or the model? Defend your answer.
3. Why return *all* validation errors rather than the first?
4. What happens to `?page=abc` in your API?
5. **Prove it:** bypass your frontend entirely with `curl` and try to create an invalid record. Show me the 400.

---

## Day 3 — Errors

**Read first (1 hr):** Express *Error handling* + RFC 9457.

**Build (2 hr):** One place where all errors are handled.

**Must have**
- [ ] A central error-handling middleware (four arguments) registered **last**
- [ ] A custom `AppError` class with `statusCode` and `isOperational`; subclasses `NotFoundError`, `ValidationError`, `UnauthorizedError`
- [ ] A 404 handler for unmatched routes returning JSON, never HTML
- [ ] An `asyncHandler` wrapper so a rejected promise in any async route reaches the error middleware — **demonstrate the bug first**: throw inside an async handler without it and show the request hanging forever
- [ ] Stack traces logged on the server, **never sent to the client in production** — controlled by `NODE_ENV`
- [ ] Every error response uses one consistent shape
- [ ] `process.on('unhandledRejection')` and `uncaughtException` handled with a graceful shutdown
- [ ] `day-3/errors.md`: operational vs programmer errors — what you do differently with each

**🧪 Test material**
1. How does Express know a middleware is an error handler?
2. Why does a thrown error inside an `async` handler not reach it by default?
3. What must never appear in a production error response, and why?
4. Operational vs programmer error — an example of each from your code.
5. **Prove it:** trigger a database-style failure, a validation failure and an unknown route. All three must return the same JSON shape with different codes.

---

## Day 4 — Structure

**Read first (1 hr):** MDN *Express skeleton* + 12-factor *config*.

**Build (2 hr):** Restructure the whole API. No new features — organisation only.

```
src/
├── app.js              ← express app, middleware wiring (no listen)
├── server.js           ← starts the server (imports app)
├── config/index.js     ← env vars validated at boot
├── routes/todos.routes.js
├── controllers/todos.controller.js   ← req/res only
├── services/todos.service.js         ← business logic, no req/res
├── middleware/
├── utils/
└── validators/
```

**Must have**
- [ ] The structure above, fully applied
- [ ] Controllers touch `req`/`res`; services do not — this separation is the whole assignment. A service function must be callable from a CLI script with no HTTP involved.
- [ ] `.env` with `PORT`, `NODE_ENV`, `CORS_ORIGIN`; `.env.example` committed; `.env` gitignored
- [ ] Config validated at startup — a missing required env var stops the server with a clear message, rather than failing at 3am on a random request
- [ ] `app.js` separate from `server.js` (this makes it testable — note why)
- [ ] A `/api/health` endpoint returning uptime and version
- [ ] `day-4/structure.md`: what each folder is for and one rule for what may import what

**🧪 Test material**
1. Why separate controllers from services?
2. Why is `app.js` separate from `server.js`?
3. Where does a new feature go — walk me through adding "categories" folder by folder.
4. Why validate environment config at startup?
5. **Prove it:** call a service function directly from a Node script, with no HTTP server running.

---

## Day 5 — 🎉 Full stack

**Read first (1 hr):** MDN *CORS* + Express cors middleware.

**Build (2 hr):** Your React to-do app talks to your Express to-do API.

**Must have**
- [ ] **See the CORS error first.** Connect without configuring CORS, screenshot the console error, and explain in `day-5/cors.md` exactly what the browser did and why. Then fix it.
- [ ] `cors` configured for your frontend origin **only** — not `*`. Say why `*` is lazy and when it is acceptable.
- [ ] The React app's every operation hits the API: list, create, toggle, edit, delete, filter, paginate
- [ ] `VITE_API_URL` from the frontend's env — no hardcoded `localhost:3000`
- [ ] Loading and error states on every operation
- [ ] **Optimistic updates** on toggle: update the UI immediately, roll back if the request fails. Demonstrate the rollback by killing the server mid-click.
- [ ] Server-side validation errors displayed on the correct form field in React
- [ ] Both apps in one repo (`/client`, `/server`) with a root README explaining how to run both
- [ ] `day-5/fullstack.md`: draw the full request path — React component → fetch → CORS preflight → Express → middleware chain → controller → service → response → React state → re-render

**🧪 Test material**
1. What is CORS protecting against? Who enforces it — the browser or the server?
2. What is a preflight request? Which requests trigger one? Show one in the Network tab.
3. Why does the API URL belong in an env variable?
4. What is an optimistic update, and what is the risk?
5. **Prove it:** kill the API server mid-use. The frontend must degrade gracefully, not white-screen. Restart it; the app must recover without a refresh.

---

## ✅ End-of-week check

- [ ] You think in middleware pipelines
- [ ] Every error in your API goes through one handler and one shape
- [ ] You validate on the server and know exactly why the client is not enough
- [ ] Your backend is structured so a new feature has an obvious home
- [ ] **You have shipped a full-stack application.** Both halves are yours.

Next week the data finally survives a restart.
