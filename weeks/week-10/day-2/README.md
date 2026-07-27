# Week 10 · Day 2 — Branching & merging

[🛣️ The Road](../../../README.md) · [📅 Week 10](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 10 — Git & GitHub, Properly](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 3 · Tooling · **Week topic:** Git & GitHub, Properly
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Pro Git ch. 3 + Learn Git Branching "Main" sequence.

## 2️⃣ Build — 2 hours

Branch drills in `day-2/`, all recorded in `branching.md`.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Complete the whole "Main" sequence of Learn Git Branching — screenshot the finished levels
- [ ] Create 3 feature branches from `main`, commit on each, merge all three back
- [ ] One **fast-forward** merge and one **three-way** merge — identify which was which and why
- [ ] A `git log --graph --all --oneline` showing a visible branch/merge structure, pasted in
- [ ] Delete merged branches; list branches before and after
- [ ] `git switch` / `git switch -c` used (not just `checkout`) — note what changed in modern Git
- [ ] `day-2/branching.md`: what a branch *is* (a pointer, not a copy) in your own words

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is a branch, physically, inside `.git`?
2. Fast-forward vs three-way merge — when does each happen?
3. What is `HEAD`? What is a detached HEAD, and how do you get out of one?
4. Why delete a branch after merging — and is the work lost?
5. **Prove it:** draw your `--graph` output on paper before running it. Then run it.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-10/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 10 day 2: branching merging"
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

◀ [Day 1](../day-1/) · [⬆ Week 10 — Git & GitHub, Properly](../README.md) · [Day 3](../day-3/) ▶
