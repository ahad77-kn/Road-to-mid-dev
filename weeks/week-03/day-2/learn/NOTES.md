# Notes — Week 03 Day 2: Responsive with no media queries

**Date:** 2026-08-11
**Time spent:** learning 10am to 11am· building 11am to 1 pm and then how.md and filling notes.

**AI used?** yes✅ / no — what for: for understanding the assignment and how.md that how it works for learning purpose.
> Mandatory. Explaining a concept = fine, full marks. Writing your code = say so.
> Not saying so = 0/10. → [the rule](../../../../GRADING.md)

## What I learned (own words, min 3)

-i learned fitting screen in different margins without media querry.

-how to change screen without media querry.

-how columns can fit if screen goes wider or short.

## What I struggled with (mandatory — "nothing" is not allowed)

-struggled with learning autofit how works screen sizings without media querry. 

## How I solved it (or: still stuck, will ask)

-it was solved with auto-fit that when screen changes fit the items and columns according to the size of the screen.

## The teacher's questions — my answers, from memory

1. auto-fit vs auto-fill — what is the visible difference when there are only 2 items in a wide container?
ans. auto-fit collapses empty columns so existing items stretch; auto-fill keeps the empty column tracks.
2. Read clamp(1.5rem, 4vw, 3rem) out loud in plain English.
ans. minimum is 1.5rem,normal is 4vw and do not go bigger then 3rem.
3. Why does minmax(280px, 1fr) overflow at 320px, and how does min(280px, 100%) fix it?
ans.Because 280px plus the container's padding/gaps can become wider than the available space, while min(280px, 100%) allows the minimum to shrink to the available width.
4. When should you still use a media query?
ans. When the design needs a deliberate change that isn't naturally handled by fluid sizing, such as changing navigation, hiding/showing components, or changing layout structure.
5. Prove it: drag the browser edge slowly from 1400px to 320px. Narrate every column change as it happens.
ans. "At 1400px, several 280px columns fit. As I make the browser narrower, eventually one column no longer fits, so Grid moves it to the next row. The same happens again as the available width decreases. Near phone width, only one column fits, and min(280px, 100%) prevents the card from becoming wider than the screen."


## One question I still have

-if we can do it even on auto-fit and auto-fill then why and when use media querry ?
