# 🛠️ Assignment — Week 18 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 18](../../README.md)

## What to build

Write the same tiny server twice.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `raw-server.js` | http module only — manual routing, headers and JSON |
| `express-server.js` | the identical API in Express |
| `comparison.md` | what Express removed, line by line |

## ✅ Done when — this is the checklist you are marked against

- [ ] `day-2/raw-server.js` using only Node's `http` module: routes for `/`, `/about`, `/api/health`, plus a 404 — with manual URL parsing, manual method checks, manual `Content-Type` headers and manual JSON stringifying
- [ ] `day-2/express-server.js` — the identical API in Express
- [ ] `day-2/comparison.md`: what Express removed, line by line. Be specific.
- [ ] `nodemon` (or `node --watch`) set up as `npm run dev`
- [ ] A `PORT` read from `process.env.PORT` with a fallback — and a note on why hardcoding a port breaks deployment
- [ ] `express.json()` added and demonstrated with a POST that echoes the body — then **remove it** and show the body is `undefined`. That five-minute experiment prevents a bug you would otherwise hit twice a year.

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What does Express actually give you over the `http` module?
2. What are `req` and `res` — what is the single most important thing you must do with `res`?
3. What does `express.json()` do? What happens without it?
4. What happens if you send two responses to one request?
5. **Prove it:** start the raw server and the Express server on different ports; `curl` both and show identical output.

---

[← back to the day](../) · [📖 read first](../learn/)
