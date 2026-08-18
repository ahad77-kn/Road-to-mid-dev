# Week 04 — JavaScript Language Fundamentals

[← The Road](../../README.md) · Phase 2 · JavaScript, Seriously · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 03](../week-03/) · **Next:** [Week 05 — Arrays & objects →](../week-05/)

> **Goal:** solve small logic problems in JavaScript, alone, in the console. No DOM, no page, no HTML. Console only.

**Why this week matters:** this is where most self-taught students quit — the jump from *describing* a page (HTML/CSS) to *instructing a machine* (programming). Two full weeks on the pure language, before touching the page. Going slow here is going fast later. Everything from Week 6 onward is built on this.

**No DOM this week.** If you find yourself writing `document.` anything, you are off the plan.

---

## 📖 Learning material — 1 hr/day

| Day | Read + type every example | Source |
| --- | --- | --- |
| D1 | [JavaScript.info ch. 2.1–2.8](https://javascript.info/first-steps) — hello world, variables, data types, operators | JS.info |
| D2 | [ch. 2.9–2.13](https://javascript.info/comparison) — comparisons, `if`, logical operators, `??` | JS.info |
| D3 | [ch. 2.14–2.15](https://javascript.info/while-for) — loops, `switch` | JS.info |
| D4 | [ch. 2.16–2.18](https://javascript.info/function-basics) — functions, function expressions, arrow functions | JS.info |
| D5 | [MDN: JS first steps](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting) — second pass on anything shaky | MDN |

### 📰 Articles worth your time this week
- [MDN: Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) — `==` vs `===`, settled forever
- [JavaScript.info: Type conversions](https://javascript.info/type-conversions) — why `"5" - 2 === 3` but `"5" + 2 === "52"`
- [MDN: Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) — memorise the six falsy values
- [JavaScript.info: Variable scope](https://javascript.info/closure) — read the first half now, the rest in Week 8

**How to study this week:** open the JS.info page on the left, your editor on the right. **Type every example. Then change a value and predict the output before you run it.** Reading code teaches nothing; predicting it teaches everything.

### ▶️ How to run a `.js` file — read this before Day 1

**No HTML. No browser. No setup.** Open the terminal, go into the day's assignment folder, and run the file by name:

```bash
cd weeks/week-04/day-1/assignment
node bmi.js
```

`node` is already on your machine. The output appears in the terminal. Chrome DevTools → Console works too and is handy for one-liners, but for a whole file `node` is the one to use.

**Run the file after every change you make.** Write a line, run it, read what came back. When it errors, the message names the file and the line number — that is the fastest teacher you have. **That write → run → read → fix loop is programming.** Everything else is typing.

---

## 🗓️ The week at a glance

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Variables, types & 5 tiny programs | [📄 open →](day-1/) | **7.25** ✅ [assessment](day-1/ASSESSMENT.md) |
| [**D2**](day-2/) | Conditionals — 6 decision programs | [📄 open →](day-2/) | **5.0** 🔁 [assessment](day-2/ASSESSMENT.md) |
| [**D3**](day-3/) | Loop drills — sums, reversals, FizzBuzz, patterns | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | Functions — parameters, returns, scope | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | Refactor everything from D1–D3 into functions | [📄 open →](day-5/) | – |

---

## ✅ End-of-week check

- [ ] You can write a loop without looking up the syntax
- [ ] You use `const` by default and know exactly why `var` is gone
- [ ] Your functions return values instead of printing them
- [ ] You can trace a loop on paper and predict every iteration's values
- [ ] Given a small logic problem, you can start typing within 30 seconds

**If you are still copying loop syntax from tutorials, do not move on.** Spend day 6 on loops alone. Week 5 assumes this is muscle memory.
