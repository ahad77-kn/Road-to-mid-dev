# 🛠️ Assignment — Week 02 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 02](../../README.md)

## What to build

6 product cards in a row that wraps. Each card: image placeholder, title, 2 lines of description (make them **different lengths on purpose**), price, button.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |

## ✅ Done when — this is the checklist you are marked against

- [ ] Cards wrap to the next row when the screen narrows (`flex-wrap`)
- [ ] **All cards the same height** in a row, even with different text lengths — and the button sits flush at the bottom of every card
- [ ] Even gaps using `gap`, never `margin` hacks on children
- [ ] `flex: 1 1 300px` style sizing — explain in a comment what each of the three values does
- [ ] The last row does **not** stretch weirdly when it has fewer cards — solve it and explain how

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What do the three values in `flex: 1 1 300px` mean?
2. What is the default value of `flex-basis`, and why does `flex: 1` behave differently from `width: 100%`?
3. How do you make one card push its button to the bottom regardless of text length? (Two valid answers — name both.)
4. `flex-wrap: wrap` vs `nowrap` — what happens to `flex-shrink` in each case?
5. **Prove it:** delete one card. The layout must still look intentional.

---

[← back to the day](../) · [📖 read first](../learn/)
