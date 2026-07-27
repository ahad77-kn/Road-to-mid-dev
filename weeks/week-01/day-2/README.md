# Week 01 · Day 2 — Pricing card (no flexbox)

[🛣️ The Road](../../../README.md) · [📅 Week 01](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 01 — CSS Fundamentals, Selectors & the Box Model](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 1 · CSS Mastery · **Week topic:** CSS Fundamentals, Selectors & the Box Model
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

web.dev *Box model*, twice. Then MDN box model.

## 2️⃣ Build — 2 hours

A pricing card: plan title, big price, a list of 5 features, and a call-to-action button. **Flexbox and Grid are banned this week** — you will use only `display`, `padding`, `margin`, `width` and normal document flow. This is deliberate: next week flexbox will feel like a gift instead of a mystery.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `box-sizing: border-box` set once at the top and explained in a comment
- [ ] All class names, no styling by tag
- [ ] The feature list uses `<ul>`/`<li>` with the default bullets restyled or removed
- [ ] The button is a real `<button>` or `<a>`, with `:hover` and `:focus-visible` states
- [ ] Consistent spacing scale — pick 4/8/16/24/32px and use **only** those numbers
- [ ] A comment at the top of the CSS listing your spacing scale and colours

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is the difference between `padding` and `margin`? When does the background colour show through?
2. Why does `width: 100%` plus `padding: 20px` overflow the parent by default?
3. What does `margin: 0 auto` do, and what condition must be true for it to work?
4. Name two block-level elements and two inline elements. What is the practical difference?
5. **Prove it:** set `box-sizing: content-box` on the card, screenshot the break, set it back.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-01/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 01 day 2: pricing card no flexbox"
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

◀ [Day 1](../day-1/) · [⬆ Week 01 — CSS Fundamentals, Selectors & the Box Model](../README.md) · [Day 3](../day-3/) ▶
