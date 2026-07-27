# 🛠️ Assignment — Week 07 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 07](../../README.md)

## What to build

Add persistence to the to-do, the quiz and the signup form.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `storage.js` | saveState/loadState helpers with try/catch |
| `todo/` | the to-do app, now persistent |
| `quiz/` | the quiz, with a leaderboard |
| `signup/` | the form, with a saved draft — never the password |

## ✅ Done when — this is the checklist you are marked against

- [ ] To-do: tasks survive a refresh; filter choice is remembered too
- [ ] Quiz: high scores saved as an array of `{ score, date }` and shown as a leaderboard (top 5)
- [ ] Signup form: draft values saved as you type so a refresh does not lose them — but the **password is never saved** (explain why in a comment)
- [ ] A "clear all data" button with a confirmation step
- [ ] All read/write goes through two small helpers — `saveState(key, value)` and `loadState(key, fallback)` — with `try/catch` around `JSON.parse`
- [ ] Handles the case where stored data is corrupt or from an older version of your app, without crashing

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. `localStorage` vs `sessionStorage` vs cookies — what is each for, and what is the size limit?
2. What type can localStorage store? Why is `JSON.stringify` needed?
3. Why wrap `JSON.parse` in `try/catch`?
4. Why must a password never go in localStorage? (Say "any JavaScript on the page can read it" and explain what that means.)
5. **Prove it:** manually corrupt the stored JSON in DevTools → Application → Local Storage, then refresh. The app must not white-screen.

---

[← back to the day](../) · [📖 read first](../learn/)
