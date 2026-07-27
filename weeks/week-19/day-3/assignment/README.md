# 🛠️ Assignment — Week 19 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 19](../../README.md)

## What to build

One place where all errors are handled.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/errors/AppError.js` | + NotFoundError, ValidationError, UnauthorizedError |
| `src/middleware/errorHandler.js` | four arguments, registered last |
| `src/utils/asyncHandler.js` | |
| `errors.md` | operational vs programmer errors |

## ✅ Done when — this is the checklist you are marked against

- [ ] A central error-handling middleware (four arguments) registered **last**
- [ ] A custom `AppError` class with `statusCode` and `isOperational`; subclasses `NotFoundError`, `ValidationError`, `UnauthorizedError`
- [ ] A 404 handler for unmatched routes returning JSON, never HTML
- [ ] An `asyncHandler` wrapper so a rejected promise in any async route reaches the error middleware — **demonstrate the bug first**: throw inside an async handler without it and show the request hanging forever
- [ ] Stack traces logged on the server, **never sent to the client in production** — controlled by `NODE_ENV`
- [ ] Every error response uses one consistent shape
- [ ] `process.on('unhandledRejection')` and `uncaughtException` handled with a graceful shutdown
- [ ] `day-3/errors.md`: operational vs programmer errors — what you do differently with each

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. How does Express know a middleware is an error handler?
2. Why does a thrown error inside an `async` handler not reach it by default?
3. What must never appear in a production error response, and why?
4. Operational vs programmer error — an example of each from your code.
5. **Prove it:** trigger a database-style failure, a validation failure and an unknown route. All three must return the same JSON shape with different codes.

---

[← back to the day](../) · [📖 read first](../learn/)
