# Week 18 · Day 1 — Node without a browser

[🛣️ The Road](../../../README.md) · [📅 Week 18](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Week 17 · Day 5](../../week-17/day-5/) · [⬆ Week 18 — Node.js & Express: Building the API](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 5 · Backend · **Week topic:** Node.js & Express: Building the API
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

Node *Introduction* + *Differences between Node and the browser*.

## 2️⃣ Build — 2 hours

In `day-1/`, a small command-line tool — no HTTP yet.

## 3️⃣ Must have — the checklist you are marked against

- [ ] A CLI that reads a JSON file of contacts and supports `list`, `search <name>`, `add`, `delete <id>` via `process.argv`
- [ ] Data persisted to a JSON file with `fs/promises` — read, modify, write back
- [ ] ES modules (`"type": "module"` in `package.json`) — and a note on `require` vs `import` in `day-1/node-notes.md`
- [ ] `path.join` used for every file path — never string concatenation. Say why (cross-platform, and path traversal).
- [ ] Errors handled: missing file, corrupt JSON, bad arguments — each with a clear message and a non-zero exit code
- [ ] `day-1/node-notes.md`: five things that exist in Node but not the browser, and five the other way round

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is missing in Node that you rely on in the browser? Name five.
2. What is `process.argv`, and what are its first two elements?
3. Why `path.join` rather than `"./data/" + filename`?
4. What is `__dirname` and why does it not exist in ES modules? What replaces it?
5. **Prove it:** corrupt the JSON file, then run the tool. It must fail with a helpful message, not a stack trace dump.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-18/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 18 day 1: node without a browser"
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

◀ [Week 17 · Day 5](../../week-17/day-5/) · [⬆ Week 18 — Node.js & Express: Building the API](../README.md) · [Day 2](../day-2/) ▶
