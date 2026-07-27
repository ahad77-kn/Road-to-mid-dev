# Week 18 · Day 5 — Test it like a client would

[🛣️ The Road](../../../README.md) · [📅 Week 18](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 18 — Node.js & Express: Building the API](../README.md) · [Week 19 · Day 1](../../week-19/day-1/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Node.js & Express: Building the API
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *status codes* + Postman docs.

## 2️⃣ Build — 2 hours

Prove the API works — from outside.

## 3️⃣ Must have — the checklist you are marked against

- [ ] A Postman collection covering every endpoint, saved and **exported into the folder** (`day-5/todo-api.postman_collection.json`)
- [ ] Happy-path *and* error requests for each endpoint, each with a name saying what it tests
- [ ] Postman tests asserting status code and response shape
- [ ] A Postman environment variable for the base URL
- [ ] `day-5/curl.md` — the same requests as `curl` commands with their output, including `-i` to show headers
- [ ] A `README.md` for the API: setup, run, endpoint table, example requests and responses
- [ ] `day-5/test-results.md`: a matrix of every endpoint × every case (valid, invalid, missing, not found) with pass/fail

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Which of your endpoints was actually wrong when you tested it properly? (There is usually one.)
2. Explain the difference between 400, 401, 403, 404, 422 and 500 — and which of yours can return each.
3. How would you test that pagination is correct?
4. What is in the response headers of your POST, and what should be?
5. **Prove it:** import your Postman collection on my machine and run it against your server. Everything green.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-18/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 18 day 5: test it like a client"
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

◀ [Day 4](../day-4/) · [⬆ Week 18 — Node.js & Express: Building the API](../README.md) · [Week 19 · Day 1](../../week-19/day-1/) ▶
