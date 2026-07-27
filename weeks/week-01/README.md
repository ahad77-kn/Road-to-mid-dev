# Week 01 — CSS Fundamentals, Selectors & the Box Model

[← The Road](../../README.md) · Phase 1 · CSS Mastery · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 00](../week-00/) · **Next:** [Week 02 — Flexbox & Grid →](../week-02/)

> **Goal:** understand exactly *why* an element sits where it sits. Stop guessing at `margin` values until it looks right.

**Why this week matters:** most self-taught developers stay weak at CSS forever, because they learn it by trial and error instead of by model. Four things carry 90% of CSS: **selectors**, **specificity**, **the box model**, and **units**. Get them properly this week and layout stops being a fight.

---

## 📖 Learning material — 1 hr/day

| Day | Read | Source |
| --- | --- | --- |
| D1 | [CSS styling basics — What is CSS / Getting started](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics) | MDN |
| D2 | [The box model](https://web.dev/learn/css/box-model) — **read it twice** · [MDN: box model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model) | web.dev / MDN |
| D3 | [Specificity](https://web.dev/learn/css/specificity) · [The cascade](https://web.dev/learn/css/the-cascade) · [Handling conflicts](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) | web.dev / MDN |
| D4 | [Sizing units](https://web.dev/learn/css/sizing) · [MDN: Values and units](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units) | web.dev / MDN |
| D5 | [MDN: Styling forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) · [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) | MDN |

### 📰 Articles worth your time this week
- [MDN: Margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) — the #1 "why is there a gap?" answer
- [CSS-Tricks: `box-sizing: border-box`, and why everyone uses it](https://css-tricks.com/box-sizing/)
- [web.dev: Inheritance](https://web.dev/learn/css/inheritance)
- [BEM in 5 minutes](https://getbem.com/introduction/) — how to name classes so future-you can read them
- [MDN: Normal flow](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Flow_layout) — what the page does *before* you touch it

**Reference to keep open all week:** [MDN CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

---

## 🗓️ The week at a glance

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Business card — exact spacing, borders, colours | [`day-1/`](day-1/) | **6/10** ✅ |
| D2 | Pricing card — padding & margin only, no flexbox | [`day-2/`](day-2/) | – |
| D3 | Break it 5 ways on purpose, then fix each | [`day-3/`](day-3/) | – |
| D4 | Typography article page — `rem` only | [`day-4/`](day-4/) | – |
| D5 | Signup form with focus, error and disabled states | [`day-5/`](day-5/) | – |

---

## Day 1 — Business card ✅ done

**Read first (1 hr):** MDN *CSS styling basics*.

**Build (2 hr):** Recreate a business card in HTML/CSS — name, role, phone, email, address. Fixed width, clear spacing, borders, a background colour.

**Must have**
- [x] Separate `card.html` and `card.css` (no `<style>` block, no inline styles)
- [x] The card is a single container element with everything inside it
- [x] Deliberate padding, border and border-radius
- [ ] Class-based selectors, not element selectors (`.card__name`, not `h1`)
- [ ] No `position` used to fix spacing — margin and padding only

**🧪 Test material**
1. What are the four layers of the box model, from the inside out?
2. `width: 300px; padding: 20px; border: 2px` — how wide is the element on screen? Now add `box-sizing: border-box` — how wide is it?
3. Why is styling `h1 { }` directly a problem once the page grows?
4. **Prove it:** open the card in DevTools, hover the element, and read the box-model diagram out loud.

**📌 Assessment:** [`day-1/ASSESSMENT.md`](day-1/ASSESSMENT.md) — **6/10, PASS.** Works, but styled by tag instead of class and used `position: relative; top: -30px` to fix a gap caused by margin collapsing. Both are fixed on Day 3.

---

## Day 2 — Pricing card (no flexbox)

**Read first (1 hr):** web.dev *Box model*, twice. Then MDN box model.

**Build (2 hr):**
A pricing card: plan title, big price, a list of 5 features, and a call-to-action button. **Flexbox and Grid are banned this week** — you will use only `display`, `padding`, `margin`, `width` and normal document flow. This is deliberate: next week flexbox will feel like a gift instead of a mystery.

**Must have**
- [ ] `box-sizing: border-box` set once at the top and explained in a comment
- [ ] All class names, no styling by tag
- [ ] The feature list uses `<ul>`/`<li>` with the default bullets restyled or removed
- [ ] The button is a real `<button>` or `<a>`, with `:hover` and `:focus-visible` states
- [ ] Consistent spacing scale — pick 4/8/16/24/32px and use **only** those numbers
- [ ] A comment at the top of the CSS listing your spacing scale and colours

**🧪 Test material**
1. What is the difference between `padding` and `margin`? When does the background colour show through?
2. Why does `width: 100%` plus `padding: 20px` overflow the parent by default?
3. What does `margin: 0 auto` do, and what condition must be true for it to work?
4. Name two block-level elements and two inline elements. What is the practical difference?
5. **Prove it:** set `box-sizing: content-box` on the card, screenshot the break, set it back.

---

## Day 3 — Break it 5 ways, then fix it

**Read first (1 hr):** web.dev *Specificity* + *The cascade* + MDN *Handling conflicts*.

**Build (2 hr):**
Copy yesterday's pricing card into `day-3/`. Now **break it on purpose, five times**, one bug at a time — and fix each one before making the next.

Required bugs (all five):
1. A **specificity** conflict — a rule that should apply but does not
2. A **collapsed margin** creating an unexpected gap
3. An element **overflowing** its parent because of `box-sizing`
4. A rule broken by **source order** (right specificity, wrong position in the file)
5. An `!important` that makes something impossible to override

For each: screenshot the broken state, then write in `day-3/bugs.md`:
> **Bug N:** what I changed · what it looked like · **why** it happened · how I fixed it.

**Must have**
- [ ] All 5 bugs, each with a screenshot and a *why* in your own words
- [ ] The specificity of the conflicting selectors written out as numbers (e.g. `0-1-1` vs `0-2-0`)
- [ ] Also fix the two problems from Day 1: switch to class selectors, remove the `position` hack
- [ ] Final card renders correctly

**🧪 Test material**
1. Rank these by specificity: `.card p`, `#price`, `p`, `.card .price`, `p.price`.
2. Two rules have identical specificity. Which one wins?
3. When do two vertical margins collapse — and name two ways to stop it.
4. Why is `!important` almost always the wrong fix?
5. **Prove it:** I point at any element in your card and you tell me, without DevTools, which rules are affecting it.

**This is the most valuable day of the week.** Deliberately breaking things and explaining the break is how you stop being afraid of CSS.

---

## Day 4 — Typography page, `rem` only

**Read first (1 hr):** web.dev *Sizing units* + MDN *Values and units*.

**Build (2 hr):**
An article page: title, subtitle, author line, 4–5 paragraphs, a subheading, a blockquote, and a list. It must be genuinely comfortable to read.

**Must have**
- [ ] **Every** size in `rem` (or unitless for `line-height`). No `px` anywhere except `border` widths — justify each one in a comment
- [ ] A type scale: pick 4–5 sizes with a consistent ratio, listed in a comment at the top
- [ ] `line-height` between 1.5 and 1.7 on body text, unitless
- [ ] Body text between 60–75 characters per line (use `max-width` in `ch`)
- [ ] Vertical rhythm — consistent, deliberate space between paragraphs and headings
- [ ] A web font loaded from [Google Fonts](https://fonts.google.com/) with a fallback stack

**🧪 Test material**
1. What is `1rem` based on? What is `1em` based on? Give a case where they differ.
2. Why does `line-height: 1.5` behave differently from `line-height: 150%` on nested elements?
3. What is `1ch`, and why is it good for line length?
4. A user sets their browser font size to 24px. What happens to your page in `px` vs in `rem`?
5. **Prove it:** change the browser's default font size in settings and show your page scaling correctly.

---

## Day 5 — Signup form with real states

**Read first (1 hr):** MDN *Styling web forms* + *Pseudo-classes*.

**Build (2 hr):**
A full signup form: name, email, password, confirm password, a checkbox for terms, and a submit button. No JavaScript this week — CSS states only.

**Must have**
- [ ] Every input has a real `<label>` linked with `for`/`id` (click the label, the input focuses — test it)
- [ ] `:focus-visible` state — clearly visible, and **not** `outline: none` with nothing to replace it
- [ ] Error state: red border + an error message under the field (styled with a class you toggle by hand for now)
- [ ] `:disabled` button state — visibly different and `cursor: not-allowed`
- [ ] `:hover` on the button, `:checked` styling on the checkbox
- [ ] Correct `type` on every input (`email`, `password`) and a `placeholder` that is **not** a substitute for a label
- [ ] Keyboard test: you can complete the whole form with Tab and Enter only

**🧪 Test material**
1. Why is `outline: none` on focus an accessibility bug? What must you do if you remove it?
2. Difference between `:focus` and `:focus-visible`?
3. Why is a `placeholder` not a label?
4. What do `:hover`, `:active`, `:focus`, `:checked`, `:disabled` each mean — one line each?
5. **Prove it:** unplug your mouse. Fill in the whole form and submit it. Every focused element must be obvious.

---

## ✅ End-of-week check

- [ ] You can calculate an element's rendered width from its CSS, on paper
- [ ] You can rank selectors by specificity without looking it up
- [ ] You know when margins collapse and how to prevent it
- [ ] You size in `rem` by default and can explain why
- [ ] Your class names would still make sense to you in six months

**Week average must be ≥ 6/10 to move on.** Next week you get flexbox — and after this week's pain, you will understand exactly which problem it was invented to solve.
