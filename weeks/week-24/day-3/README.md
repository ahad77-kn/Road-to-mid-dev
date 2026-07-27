# Week 24 · Day 3 — Deploy the backend

[🛣️ The Road](../../../README.md) · [📅 Week 24](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 24 — Capstone: Polish, Deploy, Demo → Final Exam](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 6 · Capstone · **Week topic:** Capstone: Polish, Deploy, Demo → Final Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Render deployment + Atlas production network access.

## 2️⃣ Build — 2 hours

Get the API live. **Expect problems** — this is why it is Wednesday.

## 3️⃣ Must have — the checklist you are marked against

- [ ] API deployed on [Render](https://render.com/docs) (or Railway/Fly)
- [ ] Production MongoDB Atlas cluster, separate from your development one, with a seeded demo dataset
- [ ] Every env var set in the host's dashboard — nothing hardcoded, nothing committed
- [ ] Atlas network access configured correctly (not `0.0.0.0/0` unless the host requires it — and if so, note the mitigation)
- [ ] CORS allowing your production frontend origin only
- [ ] HTTPS working
- [ ] A health endpoint monitored (a free uptime checker)
- [ ] `NODE_ENV=production`; stack traces not leaking to clients — verify by triggering an error in production
- [ ] Postman collection run against the **production** URL, all green
- [ ] `day-3/deployment.md`: every step, and every problem you hit with its fix. You will need this document the next time.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What broke in production that worked locally? (Something always does.)
2. Where do your production secrets live?
3. Trigger a 500 in production — what does the client see, and what do the logs show?
4. What happens on a free-tier cold start, and what does the user experience?

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-24/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 24 day 3: deploy the backend"
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

◀ [Day 2](../day-2/) · [⬆ Week 24 — Capstone: Polish, Deploy, Demo → Final Exam](../README.md) · [Day 4](../day-4/) ▶
