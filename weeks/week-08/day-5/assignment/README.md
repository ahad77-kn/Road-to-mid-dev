# 🛠️ Assignment — Week 08 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 08](../../README.md)

## What to build

A real app against [randomuser.me](https://randomuser.me/) — fetch users, render them as cards.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `api.js` | every fetch lives here |
| `render.js` | every DOM write lives here |
| `main.js` | wiring only |

## ✅ Done when — this is the checklist you are marked against

- [ ] Fetch 12 users and render them as cards (reuse your Week 2 flex/grid gallery CSS)
- [ ] A **loading skeleton** while fetching — not the word "Loading…", a real shimmer skeleton
- [ ] An **error state** with a Retry button that actually retries
- [ ] An **empty state** for when the API returns nothing
- [ ] "Load more" appends the next 12 without wiping the existing ones
- [ ] A nationality filter that re-fetches with the API's `?nat=` parameter
- [ ] All API code in one `api.js` module — no `fetch` calls scattered through the render code
- [ ] Card data inserted safely (`textContent`, or escaped) — API data is user data
- [ ] No double-fetch when "Load more" is clicked twice quickly (disable the button while in flight)

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Walk through the three states your UI can be in and how each is triggered.
2. What happens if a user clicks "Load more" three times fast? How did you handle it?
3. Why keep `fetch` calls in one module?
4. How do query parameters work — and how would you add two of them safely? (`URLSearchParams`.)
5. **Prove it:** DevTools → Network → Offline. Click Retry. Then back online, Retry again. Both paths must work without a refresh.

---

[← back to the day](../) · [📖 read first](../learn/)
