# Week 02 · Day 2 — Card gallery

[🛣️ The Road](../../../README.md) · [📅 Week 02](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 02 — Flexbox & Grid](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 1 · CSS Mastery · **Week topic:** Flexbox & Grid
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

finish all 24 Froggy levels + MDN *Flexbox*.

## 2️⃣ Build — 2 hours

6 product cards in a row that wraps. Each card: image placeholder, title, 2 lines of description (make them **different lengths on purpose**), price, button.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Cards wrap to the next row when the screen narrows (`flex-wrap`)
- [ ] **All cards the same height** in a row, even with different text lengths — and the button sits flush at the bottom of every card
- [ ] Even gaps using `gap`, never `margin` hacks on children
- [ ] `flex: 1 1 300px` style sizing — explain in a comment what each of the three values does
- [ ] The last row does **not** stretch weirdly when it has fewer cards — solve it and explain how

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What do the three values in `flex: 1 1 300px` mean?
2. What is the default value of `flex-basis`, and why does `flex: 1` behave differently from `width: 100%`?
3. How do you make one card push its button to the bottom regardless of text length? (Two valid answers — name both.)
4. `flex-wrap: wrap` vs `nowrap` — what happens to `flex-shrink` in each case?
5. **Prove it:** delete one card. The layout must still look intentional.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-02/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 02 day 2: card gallery"
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

◀ [Day 1](../day-1/) · [⬆ Week 02 — Flexbox & Grid](../README.md) · [Day 3](../day-3/) ▶
