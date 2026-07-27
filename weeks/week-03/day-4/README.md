# Week 03 · Day 4 — Phase project, part 1: build the portfolio

[🛣️ The Road](../../../README.md) · [📅 Week 03](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 03 — Responsive Design & Polish → Phase 1 Exam](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 1 · CSS Mastery · **Week topic:** Responsive Design & Polish → Phase 1 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Responsive images* + web.dev *Accessibility basics*.

## 2️⃣ Build — 2 hours

Start your real portfolio site — this is the Phase 1 deliverable and the first thing anyone will see when you apply for work. Sections: hero, about, skills, projects grid (your Week 1–3 work), contact form.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Real content — your actual name, your actual projects. No lorem ipsum.
- [ ] Semantic HTML throughout: `<header> <nav> <main> <section> <article> <footer>` — and a heading order that never skips a level
- [ ] Every image has meaningful `alt` text (decorative images get `alt=""` — know the difference)
- [ ] Organised files: `index.html`, `css/style.css`, `images/`, `README.md`
- [ ] CSS custom properties for the colour palette and spacing scale, defined once in `:root`
- [ ] BEM-style class names, consistently

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why does `<section>` beat `<div>` for a screen-reader user?
2. When should `alt` be empty, and when is empty `alt` a bug?
3. What is the correct heading order, and what breaks if you jump `h2` → `h4`?
4. What are CSS custom properties and what do they give you that a Sass variable does not?
5. **Prove it:** turn off CSS entirely (DevTools → disable stylesheets). The page must still be readable and in a sensible order.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-03/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 03 day 4: phase project part 1 build"
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

◀ [Day 3](../day-3/) · [⬆ Week 03 — Responsive Design & Polish → Phase 1 Exam](../README.md) · [Day 5](../day-5/) ▶
