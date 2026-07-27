# Week 02 · Day 1 — The header, twice

[🛣️ The Road](../../../README.md) · [📅 Week 02](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 01 · Day 5](../../week-01/day-5/) · [⬆ Week 02 — Flexbox & Grid](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 1 · CSS Mastery · **Week topic:** Flexbox & Grid
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Flexbox Froggy levels 1–12, then web.dev *Flexbox*.

## 2️⃣ Build — 2 hours

Part A — recreate the header of a real news site (Dawn, BBC, Geo): logo on the left, nav links on the right, a search icon at the far right. Build it **first** with `display: inline-block` and floats — the Week-1 way. Suffer for 30 minutes.
Part B — rebuild the identical header with Flexbox in `day-1/flex.html`.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Both versions in the folder, visually identical
- [ ] `day-1/comparison.md`: at least 5 sentences on what flexbox removed — name the specific properties you no longer needed (`float`, `clear`, `vertical-align`, wrapper divs, `overflow: hidden` hacks)
- [ ] Vertically centred nav links using `align-items`, not `line-height` or `padding` guesses
- [ ] Space pushed between logo and nav using `justify-content` or `margin-left: auto` — explain which you chose and why
- [ ] `gap` used for spacing between links, not `margin-right` on each

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is the main axis? What happens to `justify-content` when you set `flex-direction: column`?
2. What does `margin-left: auto` do inside a flex container, and why?
3. Difference between `align-items` and `align-self`?
4. Why did floats need clearfix hacks, and what was actually going wrong?
5. **Prove it:** change `flex-direction` to `column` live and predict — out loud, before pressing Enter — exactly what will move.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-02/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 02 day 1: the header twice"
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

◀ [Week 01 · Day 5](../../week-01/day-5/) · [⬆ Week 02 — Flexbox & Grid](../README.md) · [Day 2](../day-2/) ▶
