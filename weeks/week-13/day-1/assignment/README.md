# 🛠️ Assignment — Week 13 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 13](../../README.md)

## What to build

A "student directory" in `day-1/` — a list of 15 students with filtering and sorting.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/components/` | the directory + its filter/sort controls |
| `keys.md` | the index-key bug demonstrated, then fixed, with screenshots |

## ✅ Done when — this is the checklist you are marked against

- [ ] Rendered with `.map`, each item its own component
- [ ] Sort by name / marks, filter by class, search by name — all working together
- [ ] **The index-key bug, demonstrated:** use `key={index}`, add an input to each row, type in one, then delete a row above it. Screenshot the wrong values. Then fix it with `key={student.id}` and screenshot the correct behaviour. This must be in `day-1/keys.md` with your explanation.
- [ ] An empty state when filters match nothing
- [ ] A count of visible vs total
- [ ] No mutation of the source array anywhere — `sort()` must be on a copy (this catches almost everyone)

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What does React use `key` for? Why not just the position?
2. Exactly what went wrong in your index-key demo? Explain what React did.
3. When is `key={index}` acceptable?
4. Why does `array.sort()` inside a render cause a bug? What is the fix?
5. **Prove it:** show me the broken version and the fixed version, and explain the difference in React's behaviour, not just the symptom.

---

[← back to the day](../) · [📖 read first](../learn/)
