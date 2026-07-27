# Week 10 · Day 1 — What Git actually stores

[🛣️ The Road](../../../README.md) · [📅 Week 10](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 09 · Day 5](../../week-09/day-5/) · [⬆ Week 10 — Git & GitHub, Properly](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 3 · Tooling · **Week topic:** Git & GitHub, Properly
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Pro Git ch. 1–2.

## 2️⃣ Build — 2 hours

In a **scratch repo** (`day-1/gitlab/`), do surgery and record every command in `day-1/log.md` with what it did and what you expected.

## 3️⃣ Must have — the checklist you are marked against

- [ ] 15 commits with proper messages, built up in stages
- [ ] `git add -p` used to stage **part** of a file — two separate commits from one edit
- [ ] `git diff`, `git diff --staged`, `git log --oneline --graph --all` — output pasted with explanations
- [ ] `git show <hash>` on an old commit
- [ ] Amend a commit message with `git commit --amend`, and note the danger of amending after pushing
- [ ] `git restore` a file to its last committed state, and `git restore --staged` to unstage — explain the difference
- [ ] `day-1/three-areas.md`: working directory / staging area / repository explained in your own words with a diagram

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What are the three areas a file can be in, and what command moves it between each?
2. What does a commit actually contain — a diff, or a snapshot?
3. What does `git add -p` do and when is it worth it?
4. When is `--amend` safe and when is it dangerous?
5. **Prove it:** I describe a state ("staged changes in file A, unstaged in file B"); you produce it and show me with `git status`.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-10/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 10 day 1: what git actually stores"
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

◀ [Week 09 · Day 5](../../week-09/day-5/) · [⬆ Week 10 — Git & GitHub, Properly](../README.md) · [Day 2](../day-2/) ▶
