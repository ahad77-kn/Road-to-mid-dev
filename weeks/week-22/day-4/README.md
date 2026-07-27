# Week 22 · Day 4 — API design & setup

[🛣️ The Road](../../../README.md) · [📅 Week 22](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 22 — Capstone: Plan the App & Build the API](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 6 · Capstone · **Week topic:** Capstone: Plan the App & Build the API
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Google API design guide + OpenAPI basics.

## 2️⃣ Build — 2 hours

`day-4/API.md` plus the project skeleton.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Every endpoint documented before it exists: method, path, auth required, role required, request shape, response shape, every error case
- [ ] Consistent naming and pluralisation throughout — pick a convention and never break it
- [ ] The consistent error shape, reused from Week 19
- [ ] Repo created: `/client`, `/server`, root README, `.gitignore`, `.env.example`
- [ ] Server skeleton from your Week 19 structure (config, routes, controllers, services, middleware, validators)
- [ ] MongoDB Atlas cluster for this project, connected, health endpoint returning 200
- [ ] Branch protection on `main`; you work on feature branches with PRs from here on
- [ ] A **walking skeleton**: one trivial endpoint, called by one trivial React page, both running. One thin end-to-end slice, today.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Hand me API.md — could a stranger build your frontend from it alone?
2. Why did you choose these paths and methods?
3. Which endpoints need auth, and which need a role check?
4. What does your walking skeleton prove?

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-22/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 22 day 4: api design setup"
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

◀ [Day 3](../day-3/) · [⬆ Week 22 — Capstone: Plan the App & Build the API](../README.md) · [Day 5](../day-5/) ▶
