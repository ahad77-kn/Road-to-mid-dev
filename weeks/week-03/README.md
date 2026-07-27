# Week 03 — Responsive Design & Polish → Phase 1 Exam

[← The Road](../../README.md) · Phase 1 · CSS Mastery · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 02](../week-02/) · **Next:** [Week 04 — JavaScript fundamentals →](../week-04/)

> **Goal:** one codebase, correct on a 360px phone and a 1920px monitor. No separate mobile site, no horizontal scrollbar, ever.

**Why this week matters:** most internet users in Pakistan are mobile-only. A layout that breaks on a phone is a layout that does not work, whatever it looks like on your laptop. Media queries, mobile-first thinking, fluid units and responsive images are not "extra polish" — they are the job.

---

## 📖 Learning material — 1 hr/day

| Day | Read | Source |
| --- | --- | --- |
| D1 | [Learn Responsive Design](https://web.dev/learn/design) — chapters 1–5 | web.dev |
| D2 | [MDN: Responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) · [Media queries](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries) | MDN |
| D3 | [MDN: Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) · [web.dev: Animations](https://web.dev/learn/css/animations) | MDN / web.dev |
| D4 | [MDN: Responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images) · [web.dev: Accessibility basics](https://web.dev/learn/accessibility) | MDN / web.dev |
| D5 | [MDN: Organizing your CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Organizing) · [BEM](https://getbem.com/introduction/) | MDN / BEM |

### 📰 Articles worth your time this week
- [web.dev: Media queries — the wrong and right breakpoints](https://web.dev/learn/design/media-queries) — stop copying Bootstrap's numbers
- [MDN: The viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) — one missing line breaks every phone
- [MDN: `clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) — fluid type without media queries
- [MDN: `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) — animation that respects people
- [web.dev: Colour contrast](https://web.dev/learn/accessibility/color-contrast)

---

## 🗓️ The week at a glance

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Make the Week-2 landing/header fully responsive | [`day-1/`](day-1/) | – |
| D2 | Responsive gallery with **zero** media queries | [`day-2/`](day-2/) | – |
| D3 | Transitions, hover & motion — subtle, not circus | [`day-3/`](day-3/) | – |
| D4 | Phase project part 1 — portfolio structure & content | [`day-4/`](day-4/) | – |
| D5 | Phase project part 2 — responsive, accessible, clean | [`day-5/`](day-5/) | – |
| — | **Phase 1 exam** (3 hrs, closed notes) | [`exam/`](exam/) | – |

---

## Day 1 — Make it survive a phone

**Read first (1 hr):** web.dev *Learn Responsive Design*, ch. 1–5.

**Build (2 hr):**
Take the YouTube skeleton and news header from Week 2 into `day-1/` and make them genuinely responsive.

**Must have**
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">` — and you can explain what each part does
- [ ] **Mobile-first CSS**: base styles are the phone layout, `min-width` media queries add the desktop layout. Not the reverse.
- [ ] Sidebar collapses to icons or disappears below 768px
- [ ] Nav collapses to a simple stacked menu (CSS only — no JS yet; a `<details>`/`<summary>` is a legitimate trick)
- [ ] Breakpoints chosen because *your content* breaks there, not copied from Bootstrap — justify each one in a comment
- [ ] **No horizontal scrollbar at 320px.** Test it. This is a hard fail if it scrolls sideways.
- [ ] Tested at 320, 375, 768, 1024, 1440px in DevTools device mode

**🧪 Test material**
1. What exactly does the viewport meta tag do? What does a phone do without it?
2. Why is mobile-first (`min-width`) preferred over desktop-first (`max-width`)?
3. How do you choose a breakpoint properly?
4. Name three things that commonly cause horizontal overflow on mobile.
5. **Prove it:** open DevTools at 320px width. If anything scrolls sideways, find the offending element using the "find the widest element" trick and fix it live.

---

## Day 2 — Responsive with no media queries

**Read first (1 hr):** MDN *Responsive design* + *Media queries*.

**Build (2 hr):**
The Week-2 card gallery: 1 column on a phone, 2 on a tablet, 3+ on desktop — and **not a single media query is allowed**.

**Must have**
- [ ] `grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr))` — and you can explain every part of it, including why the inner `min()` is there
- [ ] Fluid typography with `clamp()` on headings
- [ ] Images with `max-width: 100%` and `height: auto`
- [ ] Container width managed with `width: min(1100px, 100% - 2rem)` or similar — no fixed `px` widths
- [ ] `day-2/how.md`: explain in your own words how the layout knows to change without any media query

**🧪 Test material**
1. `auto-fit` vs `auto-fill` — what is the visible difference when there are only 2 items in a wide container?
2. Read `clamp(1.5rem, 4vw, 3rem)` out loud in plain English.
3. Why does `minmax(280px, 1fr)` overflow at 320px, and how does `min(280px, 100%)` fix it?
4. When *should* you still use a media query?
5. **Prove it:** drag the browser edge slowly from 1400px to 320px. Narrate every column change as it happens.

---

## Day 3 — Motion, done with restraint

**Read first (1 hr):** MDN *Using CSS transitions* + web.dev *Animations*.

**Build (2 hr):**
Add interaction feedback to every interactive element in the landing page. **Subtle.** The test is that a normal person would not consciously notice the animations, only that the page "feels good".

**Must have**
- [ ] `transition` on buttons, links, cards, inputs — 150–250ms, with a real easing function (`ease-out`, not `linear`)
- [ ] **Only** `transform` and `opacity` are animated — never `width`, `height`, `top`, `margin`. Explain why in a comment.
- [ ] A `:hover` lift on cards using `transform: translateY(-4px)` + shadow
- [ ] A focus state that is *also* animated and keyboard-visible
- [ ] `@media (prefers-reduced-motion: reduce)` block that disables the motion
- [ ] One `@keyframes` animation — a loading skeleton or spinner
- [ ] No layout shift when hovering anything. Check in DevTools.

**🧪 Test material**
1. Why are `transform` and `opacity` cheap to animate, while `width` and `top` are expensive?
2. What are the four parts of the `transition` shorthand?
3. What is `prefers-reduced-motion` and who does it help?
4. Difference between `transition` and `@keyframes` — when do you need each?
5. **Prove it:** open DevTools → Rendering → "Paint flashing". Show that your hover effect does not repaint the whole card.

---

## Day 4 — Phase project, part 1: build the portfolio

**Read first (1 hr):** MDN *Responsive images* + web.dev *Accessibility basics*.

**Build (2 hr):**
Start your real portfolio site — this is the Phase 1 deliverable and the first thing anyone will see when you apply for work. Sections: hero, about, skills, projects grid (your Week 1–3 work), contact form.

**Must have**
- [ ] Real content — your actual name, your actual projects. No lorem ipsum.
- [ ] Semantic HTML throughout: `<header> <nav> <main> <section> <article> <footer>` — and a heading order that never skips a level
- [ ] Every image has meaningful `alt` text (decorative images get `alt=""` — know the difference)
- [ ] Organised files: `index.html`, `css/style.css`, `images/`, `README.md`
- [ ] CSS custom properties for the colour palette and spacing scale, defined once in `:root`
- [ ] BEM-style class names, consistently

**🧪 Test material**
1. Why does `<section>` beat `<div>` for a screen-reader user?
2. When should `alt` be empty, and when is empty `alt` a bug?
3. What is the correct heading order, and what breaks if you jump `h2` → `h4`?
4. What are CSS custom properties and what do they give you that a Sass variable does not?
5. **Prove it:** turn off CSS entirely (DevTools → disable stylesheets). The page must still be readable and in a sensible order.

---

## Day 5 — Phase project, part 2: make it real

**Read first (1 hr):** MDN *Organizing your CSS* + BEM.

**Build (2 hr):** Finish the portfolio to a shippable standard.

**Must have**
- [ ] Fully responsive: 320px → 1920px, no horizontal scroll at any width
- [ ] Keyboard navigable end to end, with a visible focus state everywhere
- [ ] Colour contrast passes AA (check in DevTools → Accessibility, or [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/))
- [ ] Lighthouse run in DevTools: **Accessibility ≥ 90**. Screenshot the report into the folder.
- [ ] CSS organised into commented sections; no dead rules; no `!important`
- [ ] A `README.md` in the project folder: what it is, how to run it, a screenshot
- [ ] Deployed on GitHub Pages, link in the README

**🧪 Test material**
1. What does a Lighthouse accessibility score actually measure — and what does it *miss*?
2. Name three things that make a site unusable with a keyboard.
3. How do you structure a CSS file so someone else can find things?
4. What is the minimum contrast ratio for normal body text?
5. **Prove it:** hand your phone to someone who has never seen the site. They must find your contact details without asking you anything.

---

## 🎓 Phase 1 Exam — 3 hours, closed notes

**Format:** the teacher gives you a screenshot of a real website section (a hero + card grid). You recreate it, responsive, **without looking at the real site's code**. Docs are allowed (MDN, CSS-Tricks). AI is not. No copy-paste from previous weeks.

**Setup**
```bash
mkdir -p weeks/week-03/exam
cp _template/EXAM.md weeks/week-03/exam/EXAM.md
```

**Passing (7/10 minimum):**
- Layout matches the screenshot on both mobile and desktop
- Clean, consistent class names
- No absolute-positioning hacks, no magic numbers to make things line up
- Uses Flexbox and Grid appropriately
- You can defend every rule you wrote

**Pass → Phase 2 unlocked.** Below 7 → repeat the weakest week, retake in 3 days.

---

## ✅ End-of-week check

- [ ] Mobile-first is your default; you write the phone layout before the desktop one
- [ ] You can build a responsive grid with no media queries at all
- [ ] Animation is on `transform`/`opacity` only, and respects reduced motion
- [ ] Semantic HTML and `alt` text are automatic, not an afterthought
- [ ] You have a deployed portfolio URL you would put on a CV

**Phase 1 done.** From Week 4 the browser stops being the whole story — you start programming.
