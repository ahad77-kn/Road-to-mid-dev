# Week 06 · Day 4 — Calculator, part 2

[🛣️ The Road](../../../README.md) · [📅 Week 06](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 06 — The DOM: JavaScript Meets the Page](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 2 · JavaScript · **Week topic:** The DOM: JavaScript Meets the Page
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

JS.info *Bubbling and capturing* + *Event delegation*.

## 2️⃣ Build — 2 hours

Make it actually calculate.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `+ − × ÷` all work, including chained operations (`5 + 3 × 2 =`) — decide and document whether you do left-to-right or operator precedence
- [ ] Divide by zero shows a clear message, does not print `Infinity`
- [ ] `%` and `+/−` (sign toggle) work
- [ ] Keyboard support: digits, operators, Enter for `=`, Escape for clear, Backspace to delete a digit
- [ ] Results longer than the display are truncated or formatted sensibly — no overflow
- [ ] Floating point handled: `0.1 + 0.2` must not display `0.30000000000000004`. Explain the fix in a comment.
- [ ] The arithmetic lives in pure functions with **no DOM code inside them** — the UI calls them

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. Why does `0.1 + 0.2 !== 0.3` in JavaScript? How did you handle it?
2. How do you listen for keyboard input, and what is on the `event` object for a key press?
3. Why keep the calculation functions free of DOM code? What does that buy you?
4. What is your app's state — list every variable it needs to remember?
5. **Prove it:** press `5 + 3 × 2 =` and explain, before the result appears, what you will get and why.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-06/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 06 day 4: calculator part 2"
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

◀ [Day 3](../day-3/) · [⬆ Week 06 — The DOM: JavaScript Meets the Page](../README.md) · [Day 5](../day-5/) ▶
