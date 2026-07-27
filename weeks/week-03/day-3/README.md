# Week 03 · Day 3 — Motion, done with restraint

[🛣️ The Road](../../../README.md) · [📅 Week 03](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 03 — Responsive Design & Polish → Phase 1 Exam](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 1 · CSS Mastery · **Week topic:** Responsive Design & Polish → Phase 1 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Using CSS transitions* + web.dev *Animations*.

## 2️⃣ Build — 2 hours

Add interaction feedback to every interactive element in the landing page. **Subtle.** The test is that a normal person would not consciously notice the animations, only that the page "feels good".

## 3️⃣ Must have — the checklist you are marked against

- [ ] `transition` on buttons, links, cards, inputs — 150–250ms, with a real easing function (`ease-out`, not `linear`)
- [ ] **Only** `transform` and `opacity` are animated — never `width`, `height`, `top`, `margin`. Explain why in a comment.
- [ ] A `:hover` lift on cards using `transform: translateY(-4px)` + shadow
- [ ] A focus state that is *also* animated and keyboard-visible
- [ ] `@media (prefers-reduced-motion: reduce)` block that disables the motion
- [ ] One `@keyframes` animation — a loading skeleton or spinner
- [ ] No layout shift when hovering anything. Check in DevTools.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why are `transform` and `opacity` cheap to animate, while `width` and `top` are expensive?
2. What are the four parts of the `transition` shorthand?
3. What is `prefers-reduced-motion` and who does it help?
4. Difference between `transition` and `@keyframes` — when do you need each?
5. **Prove it:** open DevTools → Rendering → "Paint flashing". Show that your hover effect does not repaint the whole card.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-03/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 03 day 3: motion done with restraint"
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

◀ [Day 2](../day-2/) · [⬆ Week 03 — Responsive Design & Polish → Phase 1 Exam](../README.md) · [Day 4](../day-4/) ▶
