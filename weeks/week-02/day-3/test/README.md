# 🧪 Daily test — Week 02 Day 3

**Closed book. No editor, no browser, no AI, no notes. 15 minutes.**

Write your answers in `ANSWERS.md` in this folder. Then — and only then — check
them and write your own mark at the bottom. **You mark yourself.** I re-mark, and
the gap between your mark and mine is itself worth marks (see below).

---

## Section A — recall (4 marks, 1 each)

**A1.** What is `1fr`? Give the definition, not an example.

**A2.** In `grid-template-areas`, what does a `.` mean?

**A3.** What is the difference between an *explicit* and an *implicit* grid track?

**A4.** Name the two CSS properties that create a grid container's gaps, and the one
shorthand that sets both.

## Section B — predict the output (3 marks, 1 each)

**B1.** A grid has `grid-template-columns: 1fr 2fr 1fr` and is 800px wide with no gap.
How wide is each column?

**B2.**
```css
.grid { display: grid; grid-template-columns: repeat(3, 1fr); }
.item { grid-column: 2 / 4; }
```
Which columns does `.item` occupy, and how many tracks wide is it?

**B3.** A grid container has three columns declared but you place six items in it
with no explicit positioning. What happens to items 4, 5 and 6, and what is the name
for the rows they land in?

## Section C — spot the bug (2 marks, 1 each)

**C1.** Why does this produce no grid at all?
```css
grid-template-areas:
  "head head head"
  "nav  main"
  "foot foot foot";
```

**C2.** Why does this footer *not* sit at the bottom of the viewport?
```css
body   { min-height: 100vh; }
.page  { display: grid; grid-template-rows: auto auto auto; }
```

## Section D — defend a decision (1 mark)

**D1.** You could build a page header with Flexbox or with Grid. Pick one, and give
the strongest argument *against* your own choice. One sentence each way.

---

## ✍️ Your self-mark

| Section | Max | Mine |
| --- | --- | --- |
| A — recall | 4 | |
| B — predict | 3 | |
| C — spot the bug | 2 | |
| D — defend | 1 | |
| **Total** | **10** | |

**Honesty bonus:** if your self-mark lands within **1.0** of mine, you get **+0.5**
on the day's assignment score. If it is more than 2.0 optimistic, you lose 0.5.
Marking your own work accurately is a skill, and it is the one that makes you
trustworthy without supervision.
