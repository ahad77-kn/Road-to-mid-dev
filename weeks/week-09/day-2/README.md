# Week 09 · Day 2 — Detail view & real URLs

[🛣️ The Road](../../../README.md) · [📅 Week 09](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 09 — Real APIs → Phase 2 Exam](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Real APIs → Phase 2 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *URLSearchParams* + *History API*.

## 2️⃣ Build — 2 hours

Click a movie → full detail view. Plot, cast, ratings, runtime, genre, awards.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Detail fetched by IMDb ID on click (a second endpoint — read the docs for it)
- [ ] A back button returning to results **without re-fetching** the search
- [ ] The URL updates with `history.pushState` (`?s=batman&id=tt0372784`) so the page is **shareable** — pasting that URL into a new tab loads the same view
- [ ] Browser back/forward buttons work correctly (`popstate`)
- [ ] Loading and error states on the detail view too
- [ ] Long plots truncated with a "read more" toggle

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What does `history.pushState` do, and what does it *not* do (hint: no request is made)?
2. How do you read `?s=batman` out of the URL on page load?
3. What is `popstate` and why do you need it?
4. Why is a shareable URL a feature, not a nice-to-have?
5. **Prove it:** copy your URL into a fresh incognito tab. The same movie must load.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-09/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 09 day 2: detail view real urls"
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

◀ [Day 1](../day-1/) · [⬆ Week 09 — Real APIs → Phase 2 Exam](../README.md) · [Day 3](../day-3/) ▶
