# Week 16 · Day 2 — Params & search params

[🛣️ The Road](../../../README.md) · [📅 Week 16](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 16 — React Router & Context (Shared State)](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 4 · React · **Week topic:** React Router & Context (Shared State)
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

React Router *navigating* + the hooks reference.

## 2️⃣ Build — 2 hours

Detail pages and URL-driven state.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `/movie/:id` route with `useParams`, fetching that movie's details
- [ ] The **search term lives in the URL** as `?q=batman` via `useSearchParams` — not in component state. This is the day's real lesson: the URL *is* state.
- [ ] Filters (year, type) also in the URL, composing with the search
- [ ] `useNavigate` used for programmatic navigation (e.g. after a form submit)
- [ ] A back button using `navigate(-1)`
- [ ] Pagination in the URL (`?page=2`) so page 3 of results is shareable
- [ ] An invalid `:id` shows a proper "not found" state, not a crash

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why put search state in the URL instead of `useState`? Name three benefits.
2. Difference between `useParams` and `useSearchParams`?
3. When do you need `useNavigate` rather than `<Link>`?
4. How do you update one search param without wiping the others?
5. **Prove it:** send me a URL of a filtered, paginated search. It must open identically on my machine.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-16/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 16 day 2: params search params"
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

◀ [Day 1](../day-1/) · [⬆ Week 16 — React Router & Context (Shared State)](../README.md) · [Day 3](../day-3/) ▶
