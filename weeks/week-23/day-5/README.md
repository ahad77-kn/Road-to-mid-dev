# Week 23 · Day 5 — The full pass

[🛣️ The Road](../../../README.md) · [📅 Week 23](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 23 — Capstone: Build the Frontend, Connect Everything](../README.md) · [Week 24 · Day 1](../../week-24/day-1/) ▶

**Phase:** Phase 6 · Capstone · **Week topic:** Capstone: Build the Frontend, Connect Everything
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN full-stack debugging + Express security best practices.

## 2️⃣ Build — 2 hours

Use your own app, as a stranger would, and fix everything you find.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Complete run-through from a **brand new account**: signup → main job → every feature → account deletion. Write down every friction point as you go.
- [ ] All bugs found are fixed or logged in `day-5/known-issues.md` with a severity
- [ ] Someone else (a family member, a friend) uses it while you watch **without helping**. Record what they struggled with — that list is more valuable than your own opinion of the app.
- [ ] `helmet` and rate limiting added to the API
- [ ] Every `console.log` removed from production code paths
- [ ] No secrets anywhere in the repo — audit the whole history
- [ ] `day-5/testing.md`: a matrix of every feature × every state (loading, error, empty, success, unauthorised) with pass/fail

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What did your test user struggle with?
2. What is the worst remaining bug?
3. Show me the security audit result.
4. Is it ready to deploy? What is honestly not finished?

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-23/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 23 day 5: the full pass"
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

◀ [Day 4](../day-4/) · [⬆ Week 23 — Capstone: Build the Frontend, Connect Everything](../README.md) · [Week 24 · Day 1](../../week-24/day-1/) ▶
