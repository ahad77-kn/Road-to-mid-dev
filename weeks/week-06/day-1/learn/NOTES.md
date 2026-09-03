# Notes — Week 06 Day 1: DOM playground

**Date:** 2026-08-31
**Time spent:** learning 11am to 12pm · building 12pm to 3pm

**AI used?** yes ✅/ no — what for: _______________for understandings and little bit help for learning purpose.
> Mandatory. Explaining a concept = fine, full marks. Writing your code = say so.
> Not saying so = 0/10. → [the rule](../../../../GRADING.md)

## What I learned (own words, min 3)

-using js with html

-making changes in html by js

-making page responsive by js with hmtl

## What I struggled with (mandatory — "nothing" is not allowed)

-with css colors and styles and wrote them

## How I solved it (or: still stuck, will ask)

-but there is no talked about any css in assignmnet so i skipped.

## The teacher's questions — my answers, from memory

1. What is the difference between an HTMLCollection and a NodeList? Which one is live?
ans. both are collections of dom elements.html collection is live while nod list is usually static.

2. getElementById vs querySelector — when does each make sense?
ans. getelementbyid is used when an element with a known id while querselector is more fexible because it selects css selectors.
3. Why is innerHTML = userInput dangerous? What should you use instead?
ans. User input could contain malicious HTML/JavaScript (XSS). Use textContent for plain text.
4. What happens if your <script> runs before the HTML below it is parsed?
ans. JavaScript may not find the elements yet, so selections can return null and cause errors. Use defer or put the script before </body>.
5. Prove it: I point at any element on your page; you select it and turn it red, live, in the console, in one line.
ans. $0.style.color = "red";
## One question I still have

-Why do we need JavaScript to change HTML?
