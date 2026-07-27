# Week 06 · Day 5 — To-do list v1

[🛣️ The Road](../../../README.md) · [📅 Week 06](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 06 — The DOM: JavaScript Meets the Page](../README.md) · [Week 07 · Day 1](../../week-07/day-1/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** The DOM: JavaScript Meets the Page
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *DOM manipulation guide*.

## 2️⃣ Build — 2 hours

The classic. Add a task, delete it, mark it done, see the remaining count.

## 3️⃣ Must have — the checklist you are marked against

- [ ] State is a **single array of task objects** — `{ id, text, done }`. One `render()` draws the whole list from that array.
- [ ] Add via a form with `submit` (not a click handler on a button) — and `event.preventDefault()` with a comment on why
- [ ] Empty or whitespace-only input is rejected with a visible message
- [ ] Delete and toggle-done work via **event delegation** on the list, using `data-id`
- [ ] Done items get a class (strikethrough, faded)
- [ ] A live count: "3 of 7 remaining"
- [ ] "Clear completed" button
- [ ] Task text is inserted with `textContent`, never `innerHTML` — and you can say why in one sentence

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why does the form need `preventDefault()`? What happens without it?
2. Why re-render the whole list from the array instead of just appending one `<li>`? Name one advantage of each approach.
3. How does a click on a delete button know *which* task to delete?
4. Add `<img src=x onerror=alert(1)>` as a task title. What happens with `textContent`? What would have happened with `innerHTML`?
5. **Prove it:** in the console, mutate the state array directly and call `render()`. The screen must match. If it does not, your architecture is wrong.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-06/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 06 day 5: to do list v1"
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

◀ [Day 4](../day-4/) · [⬆ Week 06 — The DOM: JavaScript Meets the Page](../README.md) · [Week 07 · Day 1](../../week-07/day-1/) ▶
