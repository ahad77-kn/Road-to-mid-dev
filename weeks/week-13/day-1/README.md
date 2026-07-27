# Week 13 · Day 1 — Lists & keys

[🛣️ The Road](../../../README.md) · [📅 Week 13](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 12 · Day 5](../../week-12/day-5/) · [⬆ Week 13 — Lists, Keys, Conditional Rendering & Controlled Forms](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 4 · React · **Week topic:** Lists, Keys, Conditional Rendering & Controlled Forms
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Rendering lists* + *Keeping components pure*.

## 2️⃣ Build — 2 hours

A "student directory" in `day-1/` — a list of 15 students with filtering and sorting.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Rendered with `.map`, each item its own component
- [ ] Sort by name / marks, filter by class, search by name — all working together
- [ ] **The index-key bug, demonstrated:** use `key={index}`, add an input to each row, type in one, then delete a row above it. Screenshot the wrong values. Then fix it with `key={student.id}` and screenshot the correct behaviour. This must be in `day-1/keys.md` with your explanation.
- [ ] An empty state when filters match nothing
- [ ] A count of visible vs total
- [ ] No mutation of the source array anywhere — `sort()` must be on a copy (this catches almost everyone)

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What does React use `key` for? Why not just the position?
2. Exactly what went wrong in your index-key demo? Explain what React did.
3. When is `key={index}` acceptable?
4. Why does `array.sort()` inside a render cause a bug? What is the fix?
5. **Prove it:** show me the broken version and the fixed version, and explain the difference in React's behaviour, not just the symptom.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-13/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 13 day 1: lists keys"
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

◀ [Week 12 · Day 5](../../week-12/day-5/) · [⬆ Week 13 — Lists, Keys, Conditional Rendering & Controlled Forms](../README.md) · [Day 2](../day-2/) ▶
