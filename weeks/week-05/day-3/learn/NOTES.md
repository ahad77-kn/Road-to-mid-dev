# Notes — Week 05 Day 3: Student marks program

**Date:** 2026-08-26
**Time spent:** learning 8:30am to 9am · building 9am to 12pm

**AI used?** yes✅ / no — what for: _______________
> Mandatory. Explaining a concept = fine, full marks. Writing your code = say so.
> Not saying so = 0/10. → [the rule](../../../../GRADING.md)

## What I learned (own words, min 3)

-array refrence

-mutating,nun mutating mathods,static mathods.

-instance properties,instance mathods.


## What I struggled with (mandatory — "nothing" is not allowed)

-i struggle to learn by heart all the mathods and properties but tough

## How I solved it (or: still stuck, will ask)

-so if i forget writing the code so i will take help from ai.

## The teacher's questions — my answers, from memory

1. What does "pure function" mean, and why does it make debugging easier?
ans. in pure function same input gives the same output and does not change out side data.it makes debugging easier because there are no un expected side effects.

2. How would you find the topper per subject rather than overall?
ans. i will use reduce separately for each subject and compare the subjects marks.

3. Your classAverage on an empty array — what does it return, and is that the right answer?
ans. It returns 0 for an empty array. That's reasonable here because there is no average to calculate, though null could also represent "no data."

4. Why is sort() on an array of objects risky by default? What does the comparator return?
ans. ans. sort() can mutate the original array, and objects aren't automatically sorted by their values. The comparator returns negative, 0, or positive to determine order.

5. Prove it: add a new subject to every student with one line, without touching the original array.
ans. const updated = students.map(student => ({
    ...student,
    marks: { ...student.marks, chemistry: 80 }
}));
students stays unchanged.

## One question I still have

-Why is keeping the original data unchanged useful?
