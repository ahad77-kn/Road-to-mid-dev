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

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Router setup — multi-page movie app | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | URL params, search params & detail pages | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | Nested layouts, 404s & loading UI | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | Context — favourites without prop drilling | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | Reducer + Context, and a protected route | [📄 open →](day-5/) | – |

---

## ✅ End-of-week check

- [ ] You put shareable state in the URL by default
- [ ] Layouts are nested; nav and footer are written once
- [ ] Context is used for genuinely global things and nothing else
- [ ] You can build an auth flow's UI, and you know exactly what it does *not* protect
- [ ] Every route fails gracefully — 404, error, loading

Next week: the Phase 4 project. Everything from Weeks 12–16, in one deployed app.
