# Week 07 — Events, Forms & Real Interactive Apps

[← The Road](../../README.md) · Phase 2 · JavaScript, Seriously · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 06](../week-06/) · **Next:** [Week 08 — Modern JS & async →](../week-08/)

> **Goal:** build a real app from an empty folder, without a tutorial open, and have it survive a user actively trying to break it.

**Why this week matters:** anyone can follow a to-do tutorial. This week's first assignment is rebuilding Friday's to-do app from a blank folder with **no reference** — that is the difference between having watched and having learned. The rest of the week is forms and validation, which is what 70% of real business software actually is.

---

## 📖 Learning material — 1 hr/day

| Day | Read | Source |
| --- | --- | --- |
| D1 | Nothing new — rebuild day. Re-read your own Week 6 notes only. | — |
| D2 | [MDN: Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) · [MDN: Web forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms) | MDN |
| D3 | [JavaScript.info: Forms & form events](https://javascript.info/forms-controls) · [Events: change, input, cut/copy/paste](https://javascript.info/events-change-input) | JS.info |
| D4 | [MDN: Regular expressions guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) — the basics only | MDN |
| D5 | [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) · [JavaScript.info: LocalStorage](https://javascript.info/localstorage) | MDN / JS.info |

### 📰 Articles worth your time this week
- [MDN: Constraint validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) — the browser already validates; use it before writing your own
- [regex101.com](https://regex101.com/) — build and *explain* a regex; the right pane teaches you as you type
- [web.dev: Sign-in form best practices](https://web.dev/articles/sign-in-form-best-practices) — everything wrong with most login forms
- [MDN: `debounce` pattern](https://developer.mozilla.org/en-US/docs/Glossary/Debounce) — you need it Thursday

---

## 🗓️ The week at a glance

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | To-do list **rebuilt from scratch, no reference** | [`day-1/`](day-1/) | – |
| D2 | Signup form with live inline validation | [`day-2/`](day-2/) | – |
| D3 | Quiz app | [`day-3/`](day-3/) | – |
| D4 | Image slider / carousel, no library | [`day-4/`](day-4/) | – |
| D5 | Add localStorage to all three apps | [`day-5/`](day-5/) | – |

---

## Day 1 — Rebuild the to-do, blind

**Read first:** nothing. **Close Week 6's folder. Do not open it.** You may read your own `LEARNED.md` notes, nothing else.

**Build (3 hr):** The whole to-do app again, from an empty `day-1/` folder — plus three features it did not have:
- Edit a task (double-click the text, it becomes an input)
- Filter: All / Active / Done
- Drag-free reordering with ↑/↓ buttons

**Must have**
- [ ] Written without opening Week 6's code — declare this honestly in `LEARNED.md`
- [ ] Single state array, single `render()`
- [ ] All three new features working
- [ ] `day-1/rebuild-notes.md`: what you forgot and had to look up, and what came out automatically
- [ ] After finishing, diff it mentally against Week 6 — one paragraph on what you did better this time

**Struggling is the point.** If you get stuck for 20 minutes, look up the *specific* API on MDN — not the whole app in a tutorial. Note every lookup in `rebuild-notes.md`; that list is your real syllabus.

**🧪 Test material**
1. What did you have to look up? Why do you think that particular thing did not stick?
2. Walk through your render function — what happens to the DOM on every keystroke of an edit?
3. How does your filter work — do you filter the array, or hide elements with CSS? Trade-offs of each?
4. Where does the edit-in-place input's value go when it loses focus?
5. **Prove it:** add a fourth feature I name on the spot, in under 15 minutes.

---

## Day 2 — Signup form, live validation

**Read first (1 hr):** MDN *Client-side form validation* + *Web forms*.

**Build (2 hr):** Take Week 1 Day 5's signup form and make it live.

**Must have**
- [ ] Fields: name, email, password, confirm password, phone, terms checkbox
- [ ] Validation runs on `blur` (leaving the field) **and** re-validates on `input` once a field has already errored — so errors clear as you fix them, but do not appear while first typing
- [ ] Rules: name ≥ 3 chars; valid email; password ≥ 8 chars with a number and a letter; passwords match; phone is 11 digits; terms checked
- [ ] Each error shows under its field, in red, with `aria-invalid` and `aria-describedby` wired up
- [ ] A live password-strength meter (weak/medium/strong)
- [ ] Submit is disabled until every field is valid
- [ ] On successful submit: `preventDefault`, log the collected data as an object, show a success message
- [ ] Validation rules live in a config object/array — not 6 copies of the same `if` block

**🧪 Test material**
1. Difference between the `input`, `change`, `blur` and `focus` events?
2. Why validate on blur rather than on every keystroke from the start?
3. What does `preventDefault()` do on a form submit? What is the browser's default here?
4. Is client-side validation security? Explain your answer in one sentence. (This matters in Week 21.)
5. **Prove it:** disable JavaScript in DevTools and submit the form. What happens? What *should* happen on a real site?

---

## Day 3 — Quiz app

**Read first (1 hr):** JS.info *Forms & form events* + *change/input events*.

**Build (2 hr):** A working quiz with questions from an array of objects.

**Must have**
- [ ] At least 10 questions in an array: `{ id, question, options: [], correctIndex, explanation }`
- [ ] One question on screen at a time, with a progress indicator ("Question 3 of 10")
- [ ] Selecting an answer highlights it; you can change it before confirming
- [ ] Next/Previous navigation with answers remembered
- [ ] A 20-second-per-question timer that auto-advances when it runs out
- [ ] Final score screen: score, percentage, which ones you got wrong, and the explanation for each
- [ ] "Try again" resets everything cleanly, including the timer
- [ ] Questions shuffled on each run (write your own shuffle, then read about Fisher–Yates)

**🧪 Test material**
1. Where is the user's state — how do you remember answers across navigation?
2. How do `setTimeout` and `setInterval` differ? What does `clearInterval` prevent, and what bug appears if you forget it?
3. Why must you clear the timer when the user clicks Next early?
4. How would you add a "review your answers" screen without restructuring everything?
5. **Prove it:** rapidly click Next 5 times. Does the timer break? Does the score break? Show me.

---

## Day 4 — Carousel, from nothing

**Read first (1 hr):** MDN *Regular expressions* (Thursday's warm-up reading; the carousel uses none, but you need regex before Week 9).

**Build (2 hr):** An image slider/carousel with **no library**.

**Must have**
- [ ] Next / Previous buttons that wrap around at both ends
- [ ] Dot indicators — clickable, and the active one is styled
- [ ] Auto-play every 4 seconds, **pausing on hover** and on focus
- [ ] Keyboard: left/right arrows move the slides when the carousel has focus
- [ ] Smooth CSS `transform` transition — not `left`/`margin` animation
- [ ] Touch swipe on mobile (`touchstart`/`touchend`, compare X positions)
- [ ] Handles any number of slides — hard-coding "5" anywhere is a fail
- [ ] Images lazy-loaded (`loading="lazy"`) with `alt` text

**🧪 Test material**
1. How do you make index wrap-around work with the modulo operator? Write it.
2. Why animate `transform: translateX()` instead of `left`?
3. What happens if auto-play fires while the user is mid-swipe? How did you prevent it?
4. How would you make this reusable for two carousels on the same page?
5. **Prove it:** add three more images to the HTML only. It must still work perfectly.

---

## Day 5 — Make it all survive a refresh

**Read first (1 hr):** MDN *Web Storage API* + JS.info *LocalStorage*.

**Build (2 hr):** Add persistence to the to-do, the quiz and the signup form.

**Must have**
- [ ] To-do: tasks survive a refresh; filter choice is remembered too
- [ ] Quiz: high scores saved as an array of `{ score, date }` and shown as a leaderboard (top 5)
- [ ] Signup form: draft values saved as you type so a refresh does not lose them — but the **password is never saved** (explain why in a comment)
- [ ] A "clear all data" button with a confirmation step
- [ ] All read/write goes through two small helpers — `saveState(key, value)` and `loadState(key, fallback)` — with `try/catch` around `JSON.parse`
- [ ] Handles the case where stored data is corrupt or from an older version of your app, without crashing

**🧪 Test material**
1. `localStorage` vs `sessionStorage` vs cookies — what is each for, and what is the size limit?
2. What type can localStorage store? Why is `JSON.stringify` needed?
3. Why wrap `JSON.parse` in `try/catch`?
4. Why must a password never go in localStorage? (Say "any JavaScript on the page can read it" and explain what that means.)
5. **Prove it:** manually corrupt the stored JSON in DevTools → Application → Local Storage, then refresh. The app must not white-screen.

---

## ✅ End-of-week check

- [ ] You can build an interactive app from an empty folder, no tutorial
- [ ] Forms, validation and error messaging are routine
- [ ] You know which event to reach for without guessing
- [ ] You persist state safely and defensively
- [ ] You have four working apps in your portfolio, all built by hand

Next week the data stops being hard-coded and starts coming from the internet — which means waiting, failing, and handling both.
