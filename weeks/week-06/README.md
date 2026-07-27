# Week 06 — The DOM: JavaScript Meets the Page

[← The Road](../../README.md) · Phase 2 · JavaScript, Seriously · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 05](../week-05/) · **Next:** [Week 07 — Events & forms →](../week-07/)

> **Goal:** connect your JavaScript logic to your HTML/CSS skills. From this week on, every assignment is a visible, clickable app.

**Why this week matters:** this is the payoff week. Weeks 1–3 gave you the page, Weeks 4–5 gave you the logic, and the DOM is the bridge. Everything React does later, it does *on top of* what you learn here — and you cannot debug React without understanding this layer.

**The mental model to hold all week:** the HTML file is not the page. The browser reads the HTML once, builds a live tree of objects from it — the DOM — and paints *that*. Your JavaScript changes the tree, and the browser repaints. The file on disk never changes.

---

## 📖 Learning material — 1 hr/day

| Day | Read + type | Source |
| --- | --- | --- |
| D1 | [JavaScript.info: Document — DOM tree, walking, searching](https://javascript.info/document) (ch. 1–4) | JS.info |
| D2 | [ch. 5–7](https://javascript.info/basic-dom-node-properties) — node properties, attributes, modifying the document | JS.info |
| D3 | [MDN: Introduction to events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events) · [JavaScript.info: Browser events](https://javascript.info/introduction-browser-events) | MDN / JS.info |
| D4 | [JavaScript.info: Bubbling and capturing](https://javascript.info/bubbling-and-capturing) · [Event delegation](https://javascript.info/event-delegation) | JS.info |
| D5 | [MDN: DOM manipulation guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) | MDN |

### 📰 Articles worth your time this week
- [MDN: `innerHTML` vs `textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) — and [why `innerHTML` with user input is an XSS bug](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [MDN: `classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) — change classes, not inline styles
- [MDN: `dataset` / data attributes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes) — how a DOM element remembers which item it is
- [JavaScript.info: DocumentFragment & reflow](https://javascript.info/modifying-document#document-fragment) — why appending in a loop is slow

---

## 🗓️ The week at a glance

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | DOM playground — select, read, change 20 things | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | Counter app | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | Calculator part 1 — layout & display logic | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | Calculator part 2 — full working calculator | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | To-do list v1 | [📄 open →](day-5/) | – |

---

## ✅ End-of-week check

- [ ] You keep app state in JavaScript and treat the DOM as the *output*, never the storage
- [ ] You write one `render()` instead of scattering DOM updates through handlers
- [ ] Event delegation is your default for lists
- [ ] You use `textContent` for user data by reflex, and know exactly why
- [ ] You can build a small interactive app from a blank folder without a tutorial

Next week: forms, validation, and rebuilding this to-do app **from scratch with no reference** — which is the real test of whether this week landed.
