# Week 03 · Day 2 — Responsive with no media queries

[🛣️ The Road](../../../README.md) · [📅 Week 03](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 03 — Responsive Design & Polish → Phase 1 Exam](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 1 · CSS Mastery · **Week topic:** Responsive Design & Polish → Phase 1 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Responsive design* + *Media queries*.

## 2️⃣ Build — 2 hours

The Week-2 card gallery: 1 column on a phone, 2 on a tablet, 3+ on desktop — and **not a single media query is allowed**.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr))` — and you can explain every part of it, including why the inner `min()` is there
- [ ] Fluid typography with `clamp()` on headings
- [ ] Images with `max-width: 100%` and `height: auto`
- [ ] Container width managed with `width: min(1100px, 100% - 2rem)` or similar — no fixed `px` widths
- [ ] `day-2/how.md`: explain in your own words how the layout knows to change without any media query

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. `auto-fit` vs `auto-fill` — what is the visible difference when there are only 2 items in a wide container?
2. Read `clamp(1.5rem, 4vw, 3rem)` out loud in plain English.
3. Why does `minmax(280px, 1fr)` overflow at 320px, and how does `min(280px, 100%)` fix it?
4. When *should* you still use a media query?
5. **Prove it:** drag the browser edge slowly from 1400px to 320px. Narrate every column change as it happens.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-03/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 03 day 2: responsive with no media queries"
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

◀ [Day 1](../day-1/) · [⬆ Week 03 — Responsive Design & Polish → Phase 1 Exam](../README.md) · [Day 3](../day-3/) ▶
