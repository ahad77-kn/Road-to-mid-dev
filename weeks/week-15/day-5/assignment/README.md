# 🛠️ Assignment — Week 15 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 15](../../README.md)

## What to build

Rebuild the Week 9 movie search in React using your own hooks.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/` | the movie search, built only on your hooks |
| `vanilla-vs-react.md` | this vs your Week 9 version |

## ✅ Done when — this is the checklist you are marked against

- [ ] Search with debounce, results grid, loading skeletons, error and empty states
- [ ] Built on `useFetch` + `useDebounce` — no raw `fetch` in any component
- [ ] Recent searches via `useLocalStorage`, shown as clickable chips
- [ ] Infinite scroll or "load more" with pagination
- [ ] A `useRef` used to focus the search input on mount and after clearing
- [ ] Images lazy-loaded with a blur-up placeholder
- [ ] `day-5/vanilla-vs-react.md`: this vs your Week 9 version — line counts, what got easier, what got harder, and which you would maintain

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is a ref, and how is it different from state?
2. When does changing a ref cause a re-render? (Trick question — answer it.)
3. Compare this with your vanilla version: what did React genuinely give you here?
4. How does your `useFetch` prevent the race condition inside this app?
5. **Prove it:** open the Profiler while typing. Show which components re-render per keystroke, and justify each one.

---

[← back to the day](../) · [📖 read first](../learn/)
