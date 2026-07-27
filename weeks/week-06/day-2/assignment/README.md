# 🛠️ Assignment — Week 06 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 06](../../README.md)

## What to build

A counter with +, −, reset. Styled properly (you have CSS skills — use them).

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `script.js` | all the JavaScript |

## ✅ Done when — this is the checklist you are marked against

- [ ] The number turns red below zero and green above, via a **class**, not inline style
- [ ] A step input: `+` and `−` change by that amount
- [ ] Reset button returns to zero and clears the colour class
- [ ] The count is held in a **single JavaScript variable** — the DOM displays it, it does not store it. This distinction is the whole point of the day.
- [ ] One `render()` function that puts current state on screen; every button handler updates the variable then calls `render()`
- [ ] Buttons are disabled at a max (say 100) and min (−100)

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Where does your app's "truth" live — in the variable or in the DOM text? Why does that matter?
2. What would go wrong if you read the number back out of the DOM with `parseInt(el.textContent)` each time?
3. Why is a single `render()` function better than updating the DOM inside each handler?
4. What is the difference between `addEventListener("click", fn)` and `onclick = fn`?
5. **Prove it:** add a "×2" button in under 2 minutes. If your structure is right, it is 3 lines.

---

[← back to the day](../) · [📖 read first](../learn/)
