# Week 07 · Day 4 — Carousel, from nothing

[🛣️ The Road](../../../README.md) · [📅 Week 07](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 07 — Events, Forms & Real Interactive Apps](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Events, Forms & Real Interactive Apps
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Regular expressions* (Thursday's warm-up reading; the carousel uses none, but you need regex before Week 9).

## 2️⃣ Build — 2 hours

An image slider/carousel with **no library**.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Next / Previous buttons that wrap around at both ends
- [ ] Dot indicators — clickable, and the active one is styled
- [ ] Auto-play every 4 seconds, **pausing on hover** and on focus
- [ ] Keyboard: left/right arrows move the slides when the carousel has focus
- [ ] Smooth CSS `transform` transition — not `left`/`margin` animation
- [ ] Touch swipe on mobile (`touchstart`/`touchend`, compare X positions)
- [ ] Handles any number of slides — hard-coding "5" anywhere is a fail
- [ ] Images lazy-loaded (`loading="lazy"`) with `alt` text

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. How do you make index wrap-around work with the modulo operator? Write it.
2. Why animate `transform: translateX()` instead of `left`?
3. What happens if auto-play fires while the user is mid-swipe? How did you prevent it?
4. How would you make this reusable for two carousels on the same page?
5. **Prove it:** add three more images to the HTML only. It must still work perfectly.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-07/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 07 day 4: carousel from nothing"
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

◀ [Day 3](../day-3/) · [⬆ Week 07 — Events, Forms & Real Interactive Apps](../README.md) · [Day 5](../day-5/) ▶
