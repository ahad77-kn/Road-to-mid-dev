# Week 18 · Day 2 — From raw `http` to Express

[🛣️ The Road](../../../README.md) · [📅 Week 18](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 18 — Node.js & Express: Building the API](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Node.js & Express: Building the API
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Node *Anatomy of an HTTP transaction* + Express *Getting started*.

## 2️⃣ Build — 2 hours

Write the same tiny server twice.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `day-2/raw-server.js` using only Node's `http` module: routes for `/`, `/about`, `/api/health`, plus a 404 — with manual URL parsing, manual method checks, manual `Content-Type` headers and manual JSON stringifying
- [ ] `day-2/express-server.js` — the identical API in Express
- [ ] `day-2/comparison.md`: what Express removed, line by line. Be specific.
- [ ] `nodemon` (or `node --watch`) set up as `npm run dev`
- [ ] A `PORT` read from `process.env.PORT` with a fallback — and a note on why hardcoding a port breaks deployment
- [ ] `express.json()` added and demonstrated with a POST that echoes the body — then **remove it** and show the body is `undefined`. That five-minute experiment prevents a bug you would otherwise hit twice a year.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What does Express actually give you over the `http` module?
2. What are `req` and `res` — what is the single most important thing you must do with `res`?
3. What does `express.json()` do? What happens without it?
4. What happens if you send two responses to one request?
5. **Prove it:** start the raw server and the Express server on different ports; `curl` both and show identical output.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-18/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 18 day 2: from raw http to express"
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

◀ [Day 1](../day-1/) · [⬆ Week 18 — Node.js & Express: Building the API](../README.md) · [Day 3](../day-3/) ▶
