# Week 00 · Day 3 — The terminal, no mouse allowed

[🛣️ The Road](../../../README.md) · [📅 Week 00](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 2](../day-2/) · [⬆ Week 00 — How Computers, the Internet & the Web Actually Work](../README.md) · [Day 4](../day-4/) ▶

**Phase:** Phase 0 · Foundations · **Week topic:** How Computers, the Internet & the Web Actually Work
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *Command line crash course* + *Dealing with files*.

## 2️⃣ Build — 2 hours

Using **only** the terminal (no Finder, no VS Code file explorer), build this tree inside `day-3/`:

```
practice/
├── notes/
│   ├── monday.txt      (contains 3 lines of text)
│   └── tuesday.txt
├── code/
│   └── hello.html      (a valid minimal HTML page)
└── archive/            (empty)
```

Then: copy `monday.txt` into `archive/`, rename it to `backup-monday.txt`, delete `tuesday.txt`, and print the whole tree.
Record **every command you used, in order**, into `day-3/commands.md` with a one-line explanation each.

## 3️⃣ Must have — the checklist you are marked against

- [ ] The tree exists exactly as specified
- [ ] `commands.md` lists every command with what it did
- [ ] You used at least: `pwd`, `ls -la`, `cd`, `mkdir -p`, `touch`, `cp`, `mv`, `rm`, `cat`
- [ ] You explain the difference between an **absolute** and a **relative** path, with an example of each from your own machine

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What do `.`, `..`, `~` and `/` mean in a path?
2. What does the `-a` in `ls -la` show you, and why do those files start with a dot?
3. You are in `~/Desktop`. Write one command that goes to `~/Documents/code` without using the full path twice.
4. **Prove it:** navigate from your home folder to this repo's `day-3` folder in a single `cd` command.

## ⚠️ Common mistakes

`rm -rf` is not undoable and there is no trash bin. Read the path twice before pressing Enter, every time, for the rest of your career.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-00/day-3

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 00 day 3: the terminal no mouse allowed"
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

◀ [Day 2](../day-2/) · [⬆ Week 00 — How Computers, the Internet & the Web Actually Work](../README.md) · [Day 4](../day-4/) ▶
