# 🛠️ Assignment — Week 09 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 09](../../README.md)

## What to build

Same app, four upgrades — this is the day the app stops feeling like a student project.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `debounce.js` | written by hand |
| `cache.js` | |
| `api.js` | now with AbortController |
| `performance.md` | request count, naive vs yours, counted in the Network tab |

## ✅ Done when — this is the checklist you are marked against

- [ ] **Search-as-you-type, debounced 400ms** — you write the debounce function yourself, no library
- [ ] **`AbortController`** cancels the in-flight request when a new keystroke arrives. Show in the Network tab that old requests are cancelled, not just ignored.
- [ ] **A cache**: searching the same term twice hits a `Map`, not the network. Show the Network tab proving zero requests on a repeat search.
- [ ] **Pagination**: OMDb returns 10 per page — add "Load more" or numbered pages using `totalResults`
- [ ] Recent searches saved to localStorage and shown as clickable chips
- [ ] `day-3/performance.md`: how many requests a naive version makes for the word "batman" typed at normal speed, vs yours. Count both from the Network tab.

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is debouncing? Explain it as if to a non-programmer, then show your implementation.
2. Debounce vs throttle — when is each right?
3. What is a race condition here — how can a *slower earlier* request overwrite a *faster later* one? How does `AbortController` fix it?
4. What is your cache's invalidation strategy? What could go stale?
5. **Prove it:** type "batman" fast with the Network tab open. Show me the cancelled requests.

---

[← back to the day](../) · [📖 read first](../learn/)
