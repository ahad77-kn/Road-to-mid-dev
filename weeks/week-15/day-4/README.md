# Week 15 · Day 4 — `useFetch`

[🛣️ The Road](../../../README.md) · [📅 Week 15](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 15 — `useEffect`, Data Fetching & Custom Hooks](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 4 · React · **Week topic:** `useEffect`, Data Fetching & Custom Hooks
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Reusing logic with custom hooks*.

## 2️⃣ Build — 2 hours

Extract everything from Days 2–3 into reusable hooks.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `useFetch(url, options)` returning `{ data, loading, error, refetch }` — with abort and race protection built in
- [ ] `useDebounce(value, delay)`
- [ ] `useLocalStorage(key, initial)` returning a `[value, setValue]` pair that behaves like `useState`
- [ ] `usePrevious(value)`
- [ ] All in `src/hooks/`, one file each, each with a JSDoc comment
- [ ] Every hook used in at least one component, proving it works
- [ ] Rebuild Day 2's app using only these hooks — the component should now be almost entirely JSX
- [ ] `day-4/hooks.md`: the rules of hooks, in your own words, and why they exist

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What makes a function a "hook"? Why must the name start with `use`?
2. What are the rules of hooks, and what breaks if you call one inside an `if`?
3. Do two components using `useFetch` share state? Why not?
4. How does `useLocalStorage` stay in sync with React state?
5. **Prove it:** write a new `useToggle` hook, live, in under 3 minutes.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-15/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 15 day 4: usefetch"
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

◀ [Day 3](../day-3/) · [⬆ Week 15 — `useEffect`, Data Fetching & Custom Hooks](../README.md) · [Day 5](../day-5/) ▶
