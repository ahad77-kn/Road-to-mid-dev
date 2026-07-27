# 🛠️ Assignment — Week 21 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 21](../../README.md)

## What to build

Wire the React app to real auth, and make every user's data their own.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `server/` | every query filtered by req.user.id |
| `client/` | the full auth flow in React |
| `auth-flow.md` | the whole flow drawn, with what an attacker would try at each step |

## ✅ Done when — this is the checklist you are marked against

- [ ] Every todo has an `owner` ref; **every** query filters by `req.user.id` — a missing filter here is the single most common real-world data leak
- [ ] Create sets the owner from the token, never from the request body. Demonstrate that sending `{"owner": "<someone else's id>"}` is ignored.
- [ ] React: signup, login, logout, and a `/profile` page
- [ ] `AuthContext` holding the user; the token attached to every request (a `fetch` wrapper or axios interceptor — not repeated in every call)
- [ ] `<ProtectedRoute>` redirecting to `/login`, returning the user to where they were after
- [ ] A 401 response anywhere → auto-logout and redirect, with a "session expired" message
- [ ] Automatic token refresh on 401, retrying the original request once
- [ ] The UI shows different options for `admin` vs `user` — **and** the server enforces it independently. Demonstrate the server refusing an admin action when the UI is hacked to show the button.
- [ ] `day-5/auth-flow.md`: the complete flow drawn — signup → login → token issued → stored where → attached how → verified where → refresh → logout — with a note at each step on what an attacker would try.

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Trace one request end to end: React click → header → middleware → ownership check → response.
2. Where is your token stored on the client, and what is the risk of that choice? What did you accept?
3. How do you stop user A creating a todo owned by user B?
4. What happens when the token expires mid-session? Walk me through what the user experiences.
5. **Prove it:** log in as two users in two browsers. From A's console and from `curl`, try to read, modify and delete B's data. Every attempt must fail, and you must explain which line of code stopped each one.

---

[← back to the day](../) · [📖 read first](../learn/)
