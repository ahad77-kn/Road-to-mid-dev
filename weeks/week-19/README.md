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

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Write five middleware functions by hand | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | Validation middleware for the whole API | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | Central error handling, 404s & custom errors | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | Restructure: routes / controllers / services | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | **Connect React to your own API** | [📄 open →](day-5/) | – |

---

## ✅ End-of-week check

- [ ] You think in middleware pipelines
- [ ] Every error in your API goes through one handler and one shape
- [ ] You validate on the server and know exactly why the client is not enough
- [ ] Your backend is structured so a new feature has an obvious home
- [ ] **You have shipped a full-stack application.** Both halves are yours.

Next week the data finally survives a restart.
