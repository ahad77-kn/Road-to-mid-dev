# Week 04 · Day 5 — Refactor everything into functions

[🛣️ The Road](../../../README.md) · [📅 Week 04](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 04 — JavaScript Language Fundamentals](../README.md) · [Week 05 · Day 1](../../week-05/day-1/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** JavaScript Language Fundamentals
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *JS first steps* — go back over whatever was shakiest this week.

## 2️⃣ Build — 2 hours

Take every drill from Days 1–3 and rewrite them as clean, reusable functions in `day-5/`, organised into files: `math.js`, `strings.js`, `patterns.js`. Then a `main.js` that calls each of them and prints a tidy report.

## 3️⃣ Must have — the checklist you are marked against

- [ ] No loose code outside functions except the calls in `main.js`
- [ ] No function longer than 15 lines — split anything bigger
- [ ] Every function does exactly **one** thing, and its name says what
- [ ] A one-line comment above each function: what goes in, what comes out
- [ ] `day-5/refactor-notes.md`: three things that got clearly better, and one function you struggled to name (and why naming was hard)

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why is a 60-line function a problem, even when it works?
2. What makes a function name good? Give a bad name and its fixed version from your own code.
3. What does "one function, one job" mean in practice?
4. Which of your functions could be reused unchanged in a completely different project?
5. **Prove it:** I name any function from your files; explain its inputs, output, and one edge case that would break it.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-04/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 04 day 5: refactor everything into functions"
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

◀ [Day 4](../day-4/) · [⬆ Week 04 — JavaScript Language Fundamentals](../README.md) · [Week 05 · Day 1](../../week-05/day-1/) ▶
