# Week 21 · Day 5 — The full loop

[🛣️ The Road](../../../README.md) · [📅 Week 21](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 21 — Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam](../README.md) · [Week 22 · Day 1](../../week-22/day-1/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

OWASP Top 10 + CSRF prevention.

## 2️⃣ Build — 2 hours

Wire the React app to real auth, and make every user's data their own.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Every todo has an `owner` ref; **every** query filters by `req.user.id` — a missing filter here is the single most common real-world data leak
- [ ] Create sets the owner from the token, never from the request body. Demonstrate that sending `{"owner": "<someone else's id>"}` is ignored.
- [ ] React: signup, login, logout, and a `/profile` page
- [ ] `AuthContext` holding the user; the token attached to every request (a `fetch` wrapper or axios interceptor — not repeated in every call)
- [ ] `<ProtectedRoute>` redirecting to `/login`, returning the user to where they were after
- [ ] A 401 response anywhere → auto-logout and redirect, with a "session expired" message
- [ ] Automatic token refresh on 401, retrying the original request once
- [ ] The UI shows different options for `admin` vs `user` — **and** the server enforces it independently. Demonstrate the server refusing an admin action when the UI is hacked to show the button.
- [ ] `day-5/auth-flow.md`: the complete flow drawn — signup → login → token issued → stored where → attached how → verified where → refresh → logout — with a note at each step on what an attacker would try.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Trace one request end to end: React click → header → middleware → ownership check → response.
2. Where is your token stored on the client, and what is the risk of that choice? What did you accept?
3. How do you stop user A creating a todo owned by user B?
4. What happens when the token expires mid-session? Walk me through what the user experiences.
5. **Prove it:** log in as two users in two browsers. From A's console and from `curl`, try to read, modify and delete B's data. Every attempt must fail, and you must explain which line of code stopped each one.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-21/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 21 day 5: the full loop"
git push
```

> ⚠️ **After this day comes the Phase 5 exam** — see [the week page](../README.md#-phase-5-exam) and put the work in [`../exam/`](../exam/).

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

◀ [Day 4](../day-4/) · [⬆ Week 21 — Auth: Hashing, Sessions, JWT & Route Guards → Phase 5 Exam](../README.md) · [Week 22 · Day 1](../../week-22/day-1/) ▶
