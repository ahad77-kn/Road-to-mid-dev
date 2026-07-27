# Week 23 · Day 4 — Finish the Musts, handle the edges

[🛣️ The Road](../../../README.md) · [📅 Week 23](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 23 — Capstone: Build the Frontend, Connect Everything](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 6 · Capstone · **Week topic:** Capstone: Build the Frontend, Connect Everything
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

web.dev *Learn Forms*.

## 2️⃣ Build — 2 hours

Everything still on the Must list, plus every unhappy path.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Every Must-have story from Week 22 is done. Tick them off in `PROJECT.md` explicitly.
- [ ] Search, filter, sort and pagination wherever your app needs them — done **server-side**
- [ ] Every list has an empty state that tells the user what to do next
- [ ] Every form: labels, keyboard operable, visible focus, disabled-while-submitting, no double-submit
- [ ] Long text truncated cleanly; long lists paginated; large numbers formatted
- [ ] A user account page: change name, change password, delete account (with confirmation and the correct data cleanup)
- [ ] `day-4/edge-cases.md`: 20 things a user could do wrong, and what your app does about each

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Give me your 20 edge cases and demonstrate five at random.
2. What happens if a user opens the app in two tabs and edits the same record?
3. What happens when they submit a form twice quickly?
4. Which Must-have was cut, if any, and why?

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-23/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 23 day 4: finish the musts handle the"
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

◀ [Day 3](../day-3/) · [⬆ Week 23 — Capstone: Build the Frontend, Connect Everything](../README.md) · [Day 5](../day-5/) ▶
