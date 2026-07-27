# Week 07 · Day 1 — Rebuild the to-do, blind

[🛣️ The Road](../../../README.md) · [📅 Week 07](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 06 · Day 5](../../week-06/day-5/) · [⬆ Week 07 — Events, Forms & Real Interactive Apps](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Events, Forms & Real Interactive Apps
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

nothing. **Close Week 6's folder. Do not open it.** You may read your own `LEARNED.md` notes, nothing else.

## 2️⃣ Build — 3 hours

The whole to-do app again, from an empty `day-1/` folder — plus three features it did not have:
- Edit a task (double-click the text, it becomes an input)
- Filter: All / Active / Done
- Drag-free reordering with ↑/↓ buttons

## 3️⃣ Must have — the checklist you are marked against

- [ ] Written without opening Week 6's code — declare this honestly in `LEARNED.md`
- [ ] Single state array, single `render()`
- [ ] All three new features working
- [ ] `day-1/rebuild-notes.md`: what you forgot and had to look up, and what came out automatically
- [ ] After finishing, diff it mentally against Week 6 — one paragraph on what you did better this time

**Struggling is the point.** If you get stuck for 20 minutes, look up the *specific* API on MDN — not the whole app in a tutorial. Note every lookup in `rebuild-notes.md`; that list is your real syllabus.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What did you have to look up? Why do you think that particular thing did not stick?
2. Walk through your render function — what happens to the DOM on every keystroke of an edit?
3. How does your filter work — do you filter the array, or hide elements with CSS? Trade-offs of each?
4. Where does the edit-in-place input's value go when it loses focus?
5. **Prove it:** add a fourth feature I name on the spot, in under 15 minutes.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-07/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 07 day 1: rebuild the to do blind"
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

◀ [Week 06 · Day 5](../../week-06/day-5/) · [⬆ Week 07 — Events, Forms & Real Interactive Apps](../README.md) · [Day 2](../day-2/) ▶
