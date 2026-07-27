# 🛠️ Assignment — Week 01 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 01](../../README.md)

## What to build

Recreate a business card in HTML/CSS — name, role, phone, email, address. Fixed width, clear spacing, borders, a background colour.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `card.html` | the card markup |
| `card.css` | all the styling |

## ✅ Done when — this is the checklist you are marked against

- [x] Separate `card.html` and `card.css` (no `<style>` block, no inline styles)
- [x] The card is a single container element with everything inside it
- [x] Deliberate padding, border and border-radius
- [ ] Class-based selectors, not element selectors (`.card__name`, not `h1`)
- [ ] No `position` used to fix spacing — margin and padding only

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What are the four layers of the box model, from the inside out?
2. `width: 300px; padding: 20px; border: 2px` — how wide is the element on screen? Now add `box-sizing: border-box` — how wide is it?
3. Why is styling `h1 { }` directly a problem once the page grows?
4. **Prove it:** open the card in DevTools, hover the element, and read the box-model diagram out loud.

**📌 Assessment:** [`ASSESSMENT.md`](../ASSESSMENT.md) — **6/10, PASS.** Works, but styled by tag instead of class and used `position: relative; top: -30px` to fix a gap caused by margin collapsing. Both are fixed on Day 3.

---

[← back to the day](../) · [📖 read first](../learn/)
