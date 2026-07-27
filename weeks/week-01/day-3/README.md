# Week 01 · Day 3 — Break it 5 ways, then fix it

[🛣️ The Road](../../../README.md) · [📅 Week 01](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 01 — CSS Fundamentals, Selectors & the Box Model](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 1 · CSS Mastery · **Week topic:** CSS Fundamentals, Selectors & the Box Model
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

web.dev *Specificity* + *The cascade* + MDN *Handling conflicts*.

## 2️⃣ Build — 2 hours

Copy yesterday's pricing card into `day-3/`. Now **break it on purpose, five times**, one bug at a time — and fix each one before making the next.

Required bugs (all five):
1. A **specificity** conflict — a rule that should apply but does not
2. A **collapsed margin** creating an unexpected gap
3. An element **overflowing** its parent because of `box-sizing`
4. A rule broken by **source order** (right specificity, wrong position in the file)
5. An `!important` that makes something impossible to override

For each: screenshot the broken state, then write in `day-3/bugs.md`:
> **Bug N:** what I changed · what it looked like · **why** it happened · how I fixed it.

## 3️⃣ Must have — the checklist you are marked against

- [ ] All 5 bugs, each with a screenshot and a *why* in your own words
- [ ] The specificity of the conflicting selectors written out as numbers (e.g. `0-1-1` vs `0-2-0`)
- [ ] Also fix the two problems from Day 1: switch to class selectors, remove the `position` hack
- [ ] Final card renders correctly

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Rank these by specificity: `.card p`, `#price`, `p`, `.card .price`, `p.price`.
2. Two rules have identical specificity. Which one wins?
3. When do two vertical margins collapse — and name two ways to stop it.
4. Why is `!important` almost always the wrong fix?
5. **Prove it:** I point at any element in your card and you tell me, without DevTools, which rules are affecting it.

**This is the most valuable day of the week.** Deliberately breaking things and explaining the break is how you stop being afraid of CSS.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-01/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 01 day 3: break it 5 ways then"
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

◀ [Day 2](../day-2/) · [⬆ Week 01 — CSS Fundamentals, Selectors & the Box Model](../README.md) · [Day 4](../day-4/) ▶
