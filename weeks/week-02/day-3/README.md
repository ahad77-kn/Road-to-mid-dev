# Week 02 · Day 3 — Holy grail in Grid

[🛣️ The Road](../../../README.md) · [📅 Week 02](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 02 — Flexbox & Grid](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 1 · CSS Mastery · **Week topic:** Flexbox & Grid
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Grid Garden, all levels + web.dev *Grid*.

## 2️⃣ Build — 2 hours

The classic page skeleton: header across the top, left sidebar, main content, right sidebar, footer across the bottom. Dummy content is fine, but give it real proportions.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Built with `grid-template-areas` — the CSS must be visually readable as an ASCII picture of the page
- [ ] `grid-template-columns` using `fr` units and at least one `minmax()`
- [ ] Footer stays at the bottom even when the content is short (`min-height: 100vh` on the grid + a row that grows)
- [ ] `gap` for all spacing
- [ ] `day-3/why-grid.md`: 3 sentences on why this layout is painful in Flexbox and natural in Grid

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is `1fr`? How is it different from `33.33%`?
2. What does `minmax(200px, 1fr)` mean, in words?
3. Explain `grid-template-areas` — what does a `.` mean in the string?
4. What is the difference between an *explicit* and an *implicit* grid track?
5. **Prove it:** move the sidebar from left to right by changing **one** line of CSS.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-02/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 02 day 3: holy grail in grid"
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

◀ [Day 2](../day-2/) · [⬆ Week 02 — Flexbox & Grid](../README.md) · [Day 4](../day-4/) ▶
