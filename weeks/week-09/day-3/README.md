# Week 09 · Day 3 — Make it feel professional

[🛣️ The Road](../../../README.md) · [📅 Week 09](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 09 — Real APIs → Phase 2 Exam](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Real APIs → Phase 2 Exam
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *AbortController* + *Debounce*.

## 2️⃣ Build — 2 hours

Same app, four upgrades — this is the day the app stops feeling like a student project.

## 3️⃣ Must have — the checklist you are marked against

- [ ] **Search-as-you-type, debounced 400ms** — you write the debounce function yourself, no library
- [ ] **`AbortController`** cancels the in-flight request when a new keystroke arrives. Show in the Network tab that old requests are cancelled, not just ignored.
- [ ] **A cache**: searching the same term twice hits a `Map`, not the network. Show the Network tab proving zero requests on a repeat search.
- [ ] **Pagination**: OMDb returns 10 per page — add "Load more" or numbered pages using `totalResults`
- [ ] Recent searches saved to localStorage and shown as clickable chips
- [ ] `day-3/performance.md`: how many requests a naive version makes for the word "batman" typed at normal speed, vs yours. Count both from the Network tab.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is debouncing? Explain it as if to a non-programmer, then show your implementation.
2. Debounce vs throttle — when is each right?
3. What is a race condition here — how can a *slower earlier* request overwrite a *faster later* one? How does `AbortController` fix it?
4. What is your cache's invalidation strategy? What could go stale?
5. **Prove it:** type "batman" fast with the Network tab open. Show me the cancelled requests.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-09/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 09 day 3: make it feel professional"
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

◀ [Day 2](../day-2/) · [⬆ Week 09 — Real APIs → Phase 2 Exam](../README.md) · [Day 4](../day-4/) ▶
