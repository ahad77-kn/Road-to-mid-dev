# Week 15 · Day 1 — Effect drills

[🛣️ The Road](../../../README.md) · [📅 Week 15](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 14 · Day 5](../../week-14/day-5/) · [⬆ Week 15 — `useEffect`, Data Fetching & Custom Hooks](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 4 · React · **Week topic:** `useEffect`, Data Fetching & Custom Hooks
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Synchronizing with effects* + *You might not need an effect*.

## 2️⃣ Build — 2 hours

In `day-1/`, ten small demos, each in its own component.

Effects that **are** correct:
1. Set `document.title` from state
2. Add a `window` resize listener (with cleanup) showing live width
3. `setInterval` clock (with cleanup)
4. Focus an input on mount
5. Sync a value to localStorage
6. A `keydown` listener for a keyboard shortcut (with cleanup)

Effects that are **wrong** — write the bad version, screenshot the problem, then fix without an effect:
7. An effect that computes a derived value into state (infinite loop or lag) → derive during render
8. An effect that resets state when a prop changes → use a `key` instead
9. An effect that handles a button click → put it in the handler
10. An effect with a missing dependency → show the stale closure bug, then fix it

## 3️⃣ Must have — the checklist you are marked against

- [ ] All 10, each with a comment: what it does, why it is (or is not) a legitimate effect
- [ ] Every effect that subscribes to something has a cleanup function
- [ ] `day-1/effects.md`: your own rule for when an effect is warranted
- [ ] A demonstration of Strict Mode double-invocation, with an explanation of why React does it

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is an effect *for*, in one sentence?
2. What does the cleanup function do, and when exactly does React call it?
3. `[]` vs `[dep]` vs no dependency array — what does each mean?
4. Why does your effect run twice in development? Is that a bug?
5. **Prove it:** I describe a scenario; you tell me whether it needs an effect. Five in a row.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-15/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 15 day 1: effect drills"
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

◀ [Week 14 · Day 5](../../week-14/day-5/) · [⬆ Week 15 — `useEffect`, Data Fetching & Custom Hooks](../README.md) · [Day 2](../day-2/) ▶
