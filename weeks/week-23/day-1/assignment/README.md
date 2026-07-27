# 🛠️ Assignment — Week 23 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 23](../../README.md)

## What to build



## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `client/src/` | routing, layout, auth pages, AuthContext, ProtectedRoute |
| `client/src/styles/` | the base design — variables, type scale, buttons, inputs |
| `progress.md` | |

## ✅ Done when — this is the checklist you are marked against

- [ ] Vite React app in `/client`, running against your local API
- [ ] React Router: every route from your Week 22 plan, with a root layout, nested layouts and a 404
- [ ] Signup, login and logout pages, fully working against the real API
- [ ] `AuthContext` holding the user; token attached via one fetch/axios wrapper — never repeated per call
- [ ] `<ProtectedRoute>` with return-to-intended-page after login
- [ ] Auto-logout and redirect on any 401, with a "session expired" message
- [ ] A shared layout: nav (showing the logged-in user), footer, main area
- [ ] A base design: CSS variables for colour and spacing, typography scale, button and input components. Decide the look **today** and stop deciding it later.

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Show me signup → login → protected page → logout, without a hitch.
2. Where does the token live and why?
3. What happens if the API is down when the app loads?
4. Which components will every page reuse?

---

[← back to the day](../) · [📖 read first](../learn/)
