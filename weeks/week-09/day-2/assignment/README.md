# 🛠️ Assignment — Week 09 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 09](../../README.md)

## What to build

Click a movie → full detail view. Plot, cast, ratings, runtime, genre, awards.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `api.js` | |
| `router.js` | pushState + popstate handling |
| `main.js` | |

## ✅ Done when — this is the checklist you are marked against

- [ ] Detail fetched by IMDb ID on click (a second endpoint — read the docs for it)
- [ ] A back button returning to results **without re-fetching** the search
- [ ] The URL updates with `history.pushState` (`?s=batman&id=tt0372784`) so the page is **shareable** — pasting that URL into a new tab loads the same view
- [ ] Browser back/forward buttons work correctly (`popstate`)
- [ ] Loading and error states on the detail view too
- [ ] Long plots truncated with a "read more" toggle

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What does `history.pushState` do, and what does it *not* do (hint: no request is made)?
2. How do you read `?s=batman` out of the URL on page load?
3. What is `popstate` and why do you need it?
4. Why is a shareable URL a feature, not a nice-to-have?
5. **Prove it:** copy your URL into a fresh incognito tab. The same movie must load.

---

[← back to the day](../) · [📖 read first](../learn/)
