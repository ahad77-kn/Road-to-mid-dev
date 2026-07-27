# Week 15 · Day 3 — Race conditions & cleanup

[🛣️ The Road](../../../README.md) · [📅 Week 15](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 15 — `useEffect`, Data Fetching & Custom Hooks](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 4 · React · **Week topic:** `useEffect`, Data Fetching & Custom Hooks
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Removing effect dependencies*.

## 2️⃣ Build — 2 hours

A search-as-you-type against an API — the classic race-condition trap.

## 3️⃣ Must have — the checklist you are marked against

- [ ] **Demonstrate the race condition first.** Search "a", then quickly "ab", then "abc". With throttling on, make the results for "a" arrive last and overwrite "abc". Screenshot the wrong result. This is the most important screenshot of the week.
- [ ] Fix it with an `ignore` flag in the cleanup function — explain the mechanism in `day-3/race.md`
- [ ] Fix it a **second** way with `AbortController` — and explain the difference between "ignore the result" and "cancel the request"
- [ ] Debounce the input (reuse your own Week 9 debounce)
- [ ] `setState` after unmount avoided — navigate away mid-request and confirm no warnings
- [ ] Cache results in a `useRef` map so repeat searches skip the network

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is a race condition here? Draw the timeline of the failure.
2. How does an `ignore` flag in cleanup fix it? Which closure is the flag in?
3. What does `AbortController` do that the flag does not?
4. Why `useRef` for the cache and not `useState`?
5. **Prove it:** with Slow 3G on, type fast and show me the correct results every time.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-15/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 15 day 3: race conditions cleanup"
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

◀ [Day 2](../day-2/) · [⬆ Week 15 — `useEffect`, Data Fetching & Custom Hooks](../README.md) · [Day 4](../day-4/) ▶
