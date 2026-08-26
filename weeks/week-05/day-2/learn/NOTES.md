# Notes — Week 05 Day 2: `map`, `filter`, `reduce`

**Date:** 2026-08-25
**Time spent:** learning 9:30 am to 10am · building 10am to 1pm

**AI used?** yes ✅/ no — what for: _______________as usual explanation.
> Mandatory. Explaining a concept = fine, full marks. Writing your code = say so.
> Not saying so = 0/10. → [the rule](../../../../GRADING.md)

## What I learned (own words, min 3)

-arrays mathods.

-splice,slice,concat,foe each etc.

-transormation in arrays,rrays in array.


## What I struggled with (mandatory — "nothing" is not allowed)

-i struggle to know that which declaration or add/delete ,reduce,map,lenght,filter to be used where.

## How I solved it (or: still stuck, will ask)

-so learned some extra from ai.

## The teacher's questions — my answers, from memory

1. What does map return when the array is empty? What about reduce with no initial value?
ans. map on an empty array: returns [].
reduce with no initial value: throws an error on an empty array.

2. Difference between find and filter? Between some and every?
ans. find → returns the first matching value.
filter → returns all matching values.

3. Explain reduce's two parameters — the accumulator and the current value — using your own code as the example.
ans. In reduce:

Accumulator = keeps the running result.
Current value = current array item.
i-e,numbers.reduce((total, number) => total + number, 0);
4. Which array methods mutate the original array? Name at least four.
ans. Methods that mutate the original array include: push(), pop(), shift(), unshift(), splice(), sort(), reverse().
5. Prove it: turn a for loop I write on the spot into a single chained expression, live.
ans.Give me any for loop and I'll convert it into a single chained array-method expression.

## One question I still have

-why use map instead of for loop,what is the difference between map and filter and why does reduce looks more complicated ?
