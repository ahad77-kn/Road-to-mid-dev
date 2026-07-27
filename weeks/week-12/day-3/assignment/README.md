# 🛠️ Assignment — Week 12 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 12](../../README.md)

## What to build

One `ProfileCard` component, rendered 5 times with completely different data.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/components/ProfileCard.jsx` | |
| `src/data/profiles.js` | the 5 profiles |
| `props.md` | why props are read-only |

## ✅ Done when — this is the checklist you are marked against

- [ ] `ProfileCard` takes props: `name`, `role`, `avatar`, `bio`, `skills` (array), `social` (object), `isAvailable` (boolean)
- [ ] Props destructured in the parameter list
- [ ] Default props via default parameter values
- [ ] Conditional rendering based on `isAvailable` — an "Available for work" badge
- [ ] The `skills` array rendered with `.map` and proper `key`s
- [ ] A `children` prop used somewhere — a `<Card>` wrapper that renders whatever is inside it
- [ ] One component that takes a **function** as a prop (`onContactClick`) and calls it
- [ ] Data lives in a `profiles.js` array; the page maps over it — **zero** hard-coded cards in the JSX
- [ ] `day-3/props.md`: why props are read-only, and what happens if you try to modify one

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Are props mutable? What happens if you assign to one?
2. What is `children` and when is it better than a named prop?
3. How do you pass a function down, and why would you?
4. What is prop drilling? Show where it would start to hurt in your own code.
5. **Prove it:** add a 6th profile by editing only the data file.

---

[← back to the day](../) · [📖 read first](../learn/)
