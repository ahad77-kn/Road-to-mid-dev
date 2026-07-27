# Week 16 — React Router & Context (Shared State)

[← The Road](../../README.md) · Phase 4 · React · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 15](../week-15/) · **Next:** [Week 17 — E-commerce project →](../week-17/)

> **Goal:** multi-page React apps with real URLs, shared state without prop drilling, and your first route guard.

**Why this week matters:** everything so far has been one screen. Real apps have pages, and pages need URLs that can be bookmarked, shared and refreshed. And once you have pages, some state (the logged-in user, the cart, the theme) has to be reachable from anywhere — that is Context. Friday's protected route is a preview of Week 21's auth, and it comes with a warning you must not forget.

---

## 📖 Learning material — 1 hr/day

| Day | Read + type | Source |
| --- | --- | --- |
| D1 | [React Router: installation & routing](https://reactrouter.com/start/library/installation) · [Routing basics](https://reactrouter.com/start/library/routing) | React Router |
| D2 | [URL params & navigation](https://reactrouter.com/start/library/navigating) · [`useParams`, `useNavigate`, `useSearchParams`](https://reactrouter.com/api/hooks/useParams) | React Router |
| D3 | [Nested routes & layouts](https://reactrouter.com/start/library/routing#nested-routes) · [Error boundaries / 404s](https://reactrouter.com/how-to/error-boundary) | React Router |
| D4 | [react.dev: Passing data deeply with context](https://react.dev/learn/passing-data-deeply-with-context) · [`useContext`](https://react.dev/reference/react/useContext) | react.dev |
| D5 | [Scaling up with reducer and context](https://react.dev/learn/scaling-up-with-reducer-and-context) | react.dev |

### 📰 Articles worth your time this week
- [react.dev: When to use context](https://react.dev/learn/passing-data-deeply-with-context#before-you-use-context) — try composition first; context is not free
- [Kent C. Dodds: How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
- [Auth0: Authentication vs authorization](https://auth0.com/intro-to-iam/authentication-vs-authorization) — the vocabulary you need for Friday and for Week 21
- ⚠️ [OWASP: Authorization cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) — read the first section; it explains why a frontend guard is not security

---

## 🗓️ The week at a glance

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Router setup — multi-page movie app | [`day-1/`](day-1/) | – |
| D2 | URL params, search params & detail pages | [`day-2/`](day-2/) | – |
| D3 | Nested layouts, 404s & loading UI | [`day-3/`](day-3/) | – |
| D4 | Context — favourites without prop drilling | [`day-4/`](day-4/) | – |
| D5 | Reducer + Context, and a protected route | [`day-5/`](day-5/) | – |

---

## Day 1 — Routing

**Read first (1 hr):** React Router *installation* + *routing basics*.

**Build (2 hr):** Turn the Week 15 movie app into a multi-page app in `day-1/`.

**Must have**
- [ ] Routes: `/` (home), `/search`, `/about`, `/favourites`
- [ ] A persistent nav with `<NavLink>` styling the active link
- [ ] `<Link>` used for all internal navigation — **never** `<a href>` for internal routes. Explain in a comment what `<a>` does that `<Link>` does not.
- [ ] Browser back/forward work correctly
- [ ] Refreshing on `/search` loads the right page (note what this requires from the host — you will need it for deployment)
- [ ] `day-1/routing.md`: what client-side routing actually is — what the browser does and does not request

**🧪 Test material**
1. What is client-side routing? What happens on the network when you click a `<Link>`?
2. Why does `<a href="/search">` break the app's feel? What actually happens?
3. Why can refreshing on `/search` 404 on a static host, and what is the fix?
4. What does `<NavLink>` give you over `<Link>`?
5. **Prove it:** open the Network tab and click through every page. Show me that no document requests fire.

---

## Day 2 — Params & search params

**Read first (1 hr):** React Router *navigating* + the hooks reference.

**Build (2 hr):** Detail pages and URL-driven state.

**Must have**
- [ ] `/movie/:id` route with `useParams`, fetching that movie's details
- [ ] The **search term lives in the URL** as `?q=batman` via `useSearchParams` — not in component state. This is the day's real lesson: the URL *is* state.
- [ ] Filters (year, type) also in the URL, composing with the search
- [ ] `useNavigate` used for programmatic navigation (e.g. after a form submit)
- [ ] A back button using `navigate(-1)`
- [ ] Pagination in the URL (`?page=2`) so page 3 of results is shareable
- [ ] An invalid `:id` shows a proper "not found" state, not a crash

**🧪 Test material**
1. Why put search state in the URL instead of `useState`? Name three benefits.
2. Difference between `useParams` and `useSearchParams`?
3. When do you need `useNavigate` rather than `<Link>`?
4. How do you update one search param without wiping the others?
5. **Prove it:** send me a URL of a filtered, paginated search. It must open identically on my machine.

---

## Day 3 — Layouts, 404s and loading

**Read first (1 hr):** React Router *nested routes* + error elements.

**Build (2 hr):** Structure the app the way a real one is structured.

**Must have**
- [ ] A root layout with `<Outlet>` — nav and footer rendered once, not per page
- [ ] A nested layout for a `/profile` section with a sub-nav (`/profile/settings`, `/profile/history`)
- [ ] A catch-all `*` route with a real 404 page (with a link home)
- [ ] An error element so a thrown render error shows a friendly page, not a white screen
- [ ] Route-level loading UI while a page's data is fetching
- [ ] Lazy-load one route with `React.lazy` + `<Suspense>` — check the Network tab to confirm a separate chunk loads
- [ ] Scroll resets to the top on navigation (it does not by default — fix it and explain why)

**🧪 Test material**
1. What does `<Outlet>` do?
2. Why does the scroll position not reset by default, and how did you fix it?
3. What does `React.lazy` change about your bundle? Show it in the Network tab.
4. What is the difference between a 404 route and an error element?
5. **Prove it:** visit `/asdfgh` and `/movie/nonsense`. Both must fail gracefully and differently.

---

## Day 4 — Context

**Read first (1 hr):** react.dev *Passing data deeply with context* + `useContext`.

**Build (2 hr):** Favourites, reachable from anywhere.

**Must have**
- [ ] `FavouritesContext` with a provider holding the favourites array
- [ ] Add/remove favourites from **any** page — the movie card, the detail page, the favourites page
- [ ] A count badge in the nav, live-updating
- [ ] Persisted with your `useLocalStorage` hook
- [ ] A `useFavourites()` custom hook wrapping `useContext`, which **throws a clear error** if used outside the provider. Explain why that guard matters.
- [ ] A `ThemeContext` too (light/dark) — proving you can compose providers
- [ ] `day-4/context.md`: show the prop-drilling version you avoided (how many components would have had to pass the prop through?) and note context's cost — every consumer re-renders when the value changes

**🧪 Test material**
1. What problem does context solve? What problem does it *not* solve? (It is not a state manager.)
2. What happens to consumers when the context value changes — all of them, or only the ones using the changed part?
3. Why does your `useFavourites` throw outside the provider? What is the alternative failure mode?
4. When would composition (`children`) be better than context?
5. **Prove it:** in the Profiler, toggle the theme and show me exactly which components re-rendered.

---

## Day 5 — Reducer + Context, and your first guard

**Read first (1 hr):** react.dev *Scaling up with reducer and context*.

**Build (2 hr):** Combine everything, then add a fake auth flow.

**Must have**
- [ ] Favourites refactored to `useReducer` inside the provider, exposing actions rather than a raw setter
- [ ] A fake `AuthContext`: `user`, `login(email, password)`, `logout()` — no real backend yet, just a hard-coded check
- [ ] A `<ProtectedRoute>` wrapper redirecting to `/login` when logged out
- [ ] After login, the user returns to the page they originally wanted (`state.from`)
- [ ] Auth persisted so a refresh does not log you out
- [ ] The nav shows Login or the user's name + Logout, correctly
- [ ] **`day-5/guards.md` must contain this, in your own words:** a frontend route guard hides UI. It is **not security**. Anyone can open DevTools, edit the state, and see the "protected" page. Real protection lives on the server, which checks the request every single time. You will build that in Week 21.

**🧪 Test material**
1. What does a `<ProtectedRoute>` actually do, mechanically?
2. Why is a frontend guard not security? Demonstrate breaking your own guard in DevTools.
3. What is the difference between authentication and authorisation?
4. How do you send the user back to where they were after logging in?
5. **Prove it:** break your own protected route from the console, in front of me. Then explain exactly which server-side check would have stopped you.

---

## ✅ End-of-week check

- [ ] You put shareable state in the URL by default
- [ ] Layouts are nested; nav and footer are written once
- [ ] Context is used for genuinely global things and nothing else
- [ ] You can build an auth flow's UI, and you know exactly what it does *not* protect
- [ ] Every route fails gracefully — 404, error, loading

Next week: the Phase 4 project. Everything from Weeks 12–16, in one deployed app.
