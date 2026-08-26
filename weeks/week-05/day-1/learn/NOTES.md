# Notes — Week 05 Day 1: Arrays the manual way

**Date:** 2026-08-24
**Time spent:** learning 9am to 10am · building 10am to 12pm

**AI used?** yes ✅/ no — what for: _______________as usual for assignment
> Mandatory. Explaining a concept = fine, full marks. Writing your code = say so.
> Not saying so = 0/10. → [the rule](../../../../GRADING.md)

## What I learned (own words, min 3)

-arrays,declarations.

-learned (shift/unshift),,add/delete(push/pop).

-loops in arrays etc.


## What I struggled with (mandatory — "nothing" is not allowed)

-i struggled with tests and results 

## How I solved it (or: still stuck, will ask)

-so i got results and write the vy ai

## The teacher's questions — my answers, from memory

1. Are arrays a primitive type in JavaScript? What are they really?
ans. arrays are not permitive ,they are objects.

2. What happens when you do const a = [1,2]; const b = a; b.push(3); — what is a now, and why?
ans. ans. a becomes [1, 2, 3] because a and b reference the same array.
3. Difference between arr.length = 0 and arr = []?
ans. arr.length = 0 empties the existing array; arr = [] assigns a new array.

4. Why can you push into a const array?
ans. const prevents changing the reference, but the array's contents can still change.

5. Prove it: show me one of your functions accidentally mutating the input, then fix it.
ans. Bad: arr.reverse() mutates the original.
Fix: create a new array and return it, leaving the original unchanged.
## One question I still have

-Why does JavaScript use arrays instead of normal variables?
