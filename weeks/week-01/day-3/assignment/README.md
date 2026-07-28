# 🛠️ Assignment — Week 01 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 01](../../README.md)

## What to build

Copy yesterday's pricing card into `day-3/`. Now **break it on purpose, five times**, one bug at a time — and fix each one before making the next.

Required bugs (all five):
1. A **specificity** conflict — a rule that should apply but does not
2. A **collapsed margin** creating an unexpected gap
3. An element **overflowing** its parent because of `box-sizing`
4. A rule broken by **source order** (right specificity, wrong position in the file)
5. An `!important` that makes something impossible to override

For each: screenshot the broken state, then write in `day-3/bugs.md`:
> **Bug N:** what I changed · what it looked like · **why** it happened · how I fixed it.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `bugs.md` | all 5 bugs: what you changed, why it broke, how you fixed it |
| `screenshots/` | one screenshot per broken state |

## ✅ Done when — this is the checklist you are marked against

- [x] All 5 bugs, each with a screenshot and a *why* in your own words
- [x] The specificity of the conflicting selectors written out as numbers (e.g. `0-1-1` vs `0-2-0`)
- [x] Also fix the two problems from Day 1: switch to class selectors, remove the `position` hack
- [x] Final card renders correctly

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Rank these by specificity: `.card p`, `#price`, `p`, `.card .price`, `p.price`.
2. Two rules have identical specificity. Which one wins?
3. When do two vertical margins collapse — and name two ways to stop it.
4. Why is `!important` almost always the wrong fix?
5. **Prove it:** I point at any element in your card and you tell me, without DevTools, which rules are affecting it.

---

[← back to the day](../) · [📖 read first](../learn/)
