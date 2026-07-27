# 🛠️ Assignment — Week 19 Day 4 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 19](../../README.md)

## What to build

Restructure the whole API. No new features — organisation only.

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

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/` | app.js, server.js, config/, routes/, controllers/, services/, middleware/ |
| `.env.example` | committed — the real .env is gitignored |
| `structure.md` | what each folder is for and what may import what |

## ✅ Done when — this is the checklist you are marked against

- [ ] The structure above, fully applied
- [ ] Controllers touch `req`/`res`; services do not — this separation is the whole assignment. A service function must be callable from a CLI script with no HTTP involved.
- [ ] `.env` with `PORT`, `NODE_ENV`, `CORS_ORIGIN`; `.env.example` committed; `.env` gitignored
- [ ] Config validated at startup — a missing required env var stops the server with a clear message, rather than failing at 3am on a random request
- [ ] `app.js` separate from `server.js` (this makes it testable — note why)
- [ ] A `/api/health` endpoint returning uptime and version
- [ ] `day-4/structure.md`: what each folder is for and one rule for what may import what

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Why separate controllers from services?
2. Why is `app.js` separate from `server.js`?
3. Where does a new feature go — walk me through adding "categories" folder by folder.
4. Why validate environment config at startup?
5. **Prove it:** call a service function directly from a Node script, with no HTTP server running.

---

[← back to the day](../) · [📖 read first](../learn/)
