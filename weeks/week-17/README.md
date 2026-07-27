# Week 17 — Phase Project: E-Commerce Front → Phase 4 Exam

[← The Road](../../README.md) · Phase 4 · React · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 16](../week-16/) · **Next:** [Week 18 — Node & Express →](../week-18/)

> **Goal:** one complete, deployed React app that uses everything from Weeks 12–16, built alone, with no tutorial.

**Why this week matters:** this is the project you will show people. It is also the last week where the data comes from someone else's API — from Week 18 you build the backend yourself, and this app is what you will eventually connect to it.

**API:** [fakestoreapi.com](https://fakestoreapi.com/) (or [DummyJSON](https://dummyjson.com/) if you want more product data).

**The rule:** no e-commerce tutorial, no cloned repo, no AI-generated components. Docs only. Declare honestly.

---

## 📖 Learning material — 1 hr/day

| Day | Read | Source |
| --- | --- | --- |
| D1 | [react.dev: Thinking in React](https://react.dev/learn/thinking-in-react) — for the third time, properly · [fakestoreapi docs](https://fakestoreapi.com/docs) | react.dev / API |
| D2 | [web.dev: Responsive images](https://web.dev/learn/design/responsive-images) · [react.dev: Suspense](https://react.dev/reference/react/Suspense) | web.dev / react.dev |
| D3 | [react.dev: Scaling up with reducer and context](https://react.dev/learn/scaling-up-with-reducer-and-context) (re-read) | react.dev |
| D4 | [web.dev: Core Web Vitals](https://web.dev/articles/vitals) · [react.dev: Profiler](https://react.dev/reference/react/Profiler) | web.dev / react.dev |
| D5 | [Vercel: deploying](https://vercel.com/docs/deployments/overview) · [Vite: production build](https://vite.dev/guide/build.html) | Vercel / Vite |

### 📰 Articles worth your time this week
- [Baymard: cart abandonment research](https://baymard.com/lists/cart-abandonment-rate) — why real carts are designed the way they are
- [web.dev: Optimize LCP](https://web.dev/articles/optimize-lcp) — product images are the usual culprit
- [react.dev: Keeping components pure](https://react.dev/learn/keeping-components-pure) — worth one more read before you build something this size

---

## 🗓️ The week at a glance

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Plan + product grid with filters | [`day-1/`](day-1/) | – |
| D2 | Product detail page | [`day-2/`](day-2/) | – |
| D3 | Cart with Context + reducer | [`day-3/`](day-3/) | – |
| D4 | Checkout, persistence & polish | [`day-4/`](day-4/) | – |
| D5 | Performance, accessibility & deploy | [`day-5/`](day-5/) | – |
| — | **Phase 4 exam** (3 hrs, docs allowed) | [`exam/`](exam/) | – |

---

## Day 1 — Plan & product grid

**Read first (1 hr):** *Thinking in React* + the API docs.

**Build (2 hr):** `PLAN.md` first, then the catalogue.

**`PLAN.md` must contain** (committed before any component):
- Component tree, drawn
- Every route
- Every piece of state and where it lives (local / context / URL)
- The product and cart-item data shapes
- What is derived, not stored

**Must have**
- [ ] Product grid from the API, responsive (Phase 1 skills)
- [ ] Category filter, price range, sort by price/rating — **all in the URL**
- [ ] Search with debounce
- [ ] Loading skeletons, error state with retry, empty state
- [ ] Product cards: image, title (truncated cleanly), price, rating stars, category
- [ ] Pagination or infinite scroll

**🧪 Test material**
1. Walk me through PLAN.md. What did you get wrong once you started?
2. Which state is in the URL and why?
3. How are you handling images of wildly different aspect ratios?
4. What is derived in this app?

---

## Day 2 — Product detail

**Read first (1 hr):** web.dev *Responsive images* + react.dev *Suspense*.

**Build (2 hr):** `/product/:id` — the page that has to sell the thing.

**Must have**
- [ ] Full details: large image, title, price, description, rating, category, stock
- [ ] Quantity selector with min/max validation
- [ ] "Add to cart" with visible feedback (toast or animation)
- [ ] "Related products" from the same category
- [ ] Breadcrumbs reflecting the real navigation path
- [ ] A shareable URL; refresh loads correctly
- [ ] Invalid id → a proper not-found page
- [ ] Images: correct `aspect-ratio`, `object-fit`, lazy loading below the fold, a blur/skeleton placeholder

**🧪 Test material**
1. How do you prevent layout shift while the image loads? (Name the metric this affects.)
2. What happens on a direct visit to `/product/999999`?
3. Where does "add to cart" state go, and what does the user see?
4. How are related products fetched — one request or many?

---

## Day 3 — The cart

**Read first (1 hr):** react.dev *Scaling up with reducer and context*.

**Build (2 hr):** The heart of the app.

**Must have**
- [ ] `CartContext` backed by `useReducer`
- [ ] Actions: `ADD_ITEM` (increments if already present), `REMOVE_ITEM`, `UPDATE_QTY`, `CLEAR_CART`
- [ ] A cart drawer/page: line items, per-line subtotal, quantity controls, remove
- [ ] Totals derived: subtotal, tax (17%), shipping (free above a threshold), grand total
- [ ] A live badge in the nav
- [ ] Persisted to localStorage — a refresh keeps the cart
- [ ] Empty-cart state with a link back to the catalogue
- [ ] A discount code field: `SAVE10` = 10% off, invalid codes show an error
- [ ] The reducer is a pure function in its own file and could be unit-tested without React

**🧪 Test material**
1. What happens when you add a product already in the cart? Where is that logic?
2. Which cart numbers are stored and which are derived? Justify.
3. Why a reducer rather than `useState` here?
4. How would you unit-test the cart reducer with no browser?
5. **Prove it:** add 3 items, refresh, change a quantity to 0, apply a bad code, then a good one. Every step must behave.

---

## Day 4 — Checkout & polish

**Read first (1 hr):** web.dev *Core Web Vitals* + react.dev *Profiler*.

**Build (2 hr):**

**Must have**
- [ ] A multi-step checkout: shipping details → payment (fake) → review → confirmation
- [ ] Full form validation, controlled inputs, errors per field (Week 13 skills)
- [ ] Step state preserved when going back
- [ ] An order summary alongside every step
- [ ] Order confirmation with a generated order number; cart cleared afterwards
- [ ] Order history saved to localStorage and viewable at `/orders`
- [ ] A wishlist, saved and toggleable from cards and the detail page
- [ ] A toast system for feedback (write your own — it is a good context exercise)

**🧪 Test material**
1. How is multi-step form state managed? Why there?
2. What happens if the user refreshes on step 2?
3. What is the difference between the cart and an order once placed?
4. Which parts re-render when a toast appears? Is that acceptable?

---

## Day 5 — Ship it

**Read first (1 hr):** Vercel deployment docs + Vite production build.

**Build (2 hr):**

**Must have**
- [ ] Lighthouse: Performance ≥ 85, Accessibility ≥ 95, Best Practices ≥ 90 — screenshots in the folder
- [ ] Route-level code splitting with `React.lazy`; check the chunk sizes in the build output
- [ ] Images sized properly; no 2000px image rendered at 300px
- [ ] Keyboard navigable end to end; a skip-to-content link; visible focus everywhere
- [ ] Colour contrast AA throughout
- [ ] Deployed to Vercel or Netlify with SPA routing configured (deep links must work — test `/product/5` directly)
- [ ] `README.md`: screenshots, feature list, tech, local setup, live link, and a "what I would do differently" section
- [ ] Tested on a real phone on mobile data
- [ ] `day-5/lighthouse.md`: your three biggest performance problems and what you did about each

**🧪 Test material**
1. What was your largest bundle chunk, and what is in it?
2. What is LCP on your product page, and what element is it?
3. Why does a deep link 404 on a static host without configuration? What did you add?
4. Where would this app break with 10,000 products instead of 20?
5. **Prove it:** open the live URL on my phone. It must load in under 3 seconds on mobile data.

---

## 🎓 Phase 4 Exam — 3 hours, docs allowed, no AI

The teacher writes a one-paragraph spec for a **2-page React app** against a public API you have not used. It must have routing, loading/error states, and one piece of shared state.

You build it live while explaining your decisions as you go.

**Passing (7/10):** it works, components are split sensibly, no state bugs, and every decision is defensible.

```bash
mkdir -p weeks/week-17/exam && cp _template/EXAM.md weeks/week-17/exam/EXAM.md
```

**Pass → Phase 5 unlocked.**

---

## ✅ End-of-week check

- [ ] You can plan and build a multi-page React app alone
- [ ] Context + reducer is a tool you reach for correctly, not reflexively
- [ ] You measure performance instead of guessing
- [ ] You have a deployed e-commerce app on your CV
- [ ] You are comfortable saying "I built this" and defending every part

**Phase 4 done.** Now you cross to the other side — and build the API you have been consuming for nine weeks.
