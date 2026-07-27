# 🛠️ Assignment — Week 06 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 06](../../README.md)

## What to build

The classic. Add a task, delete it, mark it done, see the remaining count.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `script.js` | all the JavaScript |

## ✅ Done when — this is the checklist you are marked against

- [ ] State is a **single array of task objects** — `{ id, text, done }`. One `render()` draws the whole list from that array.
- [ ] Add via a form with `submit` (not a click handler on a button) — and `event.preventDefault()` with a comment on why
- [ ] Empty or whitespace-only input is rejected with a visible message
- [ ] Delete and toggle-done work via **event delegation** on the list, using `data-id`
- [ ] Done items get a class (strikethrough, faded)
- [ ] A live count: "3 of 7 remaining"
- [ ] "Clear completed" button
- [ ] Task text is inserted with `textContent`, never `innerHTML` — and you can say why in one sentence

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Why does the form need `preventDefault()`? What happens without it?
2. Why re-render the whole list from the array instead of just appending one `<li>`? Name one advantage of each approach.
3. How does a click on a delete button know *which* task to delete?
4. Add `<img src=x onerror=alert(1)>` as a task title. What happens with `textContent`? What would have happened with `innerHTML`?
5. **Prove it:** in the console, mutate the state array directly and call `render()`. The screen must match. If it does not, your architecture is wrong.

---

[← back to the day](../) · [📖 read first](../learn/)
