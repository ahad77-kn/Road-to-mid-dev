# Week 24 · Day 1 — Polish

[🛣️ The Road](../../../README.md) · [📅 Week 24](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 23 · Day 5](../../week-23/day-5/) · [⬆ Week 24 — Capstone: Polish, Deploy, Demo → Final Exam](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 6 · Capstone · **Week topic:** Capstone: Polish, Deploy, Demo → Final Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

web.dev *Core Web Vitals* + *Learn Accessibility*.

## 2️⃣ Build — 2 hours

Make it feel finished. Users judge quality in the first five seconds.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Lighthouse on the main pages: Performance ≥ 85, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 90 — screenshots in the folder
- [ ] Route-level code splitting; check the chunk sizes in the build output
- [ ] Images sized and lazy-loaded; no layout shift (CLS near zero)
- [ ] Keyboard navigable end to end; skip-to-content link; visible focus everywhere
- [ ] Colour contrast AA throughout
- [ ] `<title>` and meta description per route; a favicon; Open Graph tags so a shared link shows a preview
- [ ] Consistent spacing, alignment and typography — do a visual pass at 100% zoom and fix everything that is 1px off
- [ ] Loading states everywhere, including the initial app load
- [ ] Tested in Chrome, Firefox and Safari, and on a real phone

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What were your three biggest performance problems and what fixed them?
2. What is your LCP element? Your CLS score?
3. Navigate the whole app with only a keyboard, in front of me.
4. What is still not perfect, and why did you accept it?

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-24/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 24 day 1: polish"
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

◀ [Week 23 · Day 5](../../week-23/day-5/) · [⬆ Week 24 — Capstone: Polish, Deploy, Demo → Final Exam](../README.md) · [Day 2](../day-2/) ▶
