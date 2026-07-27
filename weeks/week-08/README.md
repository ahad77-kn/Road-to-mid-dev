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

| Day | Assignment | Open the assignment | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | ES6 refactor of the quiz + to-do apps | [📄 day-1 →](day-1/) | – |
| [**D2**](day-2/) | Split everything into ES modules | [📄 day-2 →](day-2/) | – |
| [**D3**](day-3/) | Promise drills — write them by hand before using any | [📄 day-3 →](day-3/) | – |
| [**D4**](day-4/) | `async`/`await` + first real `fetch` | [📄 day-4 →](day-4/) | – |
| [**D5**](day-5/) | Random-user cards — loading, error, load more | [📄 day-5 →](day-5/) | – |

---

## Day 1 — ES6 refactor

📄 **[Open this day's assignment page →](day-1/)**




**Read first (1 hr):** JS.info *Destructuring*, *Rest & spread*, *Optional chaining*.

**Build (2 hr):** Copy the quiz and to-do apps into `day-1/` and modernise them.

**Must have**
- [ ] Arrow functions where they make sense — and at least one place where you **kept** a regular function, with a comment on why
- [ ] Template literals everywhere; zero string concatenation with `+`
- [ ] Destructuring in function parameters (`function render({ text, done, id })`)
- [ ] Spread used for immutable array and object updates — no `push`/direct assignment on state
- [ ] Default parameters replacing `x = x || 5` patterns
- [ ] Optional chaining `?.` and nullish coalescing `??` used where they genuinely help
- [ ] `day-1/before-after.md`: three code snippets shown old vs new, each with one line on what improved

**🧪 Test material**
1. How does `this` behave differently in an arrow function? Give a case where an arrow function is the *wrong* choice.
2. Rewrite `const name = user && user.profile && user.profile.name` with optional chaining.
3. Difference between `||` and `??` — show an input where they disagree.
4. What does `const [first, ...rest] = arr` give you?
5. **Prove it:** I show you an old-style snippet; you modernise it live in under a minute.

---

## Day 2 — Modules

📄 **[Open this day's assignment page →](day-2/)**




**Read first (1 hr):** JS.info *Modules* + MDN *JS modules*.

**Build (2 hr):** Restructure your apps into real ES modules in `day-2/`.

Suggested shape:
```
day-2/todo/
├── index.html
├── main.js          ← wiring only
├── state.js         ← the data + update functions
├── render.js        ← all DOM output
├── storage.js       ← localStorage helpers
└── utils.js         ← shared small functions
```

**Must have**
- [ ] `<script type="module">` — and a note in `LEARNED.md` on why the page must be served (`npx serve` or Live Server) instead of opened via `file://`
- [ ] Named exports used mostly; **one** default export, with a comment on when each is appropriate
- [ ] No module reaches into another module's internals — everything crosses through exports
- [ ] `state.js` exports functions, not the raw mutable array — the state is not directly reachable from outside
- [ ] Same for the quiz app
- [ ] `day-2/architecture.md`: a diagram (ASCII is fine) of which module imports which, and one paragraph on why this beats one 400-line file

**🧪 Test material**
1. Why does `file://` break ES modules? What does the error look like?
2. Named vs default exports — practical difference, and which is easier to refactor?
3. What does "modules are singletons" mean — if two files import `state.js`, how many copies of the state exist?
4. Are module scripts deferred by default? What does that mean for where you put the tag?
5. **Prove it:** move one function to a different module and update the imports, live, without breaking the app.

---

## Day 3 — Promises, by hand

📄 **[Open this day's assignment page →](day-3/)**




**Read first (1 hr):** JS.info *Callbacks*, *Promise basics*, *Chaining*. **Then watch the event-loop video.**

**Build (2 hr):** In `day-3/`, write promise drills from scratch. **No `fetch` today** — fake the delays with `setTimeout`. Understanding the machine before using it is the whole point.

1. `delay(ms)` — returns a promise resolving after ms. Use it: `delay(1000).then(() => console.log("done"))`
2. `fakeFetchUser(id)` — resolves with a user object after 1s; **rejects** if id < 1
3. Chain three of them so user → posts → comments load in sequence. Log the total time.
4. Now run the same three in parallel with `Promise.all`. Log the time. Explain the difference in a comment.
5. `Promise.allSettled` — with one of them failing. Show what you get back.
6. `Promise.race` — implement a 2-second timeout on a slow operation
7. A `retry(fn, times)` helper that retries a failing promise up to n times
8. Deliberately create an unhandled rejection, see the console error, then fix it
9. Convert one callback-style function to a promise-based one
10. `day-3/order.js` — predict the output order of a mixed `console.log` / `setTimeout` / `Promise.resolve().then()` block, **write your prediction as a comment first**, then run it

**Must have**
- [ ] All 10 drills, each with a comment explaining what it demonstrates
- [ ] Drill 10's prediction written *before* running, and a note on whether you were right
- [ ] Every promise has a `.catch` — no unhandled rejections left
- [ ] `day-3/notes.md`: pending/fulfilled/rejected explained in your own words

**🧪 Test material**
1. What are the three states of a promise? Can it change state twice?
2. Why does `Promise.all` finish faster than three chained `.then`s? Draw the timeline.
3. What is the difference between `Promise.all` and `Promise.allSettled`? When do you want each?
4. Explain the output order in drill 10 — why does the promise callback beat the `setTimeout(0)`?
5. **Prove it:** given a snippet with a missing `return` inside a `.then` chain, find the bug.

---

## Day 4 — `async`/`await` and your first real request

📄 **[Open this day's assignment page →](day-4/)**




**Read first (1 hr):** JS.info *async/await* + *Error handling with promises*.

**Build (2 hr):** Convert every promise drill to `async`/`await`, then make your first real network call.

**Must have**
- [ ] All 10 drills rewritten with `async`/`await` in `day-4/`
- [ ] `try/catch/finally` used properly — `finally` turning off a loading flag
- [ ] A real `fetch` from [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users) — logged, then rendered as a simple list
- [ ] **`response.ok` is checked and a non-2xx throws** — the classic beginner bug is assuming `fetch` rejects on a 404. It does not. Demonstrate this with a deliberate 404 and comment on it.
- [ ] A parallel version with `await Promise.all([...])` and a comment comparing it to sequential awaits
- [ ] One deliberate network failure (turn on DevTools offline mode) handled with a friendly message

**🧪 Test material**
1. Does `fetch` reject on a 404? Prove it. What *does* make it reject?
2. What does `await` actually do to the function it is in — does it block the page?
3. Why must a function be `async` to use `await` inside it? What does an `async` function always return?
4. Two independent requests, awaited one after the other — what is the cost, and how do you fix it?
5. **Prove it:** with DevTools throttled to Slow 3G, show your loading state working.

---

## Day 5 — Random-user cards

📄 **[Open this day's assignment page →](day-5/)**




**Read first (1 hr):** MDN *Using Fetch* + *HTTP status codes*.

**Build (2 hr):** A real app against [randomuser.me](https://randomuser.me/) — fetch users, render them as cards.

**Must have**
- [ ] Fetch 12 users and render them as cards (reuse your Week 2 flex/grid gallery CSS)
- [ ] A **loading skeleton** while fetching — not the word "Loading…", a real shimmer skeleton
- [ ] An **error state** with a Retry button that actually retries
- [ ] An **empty state** for when the API returns nothing
- [ ] "Load more" appends the next 12 without wiping the existing ones
- [ ] A nationality filter that re-fetches with the API's `?nat=` parameter
- [ ] All API code in one `api.js` module — no `fetch` calls scattered through the render code
- [ ] Card data inserted safely (`textContent`, or escaped) — API data is user data
- [ ] No double-fetch when "Load more" is clicked twice quickly (disable the button while in flight)

**🧪 Test material**
1. Walk through the three states your UI can be in and how each is triggered.
2. What happens if a user clicks "Load more" three times fast? How did you handle it?
3. Why keep `fetch` calls in one module?
4. How do query parameters work — and how would you add two of them safely? (`URLSearchParams`.)
5. **Prove it:** DevTools → Network → Offline. Click Retry. Then back online, Retry again. Both paths must work without a refresh.

---

## ✅ End-of-week check

- [ ] `async`/`await` with `try/catch` is your default; you no longer write `.then` chains by habit
- [ ] You always check `response.ok`
- [ ] Every async UI has loading, error and empty states — you build them from the start, not after
- [ ] You know when to parallelise with `Promise.all` and when order matters
- [ ] You can explain the event loop well enough to teach it

**This was the hardest week of Phase 2.** Next week is the reward: building real apps against real APIs.
