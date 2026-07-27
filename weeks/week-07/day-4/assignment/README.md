# 🛠️ Assignment — Week 07 Day 4 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 07](../../README.md)

## What to build

An image slider/carousel with **no library**.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `script.js` | all the JavaScript |

## ✅ Done when — this is the checklist you are marked against

- [ ] Next / Previous buttons that wrap around at both ends
- [ ] Dot indicators — clickable, and the active one is styled
- [ ] Auto-play every 4 seconds, **pausing on hover** and on focus
- [ ] Keyboard: left/right arrows move the slides when the carousel has focus
- [ ] Smooth CSS `transform` transition — not `left`/`margin` animation
- [ ] Touch swipe on mobile (`touchstart`/`touchend`, compare X positions)
- [ ] Handles any number of slides — hard-coding "5" anywhere is a fail
- [ ] Images lazy-loaded (`loading="lazy"`) with `alt` text

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. How do you make index wrap-around work with the modulo operator? Write it.
2. Why animate `transform: translateX()` instead of `left`?
3. What happens if auto-play fires while the user is mid-swipe? How did you prevent it?
4. How would you make this reusable for two carousels on the same page?
5. **Prove it:** add three more images to the HTML only. It must still work perfectly.

---

[← back to the day](../) · [📖 read first](../learn/)
