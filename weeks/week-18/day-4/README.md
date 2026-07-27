# Week 18 · Day 4 — Full CRUD

[🛣️ The Road](../../../README.md) · [📅 Week 18](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 18 — Node.js & Express: Building the API](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Node.js & Express: Building the API
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Express tutorial — routes*.

## 2️⃣ Build — 2 hours

Implement the API for real. Data in an in-memory array (the database arrives in Week 20).

## 3️⃣ Must have — the checklist you are marked against

- [ ] All six endpoints working exactly as documented
- [ ] Validation on create and update: title required, 1–200 chars, `done` must be boolean, `dueDate` a valid date. Invalid input → 400 with a message naming the **field**.
- [ ] 404 for a missing id, on every endpoint that takes one
- [ ] `GET /api/todos` supports `?done=true`, `?search=`, `?sort=`, `?page=&limit=` — combinable
- [ ] The list response includes pagination metadata (`{ data, page, limit, total, totalPages }`)
- [ ] Ids generated server-side (`crypto.randomUUID()`); a client-supplied id is ignored — say why in a comment
- [ ] Route handlers stay thin: validation and business logic live in separate functions
- [ ] Nothing crashes the server. Malformed JSON, missing body, wrong types, huge payloads — all return a clean error.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What happens if a client POSTs `{"title": 12345}`? Show me.
2. Why generate the id on the server?
3. How do you combine three query filters without a mess of `if`s?
4. What does your API return for `GET /api/todos?page=999`?
5. **Prove it:** I will try to crash your server with five malformed requests. It must survive all five.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-18/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 18 day 4: full crud"
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

◀ [Day 3](../day-3/) · [⬆ Week 18 — Node.js & Express: Building the API](../README.md) · [Day 5](../day-5/) ▶
