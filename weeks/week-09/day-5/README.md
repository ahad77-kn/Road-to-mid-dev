# Week 09 · Day 5 — Phase project, part 2

[🛣️ The Road](../../../README.md) · [📅 Week 09](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 09 — Real APIs → Phase 2 Exam](../README.md) · [Week 10 · Day 1](../../week-10/day-1/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Real APIs → Phase 2 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *CORS* + OWASP *XSS prevention*.

## 2️⃣ Build — 2 hours

Finish it to a standard you would show an employer.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Every state handled: loading, error, empty, offline, invalid input
- [ ] Fully responsive (Phase 1 skills — do not let them rot)
- [ ] Keyboard accessible, visible focus states, sensible `alt` text
- [ ] No `innerHTML` with API data anywhere — or properly escaped, and you can explain the risk
- [ ] Deployed on GitHub Pages / Netlify, link in the README
- [ ] `README.md`: screenshot, what it does, which API, how to run it, and a "what I would add next" section
- [ ] Lighthouse: Performance and Accessibility both ≥ 90, screenshot in the folder
- [ ] Tested on a real phone

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is CORS, in one sentence? What does the error look like, and can you fix it from the frontend?
2. Where could an XSS bug enter your app, and what stops it?
3. What is the slowest part of your app? How do you know? (Network tab, not a guess.)
4. What would you add with another week?
5. **Prove it:** hand your phone to someone and watch them use it without instructions. Note where they hesitate — that is your next fix.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-09/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 09 day 5: phase project part 2"
git push
```

> ⚠️ **After this day comes the Phase 2 exam** — see [the week page](../README.md#-phase-2-exam) and put the work in [`../exam/`](../exam/).

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

◀ [Day 4](../day-4/) · [⬆ Week 09 — Real APIs → Phase 2 Exam](../README.md) · [Week 10 · Day 1](../../week-10/day-1/) ▶
