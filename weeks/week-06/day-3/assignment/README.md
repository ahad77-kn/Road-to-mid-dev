# 🛠️ Assignment — Week 06 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 06](../../README.md)

## What to build

Build the calculator's **structure and display logic** — no arithmetic yet.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `script.js` | all the JavaScript |

## ✅ Done when — this is the checklist you are marked against

- [x] A proper calculator layout in CSS Grid — digits, operators, clear, equals
- [x] A display area showing the current entry and, above it in smaller text, the pending expression
- [x] Clicking digits appends to the display; the display never shows a leading `0` (except `0.`)
- [x] Only one decimal point can be entered per number
- [x] `C` clears everything; `CE` clears only the current entry
- [x] All button clicks handled by **one** listener on the container, using event delegation + `data-` attributes — not 18 separate listeners
- [x] Buttons have `:active` and `:hover` styles

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is event delegation, and what two problems does it solve?
2. What does `event.target` hold? How is it different from `event.currentTarget`?
3. Why is `data-value="7"` better than reading the button's text?
4. Explain bubbling — if you click a `<span>` inside a `<button>` inside a `<div>`, which listeners fire and in what order?
5. **Prove it:** add a new button to the HTML only — no JS changes — and show it works.

---

[← back to the day](../) · [📖 read first](../learn/)
