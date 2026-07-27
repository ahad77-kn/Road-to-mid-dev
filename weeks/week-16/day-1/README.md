# Week 16 · Day 1 — Routing

[🛣️ The Road](../../../README.md) · [📅 Week 16](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 15 · Day 5](../../week-15/day-5/) · [⬆ Week 16 — React Router & Context (Shared State)](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 4 · React · **Week topic:** React Router & Context (Shared State)
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

React Router *installation* + *routing basics*.

## 2️⃣ Build — 2 hours

Turn the Week 15 movie app into a multi-page app in `day-1/`.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Routes: `/` (home), `/search`, `/about`, `/favourites`
- [ ] A persistent nav with `<NavLink>` styling the active link
- [ ] `<Link>` used for all internal navigation — **never** `<a href>` for internal routes. Explain in a comment what `<a>` does that `<Link>` does not.
- [ ] Browser back/forward work correctly
- [ ] Refreshing on `/search` loads the right page (note what this requires from the host — you will need it for deployment)
- [ ] `day-1/routing.md`: what client-side routing actually is — what the browser does and does not request

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is client-side routing? What happens on the network when you click a `<Link>`?
2. Why does `<a href="/search">` break the app's feel? What actually happens?
3. Why can refreshing on `/search` 404 on a static host, and what is the fix?
4. What does `<NavLink>` give you over `<Link>`?
5. **Prove it:** open the Network tab and click through every page. Show me that no document requests fire.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-16/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 16 day 1: routing"
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

◀ [Week 15 · Day 5](../../week-15/day-5/) · [⬆ Week 16 — React Router & Context (Shared State)](../README.md) · [Day 2](../day-2/) ▶
