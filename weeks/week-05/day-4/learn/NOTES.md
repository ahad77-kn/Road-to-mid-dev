# Notes — Week 05 Day 4: Objects

**Date:** 2026-08-27
**Time spent:** learning 7pm to 8pm · building 8pm to 9:30pm

**AI used?** yes ✅/ no — what for: _______________for dexcribing me the assignments and checking my tests results.
> Mandatory. Explaining a concept = fine, full marks. Writing your code = say so.
> Not saying so = 0/10. → [the rule](../../../../GRADING.md)

## What I learned (own words, min 3)

-learned (this).

-square brackets purpose,prperty value short end.

-property naes limitations, etc.


## What I struggled with (mandatory — "nothing" is not allowed)

-damn im struggling with the whole js topics to learn by heart 

## How I solved it (or: still stuck, will ask)

-but im facing dificulties but trying to learn every new topics.

## The teacher's questions — my answers, from memory

1. When must you use bracket notation instead of dot notation?
ans. i will use the bracket notation when the property name is stored in variable .

2. What does this refer to inside an object method? What happens if you make that method an arrow function?
ans. this refers to the object calling the mathod ,An arrow function doesn't get its own this; it uses the surrounding this.

3. {...obj} — is that a deep or shallow copy? Show a case where it bites you.
ans. {...obj} is a shallow copy. Nested objects are still shared.

4. What do Object.entries() give you, and what shape is it?
ans. Object.entries() returns an array of key-value pairs:

5. Prove it: update a nested value in your cart object without mutating the original. Show the original unchanged.
ans. const updated = {
    ...cart,
    customer: {
        ...cart.customer,
        city: "Lahore"
    }
};

cart.customer.city stays unchanged.
## One question I still have

-When should I use . and when should I use []?
