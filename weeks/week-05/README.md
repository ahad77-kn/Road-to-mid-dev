# Week 05 — Arrays, Objects & the Methods You Will Use Daily

[← The Road](../../README.md) · Phase 2 · JavaScript, Seriously · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 04](../week-04/) · **Next:** [Week 06 — The DOM →](../week-06/)

> **Goal:** hold data in the right shape and transform it with `map`, `filter` and `reduce` instead of hand-rolled loops.

**Why this week matters:** almost all real application code is *data going in, a different shape of data coming out*. An API returns 50 products; you need the 12 that are in stock, sorted by price, with a total. That is this week. Still console-only — the DOM starts on Monday.

---

## 📖 Learning material — 1 hr/day

| Day | Read + type | Source |
| --- | --- | --- |
| D1 | [JavaScript.info: Arrays](https://javascript.info/array) | JS.info |
| D2 | [JavaScript.info: Array methods](https://javascript.info/array-methods) — the big one | JS.info |
| D3 | [MDN: Array reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) — skim every method name once | MDN |
| D4 | [JavaScript.info: Objects](https://javascript.info/object) · [Object methods, `this`](https://javascript.info/object-methods) | JS.info |
| D5 | [JavaScript.info: Object copying by reference](https://javascript.info/object-copy) · [`Object.keys/values/entries`](https://javascript.info/keys-values-entries) | JS.info |

### 📰 Articles worth your time this week
- [MDN: `Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) — read the examples three times; `reduce` is the one that takes longest to click
- [JavaScript.info: Destructuring](https://javascript.info/destructuring-assignment) — you will use this in every React component later
- [MDN: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN: Structured clone / deep copy](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) — why `{...obj}` is not always enough

---

## 🗓️ The week at a glance

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Array basics — 10 drills with loops | [📄 open →](day-1/) | **9.0** ✅ [assessment](day-1/ASSESSMENT.md) |
| [**D2**](day-2/) | Rewrite all 10 with `map`/`filter`/`reduce` | [📄 open →](day-2/) | **7.5** ✅ [assessment](day-2/ASSESSMENT.md) |
| [**D3**](day-3/) | Student marks program | [📄 open →](day-3/) | **9.0** ✅ [assessment](day-3/ASSESSMENT.md) |
| [**D4**](day-4/) | Objects — modelling real things | [📄 open →](day-4/) | **9.25** ✅ [assessment](day-4/ASSESSMENT.md) |
| [**D5**](day-5/) | Console contact book (array of objects) | [📄 open →](day-5/) | – |

---

## ✅ End-of-week check

- [ ] `map`/`filter`/`reduce` come to mind before a `for` loop
- [ ] You can explain the difference between copying a value and copying a reference, with an example
- [ ] You update objects and arrays immutably by habit (this is *required* for React later — it starts here)
- [ ] You can model any real-world thing as an object with sensible keys
- [ ] Destructuring and spread are comfortable, not exotic

**Next week the console output becomes a real page.** Every function you wrote this week is about to get a button attached to it.
