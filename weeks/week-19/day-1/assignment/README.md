# 🛠️ Assignment — Week 19 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 19](../../README.md)

## What to build

Write five middleware functions yourself, in `day-1/middleware/`. No libraries today — writing them is how the concept lands.

1. `requestLogger` — logs `METHOD /path 200 12ms` including response time and status. (Hint: hook `res.on('finish')`.)
2. `requestId` — attaches a UUID to every request, echoes it in an `X-Request-Id` header, and includes it in the log
3. `apiKeyCheck` — applied to one route group only; rejects with 401 if the `X-API-Key` header is missing
4. `rateLimiter` — max 10 requests per minute per IP, in-memory, returning **429** with a `Retry-After` header
5. `responseTime` + a `slowRequestWarning` that logs anything over 100ms

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `middleware/requestLogger.js` | |
| `middleware/requestId.js` | |
| `middleware/apiKeyCheck.js` | |
| `middleware/rateLimiter.js` | |
| `middleware/responseTime.js` | |
| `middleware.md` | what happens when you forget next() — demonstrated |

## ✅ Done when — this is the checklist you are marked against

- [ ] All five written by hand, each in its own file
- [ ] Applied at three levels — app-wide, router-level and single-route — with a comment on each
- [ ] `day-1/middleware.md`: what happens if you forget `next()`? Demonstrate it (the request hangs) and screenshot the browser waiting.
- [ ] Order deliberately demonstrated: put the logger after the routes, show it never runs, then move it back and explain why order is everything

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What are the three arguments of a middleware function? What is the fourth for?
2. What happens if you call `next()` *and* send a response?
3. Why does middleware order matter? Give a real example from your own code.
4. How do you apply middleware to one route group only?
5. **Prove it:** hit your rate limiter. Show the 429 and the `Retry-After` header in the response.

---

[← back to the day](../) · [📖 read first](../learn/)
