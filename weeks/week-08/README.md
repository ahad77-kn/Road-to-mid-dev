# Week 08 — Modern JS (ES6+), Promises & `async`/`await`

[← The Road](../../README.md) · Phase 2 · JavaScript, Seriously · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 07](../week-07/) · **Next:** [Week 09 — Real APIs →](../week-09/)

> **Goal:** write the JavaScript that every codebase written after 2018 actually uses — and handle code that takes time to finish.

**Why this week matters:** async is the exact skill that separates tutorial-followers from developers. Up to now every line ran instantly, top to bottom. From this week, some lines *start* something and finish later, and your code has to cope with waiting, failing, and arriving out of order. It is the hardest week of Phase 2. Expect to feel stupid on Wednesday. That is normal and it passes.

---

## 📖 Learning material — 1 hr/day

| Day | Read + type | Source |
| --- | --- | --- |
| D1 | [JavaScript.info: Destructuring](https://javascript.info/destructuring-assignment) · [Rest & spread](https://javascript.info/rest-parameters-spread) · [Optional chaining](https://javascript.info/optional-chaining) | JS.info |
| D2 | [JavaScript.info: Modules](https://javascript.info/modules-intro) · [MDN: JS modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) | JS.info / MDN |
| D3 | [JavaScript.info: Callbacks → Promise](https://javascript.info/callbacks) · [Promise basics](https://javascript.info/promise-basics) · [Chaining](https://javascript.info/promise-chaining) | JS.info |
| D4 | [JavaScript.info: async/await](https://javascript.info/async-await) · [Error handling with promises](https://javascript.info/promise-error-handling) | JS.info |
| D5 | [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) · [MDN: HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) | MDN |

### 📰 Watch and read this week (both, properly)
- 🎥 [Philip Roberts — What the heck is the event loop?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) — 26 minutes, the single best explanation of async JS that exists. Watch it on **Day 3**, and again in three months.
- [JavaScript.info: Event loop & microtasks](https://javascript.info/event-loop)
- [MDN: `Promise.all` / `allSettled` / `race`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) — read it *before* it breaks your Friday

---

## 🗓️ The week at a glance

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | ES6 refactor of the quiz + to-do apps | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | Split everything into ES modules | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | Promise drills — write them by hand before using any | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | `async`/`await` + first real `fetch` | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | Random-user cards — loading, error, load more | [📄 open →](day-5/) | – |

---

## ✅ End-of-week check

- [ ] `async`/`await` with `try/catch` is your default; you no longer write `.then` chains by habit
- [ ] You always check `response.ok`
- [ ] Every async UI has loading, error and empty states — you build them from the start, not after
- [ ] You know when to parallelise with `Promise.all` and when order matters
- [ ] You can explain the event loop well enough to teach it

**This was the hardest week of Phase 2.** Next week is the reward: building real apps against real APIs.
