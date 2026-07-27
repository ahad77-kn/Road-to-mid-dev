# Week 06 · Day 2 — Counter app

[🛣️ The Road](../../../README.md) · [📅 Week 06](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 06 — The DOM: JavaScript Meets the Page](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** The DOM: JavaScript Meets the Page
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info ch. 5–7 — node properties and modifying the document.

## 2️⃣ Build — 2 hours

A counter with +, −, reset. Styled properly (you have CSS skills — use them).

## 3️⃣ Must have — the checklist you are marked against

- [ ] The number turns red below zero and green above, via a **class**, not inline style
- [ ] A step input: `+` and `−` change by that amount
- [ ] Reset button returns to zero and clears the colour class
- [ ] The count is held in a **single JavaScript variable** — the DOM displays it, it does not store it. This distinction is the whole point of the day.
- [ ] One `render()` function that puts current state on screen; every button handler updates the variable then calls `render()`
- [ ] Buttons are disabled at a max (say 100) and min (−100)

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Where does your app's "truth" live — in the variable or in the DOM text? Why does that matter?
2. What would go wrong if you read the number back out of the DOM with `parseInt(el.textContent)` each time?
3. Why is a single `render()` function better than updating the DOM inside each handler?
4. What is the difference between `addEventListener("click", fn)` and `onclick = fn`?
5. **Prove it:** add a "×2" button in under 2 minutes. If your structure is right, it is 3 lines.

> **This `state → render()` pattern is React in miniature.** Get it now and Week 12 will feel like a formality.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-06/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 06 day 2: counter app"
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

◀ [Day 1](../day-1/) · [⬆ Week 06 — The DOM: JavaScript Meets the Page](../README.md) · [Day 3](../day-3/) ▶
