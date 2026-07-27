# 🛠️ Assignment — Week 19 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 19](../../README.md)

## What to build

Your React to-do app talks to your Express to-do API.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `client/` | your React app, pointed at your API |
| `server/` | your API |
| `cors.md` | the error you saw first, and what the browser was doing |
| `fullstack.md` | the full request path drawn, React click → response → re-render |

## ✅ Done when — this is the checklist you are marked against

- [ ] **See the CORS error first.** Connect without configuring CORS, screenshot the console error, and explain in `day-5/cors.md` exactly what the browser did and why. Then fix it.
- [ ] `cors` configured for your frontend origin **only** — not `*`. Say why `*` is lazy and when it is acceptable.
- [ ] The React app's every operation hits the API: list, create, toggle, edit, delete, filter, paginate
- [ ] `VITE_API_URL` from the frontend's env — no hardcoded `localhost:3000`
- [ ] Loading and error states on every operation
- [ ] **Optimistic updates** on toggle: update the UI immediately, roll back if the request fails. Demonstrate the rollback by killing the server mid-click.
- [ ] Server-side validation errors displayed on the correct form field in React
- [ ] Both apps in one repo (`/client`, `/server`) with a root README explaining how to run both
- [ ] `day-5/fullstack.md`: draw the full request path — React component → fetch → CORS preflight → Express → middleware chain → controller → service → response → React state → re-render

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is CORS protecting against? Who enforces it — the browser or the server?
2. What is a preflight request? Which requests trigger one? Show one in the Network tab.
3. Why does the API URL belong in an env variable?
4. What is an optimistic update, and what is the risk?
5. **Prove it:** kill the API server mid-use. The frontend must degrade gracefully, not white-screen. Restart it; the app must recover without a refresh.

---

[← back to the day](../) · [📖 read first](../learn/)
