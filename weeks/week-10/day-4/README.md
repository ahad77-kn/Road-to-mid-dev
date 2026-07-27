# Week 10 · Day 4 — Pull requests & code review

[🛣️ The Road](../../../README.md) · [📅 Week 10](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 10 — Git & GitHub, Properly](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 3 · Tooling · **Week topic:** Git & GitHub, Properly
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

GitHub *About pull requests* + *Reviewing changes*.

## 2️⃣ Build — 2 hours

Take one earlier project and run it through a real team workflow.

## 3️⃣ Must have — the checklist you are marked against

- [ ] The project in its own GitHub repo, with `main` **protected** (Settings → Branches → require a PR before merging)
- [ ] Three separate feature branches, each with a focused change
- [ ] Three PRs opened, each with: a clear title, a description of *what and why*, and a screenshot or GIF if visual
- [ ] The teacher reviews and **requests changes on at least one** — you push follow-up commits to the same branch and reply to each comment
- [ ] One PR closed without merging, with an explanation of why
- [ ] Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `refactor:`)
- [ ] Squash-merge one PR and regular-merge another; compare the history and note the difference

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why do teams protect `main`? What does a PR give you that pushing directly does not?
2. What makes a PR easy to review? What makes one impossible?
3. How do you respond to review feedback you disagree with?
4. Squash merge vs merge commit vs rebase merge — what does the history look like in each?
5. **Prove it:** show me a PR where you were asked for changes and how you handled it.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-10/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 10 day 4: pull requests code review"
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

◀ [Day 3](../day-3/) · [⬆ Week 10 — Git & GitHub, Properly](../README.md) · [Day 5](../day-5/) ▶
