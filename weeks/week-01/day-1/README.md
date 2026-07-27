# Week 01 · Day 1 — Business card ✅ done

[🛣️ The Road](../../../README.md) · [📅 Week 01](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 00 · Day 5](../../week-00/day-5/) · [⬆ Week 01 — CSS Fundamentals, Selectors & the Box Model](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 1 · CSS Mastery · **Week topic:** CSS Fundamentals, Selectors & the Box Model
**Time budget:** 1 hr learning + 2 hr building
**Status:** ✅ **assessed — 6/10** · see [ASSESSMENT.md](ASSESSMENT.md)

---

## 1️⃣ Read first — 1 hour

MDN *CSS styling basics*.

## 2️⃣ Build — 2 hours

Recreate a business card in HTML/CSS — name, role, phone, email, address. Fixed width, clear spacing, borders, a background colour.

## 3️⃣ Must have — the checklist you are marked against

- [x] Separate `card.html` and `card.css` (no `<style>` block, no inline styles)
- [x] The card is a single container element with everything inside it
- [x] Deliberate padding, border and border-radius
- [ ] Class-based selectors, not element selectors (`.card__name`, not `h1`)
- [ ] No `position` used to fix spacing — margin and padding only

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What are the four layers of the box model, from the inside out?
2. `width: 300px; padding: 20px; border: 2px` — how wide is the element on screen? Now add `box-sizing: border-box` — how wide is it?
3. Why is styling `h1 { }` directly a problem once the page grows?
4. **Prove it:** open the card in DevTools, hover the element, and read the box-model diagram out loud.

**📌 Assessment:** [`day-1/ASSESSMENT.md`](ASSESSMENT.md) — **6/10, PASS.** Works, but styled by tag instead of class and used `position: relative; top: -30px` to fix a gap caused by margin collapsing. Both are fixed on Day 3.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-01/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 01 day 1: business card done"
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

◀ [Week 00 · Day 5](../../week-00/day-5/) · [⬆ Week 01 — CSS Fundamentals, Selectors & the Box Model](../README.md) · [Day 2](../day-2/) ▶
