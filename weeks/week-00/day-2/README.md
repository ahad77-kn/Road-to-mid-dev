# Week 00 · Day 2 — HTTP, seen with your own eyes

[🛣️ The Road](../../../README.md) · [📅 Week 00](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 00 — How Computers, the Internet & the Web Actually Work](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 0 · Foundations · **Week topic:** How Computers, the Internet & the Web Actually Work
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Overview of HTTP*, *HTTP methods*, *Status codes*.

## 2️⃣ Build — 2 hours

Open Chrome DevTools → **Network** tab. Visit three different websites and study the traffic. Create `day-2/http-notes.md` documenting what you found.

## 3️⃣ Must have — the checklist you are marked against

- [ ] For each of 3 sites: the request **method**, **status code**, **content type**, and **size** of the main document
- [ ] A screenshot of one request's **headers** (request + response), saved in the folder
- [ ] Your own one-line explanation of these methods: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
- [ ] Your own one-line explanation of these codes: `200`, `301`, `304`, `400`, `401`, `403`, `404`, `500`
- [ ] Find and record one real `404` and one real `301` in the wild

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is the difference between `401` and `403`? Give a real-life example of each.
2. Why is `GET` not supposed to change anything on the server?
3. What does a request **header** carry that the URL does not?
4. **Prove it:** run `curl -I https://github.com` and explain three of the response headers you get back.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-00/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 00 day 2: http seen with your own"
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

◀ [Day 1](../day-1/) · [⬆ Week 00 — How Computers, the Internet & the Web Actually Work](../README.md) · [Day 3](../day-3/) ▶
