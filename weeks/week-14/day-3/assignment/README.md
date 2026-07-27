# 🛠️ Assignment — Week 14 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 14](../../README.md)

## What to build

Make the tracker genuinely usable.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/components/Filters.jsx` | |
| `state-count.md` | how many useState calls App now has |

## ✅ Done when — this is the checklist you are marked against

- [ ] Filter by category (multi-select), by date range, and by a min/max amount
- [ ] Search by description, debounced
- [ ] Sort by date / amount / description, ascending and descending
- [ ] All filters compose — they work together, not one at a time
- [ ] The filtered+sorted list is derived in one place, in the right order (filter → search → sort)
- [ ] A "clear all filters" button and a count: "showing 8 of 34"
- [ ] Notice how many `useState` calls you now have. Count them in `day-3/state-count.md` — that number is the argument for tomorrow.

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. How many `useState` calls are in `App` now? Which ones always change together?
2. Why must filter/sort be derived rather than stored?
3. What order do you apply filter, search and sort — does it matter for correctness? For performance?
4. Where does the debounce live, and why there?
5. **Prove it:** apply three filters at once and show the count is right.

---

[← back to the day](../) · [📖 read first](../learn/)
