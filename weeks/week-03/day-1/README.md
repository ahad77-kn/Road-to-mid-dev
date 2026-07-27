# Week 03 · Day 1 — Make it survive a phone

[🛣️ The Road](../../../README.md) · [📅 Week 03](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 02 · Day 5](../../week-02/day-5/) · [⬆ Week 03 — Responsive Design & Polish → Phase 1 Exam](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 1 · CSS Mastery · **Week topic:** Responsive Design & Polish → Phase 1 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

web.dev *Learn Responsive Design*, ch. 1–5.

## 2️⃣ Build — 2 hours

Take the YouTube skeleton and news header from Week 2 into `day-1/` and make them genuinely responsive.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">` — and you can explain what each part does
- [ ] **Mobile-first CSS**: base styles are the phone layout, `min-width` media queries add the desktop layout. Not the reverse.
- [ ] Sidebar collapses to icons or disappears below 768px
- [ ] Nav collapses to a simple stacked menu (CSS only — no JS yet; a `<details>`/`<summary>` is a legitimate trick)
- [ ] Breakpoints chosen because *your content* breaks there, not copied from Bootstrap — justify each one in a comment
- [ ] **No horizontal scrollbar at 320px.** Test it. This is a hard fail if it scrolls sideways.
- [ ] Tested at 320, 375, 768, 1024, 1440px in DevTools device mode

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What exactly does the viewport meta tag do? What does a phone do without it?
2. Why is mobile-first (`min-width`) preferred over desktop-first (`max-width`)?
3. How do you choose a breakpoint properly?
4. Name three things that commonly cause horizontal overflow on mobile.
5. **Prove it:** open DevTools at 320px width. If anything scrolls sideways, find the offending element using the "find the widest element" trick and fix it live.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-03/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 03 day 1: make it survive a phone"
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

◀ [Week 02 · Day 5](../../week-02/day-5/) · [⬆ Week 03 — Responsive Design & Polish → Phase 1 Exam](../README.md) · [Day 2](../day-2/) ▶
