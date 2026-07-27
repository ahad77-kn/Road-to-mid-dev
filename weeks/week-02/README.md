# Week 02 — Flexbox & Grid

[← The Road](../../README.md) · Phase 1 · CSS Mastery · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 01](../week-01/) · **Next:** [Week 03 — Responsive design →](../week-03/)

> **Goal:** build any layout you can see, from memory, in under 30 minutes.

**Why this week matters:** Flexbox handles one direction, Grid handles two. Between them they are ~90% of all modern layout work. Last week you built layouts the painful way on purpose — this week you find out what those tools were invented for.

**The rule of thumb you are learning:** *content-driven, one direction → Flexbox. Layout-driven, two directions → Grid.* Real pages use both, usually Grid for the page skeleton and Flexbox inside the pieces.

---

## 📖 Learning material — 1 hr/day

| Day | Do / read | Source |
| --- | --- | --- |
| D1 | [Flexbox Froggy](https://flexboxfroggy.com/) — levels 1–12 · [web.dev: Flexbox](https://web.dev/learn/css/flexbox) | game / web.dev |
| D2 | Flexbox Froggy — finish all 24 levels · [MDN: Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) | game / MDN |
| D3 | [Grid Garden](https://cssgridgarden.com/) — all levels · [web.dev: Grid](https://web.dev/learn/css/grid) | game / web.dev |
| D4 | [MDN: CSS grid layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids) · [MDN: grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) | MDN |
| D5 | [MDN: Layout cookbook](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook) — read 3 recipes | MDN |

**Keep these two open all week — every professional does:**
- [CSS-Tricks: Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS-Tricks: Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

### 📰 Articles worth your time this week
- [MDN: Alignment in flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) — `justify-*` vs `align-*`, finally clear
- [`flex-grow`, `flex-shrink`, `flex-basis` explained](https://css-tricks.com/flex-grow-is-weird/)
- [MDN: Auto-placement in Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [web.dev: Grid vs Flexbox — which one](https://web.dev/learn/css/grid#grid_or_flexbox)

---

## 🗓️ The week at a glance

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | News-site header in Flexbox + a written comparison | [`day-1/`](day-1/) | – |
| D2 | Card gallery — 6 cards, wrapping, equal heights | [`day-2/`](day-2/) | – |
| D3 | Holy-grail layout in Grid | [`day-3/`](day-3/) | – |
| D4 | Photo gallery with spanning cells | [`day-4/`](day-4/) | – |
| D5 | YouTube home skeleton — Grid page + Flex components | [`day-5/`](day-5/) | – |

---

## Day 1 — The header, twice

**Read first (1 hr):** Flexbox Froggy levels 1–12, then web.dev *Flexbox*.

**Build (2 hr):**
Part A — recreate the header of a real news site (Dawn, BBC, Geo): logo on the left, nav links on the right, a search icon at the far right. Build it **first** with `display: inline-block` and floats — the Week-1 way. Suffer for 30 minutes.
Part B — rebuild the identical header with Flexbox in `day-1/flex.html`.

**Must have**
- [ ] Both versions in the folder, visually identical
- [ ] `day-1/comparison.md`: at least 5 sentences on what flexbox removed — name the specific properties you no longer needed (`float`, `clear`, `vertical-align`, wrapper divs, `overflow: hidden` hacks)
- [ ] Vertically centred nav links using `align-items`, not `line-height` or `padding` guesses
- [ ] Space pushed between logo and nav using `justify-content` or `margin-left: auto` — explain which you chose and why
- [ ] `gap` used for spacing between links, not `margin-right` on each

**🧪 Test material**
1. What is the main axis? What happens to `justify-content` when you set `flex-direction: column`?
2. What does `margin-left: auto` do inside a flex container, and why?
3. Difference between `align-items` and `align-self`?
4. Why did floats need clearfix hacks, and what was actually going wrong?
5. **Prove it:** change `flex-direction` to `column` live and predict — out loud, before pressing Enter — exactly what will move.

---

## Day 2 — Card gallery

**Read first (1 hr):** finish all 24 Froggy levels + MDN *Flexbox*.

**Build (2 hr):**
6 product cards in a row that wraps. Each card: image placeholder, title, 2 lines of description (make them **different lengths on purpose**), price, button.

**Must have**
- [ ] Cards wrap to the next row when the screen narrows (`flex-wrap`)
- [ ] **All cards the same height** in a row, even with different text lengths — and the button sits flush at the bottom of every card
- [ ] Even gaps using `gap`, never `margin` hacks on children
- [ ] `flex: 1 1 300px` style sizing — explain in a comment what each of the three values does
- [ ] The last row does **not** stretch weirdly when it has fewer cards — solve it and explain how

**🧪 Test material**
1. What do the three values in `flex: 1 1 300px` mean?
2. What is the default value of `flex-basis`, and why does `flex: 1` behave differently from `width: 100%`?
3. How do you make one card push its button to the bottom regardless of text length? (Two valid answers — name both.)
4. `flex-wrap: wrap` vs `nowrap` — what happens to `flex-shrink` in each case?
5. **Prove it:** delete one card. The layout must still look intentional.

---

## Day 3 — Holy grail in Grid

**Read first (1 hr):** Grid Garden, all levels + web.dev *Grid*.

**Build (2 hr):**
The classic page skeleton: header across the top, left sidebar, main content, right sidebar, footer across the bottom. Dummy content is fine, but give it real proportions.

**Must have**
- [ ] Built with `grid-template-areas` — the CSS must be visually readable as an ASCII picture of the page
- [ ] `grid-template-columns` using `fr` units and at least one `minmax()`
- [ ] Footer stays at the bottom even when the content is short (`min-height: 100vh` on the grid + a row that grows)
- [ ] `gap` for all spacing
- [ ] `day-3/why-grid.md`: 3 sentences on why this layout is painful in Flexbox and natural in Grid

**🧪 Test material**
1. What is `1fr`? How is it different from `33.33%`?
2. What does `minmax(200px, 1fr)` mean, in words?
3. Explain `grid-template-areas` — what does a `.` mean in the string?
4. What is the difference between an *explicit* and an *implicit* grid track?
5. **Prove it:** move the sidebar from left to right by changing **one** line of CSS.

---

## Day 4 — Photo gallery with spans

**Read first (1 hr):** MDN *CSS grid layout* + *grid-template-areas*.

**Build (2 hr):**
An Instagram-explore-style gallery: a grid of images where some cells span 2 columns and/or 2 rows. At least 12 tiles, at least 3 of them oversized.

**Must have**
- [ ] `grid-template-columns: repeat(4, 1fr)` (or similar) plus `grid-column: span 2` / `grid-row: span 2` on selected items
- [ ] Images fill their cell without distortion — `object-fit: cover` with a fixed cell aspect ratio (`aspect-ratio`)
- [ ] No gaps or holes left in the grid (understand `grid-auto-flow: dense`, use it if you need it, explain in a comment)
- [ ] A hover effect on tiles that does not shift the layout (scale/opacity, not width/margin)
- [ ] Use placeholder images from [picsum.photos](https://picsum.photos/)

**🧪 Test material**
1. Difference between `grid-column: span 2` and `grid-column: 1 / 3`?
2. What does `grid-auto-flow: dense` do, and what is the cost of using it?
3. Why does `object-fit: cover` need the image to have a set height or aspect ratio?
4. Where does an item go if you never tell Grid where to put it?
5. **Prove it:** in DevTools, turn on the grid overlay and read out the line numbers your spanning item occupies.

---

## Day 5 — YouTube home skeleton

**Read first (1 hr):** MDN *Layout cookbook* — read 3 recipes.

**Build (2 hr):**
The YouTube home page skeleton with dummy grey boxes — no real content needed. Top bar (logo, search, avatar), left sidebar (nav items with icons), main area (a responsive grid of video cards; each card = thumbnail, avatar, title, channel, views).

**This is the week's real test:** page skeleton in **Grid**, individual components in **Flexbox**. Making that choice correctly is the skill.

**Must have**
- [ ] Page skeleton in Grid (`grid-template-areas`)
- [ ] Top bar and video-card internals in Flexbox
- [ ] `day-5/decisions.md`: for each of the 4 main regions, one line — "Grid because…" / "Flex because…"
- [ ] Video grid uses `repeat(auto-fill, minmax(280px, 1fr))` — no media queries yet
- [ ] Sidebar scrolls independently of the main area (`overflow-y: auto` + fixed height)
- [ ] At least 12 video cards

**🧪 Test material**
1. Give one layout that is genuinely easier in Flexbox, and one genuinely easier in Grid. Say why.
2. What does `repeat(auto-fill, minmax(280px, 1fr))` do as the screen widens? Difference from `auto-fit`?
3. Can an element be both a grid item and a flex container? What does that mean in practice?
4. How does `overflow: auto` interact with a grid track's height?
5. **Prove it:** resize the browser from 1400px to 700px and narrate what the grid is doing at each break.

---

## ✅ End-of-week check

- [ ] You reach for Grid or Flexbox by instinct now, and can justify the choice
- [ ] You have not written `float` or `position: absolute` for layout once this week
- [ ] `gap` is your default spacing tool between siblings
- [ ] You can read a screenshot of a page and say aloud which regions are grid and which are flex
- [ ] `justify-*` vs `align-*` no longer needs a guess

Next week the same layouts have to survive a 360px phone screen. Build this week's work knowing that is coming.
