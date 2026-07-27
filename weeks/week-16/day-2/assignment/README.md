# 🛠️ Assignment — Week 16 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 16](../../README.md)

## What to build

Detail pages and URL-driven state.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/pages/MovieDetail.jsx` | |
| `src/pages/Search.jsx` | search state lives in the URL |

## ✅ Done when — this is the checklist you are marked against

- [ ] `/movie/:id` route with `useParams`, fetching that movie's details
- [ ] The **search term lives in the URL** as `?q=batman` via `useSearchParams` — not in component state. This is the day's real lesson: the URL *is* state.
- [ ] Filters (year, type) also in the URL, composing with the search
- [ ] `useNavigate` used for programmatic navigation (e.g. after a form submit)
- [ ] A back button using `navigate(-1)`
- [ ] Pagination in the URL (`?page=2`) so page 3 of results is shareable
- [ ] An invalid `:id` shows a proper "not found" state, not a crash

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Why put search state in the URL instead of `useState`? Name three benefits.
2. Difference between `useParams` and `useSearchParams`?
3. When do you need `useNavigate` rather than `<Link>`?
4. How do you update one search param without wiping the others?
5. **Prove it:** send me a URL of a filtered, paginated search. It must open identically on my machine.

---

[← back to the day](../) · [📖 read first](../learn/)
