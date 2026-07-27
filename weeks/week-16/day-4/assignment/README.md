# 🛠️ Assignment — Week 16 Day 4 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 16](../../README.md)

## What to build

Favourites, reachable from anywhere.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/context/FavouritesContext.jsx` | |
| `src/context/ThemeContext.jsx` | |
| `context.md` | the prop-drilling you avoided + context's re-render cost |

## ✅ Done when — this is the checklist you are marked against

- [ ] `FavouritesContext` with a provider holding the favourites array
- [ ] Add/remove favourites from **any** page — the movie card, the detail page, the favourites page
- [ ] A count badge in the nav, live-updating
- [ ] Persisted with your `useLocalStorage` hook
- [ ] A `useFavourites()` custom hook wrapping `useContext`, which **throws a clear error** if used outside the provider. Explain why that guard matters.
- [ ] A `ThemeContext` too (light/dark) — proving you can compose providers
- [ ] `day-4/context.md`: show the prop-drilling version you avoided (how many components would have had to pass the prop through?) and note context's cost — every consumer re-renders when the value changes

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What problem does context solve? What problem does it *not* solve? (It is not a state manager.)
2. What happens to consumers when the context value changes — all of them, or only the ones using the changed part?
3. Why does your `useFavourites` throw outside the provider? What is the alternative failure mode?
4. When would composition (`children`) be better than context?
5. **Prove it:** in the Profiler, toggle the theme and show me exactly which components re-rendered.

---

[← back to the day](../) · [📖 read first](../learn/)
