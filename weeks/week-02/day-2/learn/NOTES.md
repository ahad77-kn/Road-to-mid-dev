# Notes — Week 02 Day 2: Card gallery

**Date:** 2026-08-04
**Time spent:** learning 10am to 11am · building 11am to 1pm and then filling notes to upcoming time.

**AI used?** yes✅ / no — what for: as usual for explaining the topic and requirements and showing me the example that how cards will look like.
> Mandatory. Explaining a concept = fine, full marks. Writing your code = say so.
> Not saying so = 0/10. → [the rule](../../../../GRADING.md)

## What I learned (own words, min 3)

-i learned using flexbox.

-flex-wrap,gap,justify-content:center.

-flex:1 1 300px ; which has main role.

## What I struggled with (mandatory — "nothing" is not allowed)

-i struggled with adding the pictures in perfect size to be fit ,which was out of topic but i learned extra new....

## How I solved it (or: still stuck, will ask)

-they were not fitting there so i solved it by changing reducing their max-width.

## The teacher's questions — my answers, from memory

1. What do the three values in flex: 1 1 300px mean?
ans. 1=grow,1=shrink,300px starting width(flex-basis).

2. What is the default value of flex-basis, and why does flex: 1 behave differently from width: 100%?
ans. default flex-basis is auto;,flex 1 shares the space with flex items while the 100% width makes the element 100% wide.
3. How do you make one card push its button to the bottom regardless of text length? (Two valid answers — name both.)
ans. it will flex grow 1 on paragraph or margin top auto on button.

4. flex-wrap: wrap vs nowrap — what happens to flex-shrink in each case?
ans. with wrap items move to the next row,while with nowrap items remains on the same row and with flex-shrink it shrinks if needed.

5. Prove it: delete one card. The layout must still look intentional.
ans. if i delete one card the remaining cards will wrap correctly,and max width prevents the last row from stretching too wide.

## One question I still have

-with wrap items moved to the next row ,4 cards remain upper and 2 came down ,can we do like place them same like three up and three down....?
