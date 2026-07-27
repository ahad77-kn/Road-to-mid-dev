# Week 24 · Day 4 — Deploy the frontend

[🛣️ The Road](../../../README.md) · [📅 Week 24](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 24 — Capstone: Polish, Deploy, Demo → Final Exam](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 6 · Capstone · **Week topic:** Capstone: Polish, Deploy, Demo → Final Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Vercel docs + Vite production build + 12-factor config.

## 2️⃣ Build — 2 hours

The whole thing, live.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Frontend on [Vercel](https://vercel.com/docs) or Netlify, pointed at the production API
- [ ] SPA routing configured — deep links must work; test `/some/deep/route` directly in a fresh tab
- [ ] `VITE_API_URL` set in the host's env, not committed
- [ ] Auto-deploy on push to `main`; a preview deploy on a PR — show both working
- [ ] A **full production test from a phone on mobile data**, using a brand-new account, completing the app's main job
- [ ] Someone else uses the live URL and completes the main task without help
- [ ] `day-4/production-test.md`: every feature tested on production with pass/fail, plus load times on 4G
- [ ] Both URLs added to the README, your GitHub profile, and your CV

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Open the live app on my phone. Sign up and complete the main task in front of me.
2. What is slower in production than locally, and why?
3. What happens if the backend is asleep (free tier) when someone visits?
4. Show me a PR preview deployment.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-24/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 24 day 4: deploy the frontend"
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

◀ [Day 3](../day-3/) · [⬆ Week 24 — Capstone: Polish, Deploy, Demo → Final Exam](../README.md) · [Day 5](../day-5/) ▶
