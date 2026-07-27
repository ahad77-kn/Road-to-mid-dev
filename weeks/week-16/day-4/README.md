# Week 16 · Day 4 — Context

[🛣️ The Road](../../../README.md) · [📅 Week 16](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 16 — React Router & Context (Shared State)](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 4 · React · **Week topic:** React Router & Context (Shared State)
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Passing data deeply with context* + `useContext`.

## 2️⃣ Build — 2 hours

Favourites, reachable from anywhere.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `FavouritesContext` with a provider holding the favourites array
- [ ] Add/remove favourites from **any** page — the movie card, the detail page, the favourites page
- [ ] A count badge in the nav, live-updating
- [ ] Persisted with your `useLocalStorage` hook
- [ ] A `useFavourites()` custom hook wrapping `useContext`, which **throws a clear error** if used outside the provider. Explain why that guard matters.
- [ ] A `ThemeContext` too (light/dark) — proving you can compose providers
- [ ] `day-4/context.md`: show the prop-drilling version you avoided (how many components would have had to pass the prop through?) and note context's cost — every consumer re-renders when the value changes

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What problem does context solve? What problem does it *not* solve? (It is not a state manager.)
2. What happens to consumers when the context value changes — all of them, or only the ones using the changed part?
3. Why does your `useFavourites` throw outside the provider? What is the alternative failure mode?
4. When would composition (`children`) be better than context?
5. **Prove it:** in the Profiler, toggle the theme and show me exactly which components re-rendered.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-16/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 16 day 4: context"
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

◀ [Day 3](../day-3/) · [⬆ Week 16 — React Router & Context (Shared State)](../README.md) · [Day 5](../day-5/) ▶
