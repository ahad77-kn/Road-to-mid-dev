# Week 14 — State Design: Lifting State & `useReducer`

[← The Road](../../README.md) · Phase 4 · React · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 13](../week-13/) · **Next:** [Week 15 — Effects & data fetching →](../week-15/)

> **Goal:** design state before writing components. Most React bugs are state-shape bugs wearing a costume.

**Why this week matters:** anyone can call `useState`. What separates a junior from a mid-level React developer is knowing *what* to put in state, *where* it should live, and what should be derived instead. Get this wrong and every feature after it fights you. One multi-component app, built properly, all week.

**The four questions to ask before every `useState`:**
1. Does this change over time? (No → it is a constant, not state.)
2. Can I calculate it from other state? (Yes → derive it, do not store it.)
3. Does it come from props unchanged? (Yes → do not copy it into state.)
4. Which components need it? (State goes in their closest common parent — and no higher.)

---

## 📖 Learning material — 1 hr/day

| Day | Read + type | Source |
| --- | --- | --- |
| D1 | [Choosing the state structure](https://react.dev/learn/choosing-the-state-structure) — the most useful page on the site | react.dev |
| D2 | [Sharing state between components](https://react.dev/learn/sharing-state-between-components) · [Thinking in React](https://react.dev/learn/thinking-in-react) | react.dev |
| D3 | [Extracting state logic into a reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer) | react.dev |
| D4 | [`useReducer` reference](https://react.dev/reference/react/useReducer) · [`useState` vs `useReducer`](https://react.dev/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer) | react.dev |
| D5 | [Preserving and resetting state](https://react.dev/learn/preserving-and-resetting-state) · [`useMemo`](https://react.dev/reference/react/useMemo) | react.dev |

### 📰 Articles worth your time this week
- [Kent C. Dodds: Application state management with React](https://kentcdodds.com/blog/application-state-management-with-react) — why you probably do not need Redux
- [Kent C. Dodds: State colocation](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster) — put state as low as it can go
- [react.dev: Passing data deeply with context](https://react.dev/learn/passing-data-deeply-with-context) — preview for Week 16

---

## 🗓️ The week at a glance

| Day | Assignment | Open the assignment | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Design the expense tracker on paper, then build the form | [📄 day-1 →](day-1/) | – |
| [**D2**](day-2/) | List, total & lifted state | [📄 day-2 →](day-2/) | – |
| [**D3**](day-3/) | Filters, sorting & derived values | [📄 day-3 →](day-3/) | – |
| [**D4**](day-4/) | Refactor the whole thing to `useReducer` | [📄 day-4 →](day-4/) | – |
| [**D5**](day-5/) | Charts, edit mode & polish | [📄 day-5 →](day-5/) | – |

---

## Day 1 — Design first, then the form

📄 **[Open this day's assignment page →](day-1/)**




**Read first (1 hr):** react.dev *Choosing the state structure*.

**Build (2 hr):** Start the **expense tracker** — the week's single project.

**Before any code**, write `day-1/DESIGN.md`:
- The full component tree, drawn
- Every piece of state, and which component owns it
- Every piece of **derived** data (total, filtered list, category breakdown) with a note that it is calculated, not stored
- The exact shape of one expense object

Then build the add-expense form: description, amount, category (select), date, and an optional note.

**Must have**
- [ ] `DESIGN.md` written and committed **before** the component files (check the commit order — the teacher will)
- [ ] Controlled form, one state object, one `handleChange`
- [ ] Validation: description required, amount must be a positive number, date not in the future
- [ ] Submit adds to a list held in the parent and clears the form
- [ ] Amount stored as a **number**, not a string — convert at the boundary and say why in a comment
- [ ] Every expense gets a unique id (`crypto.randomUUID()`)

**🧪 Test material**
1. Walk me through DESIGN.md. Which decisions changed once you started coding?
2. Which values did you decide *not* to put in state, and why?
3. Why store the amount as a number rather than a string?
4. Where does the form's own state live, and why not in `App`?
5. **Prove it:** point at any state variable and justify its location in one sentence.

---

## Day 2 — List, total, lifted state

📄 **[Open this day's assignment page →](day-2/)**




**Read first (1 hr):** react.dev *Sharing state between components* + *Thinking in React*.

**Build (2 hr):** Add the list, the total, and per-category summaries.

**Must have**
- [ ] `ExpenseList` → `ExpenseItem` components; delete works
- [ ] A total that is **calculated during render** — a stored `total` state variable is an automatic fail this week
- [ ] A summary strip: total, this month's total, average, count, biggest single expense — all derived
- [ ] Category breakdown with percentages
- [ ] Currency formatted with `Intl.NumberFormat` (PKR), dates with `Intl.DateTimeFormat`
- [ ] `day-2/derived.md`: list every derived value and write what bug would appear if you stored it in state instead

**🧪 Test material**
1. Why is a stored total a bug waiting to happen? Describe the exact failure.
2. What does "lifting state up" mean — what problem did it solve here?
3. What is `Intl.NumberFormat` and why is it better than `"Rs " + amount.toFixed(2)`?
4. Is your total recalculated on every render? Is that a problem? How would you know?
5. **Prove it:** add a "total this week" figure. It must be one line of derived code.

---

## Day 3 — Filters, sorting, search

📄 **[Open this day's assignment page →](day-3/)**




**Read first (1 hr):** react.dev *Extracting state logic into a reducer* (read it today, apply it tomorrow).

**Build (2 hr):** Make the tracker genuinely usable.

**Must have**
- [ ] Filter by category (multi-select), by date range, and by a min/max amount
- [ ] Search by description, debounced
- [ ] Sort by date / amount / description, ascending and descending
- [ ] All filters compose — they work together, not one at a time
- [ ] The filtered+sorted list is derived in one place, in the right order (filter → search → sort)
- [ ] A "clear all filters" button and a count: "showing 8 of 34"
- [ ] Notice how many `useState` calls you now have. Count them in `day-3/state-count.md` — that number is the argument for tomorrow.

**🧪 Test material**
1. How many `useState` calls are in `App` now? Which ones always change together?
2. Why must filter/sort be derived rather than stored?
3. What order do you apply filter, search and sort — does it matter for correctness? For performance?
4. Where does the debounce live, and why there?
5. **Prove it:** apply three filters at once and show the count is right.

---

## Day 4 — `useReducer`

📄 **[Open this day's assignment page →](day-4/)**




**Read first (1 hr):** react.dev *`useReducer` reference* + *`useState` vs `useReducer`*.

**Build (2 hr):** Refactor everything to a reducer. **No new features today** — a pure refactor, which is a skill in itself.

**Must have**
- [ ] One `expensesReducer` handling: `ADD`, `DELETE`, `UPDATE`, `CLEAR_ALL`, `IMPORT`
- [ ] One `filtersReducer` (or a combined one) handling all filter actions plus `RESET_FILTERS`
- [ ] Action objects with `{ type, payload }`; the reducer is a pure function with **no side effects** in it
- [ ] `default:` case throws on an unknown action type — explain why that is better than silently returning state
- [ ] The reducer lives in its own file and could be tested without React at all
- [ ] `day-4/reducer.md`: `useState` vs `useReducer` — your own rule for when to reach for each, and what got better/worse in this refactor
- [ ] The app behaves **identically** to Day 3 — prove it with before/after screenshots

**🧪 Test material**
1. What is a reducer, mathematically? (state, action) → ?
2. Why must a reducer be pure? What breaks in React Strict Mode if it is not?
3. When is `useReducer` worth it over `useState`?
4. How would you unit-test your reducer with no browser involved?
5. **Prove it:** add an `UNDO_DELETE` action. With a reducer this should be straightforward — do it live.

---

## Day 5 — Polish

📄 **[Open this day's assignment page →](day-5/)**




**Read first (1 hr):** react.dev *Preserving and resetting state* + *`useMemo`*.

**Build (2 hr):** Finish the tracker.

**Must have**
- [ ] Edit an existing expense — the form fills with its values and switches to "update" mode
- [ ] The form resets cleanly between edit and add (use a `key` to force a reset and explain why)
- [ ] A simple bar chart of spend per category — **CSS only**, no chart library
- [ ] Monthly view: group by month with subtotals
- [ ] Export to JSON and import back
- [ ] Empty state, loading skeletons, and a confirm step before deletion
- [ ] `useMemo` applied to **one** expensive derived value — and `day-5/memo.md` explaining how you measured that it was actually needed. "It felt slow" is not a measurement; use the React DevTools Profiler.

**🧪 Test material**
1. When does `useMemo` help and when is it just noise?
2. How did you *measure* that the memo was needed?
3. How does changing `key` on the form reset it, and why is that better than manually clearing every field?
4. What is the most complex piece of derived data in your app? Walk me through it.
5. **Prove it:** open the Profiler, record an interaction, and show me which components re-rendered and why.

---

## ✅ End-of-week check

- [ ] You design state before writing components
- [ ] You derive rather than store, by default
- [ ] You know when `useReducer` earns its complexity
- [ ] You can justify the location of every piece of state in your app
- [ ] You measure before optimising

Next week the data stops being local and starts coming from a server — with all the waiting and failing that implies.
