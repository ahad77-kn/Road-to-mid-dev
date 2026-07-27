# 🛠️ Assignment — Week 14 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 14](../../README.md)

## What to build

Add the list, the total, and per-category summaries.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/components/` | ExpenseList, ExpenseItem, Summary |
| `derived.md` | every derived value + the bug you would get if you stored it |

## ✅ Done when — this is the checklist you are marked against

- [ ] `ExpenseList` → `ExpenseItem` components; delete works
- [ ] A total that is **calculated during render** — a stored `total` state variable is an automatic fail this week
- [ ] A summary strip: total, this month's total, average, count, biggest single expense — all derived
- [ ] Category breakdown with percentages
- [ ] Currency formatted with `Intl.NumberFormat` (PKR), dates with `Intl.DateTimeFormat`
- [ ] `day-2/derived.md`: list every derived value and write what bug would appear if you stored it in state instead

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Why is a stored total a bug waiting to happen? Describe the exact failure.
2. What does "lifting state up" mean — what problem did it solve here?
3. What is `Intl.NumberFormat` and why is it better than `"Rs " + amount.toFixed(2)`?
4. Is your total recalculated on every render? Is that a problem? How would you know?
5. **Prove it:** add a "total this week" figure. It must be one line of derived code.

---

[← back to the day](../) · [📖 read first](../learn/)
