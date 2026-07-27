# Week 02 · Day 4 — Photo gallery with spans

[🛣️ The Road](../../../README.md) · [📅 Week 02](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 02 — Flexbox & Grid](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 1 · CSS Mastery · **Week topic:** Flexbox & Grid
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *CSS grid layout* + *grid-template-areas*.

## 2️⃣ Build — 2 hours

An Instagram-explore-style gallery: a grid of images where some cells span 2 columns and/or 2 rows. At least 12 tiles, at least 3 of them oversized.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `grid-template-columns: repeat(4, 1fr)` (or similar) plus `grid-column: span 2` / `grid-row: span 2` on selected items
- [ ] Images fill their cell without distortion — `object-fit: cover` with a fixed cell aspect ratio (`aspect-ratio`)
- [ ] No gaps or holes left in the grid (understand `grid-auto-flow: dense`, use it if you need it, explain in a comment)
- [ ] A hover effect on tiles that does not shift the layout (scale/opacity, not width/margin)
- [ ] Use placeholder images from [picsum.photos](https://picsum.photos/)

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Difference between `grid-column: span 2` and `grid-column: 1 / 3`?
2. What does `grid-auto-flow: dense` do, and what is the cost of using it?
3. Why does `object-fit: cover` need the image to have a set height or aspect ratio?
4. Where does an item go if you never tell Grid where to put it?
5. **Prove it:** in DevTools, turn on the grid overlay and read out the line numbers your spanning item occupies.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-02/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 02 day 4: photo gallery with spans"
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

◀ [Day 3](../day-3/) · [⬆ Week 02 — Flexbox & Grid](../README.md) · [Day 5](../day-5/) ▶
