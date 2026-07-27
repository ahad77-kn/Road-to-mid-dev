# Week 02 · Day 5 — YouTube home skeleton

[🛣️ The Road](../../../README.md) · [📅 Week 02](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 02 — Flexbox & Grid](../README.md) · [Week 03 · Day 1](../../week-03/day-1/) ▶

**Phase:** Phase 1 · CSS Mastery · **Week topic:** Flexbox & Grid
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Layout cookbook* — read 3 recipes.

## 2️⃣ Build — 2 hours

The YouTube home page skeleton with dummy grey boxes — no real content needed. Top bar (logo, search, avatar), left sidebar (nav items with icons), main area (a responsive grid of video cards; each card = thumbnail, avatar, title, channel, views).

**This is the week's real test:** page skeleton in **Grid**, individual components in **Flexbox**. Making that choice correctly is the skill.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Page skeleton in Grid (`grid-template-areas`)
- [ ] Top bar and video-card internals in Flexbox
- [ ] `day-5/decisions.md`: for each of the 4 main regions, one line — "Grid because…" / "Flex because…"
- [ ] Video grid uses `repeat(auto-fill, minmax(280px, 1fr))` — no media queries yet
- [ ] Sidebar scrolls independently of the main area (`overflow-y: auto` + fixed height)
- [ ] At least 12 video cards

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Give one layout that is genuinely easier in Flexbox, and one genuinely easier in Grid. Say why.
2. What does `repeat(auto-fill, minmax(280px, 1fr))` do as the screen widens? Difference from `auto-fit`?
3. Can an element be both a grid item and a flex container? What does that mean in practice?
4. How does `overflow: auto` interact with a grid track's height?
5. **Prove it:** resize the browser from 1400px to 700px and narrate what the grid is doing at each break.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-02/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 02 day 5: youtube home skeleton"
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

◀ [Day 4](../day-4/) · [⬆ Week 02 — Flexbox & Grid](../README.md) · [Week 03 · Day 1](../../week-03/day-1/) ▶
