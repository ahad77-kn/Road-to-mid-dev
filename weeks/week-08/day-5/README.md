# Week 08 · Day 5 — Random-user cards

[🛣️ The Road](../../../README.md) · [📅 Week 08](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 08 — Modern JS (ES6+), Promises & `async`/`await`](../README.md) · [Week 09 · Day 1](../../week-09/day-1/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Modern JS (ES6+), Promises & `async`/`await`
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Using Fetch* + *HTTP status codes*.

## 2️⃣ Build — 2 hours

A real app against [randomuser.me](https://randomuser.me/) — fetch users, render them as cards.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Fetch 12 users and render them as cards (reuse your Week 2 flex/grid gallery CSS)
- [ ] A **loading skeleton** while fetching — not the word "Loading…", a real shimmer skeleton
- [ ] An **error state** with a Retry button that actually retries
- [ ] An **empty state** for when the API returns nothing
- [ ] "Load more" appends the next 12 without wiping the existing ones
- [ ] A nationality filter that re-fetches with the API's `?nat=` parameter
- [ ] All API code in one `api.js` module — no `fetch` calls scattered through the render code
- [ ] Card data inserted safely (`textContent`, or escaped) — API data is user data
- [ ] No double-fetch when "Load more" is clicked twice quickly (disable the button while in flight)

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Walk through the three states your UI can be in and how each is triggered.
2. What happens if a user clicks "Load more" three times fast? How did you handle it?
3. Why keep `fetch` calls in one module?
4. How do query parameters work — and how would you add two of them safely? (`URLSearchParams`.)
5. **Prove it:** DevTools → Network → Offline. Click Retry. Then back online, Retry again. Both paths must work without a refresh.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-08/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 08 day 5: random user cards"
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

◀ [Day 4](../day-4/) · [⬆ Week 08 — Modern JS (ES6+), Promises & `async`/`await`](../README.md) · [Week 09 · Day 1](../../week-09/day-1/) ▶
