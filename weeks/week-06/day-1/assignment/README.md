# 🛠️ Assignment — Week 06 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 06](../../README.md)

## What to build

An HTML page in `day-1/` with a variety of elements (headings, a list, a table, images, buttons, inputs) plus `script.js` that performs 20 documented operations. Number each in a comment.

Required operations include:
- Select by id, by class, by tag, by CSS selector, and select *all* of something
- Change text with `textContent`; change markup with `innerHTML`
- Read and set an attribute (`src`, `href`, `alt`)
- Add, remove and toggle a class with `classList`
- Create a new element and append it
- Insert an element *before* another one
- Remove an element
- Loop over a NodeList and change all of them
- Walk the tree: `parentElement`, `children`, `nextElementSibling`
- Read a `data-` attribute with `dataset`
- Change a CSS custom property from JS

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `script.js` | all the JavaScript |
| `notes.md` | textContent vs innerText vs innerHTML, with the security note |

## ✅ Done when — this is the checklist you are marked against

- [x] 20 numbered, commented operations
- [x] `day-1/notes.md`: the difference between `textContent`, `innerText` and `innerHTML`, in your own words, with the security note
- [x] At least one operation uses `querySelectorAll` and iterates it
- [x] Styling changes made by **toggling a class**, not by writing `element.style.x` — except one deliberate example of each, with a comment on why classes are better
- [x] `<script>` placed correctly (before `</body>` or with `defer`) — explain why in a comment

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is the difference between an HTMLCollection and a NodeList? Which one is live?
2. `getElementById` vs `querySelector` — when does each make sense?
3. Why is `innerHTML = userInput` dangerous? What should you use instead?
4. What happens if your `<script>` runs before the HTML below it is parsed?
5. **Prove it:** I point at any element on your page; you select it and turn it red, live, in the console, in one line.

---

[← back to the day](../) · [📖 read first](../learn/)
