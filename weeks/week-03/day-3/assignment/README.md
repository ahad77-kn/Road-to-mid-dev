# 🛠️ Assignment — Week 03 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 03](../../README.md)

## What to build

Add interaction feedback to every interactive element in the landing page. **Subtle.** The test is that a normal person would not consciously notice the animations, only that the page "feels good".

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |

## ✅ Done when — this is the checklist you are marked against

- [ ] `transition` on buttons, links, cards, inputs — 150–250ms, with a real easing function (`ease-out`, not `linear`)
- [ ] **Only** `transform` and `opacity` are animated — never `width`, `height`, `top`, `margin`. Explain why in a comment.
- [ ] A `:hover` lift on cards using `transform: translateY(-4px)` + shadow
- [ ] A focus state that is *also* animated and keyboard-visible
- [ ] `@media (prefers-reduced-motion: reduce)` block that disables the motion
- [ ] One `@keyframes` animation — a loading skeleton or spinner
- [ ] No layout shift when hovering anything. Check in DevTools.

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Why are `transform` and `opacity` cheap to animate, while `width` and `top` are expensive?
2. What are the four parts of the `transition` shorthand?
3. What is `prefers-reduced-motion` and who does it help?
4. Difference between `transition` and `@keyframes` — when do you need each?
5. **Prove it:** open DevTools → Rendering → "Paint flashing". Show that your hover effect does not repaint the whole card.

---

[← back to the day](../) · [📖 read first](../learn/)
