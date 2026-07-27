# 🛠️ Assignment — Week 02 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 02](../../README.md)

## What to build

Part A — recreate the header of a real news site (Dawn, BBC, Geo): logo on the left, nav links on the right, a search icon at the far right. Build it **first** with `display: inline-block` and floats — the Week-1 way. Suffer for 30 minutes.
Part B — rebuild the identical header with Flexbox in `day-1/flex.html`.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `floats.html` | the header built the painful way |
| `flex.html` | the same header in flexbox |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `comparison.md` | 5+ sentences on what flexbox removed |

## ✅ Done when — this is the checklist you are marked against

- [ ] Both versions in the folder, visually identical
- [ ] `day-1/comparison.md`: at least 5 sentences on what flexbox removed — name the specific properties you no longer needed (`float`, `clear`, `vertical-align`, wrapper divs, `overflow: hidden` hacks)
- [ ] Vertically centred nav links using `align-items`, not `line-height` or `padding` guesses
- [ ] Space pushed between logo and nav using `justify-content` or `margin-left: auto` — explain which you chose and why
- [ ] `gap` used for spacing between links, not `margin-right` on each

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is the main axis? What happens to `justify-content` when you set `flex-direction: column`?
2. What does `margin-left: auto` do inside a flex container, and why?
3. Difference between `align-items` and `align-self`?
4. Why did floats need clearfix hacks, and what was actually going wrong?
5. **Prove it:** change `flex-direction` to `column` live and predict — out loud, before pressing Enter — exactly what will move.

---

[← back to the day](../) · [📖 read first](../learn/)
