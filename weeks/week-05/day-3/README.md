# Week 05 · Day 3 — Student marks program

[🛣️ The Road](../../../README.md) · [📅 Week 05](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 05 — Arrays, Objects & the Methods You Will Use Daily](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Arrays, Objects & the Methods You Will Use Daily
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Array reference* — skim every method name so you know what exists.

## 2️⃣ Build — 2 hours

A console program in `day-3/marks.js` operating on an array of student objects:
```js
const students = [
  { name: "Ahad", rollNo: 1, marks: { math: 82, physics: 74, english: 91 } },
  // …at least 8 students
];
```

Required functions, all pure (input → output, no globals):
- `addStudent(students, student)` → new array
- `averageFor(student)` → their average
- `classAverage(students, subject)`
- `topper(students)` and `lowest(students)`
- `passed(students, threshold)` → those above a mark
- `sortByAverage(students)` → descending
- `subjectReport(students)` → `{ math: {avg, high, low}, physics: {…}, … }`
- `printReport(students)` → a formatted table in the console

## 3️⃣ Must have — the checklist you are marked against

- [ ] Every function returns new data; the original `students` array is never mutated
- [ ] `reduce` used for at least two of the aggregations
- [ ] Handles the empty-array case without crashing
- [ ] Output is a readable aligned table (`console.table` is allowed and encouraged here)
- [ ] At least 8 students, at least 3 subjects

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What does "pure function" mean, and why does it make debugging easier?
2. How would you find the topper *per subject* rather than overall?
3. Your `classAverage` on an empty array — what does it return, and is that the right answer?
4. Why is `sort()` on an array of objects risky by default? What does the comparator return?
5. **Prove it:** add a new subject to every student with one line, without touching the original array.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-05/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 05 day 3: student marks program"
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

◀ [Day 2](../day-2/) · [⬆ Week 05 — Arrays, Objects & the Methods You Will Use Daily](../README.md) · [Day 4](../day-4/) ▶
