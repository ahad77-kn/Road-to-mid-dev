# 🧪 Daily test — Week 02 Day 4

**Closed book. No editor, no browser, no AI, no notes. 15 minutes.**

Answers in `ANSWERS.md`, then self-mark at the bottom.

---

## Section A — recall (4 marks, 1 each)

**A1.** What does `repeat(auto-fit, minmax(200px, 1fr))` do, in one sentence of plain
English?

**A2.** What is the difference between `auto-fit` and `auto-fill`?

**A3.** What does `grid-auto-rows` control, and when does it apply?

**A4.** What does `aspect-ratio: 16 / 9` do, and what happens if you also set an
explicit `height`?

## Section B — predict the output (3 marks, 1 each)

**B1.** A grid has 3 columns. An item has `grid-column: span 4`. What does the browser
do — error, clip, or something else?

**B2.**
```css
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
```
The container is 700px wide with a 20px gap. How many columns do you get, and why not
three?

**B3.** An `<img>` has `width: 100%; height: 100%` inside a square box, and the image
itself is 1200×400. Describe exactly what the user sees, and name the one property
that fixes it.

## Section C — spot the bug (2 marks, 1 each)

**C1.** Why does this line silently do nothing?
```css
grid-template-columns: repeat(auto-fit, minmax(200px 1fr));
```

**C2.** A gallery looks perfect on a laptop and has a horizontal scrollbar on a phone.
The CSS contains `grid-column: span 2` on some tiles. Explain the connection.

## Section D — defend a decision (1 mark)

**D1.** `object-fit: cover` crops; `object-fit: contain` letterboxes. For a **product
catalogue**, pick one and argue against your own pick in one sentence.

---

## ✍️ Your self-mark

| Section | Max | Mine |
| --- | --- | --- |
| A — recall | 4 | |
| B — predict | 3 | |
| C — spot the bug | 2 | |
| D — defend | 1 | |
| **Total** | **10** | |

**Honesty bonus:** within 1.0 of my mark → **+0.5** on the day. More than 2.0
optimistic → −0.5.
