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

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Plan + product grid with filters | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | Product detail page | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | Cart with Context + reducer | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | Checkout, persistence & polish | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | Performance, accessibility & deploy | [📄 open →](day-5/) | – |
| — | **Phase 4 exam** (3 hrs, docs allowed) | [📄 exam →](exam/) | – |

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
