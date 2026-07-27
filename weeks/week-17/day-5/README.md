# Week 17 · Day 5 — Ship it

[🛣️ The Road](../../../README.md) · [📅 Week 17](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 17 — Phase Project: E-Commerce Front → Phase 4 Exam](../README.md) · [Week 18 · Day 1](../../week-18/day-1/) ▶

**Phase:** Phase 4 · React · **Week topic:** Phase Project: E-Commerce Front → Phase 4 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Vercel deployment docs + Vite production build.

## 2️⃣ Build — 2 hours

## 3️⃣ Must have — the checklist you are marked against

- [ ] Lighthouse: Performance ≥ 85, Accessibility ≥ 95, Best Practices ≥ 90 — screenshots in the folder
- [ ] Route-level code splitting with `React.lazy`; check the chunk sizes in the build output
- [ ] Images sized properly; no 2000px image rendered at 300px
- [ ] Keyboard navigable end to end; a skip-to-content link; visible focus everywhere
- [ ] Colour contrast AA throughout
- [ ] Deployed to Vercel or Netlify with SPA routing configured (deep links must work — test `/product/5` directly)
- [ ] `README.md`: screenshots, feature list, tech, local setup, live link, and a "what I would do differently" section
- [ ] Tested on a real phone on mobile data
- [ ] `day-5/lighthouse.md`: your three biggest performance problems and what you did about each

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What was your largest bundle chunk, and what is in it?
2. What is LCP on your product page, and what element is it?
3. Why does a deep link 404 on a static host without configuration? What did you add?
4. Where would this app break with 10,000 products instead of 20?
5. **Prove it:** open the live URL on my phone. It must load in under 3 seconds on mobile data.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-17/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 17 day 5: ship it"
git push
```

> ⚠️ **After this day comes the Phase 4 exam** — see [the week page](../README.md#-phase-4-exam) and put the work in [`../exam/`](../exam/).

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

◀ [Day 4](../day-4/) · [⬆ Week 17 — Phase Project: E-Commerce Front → Phase 4 Exam](../README.md) · [Week 18 · Day 1](../../week-18/day-1/) ▶
