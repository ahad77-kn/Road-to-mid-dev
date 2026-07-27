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

| Day | Assignment | Open the assignment | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | DOM playground — select, read, change 20 things | [📄 day-1 →](day-1/) | – |
| [**D2**](day-2/) | Counter app | [📄 day-2 →](day-2/) | – |
| [**D3**](day-3/) | Calculator part 1 — layout & display logic | [📄 day-3 →](day-3/) | – |
| [**D4**](day-4/) | Calculator part 2 — full working calculator | [📄 day-4 →](day-4/) | – |
| [**D5**](day-5/) | To-do list v1 | [📄 day-5 →](day-5/) | – |

---

## Day 1 — DOM playground

📄 **[Open this day's assignment page →](day-1/)**




**Read first (1 hr):** JS.info *Document*, ch. 1–4.

**Build (2 hr):** An HTML page in `day-1/` with a variety of elements (headings, a list, a table, images, buttons, inputs) plus `script.js` that performs 20 documented operations. Number each in a comment.

Required operations include:
- Select by id, by class, by tag, by CSS selector, and select *all* of something
- Change text with `textContent`; change markup with `innerHTML`
- Read and set an attribute (`src`, `href`, `alt`)
- Add, remove and toggle a class with `classList`
- Create a new element and append it
- Insert an element *before* another one
- Remove an element
- Loop over a NodeList and change all of them
- Walk the tree: `parentElement`, `children`, `nextElementSibling`
- Read a `data-` attribute with `dataset`
- Change a CSS custom property from JS

**Must have**
- [ ] 20 numbered, commented operations
- [ ] `day-1/notes.md`: the difference between `textContent`, `innerText` and `innerHTML`, in your own words, with the security note
- [ ] At least one operation uses `querySelectorAll` and iterates it
- [ ] Styling changes made by **toggling a class**, not by writing `element.style.x` — except one deliberate example of each, with a comment on why classes are better
- [ ] `<script>` placed correctly (before `</body>` or with `defer`) — explain why in a comment

**🧪 Test material**
1. What is the difference between an HTMLCollection and a NodeList? Which one is live?
2. `getElementById` vs `querySelector` — when does each make sense?
3. Why is `innerHTML = userInput` dangerous? What should you use instead?
4. What happens if your `<script>` runs before the HTML below it is parsed?
5. **Prove it:** I point at any element on your page; you select it and turn it red, live, in the console, in one line.

---

## Day 2 — Counter app

📄 **[Open this day's assignment page →](day-2/)**




**Read first (1 hr):** JS.info ch. 5–7 — node properties and modifying the document.

**Build (2 hr):** A counter with +, −, reset. Styled properly (you have CSS skills — use them).

**Must have**
- [ ] The number turns red below zero and green above, via a **class**, not inline style
- [ ] A step input: `+` and `−` change by that amount
- [ ] Reset button returns to zero and clears the colour class
- [ ] The count is held in a **single JavaScript variable** — the DOM displays it, it does not store it. This distinction is the whole point of the day.
- [ ] One `render()` function that puts current state on screen; every button handler updates the variable then calls `render()`
- [ ] Buttons are disabled at a max (say 100) and min (−100)

**🧪 Test material**
1. Where does your app's "truth" live — in the variable or in the DOM text? Why does that matter?
2. What would go wrong if you read the number back out of the DOM with `parseInt(el.textContent)` each time?
3. Why is a single `render()` function better than updating the DOM inside each handler?
4. What is the difference between `addEventListener("click", fn)` and `onclick = fn`?
5. **Prove it:** add a "×2" button in under 2 minutes. If your structure is right, it is 3 lines.

> **This `state → render()` pattern is React in miniature.** Get it now and Week 12 will feel like a formality.

---

## Day 3 — Calculator, part 1

📄 **[Open this day's assignment page →](day-3/)**




**Read first (1 hr):** MDN *Introduction to events* + JS.info *Browser events*.

**Build (2 hr):** Build the calculator's **structure and display logic** — no arithmetic yet.

**Must have**
- [ ] A proper calculator layout in CSS Grid — digits, operators, clear, equals
- [ ] A display area showing the current entry and, above it in smaller text, the pending expression
- [ ] Clicking digits appends to the display; the display never shows a leading `0` (except `0.`)
- [ ] Only one decimal point can be entered per number
- [ ] `C` clears everything; `CE` clears only the current entry
- [ ] All button clicks handled by **one** listener on the container, using event delegation + `data-` attributes — not 18 separate listeners
- [ ] Buttons have `:active` and `:hover` styles

**🧪 Test material**
1. What is event delegation, and what two problems does it solve?
2. What does `event.target` hold? How is it different from `event.currentTarget`?
3. Why is `data-value="7"` better than reading the button's text?
4. Explain bubbling — if you click a `<span>` inside a `<button>` inside a `<div>`, which listeners fire and in what order?
5. **Prove it:** add a new button to the HTML only — no JS changes — and show it works.

---

## Day 4 — Calculator, part 2

📄 **[Open this day's assignment page →](day-4/)**




**Read first (1 hr):** JS.info *Bubbling and capturing* + *Event delegation*.

**Build (2 hr):** Make it actually calculate.

**Must have**
- [ ] `+ − × ÷` all work, including chained operations (`5 + 3 × 2 =`) — decide and document whether you do left-to-right or operator precedence
- [ ] Divide by zero shows a clear message, does not print `Infinity`
- [ ] `%` and `+/−` (sign toggle) work
- [ ] Keyboard support: digits, operators, Enter for `=`, Escape for clear, Backspace to delete a digit
- [ ] Results longer than the display are truncated or formatted sensibly — no overflow
- [ ] Floating point handled: `0.1 + 0.2` must not display `0.30000000000000004`. Explain the fix in a comment.
- [ ] The arithmetic lives in pure functions with **no DOM code inside them** — the UI calls them

**🧪 Test material**
1. Why does `0.1 + 0.2 !== 0.3` in JavaScript? How did you handle it?
2. How do you listen for keyboard input, and what is on the `event` object for a key press?
3. Why keep the calculation functions free of DOM code? What does that buy you?
4. What is your app's state — list every variable it needs to remember?
5. **Prove it:** press `5 + 3 × 2 =` and explain, before the result appears, what you will get and why.

---

## Day 5 — To-do list v1

📄 **[Open this day's assignment page →](day-5/)**




**Read first (1 hr):** MDN *DOM manipulation guide*.

**Build (2 hr):** The classic. Add a task, delete it, mark it done, see the remaining count.

**Must have**
- [ ] State is a **single array of task objects** — `{ id, text, done }`. One `render()` draws the whole list from that array.
- [ ] Add via a form with `submit` (not a click handler on a button) — and `event.preventDefault()` with a comment on why
- [ ] Empty or whitespace-only input is rejected with a visible message
- [ ] Delete and toggle-done work via **event delegation** on the list, using `data-id`
- [ ] Done items get a class (strikethrough, faded)
- [ ] A live count: "3 of 7 remaining"
- [ ] "Clear completed" button
- [ ] Task text is inserted with `textContent`, never `innerHTML` — and you can say why in one sentence

**🧪 Test material**
1. Why does the form need `preventDefault()`? What happens without it?
2. Why re-render the whole list from the array instead of just appending one `<li>`? Name one advantage of each approach.
3. How does a click on a delete button know *which* task to delete?
4. Add `<img src=x onerror=alert(1)>` as a task title. What happens with `textContent`? What would have happened with `innerHTML`?
5. **Prove it:** in the console, mutate the state array directly and call `render()`. The screen must match. If it does not, your architecture is wrong.

---

## ✅ End-of-week check

- [ ] You keep app state in JavaScript and treat the DOM as the *output*, never the storage
- [ ] You write one `render()` instead of scattering DOM updates through handlers
- [ ] Event delegation is your default for lists
- [ ] You use `textContent` for user data by reflex, and know exactly why
- [ ] You can build a small interactive app from a blank folder without a tutorial

Next week: forms, validation, and rebuilding this to-do app **from scratch with no reference** — which is the real test of whether this week landed.
