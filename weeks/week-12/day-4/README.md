# Week 12 · Day 4 — State & events

[🛣️ The Road](../../../README.md) · [📅 Week 12](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 12 — React Basics: Components, JSX, Props & State](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 4 · React · **Week topic:** React Basics: Components, JSX, Props & State
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Responding to events* + *State: a component's memory*.

## 2️⃣ Build — 2 hours

The Week 6 counter, in React — then compare the two.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Counter with +, −, reset, and a step input, all via `useState`
- [ ] Colour class changes below/above zero
- [ ] Buttons disabled at min/max
- [ ] The **functional update form** `setCount(c => c + 1)` used, with a comment on why it is safer than `setCount(count + 1)`
- [ ] A deliberate demonstration of the stale-state trap: call `setCount(count + 1)` three times in one handler, show it only increments by 1, then fix it with the functional form and explain
- [ ] A second independent counter on the same page — proving state is per-instance
- [ ] `day-4/vanilla-vs-react.md`: your Week 6 counter and this one side by side. What did React remove? What did it add? Where is the `render()` function now?

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why can you not just write `count = count + 1`?
2. What does "state is a snapshot" mean? Explain your three-increments demo.
3. When is `setCount(c => c + 1)` required rather than optional?
4. Two `<Counter />` components on one page — do they share state? Why not?
5. **Prove it:** predict the output of a handler I write that calls `setState` twice, before running it.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-12/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 12 day 4: state events"
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

◀ [Day 3](../day-3/) · [⬆ Week 12 — React Basics: Components, JSX, Props & State](../README.md) · [Day 5](../day-5/) ▶
