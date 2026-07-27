# Week 00 · Day 1 — The journey of a request

[🛣️ The Road](../../../README.md) · [📅 Week 00](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ _start of the road_ · [⬆ Week 00 — How Computers, the Internet & the Web Actually Work](../README.md) · [Day 2](../day-2/) ▶

**Phase:** Phase 0 · Foundations · **Week topic:** How Computers, the Internet & the Web Actually Work
**Time budget:** 1 hr learning + 2 hr building
**Status:** ⬜ not started → 🟨 in progress → ✅ assessed

---

## 1️⃣ Read first — 1 hour

MDN *How does the internet work* + *What is a web server*.

## 2️⃣ Build — 2 hours

Create `day-1/journey.md`. In your own words, walk through what happens when you type `github.com` and press Enter — from your keyboard to pixels on screen. Cover, in order: browser cache → DNS lookup → IP address → TCP connection → HTTPS handshake (one sentence is enough) → HTTP request → server → response → browser renders.
Then draw the same thing by hand on paper, photograph it, and save it as `day-1/diagram.jpg`.

## 3️⃣ Must have — the checklist you are marked against

- [ ] `journey.md` with at least 8 numbered steps, your own words, no copy-paste
- [ ] Each step says *who* is doing it (browser / your ISP / DNS server / the web server)
- [ ] `diagram.jpg` — hand-drawn, readable
- [ ] Three terms defined in your own words: **client**, **server**, **IP address**

## 4️⃣ Test material — the teacher will ask you these

> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.

1. What is DNS, in one sentence, and what does it return?
2. Your friend's website loads for him and not for you. Name three different places in the journey that could be broken.
3. What is the difference between a URL and an IP address?
4. **Prove it:** run `ping google.com` and `nslookup google.com` in your terminal. Paste the output into `journey.md` and explain what each line means.

## ⚠️ Common mistakes

writing "the internet sends the page" — *who* sends it? Be specific about which machine does each step.

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-00/day-1

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week 00 day 1: the journey of a request"
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

◀ _start of the road_ · [⬆ Week 00 — How Computers, the Internet & the Web Actually Work](../README.md) · [Day 2](../day-2/) ▶
