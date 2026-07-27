# Week 15 · Day 2 — Fetching properly

[🛣️ The Road](../../../README.md) · [📅 Week 15](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 15 — `useEffect`, Data Fetching & Custom Hooks](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 4 · React · **Week topic:** `useEffect`, Data Fetching & Custom Hooks
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Lifecycle of reactive effects* + *Separating events from effects*.

## 2️⃣ Build — 2 hours

A user browser against [jsonplaceholder](https://jsonplaceholder.typicode.com/) or [randomuser.me](https://randomuser.me/).

## 3️⃣ Must have — the checklist you are marked against

- [ ] Fetch on mount inside an effect with the right dependencies
- [ ] Four states handled explicitly: `loading`, `error`, `empty`, `success` — all four visibly different
- [ ] Skeleton loaders, not a spinner
- [ ] Retry button on error that actually refetches
- [ ] `response.ok` checked; non-2xx throws
- [ ] Refetch when a filter prop changes — and *not* on unrelated re-renders
- [ ] `day-2/states.md`: a state diagram of every path the UI can take
- [ ] Test all paths with DevTools throttling and offline mode; screenshot each

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why is `loading` starting as `true` usually right?
2. What happens if you forget the dependency array on a fetching effect?
3. How do you make sure the loading flag is turned off even when the fetch throws?
4. What is the difference between "no data yet" and "data is an empty list"? Why must the UI differ?
5. **Prove it:** show me all four states, on demand, without editing code.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-15/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 15 day 2: fetching properly"
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

◀ [Day 1](../day-1/) · [⬆ Week 15 — `useEffect`, Data Fetching & Custom Hooks](../README.md) · [Day 3](../day-3/) ▶
