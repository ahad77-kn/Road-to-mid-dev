# Week 00 · Day 5 — Git, properly, from zero

[🛣️ The Road](../../../README.md) · [📅 Week 00](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 00 — How Computers, the Internet & the Web Actually Work](../README.md) · [Week 01 · Day 1](../../week-01/day-1/) ▶

**Phase:** Phase 0 · Foundations · **Week topic:** How Computers, the Internet & the Web Actually Work
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Pro Git ch. 1–2 + GitHub *Hello World*.

## 2️⃣ Build — 2 hours

Inside `day-5/`, create a small project (3 files: `index.html`, `style.css`, `notes.md`). Then run a full Git workout on this repo:

## 3️⃣ Must have — the checklist you are marked against

- [ ] 10 commits, each small and each with a meaningful message (not "update", not "changes")
- [ ] One branch created, one change made on it, merged back into `main`
- [ ] One commit deliberately made wrong, then reverted with `git revert` — explain the difference between `revert` and `reset` in `day-5/git-log.md`
- [ ] `git log --oneline --graph --all` output pasted into `git-log.md`
- [ ] A `.gitignore` file that ignores `.DS_Store` and `node_modules/` — added at the repo root

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is the difference between the working directory, the staging area, and a commit?
2. What does `git add .` actually do — does it save anything permanently?
3. What is the difference between `git fetch` and `git pull`?
4. You committed a password by mistake and pushed it. Is deleting it in the next commit enough? Why not?
5. **Prove it:** show a `git log --graph` where a branch visibly splits and merges back.

## ⚠️ Common mistakes

committing everything in one giant commit at the end of the day. Commit when a *thought* is finished, not when the *day* is finished.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-00/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 00 day 5: git properly from zero"
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

◀ [Day 4](../day-4/) · [⬆ Week 00 — How Computers, the Internet & the Web Actually Work](../README.md) · [Week 01 · Day 1](../../week-01/day-1/) ▶
