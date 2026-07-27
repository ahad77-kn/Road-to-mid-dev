# 🛠️ Assignment — Week 16 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 16](../../README.md)

## What to build

Combine everything, then add a fake auth flow.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/context/AuthContext.jsx` | |
| `src/components/ProtectedRoute.jsx` | |
| `guards.md` | why a frontend guard is NOT security — with proof you broke your own |

## ✅ Done when — this is the checklist you are marked against

- [ ] Favourites refactored to `useReducer` inside the provider, exposing actions rather than a raw setter
- [ ] A fake `AuthContext`: `user`, `login(email, password)`, `logout()` — no real backend yet, just a hard-coded check
- [ ] A `<ProtectedRoute>` wrapper redirecting to `/login` when logged out
- [ ] After login, the user returns to the page they originally wanted (`state.from`)
- [ ] Auth persisted so a refresh does not log you out
- [ ] The nav shows Login or the user's name + Logout, correctly
- [ ] **`day-5/guards.md` must contain this, in your own words:** a frontend route guard hides UI. It is **not security**. Anyone can open DevTools, edit the state, and see the "protected" page. Real protection lives on the server, which checks the request every single time. You will build that in Week 21.

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What does a `<ProtectedRoute>` actually do, mechanically?
2. Why is a frontend guard not security? Demonstrate breaking your own guard in DevTools.
3. What is the difference between authentication and authorisation?
4. How do you send the user back to where they were after logging in?
5. **Prove it:** break your own protected route from the console, in front of me. Then explain exactly which server-side check would have stopped you.

---

[← back to the day](../) · [📖 read first](../learn/)
