# Notes — Week 05 Day 5: Console contact book

**Date:** 2026-08-28
**Time spent:** learning 9am to 10am · building 10am to 12pm

**AI used?** yes yes/ no — what for: _______________for assignment explaination and where i got stuck then for solving.
> Mandatory. Explaining a concept = fine, full marks. Writing your code = say so.
> Not saying so = 0/10. → [the rule](../../../../GRADING.md)

## What I learned (own words, min 3)

-object refrence and copiying in js

-comparison by refrence,nesting cloning

-cloning and merging

## What I struggled with (mandatory — "nothing" is not allowed)

-with the long code and its tests 

## How I solved it (or: still stuck, will ask)

-so tested by ai

## The teacher's questions — my answers, from memory

1. Why generate IDs instead of using the array index?
ans. Array indexes can change when contacts are deleted/sorted. IDs stay unique and identify the same contact.
2. How does your update function avoid mutating? Show the line.
ans. It creates a new object and a new array.
3. Walk me through groupByCity's reduce — what is the accumulator on each step?
ans. The accumulator is the groups object. Each step adds the current contact to its city.
4. What does JSON.stringify do to a Date, a function, and undefined inside your object?
ans. Date → converted to a date string.
function → omitted from objects.
undefined → omitted from objects.
5. Prove it: I name a new feature — "find all contacts with the tag work" — write it in under 3 minutes.
ans. const searchByTag = tag =>
  contacts.filter(contact =>
    contact.tags.some(item => item.toLowerCase() === tag.toLowerCase())
  );
## One question I still have

-Why not use the array index as the ID?
