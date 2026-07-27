# 🛠️ Assignment — Week 14 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 14](../../README.md)

## What to build

Finish the tracker.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/components/` | edit mode, the CSS chart, import/export |
| `memo.md` | how you MEASURED that the memo was needed — Profiler, not a feeling |

## ✅ Done when — this is the checklist you are marked against

- [ ] Edit an existing expense — the form fills with its values and switches to "update" mode
- [ ] The form resets cleanly between edit and add (use a `key` to force a reset and explain why)
- [ ] A simple bar chart of spend per category — **CSS only**, no chart library
- [ ] Monthly view: group by month with subtotals
- [ ] Export to JSON and import back
- [ ] Empty state, loading skeletons, and a confirm step before deletion
- [ ] `useMemo` applied to **one** expensive derived value — and `day-5/memo.md` explaining how you measured that it was actually needed. "It felt slow" is not a measurement; use the React DevTools Profiler.

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. When does `useMemo` help and when is it just noise?
2. How did you *measure* that the memo was needed?
3. How does changing `key` on the form reset it, and why is that better than manually clearing every field?
4. What is the most complex piece of derived data in your app? Walk me through it.
5. **Prove it:** open the Profiler, record an interaction, and show me which components re-rendered and why.

---

[← back to the day](../) · [📖 read first](../learn/)
