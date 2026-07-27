# Week 06 · Day 1 — DOM playground

[🛣️ The Road](../../../README.md) · [📅 Week 06](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 05 · Day 5](../../week-05/day-5/) · [⬆ Week 06 — The DOM: JavaScript Meets the Page](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** The DOM: JavaScript Meets the Page
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info *Document*, ch. 1–4.

## 2️⃣ Build — 2 hours

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

## 3️⃣ Must have — the checklist you are marked against

- [ ] 20 numbered, commented operations
- [ ] `day-1/notes.md`: the difference between `textContent`, `innerText` and `innerHTML`, in your own words, with the security note
- [ ] At least one operation uses `querySelectorAll` and iterates it
- [ ] Styling changes made by **toggling a class**, not by writing `element.style.x` — except one deliberate example of each, with a comment on why classes are better
- [ ] `<script>` placed correctly (before `</body>` or with `defer`) — explain why in a comment

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is the difference between an HTMLCollection and a NodeList? Which one is live?
2. `getElementById` vs `querySelector` — when does each make sense?
3. Why is `innerHTML = userInput` dangerous? What should you use instead?
4. What happens if your `<script>` runs before the HTML below it is parsed?
5. **Prove it:** I point at any element on your page; you select it and turn it red, live, in the console, in one line.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-06/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 06 day 1: dom playground"
git push
```

## 🤖 The AI rule for today

Every `LEARNED.md` has this mandatory line:

```
**AI used?** yes / no — what for:
```

| What you did | Allowed? | Your maximum score |
| --- | --- | --- |
| Wrote it yourself using docs and search | ✅ | **10/10** |
| Asked AI to *explain* a concept, then wrote the code yourself | ✅ | **10/10** |
| AI wrote part of the code — and you say exactly which part | ⚠️ | 7/10 |
| AI wrote it, you say so honestly | ⚠️ | 4/10 → redo by hand |
| AI wrote it and you did not say so | ❌ | **0/10** |

Asking AI *"explain how the box model works"* costs you nothing and is smart learning.
Asking it *"write my pricing card"* and staying quiet is the one thing here that scores zero.
Full policy: [GRADING.md](../../../GRADING.md).

## 🆘 Stuck?

1. Re-read the error message. All of it — file name and line number included.
2. Go back to the **Read first** links above. The answer is usually in the paragraph you skimmed.
3. Search like a developer: `mdn <the exact property>`, not "how do I".
4. Still stuck after 30 minutes? Write the question down in `LEARNED.md` and ask the teacher.
   Being stuck is not failure — hiding that you were stuck is.
5. Deeper reading on every topic: [📚 RESOURCES.md](../../../RESOURCES.md)

## 📂 Files in this folder

| File | Who writes it | Required | Done |
| --- | --- | --- | --- |
| Your code (`.html`, `.css`, `.js`, …) | you | ✅ | ⬜ |
| `LEARNED.md` | you, the same day | ✅ | ⬜ |
| `ASSESSMENT.md` | the teacher | – | ⬜ |

**No folder + no `LEARNED.md` = this assignment does not exist.**

---

◀ [Week 05 · Day 5](../../week-05/day-5/) · [⬆ Week 06 — The DOM: JavaScript Meets the Page](../README.md) · [Day 2](../day-2/) ▶
