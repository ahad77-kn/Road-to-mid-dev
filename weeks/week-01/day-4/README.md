# Week 01 · Day 4 — Typography page, `rem` only

[🛣️ The Road](../../../README.md) · [📅 Week 01](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 01 — CSS Fundamentals, Selectors & the Box Model](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 1 · CSS Mastery · **Week topic:** CSS Fundamentals, Selectors & the Box Model
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

web.dev *Sizing units* + MDN *Values and units*.

## 2️⃣ Build — 2 hours

An article page: title, subtitle, author line, 4–5 paragraphs, a subheading, a blockquote, and a list. It must be genuinely comfortable to read.

## 3️⃣ Must have — the checklist you are marked against

- [ ] **Every** size in `rem` (or unitless for `line-height`). No `px` anywhere except `border` widths — justify each one in a comment
- [ ] A type scale: pick 4–5 sizes with a consistent ratio, listed in a comment at the top
- [ ] `line-height` between 1.5 and 1.7 on body text, unitless
- [ ] Body text between 60–75 characters per line (use `max-width` in `ch`)
- [ ] Vertical rhythm — consistent, deliberate space between paragraphs and headings
- [ ] A web font loaded from [Google Fonts](https://fonts.google.com/) with a fallback stack

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is `1rem` based on? What is `1em` based on? Give a case where they differ.
2. Why does `line-height: 1.5` behave differently from `line-height: 150%` on nested elements?
3. What is `1ch`, and why is it good for line length?
4. A user sets their browser font size to 24px. What happens to your page in `px` vs in `rem`?
5. **Prove it:** change the browser's default font size in settings and show your page scaling correctly.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-01/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 01 day 4: typography page rem only"
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

◀ [Day 3](../day-3/) · [⬆ Week 01 — CSS Fundamentals, Selectors & the Box Model](../README.md) · [Day 5](../day-5/) ▶
