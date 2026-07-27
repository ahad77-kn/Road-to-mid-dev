# 🛠️ Assignment — Week 08 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 08](../../README.md)

## What to build

Copy the quiz and to-do apps into `day-1/` and modernise them.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `quiz/` | the ES6 quiz |
| `todo/` | the ES6 to-do |
| `before-after.md` | 3 snippets, old vs new, and what improved |

## ✅ Done when — this is the checklist you are marked against

- [ ] Arrow functions where they make sense — and at least one place where you **kept** a regular function, with a comment on why
- [ ] Template literals everywhere; zero string concatenation with `+`
- [ ] Destructuring in function parameters (`function render({ text, done, id })`)
- [ ] Spread used for immutable array and object updates — no `push`/direct assignment on state
- [ ] Default parameters replacing `x = x || 5` patterns
- [ ] Optional chaining `?.` and nullish coalescing `??` used where they genuinely help
- [ ] `day-1/before-after.md`: three code snippets shown old vs new, each with one line on what improved

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. How does `this` behave differently in an arrow function? Give a case where an arrow function is the *wrong* choice.
2. Rewrite `const name = user && user.profile && user.profile.name` with optional chaining.
3. Difference between `||` and `??` — show an input where they disagree.
4. What does `const [first, ...rest] = arr` give you?
5. **Prove it:** I show you an old-style snippet; you modernise it live in under a minute.

---

[← back to the day](../) · [📖 read first](../learn/)
