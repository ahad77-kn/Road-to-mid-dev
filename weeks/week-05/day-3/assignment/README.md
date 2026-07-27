# 🛠️ Assignment — Week 05 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 05](../../README.md)

## What to build

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

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `marks.js` | the full student-marks program, all functions pure |

## ✅ Done when — this is the checklist you are marked against

- [ ] Every function returns new data; the original `students` array is never mutated
- [ ] `reduce` used for at least two of the aggregations
- [ ] Handles the empty-array case without crashing
- [ ] Output is a readable aligned table (`console.table` is allowed and encouraged here)
- [ ] At least 8 students, at least 3 subjects

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What does "pure function" mean, and why does it make debugging easier?
2. How would you find the topper *per subject* rather than overall?
3. Your `classAverage` on an empty array — what does it return, and is that the right answer?
4. Why is `sort()` on an array of objects risky by default? What does the comparator return?
5. **Prove it:** add a new subject to every student with one line, without touching the original array.

---

[← back to the day](../) · [📖 read first](../learn/)
