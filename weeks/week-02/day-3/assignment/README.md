# 🛠️ Assignment — Week 02 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 02](../../README.md)

## What to build

The classic page skeleton: header across the top, left sidebar, main content, right sidebar, footer across the bottom. Dummy content is fine, but give it real proportions.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `why-grid.md` | 3 sentences on why this is painful in flexbox |

## ✅ Done when — this is the checklist you are marked against

- [x] Built with `grid-template-areas` — the CSS must be visually readable as an ASCII picture of the page
- [x] `grid-template-columns` using `fr` units and at least one `minmax()`
- [x] Footer stays at the bottom even when the content is short (`min-height: 100vh` on the grid + a row that grows)
- [x] `gap` for all spacing
- [x] `day-3/why-grid.md`: 3 sentences on why this layout is painful in Flexbox and natural in Grid

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is `1fr`? How is it different from `33.33%`?
2. What does `minmax(200px, 1fr)` mean, in words?
3. Explain `grid-template-areas` — what does a `.` mean in the string?
4. What is the difference between an *explicit* and an *implicit* grid track?
5. **Prove it:** move the sidebar from left to right by changing **one** line of CSS.

---

[← back to the day](../) · [📖 read first](../learn/)
