# Week 00 · Day 4 — Take a real page apart

[🛣️ The Road](../../../README.md) · [📅 Week 00](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 3](../day-3/) · [⬆ Week 00 — How Computers, the Internet & the Web Actually Work](../README.md) · [Day 5](../day-5/) ▶

**Phase:** Phase 0 · Foundations · **Week topic:** How Computers, the Internet & the Web Actually Work
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

web.dev *How browsers work* + [Chrome DevTools docs](https://developer.chrome.com/docs/devtools) (Elements + Console tabs).

## 2️⃣ Build — 2 hours

Pick any real Pakistani news site (Dawn, Geo) and, using DevTools only, produce `day-4/anatomy.md`:

## 3️⃣ Must have — the checklist you are marked against

- [ ] The page's structure sketched as an outline: header / nav / main / sidebar / footer, with the actual tag or class used for each
- [ ] 5 CSS properties you found in the Styles panel that you do not yet understand — listed, with the MDN link for each
- [ ] Live-edit the page in DevTools: change the logo text, hide one section, change the background colour. Screenshot the result. Explain in one line why this does **not** change the real website for anyone else.
- [ ] In the Console tab, run `document.title` and `document.querySelectorAll("a").length` — record what you got

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is the DOM, and how is it different from the HTML file the server sent?
2. Why does editing in DevTools disappear when you refresh?
3. What are the three things the browser needs before it can paint the page? (HTML, and…?)
4. **Prove it:** using the Elements panel, find one element whose colour comes from an inherited rule, not its own rule. Explain how you know.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-00/day-4

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 00 day 4: take a real page apart"
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

◀ [Day 3](../day-3/) · [⬆ Week 00 — How Computers, the Internet & the Web Actually Work](../README.md) · [Day 5](../day-5/) ▶
