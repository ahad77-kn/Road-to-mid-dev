# Week 13 — Lists, Keys, Conditional Rendering & Controlled Forms

[← The Road](../../README.md) · Phase 4 · React · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 12](../week-12/) · **Next:** [Week 14 — State design →](../week-14/)

> **Goal:** rebuild apps you already know in React, so that "the React way" is the only new variable.

**Why this week matters:** you built the to-do and quiz apps by hand in Weeks 6–7. Rebuilding known apps is the fastest way to isolate what React actually changes. You are not learning the app — you are learning the framework.

---

## 📖 Learning material — 1 hr/day

| Day | Read + type | Source |
| --- | --- | --- |
| D1 | [Rendering lists](https://react.dev/learn/rendering-lists) · [Keeping components pure](https://react.dev/learn/keeping-components-pure) | react.dev |
| D2 | [Updating objects in state](https://react.dev/learn/updating-objects-in-state) · [Updating arrays in state](https://react.dev/learn/updating-arrays-in-state) | react.dev |
| D3 | [Reacting to input with state](https://react.dev/learn/reacting-to-input-with-state) · [Choosing the state structure](https://react.dev/learn/choosing-the-state-structure) | react.dev |
| D4 | [Sharing state between components](https://react.dev/learn/sharing-state-between-components) | react.dev |
| D5 | [Preserving and resetting state](https://react.dev/learn/preserving-and-resetting-state) | react.dev |

### 📰 Articles worth your time this week
- [react.dev: You might not need an effect](https://react.dev/learn/you-might-not-need-an-effect) — read it **now**, before Week 15, so you never write the bad version
- [Why keys matter, with the index-key bug demonstrated](https://react.dev/learn/rendering-lists#why-does-react-need-keys)
- [MDN: Controlled vs uncontrolled form fields](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) + [react.dev on controlled inputs](https://react.dev/reference/react-dom/components/input)

---

## 🗓️ The week at a glance

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Lists & keys — including the index-key bug, proved | [`day-1/`](day-1/) | – |
| D2 | Immutable state updates — arrays and objects | [`day-2/`](day-2/) | – |
| D3 | To-do app in React | [`day-3/`](day-3/) | – |
| D4 | Controlled forms — the signup form in React | [`day-4/`](day-4/) | – |
| D5 | Quiz app in React | [`day-5/`](day-5/) | – |

---

## Day 1 — Lists & keys

**Read first (1 hr):** react.dev *Rendering lists* + *Keeping components pure*.

**Build (2 hr):** A "student directory" in `day-1/` — a list of 15 students with filtering and sorting.

**Must have**
- [ ] Rendered with `.map`, each item its own component
- [ ] Sort by name / marks, filter by class, search by name — all working together
- [ ] **The index-key bug, demonstrated:** use `key={index}`, add an input to each row, type in one, then delete a row above it. Screenshot the wrong values. Then fix it with `key={student.id}` and screenshot the correct behaviour. This must be in `day-1/keys.md` with your explanation.
- [ ] An empty state when filters match nothing
- [ ] A count of visible vs total
- [ ] No mutation of the source array anywhere — `sort()` must be on a copy (this catches almost everyone)

**🧪 Test material**
1. What does React use `key` for? Why not just the position?
2. Exactly what went wrong in your index-key demo? Explain what React did.
3. When is `key={index}` acceptable?
4. Why does `array.sort()` inside a render cause a bug? What is the fix?
5. **Prove it:** show me the broken version and the fixed version, and explain the difference in React's behaviour, not just the symptom.

---

## Day 2 — Immutable updates

**Read first (1 hr):** react.dev *Updating objects in state* + *Updating arrays in state*.

**Build (2 hr):** A "team manager" in `day-2/` that exercises every kind of update.

**Must have**
- [ ] State is an array of member objects with a nested `address` object and a `skills` array
- [ ] Implemented, all immutably: add a member, remove by id, update one field, toggle a boolean, update a **nested** field, add to a nested array, remove from a nested array, reorder members
- [ ] Not a single `push`, `splice`, `sort` on state, or direct property assignment. Not one.
- [ ] A deliberate mutation bug demonstrated first (mutate, then `setState` with the same reference; the UI does not update), then fixed. Documented in `day-2/mutation.md` with *why* React did not re-render.
- [ ] `day-2/mutation.md` also lists the immutable equivalent for `push`, `pop`, `splice`, `sort`, `reverse`

**🧪 Test material**
1. Why does React not re-render when you mutate state directly?
2. Rewrite `arr.push(x)`, `arr.splice(i,1)` and `arr.sort()` immutably. From memory.
3. How do you update `state.user.address.city` without mutating?
4. Is `{...obj}` deep or shallow? Where does that bite you here?
5. **Prove it:** I name a nested update; you write it immutably in under 2 minutes.

---

## Day 3 — To-do in React

**Read first (1 hr):** react.dev *Reacting to input with state* + *Choosing the state structure*.

**Build (2 hr):** The Week 7 to-do app, in React, feature for feature.

**Must have**
- [ ] Add, delete, toggle done, edit in place, filter (All/Active/Done), clear completed, live count
- [ ] Components: `App`, `TodoForm`, `TodoList`, `TodoItem`, `TodoFilters`, `TodoStats`
- [ ] All state in `App`, passed down as props; children call handler props
- [ ] The filter is **derived** at render time — not stored as a second array in state. This is the day's real lesson.
- [ ] Persisted to localStorage (a plain effect is fine here; you will refine it in Week 15)
- [ ] `day-3/comparison.md`: your vanilla-JS to-do vs this one. Line count, what disappeared, what appeared, and which you would rather maintain.

**🧪 Test material**
1. What is derived state, and why is storing the filtered list separately a bug waiting to happen?
2. Where did your `render()` function go?
3. How does a child tell the parent something happened?
4. Name three things React removed compared with your vanilla version. Name one thing it made harder.
5. **Prove it:** add a "due date" field to every todo. If your state structure is good, it is a small change.

---

## Day 4 — Controlled forms

**Read first (1 hr):** react.dev *Sharing state between components*.

**Build (2 hr):** The Week 7 signup form, in React, with the same validation rules.

**Must have**
- [ ] Every input controlled — `value` + `onChange`, state as the single source of truth
- [ ] **One** state object for all fields, with a single generic `handleChange` using `event.target.name` — not six `useState` calls with six handlers
- [ ] A separate `errors` object and a `touched` object; errors show only after blur
- [ ] Validation rules in a config object, reused for both the live check and the submit check
- [ ] Submit disabled while invalid or while "submitting"; a fake 1.5s submit with a loading state
- [ ] A password strength meter
- [ ] A `<FormField>` component reused for every text input
- [ ] `day-4/controlled.md`: controlled vs uncontrolled inputs — what each means and when uncontrolled is legitimate

**🧪 Test material**
1. What makes an input "controlled"? What happens if you set `value` but forget `onChange`?
2. Why one state object rather than six `useState` calls here? When would six be better?
3. What is the `touched` object for — what UX problem does it solve?
4. How does `event.target.name` let one handler serve every field?
5. **Prove it:** add a "date of birth" field. It should take under 5 minutes if your form is built right.

---

## Day 5 — Quiz in React

**Read first (1 hr):** react.dev *Preserving and resetting state*.

**Build (2 hr):** The Week 7 quiz app, in React, with everything it had plus a review screen.

**Must have**
- [ ] Questions from data; one at a time; progress bar; Previous/Next with answers remembered
- [ ] A per-question timer with `useEffect` cleanup that does **not** leak (this is the day's trap — an uncleaned interval will fire after the component unmounts)
- [ ] Score screen with per-question review and explanations
- [ ] "Try again" fully resets — including the timer and shuffle
- [ ] A `key` on the question component used deliberately to **reset** child state between questions. Explain in `day-5/reset.md` why that works.
- [ ] Shuffle happens once per run, not on every render (note *why* that is a problem, and how you avoided it)

**🧪 Test material**
1. How does changing a component's `key` reset its state? Why is that useful here?
2. What does the cleanup function returned from `useEffect` do, and what breaks without it?
3. Why does shuffling inside the render body cause a bug?
4. Where does the timer state live, and why there?
5. **Prove it:** open React DevTools, move through 3 questions, and show me the state changing at each step.

---

## ✅ End-of-week check

- [ ] You never mutate state; the immutable form is the one that comes out of your fingers
- [ ] You use stable ids as keys and can explain the index-key bug
- [ ] You derive values at render instead of storing them
- [ ] Controlled forms are routine
- [ ] You clean up every effect that starts something

Next week: how to structure state when the app gets big enough that `useState` calls start multiplying.
