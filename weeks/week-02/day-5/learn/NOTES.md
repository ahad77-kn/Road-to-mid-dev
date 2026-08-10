# Notes — Week 02 Day 5: YouTube home skeleton

**Date:** 2026-08-09
**Time spent:** learning 7om to 8:30pm · building 8:30pm to 10pm

**AI used?** yes ✅/ no — what for: because it was so long and tricky so i got hel from ai
> Mandatory. Explaining a concept = fine, full marks. Writing your code = say so.
> Not saying so = 0/10. → [the rule](../../../../GRADING.md)

## What I learned (own words, min 3)

-i learned about grid and its uses.

-i learned about flex and grid use togather.

-and distribution of pages by grid and flex.

## What I struggled with (mandatory — "nothing" is not allowed)

-i truggled with the whole longest code ever to write it by my own but sometimes i got stuck so...

## How I solved it (or: still stuck, will ask)

-so i got help from ai.

## The teacher's questions — my answers, from memory

1. Give one layout that is genuinely easier in Flexbox, and one genuinely easier in Grid. Say why.
ans. Flexbox: a navigation bar because it arranges items naturally in one row; Grid: a page layout with header, sidebar, main, and footer because it controls rows and columns together.

2. What does repeat(auto-fill, minmax(280px, 1fr)) do as the screen widens? Difference from auto-fit?
ans. It creates as many columns of at least 280px as can fit, and each column grows to share the space; auto-fit collapses empty columns, while auto-fill keeps the available column slots.

3. Can an element be both a grid item and a flex container? What does that mean in practice?
ans. Yes; it can be positioned by the parent Grid while using display: flex to arrange its own children.

4. How does overflow: auto interact with a grid track's height?
ans. If the content becomes larger than the grid item's available height, overflow: auto adds a scrollbar instead of letting the content overflow.

5. Prove it: resize the browser from 1400px to 700px and narrate what the grid is doing at each break.
ans. At 1400px more 280px cards fit in each row; as the width decreases, fewer cards fit, so Grid automatically removes columns and moves cards to new rows while keeping each card at least 280px wide.

## One question I still have

-do i have to remember every word of these long codes by heart or may i try to understand and learn then use it.s
