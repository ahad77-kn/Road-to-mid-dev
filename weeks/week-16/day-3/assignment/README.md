# 🛠️ Assignment — Week 16 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 16](../../README.md)

## What to build

Structure the app the way a real one is structured.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/layouts/` | root + profile layouts with Outlet |
| `src/pages/NotFound.jsx` | |
| `src/pages/ErrorPage.jsx` | |

## ✅ Done when — this is the checklist you are marked against

- [ ] A root layout with `<Outlet>` — nav and footer rendered once, not per page
- [ ] A nested layout for a `/profile` section with a sub-nav (`/profile/settings`, `/profile/history`)
- [ ] A catch-all `*` route with a real 404 page (with a link home)
- [ ] An error element so a thrown render error shows a friendly page, not a white screen
- [ ] Route-level loading UI while a page's data is fetching
- [ ] Lazy-load one route with `React.lazy` + `<Suspense>` — check the Network tab to confirm a separate chunk loads
- [ ] Scroll resets to the top on navigation (it does not by default — fix it and explain why)

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What does `<Outlet>` do?
2. Why does the scroll position not reset by default, and how did you fix it?
3. What does `React.lazy` change about your bundle? Show it in the Network tab.
4. What is the difference between a 404 route and an error element?
5. **Prove it:** visit `/asdfgh` and `/movie/nonsense`. Both must fail gracefully and differently.

---

[← back to the day](../) · [📖 read first](../learn/)
