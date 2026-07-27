# Week 16 · Day 5 — Reducer + Context, and your first guard

[🛣️ The Road](../../../README.md) · [📅 Week 16](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 4](../day-4/) · [⬆ Week 16 — React Router & Context (Shared State)](../README.md) · [Week 17 · Day 1](../../week-17/day-1/) ▶

**Phase:** Phase 4 · React · **Week topic:** React Router & Context (Shared State)
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

react.dev *Scaling up with reducer and context*.

## 2️⃣ Build — 2 hours

Combine everything, then add a fake auth flow.

## 3️⃣ Must have — the checklist you are marked against

- [ ] Favourites refactored to `useReducer` inside the provider, exposing actions rather than a raw setter
- [ ] A fake `AuthContext`: `user`, `login(email, password)`, `logout()` — no real backend yet, just a hard-coded check
- [ ] A `<ProtectedRoute>` wrapper redirecting to `/login` when logged out
- [ ] After login, the user returns to the page they originally wanted (`state.from`)
- [ ] Auth persisted so a refresh does not log you out
- [ ] The nav shows Login or the user's name + Logout, correctly
- [ ] **`day-5/guards.md` must contain this, in your own words:** a frontend route guard hides UI. It is **not security**. Anyone can open DevTools, edit the state, and see the "protected" page. Real protection lives on the server, which checks the request every single time. You will build that in Week 21.

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What does a `<ProtectedRoute>` actually do, mechanically?
2. Why is a frontend guard not security? Demonstrate breaking your own guard in DevTools.
3. What is the difference between authentication and authorisation?
4. How do you send the user back to where they were after logging in?
5. **Prove it:** break your own protected route from the console, in front of me. Then explain exactly which server-side check would have stopped you.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-16/day-5

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 16 day 5: reducer context and your first"
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

◀ [Day 4](../day-4/) · [⬆ Week 16 — React Router & Context (Shared State)](../README.md) · [Week 17 · Day 1](../../week-17/day-1/) ▶
