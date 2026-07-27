# Week 07 · Day 5 — Make it all survive a refresh

[🛣️ The Road](../../../README.md) · [📅 Week 07](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 07 — Events, Forms & Real Interactive Apps](../README.md) · [Week 08 · Day 1](../../week-08/day-1/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Events, Forms & Real Interactive Apps
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Web Storage API* + JS.info *LocalStorage*.

## 2️⃣ Build — 2 hours

Add persistence to the to-do, the quiz and the signup form.

## 3️⃣ Must have — the checklist you are marked against

- [ ] To-do: tasks survive a refresh; filter choice is remembered too
- [ ] Quiz: high scores saved as an array of `{ score, date }` and shown as a leaderboard (top 5)
- [ ] Signup form: draft values saved as you type so a refresh does not lose them — but the **password is never saved** (explain why in a comment)
- [ ] A "clear all data" button with a confirmation step
- [ ] All read/write goes through two small helpers — `saveState(key, value)` and `loadState(key, fallback)` — with `try/catch` around `JSON.parse`
- [ ] Handles the case where stored data is corrupt or from an older version of your app, without crashing

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. `localStorage` vs `sessionStorage` vs cookies — what is each for, and what is the size limit?
2. What type can localStorage store? Why is `JSON.stringify` needed?
3. Why wrap `JSON.parse` in `try/catch`?
4. Why must a password never go in localStorage? (Say "any JavaScript on the page can read it" and explain what that means.)
5. **Prove it:** manually corrupt the stored JSON in DevTools → Application → Local Storage, then refresh. The app must not white-screen.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-07/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 07 day 5: make it all survive a"
git push
```

## 🤖 The AI rule for today

Every `LEARNED.md` has this mandatory line:

```
**AI used?** yes / no — what for:
```

| What you did | Allowed? | Your maximum score |
| --- | --- | --- |
| Wrote it yourself using docs and search | ✅ | **10/10** |
| Asked AI to *explain* a concept, then wrote the code yourself | ✅ | **10/10** |
| AI wrote part of the code — and you say exactly which part | ⚠️ | 7/10 |
| AI wrote it, you say so honestly | ⚠️ | 4/10 → redo by hand |
| AI wrote it and you did not say so | ❌ | **0/10** |

Asking AI *"explain how the box model works"* costs you nothing and is smart learning.
Asking it *"write my pricing card"* and staying quiet is the one thing here that scores zero.
Full policy: [GRADING.md](../../../GRADING.md).

## 🆘 Stuck?

1. Re-read the error message. All of it — file name and line number included.
2. Go back to the **Read first** links above. The answer is usually in the paragraph you skimmed.
3. Search like a developer: `mdn <the exact property>`, not "how do I".
4. Still stuck after 30 minutes? Write the question down in `LEARNED.md` and ask the teacher.
   Being stuck is not failure — hiding that you were stuck is.
5. Deeper reading on every topic: [📚 RESOURCES.md](../../../RESOURCES.md)

## 📂 Files in this folder

| File | Who writes it | Required | Done |
| --- | --- | --- | --- |
| Your code (`.html`, `.css`, `.js`, …) | you | ✅ | ⬜ |
| `LEARNED.md` | you, the same day | ✅ | ⬜ |
| `ASSESSMENT.md` | the teacher | – | ⬜ |

**No folder + no `LEARNED.md` = this assignment does not exist.**

---

◀ [Day 4](../day-4/) · [⬆ Week 07 — Events, Forms & Real Interactive Apps](../README.md) · [Week 08 · Day 1](../../week-08/day-1/) ▶
