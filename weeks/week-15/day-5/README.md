# Week 15 · Day 5 — Movie search, React edition

[🛣️ The Road](../../../README.md) · [📅 Week 15](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 15 — `useEffect`, Data Fetching & Custom Hooks](../README.md) · [Week 16 · Day 1](../../week-16/day-1/) ▶

**Phase:** Phase 4 · React · **Week topic:** `useEffect`, Data Fetching & Custom Hooks
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *`useRef`* + *Manipulating the DOM with refs*.

## 2️⃣ Build — 2 hours

Rebuild the Week 9 movie search in React using your own hooks.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Search with debounce, results grid, loading skeletons, error and empty states
- [ ] Built on `useFetch` + `useDebounce` — no raw `fetch` in any component
- [ ] Recent searches via `useLocalStorage`, shown as clickable chips
- [ ] Infinite scroll or "load more" with pagination
- [ ] A `useRef` used to focus the search input on mount and after clearing
- [ ] Images lazy-loaded with a blur-up placeholder
- [ ] `day-5/vanilla-vs-react.md`: this vs your Week 9 version — line counts, what got easier, what got harder, and which you would maintain

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is a ref, and how is it different from state?
2. When does changing a ref cause a re-render? (Trick question — answer it.)
3. Compare this with your vanilla version: what did React genuinely give you here?
4. How does your `useFetch` prevent the race condition inside this app?
5. **Prove it:** open the Profiler while typing. Show which components re-render per keystroke, and justify each one.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-15/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 15 day 5: movie search react edition"
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

◀ [Day 4](../day-4/) · [⬆ Week 15 — `useEffect`, Data Fetching & Custom Hooks](../README.md) · [Week 16 · Day 1](../../week-16/day-1/) ▶
