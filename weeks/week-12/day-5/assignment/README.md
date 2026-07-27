# 🛠️ Assignment — Week 12 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 12](../../README.md)

## What to build

A FAQ accordion — click a question, its answer expands.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/components/Faq.jsx` | |
| `src/components/FaqItem.jsx` | |
| `state-location.md` | why openId lives in the parent |

## ✅ Done when — this is the checklist you are marked against

- [ ] Questions come from a data array, not hard-coded JSX
- [ ] Only **one** panel open at a time — held as `openId` in the parent, not as a boolean inside each item. This choice is the lesson of the day.
- [ ] A smooth CSS height/opacity transition
- [ ] Correct accessibility: `<button>` for the trigger, `aria-expanded`, `aria-controls`, keyboard operable
- [ ] A "close all" / "open all" control — which forces you to think about where the state lives
- [ ] A search box filtering the questions live
- [ ] `day-5/state-location.md`: why `openId` is in the parent. What would break if each `FaqItem` held its own `isOpen`?

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Where does state belong when two siblings must coordinate?
2. What would break with a boolean inside each item?
3. What is conditional rendering, and what are your three ways of doing it (`&&`, ternary, early return)?
4. Why is `key` needed on the mapped list, and what breaks if you use the array index while filtering?
5. **Prove it:** change it to allow multiple panels open at once. If your state is designed well this is a small change — show me.

---

[← back to the day](../) · [📖 read first](../learn/)
