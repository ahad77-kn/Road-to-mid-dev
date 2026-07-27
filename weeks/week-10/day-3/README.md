# Week 10 · Day 3 — Conflicts, rebase and undo

[🛣️ The Road](../../../README.md) · [📅 Week 10](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 10 — Git & GitHub, Properly](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 3 · Tooling · **Week topic:** Git & GitHub, Properly
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Learn Git Branching "Remote" sequence + Pro Git *Rewriting history*.

## 2️⃣ Build — 2 hours

Deliberately create trouble in `day-3/` and fix it. Document every recovery in `recovery.md`.

## 3️⃣ Must have — the checklist you are marked against

- [ ] **Create a real merge conflict** on purpose (same lines edited on two branches), resolve it by hand, explain what the `<<<<<<< ======= >>>>>>>` markers mean
- [ ] Create a second conflict and resolve it the **other** way to prove you understand both sides
- [ ] `git rebase` a feature branch onto an updated `main`; compare the resulting graph with a merge
- [ ] `git stash`, `git stash pop`, `git stash list` — used in a realistic "I need to switch branches mid-work" scenario
- [ ] Undo drills, each in `recovery.md` with when to use it:
  - `git revert` a pushed commit
  - `git reset --soft` vs `--mixed` vs `--hard`
  - Recover a "lost" commit with `git reflog` ← the most valuable command on this page
- [ ] `.gitignore` written properly for a Node project

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. When is rebase the wrong choice? (The golden rule — say it.)
2. `revert` vs `reset` — which is safe on a pushed branch, and why?
3. `--soft` vs `--mixed` vs `--hard` — where do your changes end up in each case?
4. You did `reset --hard` and lost 2 hours of commits. What do you do?
5. **Prove it:** I create a conflict in your repo; you resolve it in under 3 minutes, explaining each marker.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-10/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 10 day 3: conflicts rebase and undo"
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

◀ [Day 2](../day-2/) · [⬆ Week 10 — Git & GitHub, Properly](../README.md) · [Day 4](../day-4/) ▶
