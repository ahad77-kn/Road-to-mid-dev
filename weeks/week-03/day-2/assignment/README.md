# 🛠️ Assignment — Week 03 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 03](../../README.md)

## What to build

The Week-2 card gallery: 1 column on a phone, 2 on a tablet, 3+ on desktop — and **not a single media query is allowed**.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `how.md` | how the layout changes with no media query |

## ✅ Done when — this is the checklist you are marked against

- [ ] `grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr))` — and you can explain every part of it, including why the inner `min()` is there
- [ ] Fluid typography with `clamp()` on headings
- [ ] Images with `max-width: 100%` and `height: auto`
- [ ] Container width managed with `width: min(1100px, 100% - 2rem)` or similar — no fixed `px` widths
- [ ] `day-2/how.md`: explain in your own words how the layout knows to change without any media query

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. `auto-fit` vs `auto-fill` — what is the visible difference when there are only 2 items in a wide container?
2. Read `clamp(1.5rem, 4vw, 3rem)` out loud in plain English.
3. Why does `minmax(280px, 1fr)` overflow at 320px, and how does `min(280px, 100%)` fix it?
4. When *should* you still use a media query?
5. **Prove it:** drag the browser edge slowly from 1400px to 320px. Narrate every column change as it happens.

---

[← back to the day](../) · [📖 read first](../learn/)
