# Week 09 · Day 1 — Movie search

[🛣️ The Road](../../../README.md) · [📅 Week 09](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 08 · Day 5](../../week-08/day-5/) · [⬆ Week 09 — Real APIs → Phase 2 Exam](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Real APIs → Phase 2 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Using Fetch* again + the [OMDb docs](https://www.omdbapi.com/) (free key, arrives by email in a minute).

## 2️⃣ Build — 2 hours

A search box; type a film name, get a grid of results.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Search form → results grid (poster, title, year, type)
- [ ] Loading skeleton, error state, and a "no results found" empty state — all three visibly different
- [ ] Missing posters handled with a placeholder — the API returns `"N/A"`, which is not a URL
- [ ] API key kept in a separate `config.js` that is **gitignored**, with a `config.example.js` committed instead. Note in the README that a frontend key is still visible to users and why.
- [ ] All API code in `api.js`; render code cannot see `fetch`
- [ ] The API's own error shape handled (`{ Response: "False", Error: "Movie not found!" }`) — a 200 response that is still a failure. Note this in your README: **HTTP success ≠ application success.**

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is the data shape OMDb returns for a search? Draw it from memory.
2. The API returns 200 with `Response: "False"`. Why is checking only `response.ok` not enough?
3. Where does your API key live, and who can still see it?
4. What happens when the poster URL is `"N/A"` — what did you do?
5. **Prove it:** search for `asdkjhasd`. Then break your key deliberately. Both must show sensible, different messages.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-09/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 09 day 1: movie search"
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

◀ [Week 08 · Day 5](../../week-08/day-5/) · [⬆ Week 09 — Real APIs → Phase 2 Exam](../README.md) · [Day 2](../day-2/) ▶
