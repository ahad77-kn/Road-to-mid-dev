# Week 16 · Day 3 — Layouts, 404s and loading

[🛣️ The Road](../../../README.md) · [📅 Week 16](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 16 — React Router & Context (Shared State)](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 4 · React · **Week topic:** React Router & Context (Shared State)
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

React Router *nested routes* + error elements.

## 2️⃣ Build — 2 hours

Structure the app the way a real one is structured.

## 3️⃣ Must have — the checklist you are marked against

- [ ] A root layout with `<Outlet>` — nav and footer rendered once, not per page
- [ ] A nested layout for a `/profile` section with a sub-nav (`/profile/settings`, `/profile/history`)
- [ ] A catch-all `*` route with a real 404 page (with a link home)
- [ ] An error element so a thrown render error shows a friendly page, not a white screen
- [ ] Route-level loading UI while a page's data is fetching
- [ ] Lazy-load one route with `React.lazy` + `<Suspense>` — check the Network tab to confirm a separate chunk loads
- [ ] Scroll resets to the top on navigation (it does not by default — fix it and explain why)

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What does `<Outlet>` do?
2. Why does the scroll position not reset by default, and how did you fix it?
3. What does `React.lazy` change about your bundle? Show it in the Network tab.
4. What is the difference between a 404 route and an error element?
5. **Prove it:** visit `/asdfgh` and `/movie/nonsense`. Both must fail gracefully and differently.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-16/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 16 day 3: layouts 404s and loading"
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

◀ [Day 2](../day-2/) · [⬆ Week 16 — React Router & Context (Shared State)](../README.md) · [Day 4](../day-4/) ▶
