# Week 12 — React Basics: Components, JSX, Props & State

[← The Road](../../README.md) · Phase 4 · React · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 11](../week-11/) · **Next:** [Week 13 — Lists & forms →](../week-13/)

> **Goal:** think in components. Stop asking "how do I change this element?" and start asking "what data does this piece of UI need?"

**Why this week matters:** React is the most-demanded frontend skill in job listings, in Pakistan and remote. But the reason we did Week 6 by hand first is that React is *not magic* — it is the `state → render()` pattern you already built, with the DOM updates automated. This week you will recognise most of it.

**The one sentence that explains React:** your UI is a function of your state. Change the state, React works out the minimum DOM changes needed, and does them. You never touch the DOM again.

---

## 📖 Learning material — 1 hr/day

| Day | Read + type | Source |
| --- | --- | --- |
| D1 | [Vite guide: getting started](https://vite.dev/guide/) · [react.dev: Quick start](https://react.dev/learn) | Vite / react.dev |
| D2 | [Your first component](https://react.dev/learn/your-first-component) · [Importing & exporting](https://react.dev/learn/importing-and-exporting-components) · [Writing markup with JSX](https://react.dev/learn/writing-markup-with-jsx) | react.dev |
| D3 | [Passing props to a component](https://react.dev/learn/passing-props-to-a-component) · [JavaScript in JSX](https://react.dev/learn/javascript-in-jsx-with-curly-braces) | react.dev |
| D4 | [Responding to events](https://react.dev/learn/responding-to-events) · [State: a component's memory](https://react.dev/learn/state-a-components-memory) | react.dev |
| D5 | [Render and commit](https://react.dev/learn/render-and-commit) · [State as a snapshot](https://react.dev/learn/state-as-a-snapshot) · [Conditional rendering](https://react.dev/learn/conditional-rendering) | react.dev |

### 📰 Articles worth your time this week
- [react.dev: Thinking in React](https://react.dev/learn/thinking-in-react) — read it on Day 1 and again on Day 5; it means something different each time
- [react.dev: Keeping components pure](https://react.dev/learn/keeping-components-pure)
- [react.dev: Queueing a series of state updates](https://react.dev/learn/queueing-a-series-of-state-updates) — the answer to "why is my state one step behind?"
- Install [React DevTools](https://react.dev/learn/react-developer-tools) today. Use it every day from now on.

**Setup for the whole phase:**
```bash
npm create vite@latest my-app -- --template react
cd my-app && npm install && npm run dev
```

---

## 🗓️ The week at a glance

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Vite setup + JSX drills | [`day-1/`](day-1/) | – |
| D2 | Split a page into components | [`day-2/`](day-2/) | – |
| D3 | Profile card reused 5× with different props | [`day-3/`](day-3/) | – |
| D4 | Counter in React — `useState` and events | [`day-4/`](day-4/) | – |
| D5 | FAQ accordion — conditional rendering | [`day-5/`](day-5/) | – |

---

## Day 1 — Setup & JSX

**Read first (1 hr):** Vite guide + react.dev *Quick start*.

**Build (2 hr):** A Vite React project in `day-1/`, then 10 JSX drills in one page.

**Must have**
- [ ] Project runs with `npm run dev`; you can explain what `main.jsx`, `App.jsx` and `index.html` each do
- [ ] `day-1/jsx-notes.md`: the 6 rules of JSX (single root, `className`, closed tags, camelCase attributes, `{}` for expressions, no `if` statements inside JSX) — each with your own example
- [ ] 10 drills rendering: a variable, an expression, a conditional with `&&`, a ternary, a list with `.map`, an inline style object, an image with an imported asset, a fragment `<>`, a nested component, and a comment inside JSX
- [ ] One deliberate error of each kind, screenshotted with the error message and your explanation: missing key, unclosed tag, `class` instead of `className`, object rendered directly
- [ ] React DevTools installed; screenshot the component tree

**🧪 Test material**
1. What is JSX really — what does the browser receive?
2. Why `className` and not `class`?
3. Why must a component return a single root element, and what does `<>` solve?
4. What happens if you render `{someObject}` directly? What is the error?
5. **Prove it:** write a component that renders a name in uppercase only if it is longer than 5 characters — in JSX, no helper function.

---

## Day 2 — Components

**Read first (1 hr):** react.dev *Your first component*, *Importing and exporting*, *Writing markup with JSX*.

**Build (2 hr):** Rebuild your Week 3 portfolio page as React components in `day-2/`.

**Must have**
- [ ] At least 8 components, one per file, in `src/components/`
- [ ] Sensible split: `Header`, `Nav`, `Hero`, `About`, `SkillList`, `SkillBadge`, `ProjectCard`, `Footer`
- [ ] Every component name is PascalCase and its file matches
- [ ] No component longer than 60 lines
- [ ] CSS handled with CSS Modules (`Component.module.css`) — explain in a comment what problem that solves
- [ ] `day-2/component-tree.md`: a diagram of your component tree and one paragraph on *why* you drew the boundaries where you did

**🧪 Test material**
1. When should something become its own component? Give your rule.
2. Where is the line between "too many small components" and "one giant one"?
3. What is the difference between a component and a regular function?
4. What problem do CSS Modules solve that a plain `.css` import does not?
5. **Prove it:** I point at a section of your page; you tell me which component renders it, without looking at the code.

---

## Day 3 — Props

**Read first (1 hr):** react.dev *Passing props* + *JavaScript in JSX*.

**Build (2 hr):** One `ProfileCard` component, rendered 5 times with completely different data.

**Must have**
- [ ] `ProfileCard` takes props: `name`, `role`, `avatar`, `bio`, `skills` (array), `social` (object), `isAvailable` (boolean)
- [ ] Props destructured in the parameter list
- [ ] Default props via default parameter values
- [ ] Conditional rendering based on `isAvailable` — an "Available for work" badge
- [ ] The `skills` array rendered with `.map` and proper `key`s
- [ ] A `children` prop used somewhere — a `<Card>` wrapper that renders whatever is inside it
- [ ] One component that takes a **function** as a prop (`onContactClick`) and calls it
- [ ] Data lives in a `profiles.js` array; the page maps over it — **zero** hard-coded cards in the JSX
- [ ] `day-3/props.md`: why props are read-only, and what happens if you try to modify one

**🧪 Test material**
1. Are props mutable? What happens if you assign to one?
2. What is `children` and when is it better than a named prop?
3. How do you pass a function down, and why would you?
4. What is prop drilling? Show where it would start to hurt in your own code.
5. **Prove it:** add a 6th profile by editing only the data file.

---

## Day 4 — State & events

**Read first (1 hr):** react.dev *Responding to events* + *State: a component's memory*.

**Build (2 hr):** The Week 6 counter, in React — then compare the two.

**Must have**
- [ ] Counter with +, −, reset, and a step input, all via `useState`
- [ ] Colour class changes below/above zero
- [ ] Buttons disabled at min/max
- [ ] The **functional update form** `setCount(c => c + 1)` used, with a comment on why it is safer than `setCount(count + 1)`
- [ ] A deliberate demonstration of the stale-state trap: call `setCount(count + 1)` three times in one handler, show it only increments by 1, then fix it with the functional form and explain
- [ ] A second independent counter on the same page — proving state is per-instance
- [ ] `day-4/vanilla-vs-react.md`: your Week 6 counter and this one side by side. What did React remove? What did it add? Where is the `render()` function now?

**🧪 Test material**
1. Why can you not just write `count = count + 1`?
2. What does "state is a snapshot" mean? Explain your three-increments demo.
3. When is `setCount(c => c + 1)` required rather than optional?
4. Two `<Counter />` components on one page — do they share state? Why not?
5. **Prove it:** predict the output of a handler I write that calls `setState` twice, before running it.

---

## Day 5 — FAQ accordion

**Read first (1 hr):** react.dev *Render and commit*, *State as a snapshot*, *Conditional rendering*.

**Build (2 hr):** A FAQ accordion — click a question, its answer expands.

**Must have**
- [ ] Questions come from a data array, not hard-coded JSX
- [ ] Only **one** panel open at a time — held as `openId` in the parent, not as a boolean inside each item. This choice is the lesson of the day.
- [ ] A smooth CSS height/opacity transition
- [ ] Correct accessibility: `<button>` for the trigger, `aria-expanded`, `aria-controls`, keyboard operable
- [ ] A "close all" / "open all" control — which forces you to think about where the state lives
- [ ] A search box filtering the questions live
- [ ] `day-5/state-location.md`: why `openId` is in the parent. What would break if each `FaqItem` held its own `isOpen`?

**🧪 Test material**
1. Where does state belong when two siblings must coordinate?
2. What would break with a boolean inside each item?
3. What is conditional rendering, and what are your three ways of doing it (`&&`, ternary, early return)?
4. Why is `key` needed on the mapped list, and what breaks if you use the array index while filtering?
5. **Prove it:** change it to allow multiple panels open at once. If your state is designed well this is a small change — show me.

---

## ✅ End-of-week check

- [ ] You can create a Vite React project and be productive in 5 minutes
- [ ] You split UI into components without being told where to cut
- [ ] Props and state are clearly different things in your head
- [ ] You use the functional update form when the new state depends on the old
- [ ] You can say where a piece of state should live and defend it

Next week: lists, keys and controlled forms — and rebuilding the to-do app the React way.
