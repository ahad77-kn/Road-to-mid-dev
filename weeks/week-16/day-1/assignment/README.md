# 🛠️ Assignment — Week 16 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 16](../../README.md)

## What to build

Turn the Week 15 movie app into a multi-page app in `day-1/`.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/routes/` | home, search, about, favourites |
| `src/App.jsx` | the router setup |
| `routing.md` | what client-side routing actually is |

## ✅ Done when — this is the checklist you are marked against

- [ ] Routes: `/` (home), `/search`, `/about`, `/favourites`
- [ ] A persistent nav with `<NavLink>` styling the active link
- [ ] `<Link>` used for all internal navigation — **never** `<a href>` for internal routes. Explain in a comment what `<a>` does that `<Link>` does not.
- [ ] Browser back/forward work correctly
- [ ] Refreshing on `/search` loads the right page (note what this requires from the host — you will need it for deployment)
- [ ] `day-1/routing.md`: what client-side routing actually is — what the browser does and does not request

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is client-side routing? What happens on the network when you click a `<Link>`?
2. Why does `<a href="/search">` break the app's feel? What actually happens?
3. Why can refreshing on `/search` 404 on a static host, and what is the fix?
4. What does `<NavLink>` give you over `<Link>`?
5. **Prove it:** open the Network tab and click through every page. Show me that no document requests fire.

---

[← back to the day](../) · [📖 read first](../learn/)
