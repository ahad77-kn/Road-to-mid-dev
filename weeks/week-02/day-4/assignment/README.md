# 🛠️ Assignment — Week 02 Day 4 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 02](../../README.md)

## What to build

An Instagram-explore-style gallery: a grid of images where some cells span 2 columns and/or 2 rows. At least 12 tiles, at least 3 of them oversized.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |

## ✅ Done when — this is the checklist you are marked against

- [x] `grid-template-columns: repeat(4, 1fr)` (or similar) plus `grid-column: span 2` / `grid-row: span 2` on selected items
- [x] Images fill their cell without distortion — `object-fit: cover` with a fixed cell aspect ratio (`aspect-ratio`)
- [x] No gaps or holes left in the grid (understand `grid-auto-flow: dense`, use it if you need it, explain in a comment)
- [x] A hover effect on tiles that does not shift the layout (scale/opacity, not width/margin)
- [x] Use placeholder images from [picsum.photos](https://picsum.photos/)

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Difference between `grid-column: span 2` and `grid-column: 1 / 3`?
2. What does `grid-auto-flow: dense` do, and what is the cost of using it?
3. Why does `object-fit: cover` need the image to have a set height or aspect ratio?
4. Where does an item go if you never tell Grid where to put it?
5. **Prove it:** in DevTools, turn on the grid overlay and read out the line numbers your spanning item occupies.

---

[← back to the day](../) · [📖 read first](../learn/)
