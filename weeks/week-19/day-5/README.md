# Week 19 · Day 5 — 🎉 Full stack

[🛣️ The Road](../../../README.md) · [📅 Week 19](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 19 — Middleware, Error Handling & Your First Full Stack](../README.md) · [Week 20 · Day 1](../../week-20/day-1/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Middleware, Error Handling & Your First Full Stack
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *CORS* + Express cors middleware.

## 2️⃣ Build — 2 hours

Your React to-do app talks to your Express to-do API.

## 3️⃣ Must have — the checklist you are marked against

- [ ] **See the CORS error first.** Connect without configuring CORS, screenshot the console error, and explain in `day-5/cors.md` exactly what the browser did and why. Then fix it.
- [ ] `cors` configured for your frontend origin **only** — not `*`. Say why `*` is lazy and when it is acceptable.
- [ ] The React app's every operation hits the API: list, create, toggle, edit, delete, filter, paginate
- [ ] `VITE_API_URL` from the frontend's env — no hardcoded `localhost:3000`
- [ ] Loading and error states on every operation
- [ ] **Optimistic updates** on toggle: update the UI immediately, roll back if the request fails. Demonstrate the rollback by killing the server mid-click.
- [ ] Server-side validation errors displayed on the correct form field in React
- [ ] Both apps in one repo (`/client`, `/server`) with a root README explaining how to run both
- [ ] `day-5/fullstack.md`: draw the full request path — React component → fetch → CORS preflight → Express → middleware chain → controller → service → response → React state → re-render

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is CORS protecting against? Who enforces it — the browser or the server?
2. What is a preflight request? Which requests trigger one? Show one in the Network tab.
3. Why does the API URL belong in an env variable?
4. What is an optimistic update, and what is the risk?
5. **Prove it:** kill the API server mid-use. The frontend must degrade gracefully, not white-screen. Restart it; the app must recover without a refresh.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-19/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 19 day 5: full stack"
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

◀ [Day 4](../day-4/) · [⬆ Week 19 — Middleware, Error Handling & Your First Full Stack](../README.md) · [Week 20 · Day 1](../../week-20/day-1/) ▶
