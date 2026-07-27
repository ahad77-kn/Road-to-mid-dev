# Week 10 · Day 5 — Publish everything

[🛣️ The Road](../../../README.md) · [📅 Week 10](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 10 — Git & GitHub, Properly](../README.md) · [Week 11 · Day 1](../../week-11/day-1/) ▶

**Phase:** Phase 3 · Tooling · **Week topic:** Git & GitHub, Properly
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

GitHub Pages docs + [makeareadme.com](https://www.makeareadme.com/).

## 2️⃣ Build — 2 hours

Nine weeks of work becomes a public portfolio.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Every substantial project from Weeks 1–9 in its **own** repo (at least 6 repos)
- [ ] Every repo has a real `README.md`: title, one-line description, screenshot/GIF, features list, tech used, how to run locally, live link
- [ ] The **4 best** deployed on GitHub Pages / Netlify with working links
- [ ] No secrets committed anywhere — audit each repo (`git log -p | grep -i "key\|password\|token"`) and note the result
- [ ] Your GitHub profile: real name, photo, bio, location, and pinned repos
- [ ] A profile README (`ahad77-kn/ahad77-kn` repo) introducing yourself and what you are learning
- [ ] `day-5/portfolio.md`: every repo, its live link, and one line on what it demonstrates

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What does a hiring manager look at first in a repo? (README, then commit history — not the code.)
2. What does your commit history say about how you work?
3. Why is a screenshot in the README worth more than a paragraph?
4. What did you find in the secrets audit?
5. **Prove it:** send me one repo link. From it alone I must understand what it is, see it running, and run it locally in under 5 minutes.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-10/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 10 day 5: publish everything"
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

◀ [Day 4](../day-4/) · [⬆ Week 10 — Git & GitHub, Properly](../README.md) · [Week 11 · Day 1](../../week-11/day-1/) ▶
