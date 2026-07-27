# 🛠️ Assignment — Week 09 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 09](../../README.md)

## What to build

A search box; type a film name, get a grid of results.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `api.js` | |
| `render.js` | |
| `main.js` | |
| `config.example.js` | the key file shape — the real `config.js` is gitignored |

## ✅ Done when — this is the checklist you are marked against

- [ ] Search form → results grid (poster, title, year, type)
- [ ] Loading skeleton, error state, and a "no results found" empty state — all three visibly different
- [ ] Missing posters handled with a placeholder — the API returns `"N/A"`, which is not a URL
- [ ] API key kept in a separate `config.js` that is **gitignored**, with a `config.example.js` committed instead. Note in the README that a frontend key is still visible to users and why.
- [ ] All API code in `api.js`; render code cannot see `fetch`
- [ ] The API's own error shape handled (`{ Response: "False", Error: "Movie not found!" }`) — a 200 response that is still a failure. Note this in your README: **HTTP success ≠ application success.**

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is the data shape OMDb returns for a search? Draw it from memory.
2. The API returns 200 with `Response: "False"`. Why is checking only `response.ok` not enough?
3. Where does your API key live, and who can still see it?
4. What happens when the poster URL is `"N/A"` — what did you do?
5. **Prove it:** search for `asdkjhasd`. Then break your key deliberately. Both must show sensible, different messages.

---

[← back to the day](../) · [📖 read first](../learn/)
