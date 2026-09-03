# Notes — Week 06 Day 4: Calculator, part 2

**Date:** 2026-09-03
**Time spent:** learning 9am to 10am · building 10am to 1pm

**AI used?** yes yes / no — what for: _______________for learning perfactly about the whole too long js code and getting help in writing that.
> Mandatory. Explaining a concept = fine, full marks. Writing your code = say so.
> Not saying so = 0/10. → [the rule](../../../../GRADING.md)

## What I learned (own words, min 3)

-learned to make that calculator arithmatic and able to calculate.

-learned o write that actual calculating values in js

-bubbling,event target,event delegation.


## What I struggled with (mandatory — "nothing" is not allowed)

-with the whole code of js was long so 

## How I solved it (or: still stuck, will ask)

-git help from ai

## The teacher's questions — my answers, from memory

1.  Why does 0.1 + 0.2 !== 0.3 in JavaScript? How did you handle it?
ans. JavaScript uses binary floating-point, so some decimals can't be represented exactly. I used toFixed(10) and converted it back to a number.

2. How do you listen for keyboard input, and what is on the event object for a key press?
ans. document.addEventListener("keydown", (event) => {});

event.key tells you which key was pressed.

3. Why keep the calculation functions free of DOM code? What does that buy you?
ans. It makes the functions easier to test, reuse, and debug.

4. What is your app's state — list every variable it needs to remember?
ans. entry, expression, firstNumber, operator, and waitingForSecondNumber.

5. Prove it: press 5 + 3 × 2 = and explain, before the result appears, what you will get and why.
ans. With true operator precedence, the answer is 11, because multiplication happens before addition.

## One question I still have

-Why does JavaScript have floating-point problems?
