# Week 22 · Day 5 — Build the API core

[🛣️ The Road](../../../README.md) · [📅 Week 22](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 22 — Capstone: Plan the App & Build the API](../README.md) · [Week 23 · Day 1](../../week-23/day-1/) ▶

**Phase:** Phase 6 · Capstone · **Week topic:** Capstone: Plan the App & Build the API
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Conventional Commits + Keep a Changelog.

## 2️⃣ Build — 2 hours

Real code, at last.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Auth complete: signup, login, `me`, refresh, logout — with hashing and JWT from Week 21
- [ ] Every Mongoose model from the approved schema, with validation
- [ ] Auth + role middleware in place
- [ ] CRUD for your **main** entity, with ownership enforced on every query
- [ ] Validation on every endpoint
- [ ] Central error handling and 404s
- [ ] A seed script with realistic demo data
- [ ] A Postman collection covering everything built so far, committed
- [ ] Every commit on a branch, merged by PR, with conventional messages
- [ ] `day-5/progress.md`: what is done, what is next, what is blocked

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Show me your Postman collection running green.
2. As user A, try to touch user B's data. Show every attempt failing.
3. Which part took longer than expected and why?
4. What is the riskiest thing left to build?

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-22/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 22 day 5: build the api core"
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

◀ [Day 4](../day-4/) · [⬆ Week 22 — Capstone: Plan the App & Build the API](../README.md) · [Week 23 · Day 1](../../week-23/day-1/) ▶
