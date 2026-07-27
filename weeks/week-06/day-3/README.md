# Week 06 · Day 3 — Calculator, part 1

[🛣️ The Road](../../../README.md) · [📅 Week 06](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 06 — The DOM: JavaScript Meets the Page](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** The DOM: JavaScript Meets the Page
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Introduction to events* + JS.info *Browser events*.

## 2️⃣ Build — 2 hours

Build the calculator's **structure and display logic** — no arithmetic yet.

## 3️⃣ Must have — the checklist you are marked against

- [ ] A proper calculator layout in CSS Grid — digits, operators, clear, equals
- [ ] A display area showing the current entry and, above it in smaller text, the pending expression
- [ ] Clicking digits appends to the display; the display never shows a leading `0` (except `0.`)
- [ ] Only one decimal point can be entered per number
- [ ] `C` clears everything; `CE` clears only the current entry
- [ ] All button clicks handled by **one** listener on the container, using event delegation + `data-` attributes — not 18 separate listeners
- [ ] Buttons have `:active` and `:hover` styles

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is event delegation, and what two problems does it solve?
2. What does `event.target` hold? How is it different from `event.currentTarget`?
3. Why is `data-value="7"` better than reading the button's text?
4. Explain bubbling — if you click a `<span>` inside a `<button>` inside a `<div>`, which listeners fire and in what order?
5. **Prove it:** add a new button to the HTML only — no JS changes — and show it works.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-06/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 06 day 3: calculator part 1"
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

◀ [Day 2](../day-2/) · [⬆ Week 06 — The DOM: JavaScript Meets the Page](../README.md) · [Day 4](../day-4/) ▶
