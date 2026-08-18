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

> ✅ **Week 3 is at 7.19, above the 6.5 gate** with one day left. [State of play](../../STATE-OF-PLAY.md)

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Make the Week-2 landing/header fully responsive | [📄 open →](day-1/) | **6.0** ✅ [🧾](day-1/ASSESSMENT.md) |
| [**D2**](day-2/) | Responsive gallery with **zero** media queries | [📄 open →](day-2/) | **8.0** ✅ [🧾](day-2/ASSESSMENT.md) |
| [**D3**](day-3/) | Transitions, hover & motion — subtle, not circus | [📄 open →](day-3/) | **7.0** ✅ [🧾](day-3/ASSESSMENT.md) |
| [**D4**](day-4/) | Phase project part 1 — portfolio structure & content | [📄 open →](day-4/) | **7.75** ✅ [🧾](day-4/ASSESSMENT.md) |
| [**D5**](day-5/) | Phase project part 2 — responsive, accessible, clean | [📄 open →](day-5/) | **6.25** 🔁 [assessment](day-5/ASSESSMENT.md) |
| — | **Phase 1 exam** (3 hrs, closed notes) | [📄 exam →](exam/) | – |

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
