# Notes — Week 06 Day 2: Counter app

**Date:** 2026-09-01
**Time spent:** learning 8am to 9am · building 9am to 12pm

**AI used?** yes ✅/ no — what for: _______________as usual
> Mandatory. Explaining a concept = fine, full marks. Writing your code = say so.
> Not saying so = 0/10. → [the rule](../../../../GRADING.md)

## What I learned (own words, min 3)

-how to make a counter by html,css,js

-how actually the all three works togather and how js stores the past value and displays the next value

-learned render();,that how it keeps the dom updated at one place.

## What I struggled with (mandatory — "nothing" is not allowed)

-with the whole js 

## How I solved it (or: still stuck, will ask)

-was tough little bit got through ai help by learning clear and more from it.

## The teacher's questions — my answers, from memory

1. Where does your app's "truth" live — in the variable or in the DOM text? Why does that matter?
ans. Truth lives in the variable count, not the DOM. The DOM only displays it, so the state stays reliable.
2. What would go wrong if you read the number back out of the DOM with parseInt(el.textContent) each time?
ans. Reading from the DOM each time can cause problems because the DOM is meant for display, not storing app state.
3. Why is a single render() function better than updating the DOM inside each handler?
ans. One render() keeps DOM updates in one place, making the code cleaner and easier to maintain.
4. What is the difference between addEventListener("click", fn) and onclick = fn?
ans. addEventListener() allows multiple event handlers. onclick = fn can be overwritten by another handler.
5. Prove it: add a "×2" button in under 2 minutes. If your structure is right, it is 3 lines.
ans. <button id="double">×2</button>
double.addEventListener("click", () => {
    count *= 2;
    render();
});

That's the 3-line proof: update state → render.

## One question I still have

-What happens if we forget to call render()?
