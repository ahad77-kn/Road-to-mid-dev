# Week 08 · Day 2 — Modules

[🛣️ The Road](../../../README.md) · [📅 Week 08](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 1](../day-1/) · [⬆ Week 08 — Modern JS (ES6+), Promises & `async`/`await`](../README.md) · [Day 3](../day-3/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** Modern JS (ES6+), Promises & `async`/`await`
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info *Modules* + MDN *JS modules*.

## 2️⃣ Build — 2 hours

Restructure your apps into real ES modules in `day-2/`.

Suggested shape:
```
day-2/todo/
├── index.html
├── main.js          ← wiring only
├── state.js         ← the data + update functions
├── render.js        ← all DOM output
├── storage.js       ← localStorage helpers
└── utils.js         ← shared small functions
```

## 3️⃣ Must have — the checklist you are marked against

- [ ] `<script type="module">` — and a note in `LEARNED.md` on why the page must be served (`npx serve` or Live Server) instead of opened via `file://`
- [ ] Named exports used mostly; **one** default export, with a comment on when each is appropriate
- [ ] No module reaches into another module's internals — everything crosses through exports
- [ ] `state.js` exports functions, not the raw mutable array — the state is not directly reachable from outside
- [ ] Same for the quiz app
- [ ] `day-2/architecture.md`: a diagram (ASCII is fine) of which module imports which, and one paragraph on why this beats one 400-line file

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why does `file://` break ES modules? What does the error look like?
2. Named vs default exports — practical difference, and which is easier to refactor?
3. What does "modules are singletons" mean — if two files import `state.js`, how many copies of the state exist?
4. Are module scripts deferred by default? What does that mean for where you put the tag?
5. **Prove it:** move one function to a different module and update the imports, live, without breaking the app.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-08/day-2

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 08 day 2: modules"
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

◀ [Day 1](../day-1/) · [⬆ Week 08 — Modern JS (ES6+), Promises & `async`/`await`](../README.md) · [Day 3](../day-3/) ▶
