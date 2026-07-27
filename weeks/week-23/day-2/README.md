# Week 23 · Day 2 — First vertical slice

[🛣️ The Road](../../../README.md) · [📅 Week 23](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 23 — Capstone: Build the Frontend, Connect Everything](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 6 · Capstone · **Week topic:** Capstone: Build the Frontend, Connect Everything
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 2️⃣ Build — 3 hours

One complete feature — your app's single most important action.

## 3️⃣ Must have — the checklist you are marked against

- [ ] The full loop: list → create → view detail → edit → delete, all against the real API
- [ ] Loading skeletons, error states with retry, and an empty state — all three
- [ ] Form validation on the client, with server validation errors mapped to the right fields
- [ ] Success feedback (toast) on every mutation
- [ ] Confirmation before any destructive action
- [ ] Fully responsive
- [ ] `day-2/progress.md`: what shipped, what took longest, what you cut

**Definition of done for a slice:** a person who has never seen the app can complete this action on a phone, and every wrong turn shows a helpful message.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Demo the slice end to end on a phone-sized viewport.
2. Break it deliberately — no network, invalid input, a deleted record. All must fail gracefully.
3. What is duplicated between this slice and the next one? Should it be extracted yet?

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-23/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 23 day 2: first vertical slice"
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

◀ [Day 1](../day-1/) · [⬆ Week 23 — Capstone: Build the Frontend, Connect Everything](../README.md) · [Day 3](../day-3/) ▶
