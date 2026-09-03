# Notes — Week 06 Day 3: Calculator, part 1

**Date:** 2026-09-02
**Time spent:** learning 9am to 10am · building 10am to 1pm

**AI used?** yes yes / no — what for: _______________for explanantion and i did know that no arthematic now so when no results came of calculator i asked ai why no answers of my code etc and nothing more
> Mandatory. Explaining a concept = fine, full marks. Writing your code = say so.
> Not saying so = 0/10. → [the rule](../../../../GRADING.md)

## What I learned (own words, min 3)

-learned to make calculator of html,css and js

-events,events machanism

-learning responsive js topics

## What I struggled with (mandatory — "nothing" is not allowed)

-i thought calculator would give results also but

## How I solved it (or: still stuck, will ask)

-but it was not now ,i was in mistake so i asked ai for it and it tells me that not now 

## The teacher's questions — my answers, from memory

1. What is event delegation, and what two problems does it solve?
ans. Event delegation: One parent listener handles many child elements. It reduces repeated listeners and works for dynamically added elements.

2. what does event.target hold? How is it different from event.currentTarget?
ans. event.target = element actually clicked.
event.currentTarget = element whose listener is running.

3. Why is data-value="7" better than reading the button's text?
ans. data-value="7" is better because it stores the actual value separately from the button's displayed text.

4. explain bubbling — if you click a <span> inside a <button> inside a <div>, which listeners fire and in what order?
ans. Bubbling: Click starts at <span>, then moves upward:
span → button → div. Listeners fire in that order.

5. Prove it: add a new button to the HTML only — no JS changes — and show it works.
ans. <button data-digit="9">9</button>

It works automatically because the existing parent listener uses event delegation.

## One question I still have

-Can event delegation work with new elements added later?
