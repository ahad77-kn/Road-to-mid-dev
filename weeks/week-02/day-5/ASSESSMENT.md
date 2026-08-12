# 🧾 Assessment — Week 02 · Day 5

**Assignment:** Rebuild the YouTube home skeleton — Grid for the page, Flexbox for the components.
**Submitted:** 2026-08-10 11:02 (commit `6670152`) — ⚠️ dated 2026-08-09 in NOTES, pushed 10 Aug
**Reviewed by:** Adil on 2026-08-12

---

## Score

| Block | Given |
| --- | --- |
| 🛠️ **Assignment** | **5.5 / 10** |
| 🐛 **Drill** | **0 / 5** — deleted on 6 Aug, not submitted |
| 🧪 **Test** | **0 / 10** — deleted on 6 Aug, not submitted |

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **2.5** |
| 2 | Code quality | 2 | **1.5** |
| 3 | Understanding | 3 | **0.5** |
| 4 | Process | 2 | **1.0** |
| | **TOTAL** | **10** | **5.5** |

## 🏁 Verdict: 🔁 **REDO** — below the pass mark

**This is your lowest score since 27 July**, and the code is not the reason. The code works.

---

## 🔬 The build genuinely works

I rendered it at 320, 480, 768 and 1200px: **no horizontal overflow at any width.** Grid for the page skeleton, Flexbox inside the cards, `repeat(auto-fill, minmax(...))` on the video shelf. 222 lines of HTML, 158 of CSS. 6/6 boxes ticked. As a *layout*, this is the most ambitious thing you have built and it stands up.

So why 5.5?

## 🤖 Because you told me you did not write it

Your own words, in three places on this day:

> **AI used?** *"because it was so long and tricky so i got hel from ai"*
>
> **Struggled with:** *"i truggled with the whole longest code ever to write it by my own but sometimes i got stuck so..."*
>
> **How I solved it:** *"so i got help from ai."*

**Thank you for saying so.** I want to be completely clear that declaring it is why this is a 5.5 and not a 0. The [rule](../../../GRADING.md) has exactly one unforgivable line, and it is *not* using AI — it is using it and not saying. You have never once crossed that line, and that is worth more to me than any single day's score.

But the [rule](../../../GRADING.md) also says what a declaration costs:

| Declaration | Cap |
| --- | --- |
| Self | 10 |
| AI-assisted — you wrote it, got unstuck with help | 7 |
| **AI-generated — it wrote it, you followed** | **4** |

Your description sits between those two, so I have marked between them rather than at either end.

### Where the marks actually went — Understanding, 0.5 / 3

Compare two pieces of writing from your own files.

**Your voice, Day 3, `why-grid.md`:**
> *"grid is made for two diamensional layouts... building this layout with flexbox is not easy because flexbox works in one direction."*

**Day 5, `decisions.md` and your answer to Q2:**
> *"It creates as many columns of at least 280px as can fit, and each column grows to share the space; auto-fit collapses empty columns, while auto-fill keeps the available column slots."*

The second one is correct, fluent, punctuated, and **is not how you write**. Every one of your five answers this day is in that register, while the notes surrounding them — *"i truggled"*, *"got hel from ai"* — are unmistakably yours.

**Understanding is 3 of the 10 marks, and it is measured by your answers.** When the answers are written by something else, there is nothing there to measure. That is the whole 2.5-mark gap, and it is not a punishment — it is an empty box on the mark sheet.

---

## 🎯 The real problem, and it is fixable

Look at what actually happened this week:

| Day | What you did | Score |
| --- | --- | --- |
| D3 | assignment **+ drill + test**, own words | **8.25** |
| D4 | assignment only, drill & test deleted | 7.0 |
| D5 | assignment only, AI-heavy, drill & test deleted | **5.5** |

**Day 3 you did three times as much work and scored three marks higher.** The days you cut corners are the days the score fell. That is not a coincidence and it is not me being harsh — it is the mark sheet doing exactly what it says it does.

There is also this, from your own notes:

> *"do i have to remember every word of these long codes by heart or may i try to understand and learn then use it."*

**No — and nobody does.** Nobody memorises CSS. I could not write 158 lines of YouTube skeleton from memory either. What you need is to be able to *reconstruct* it: know that the page is a grid, the card is a flex column, and the shelf is `auto-fill` + `minmax` — then look up the exact syntax as often as you like. **Looking up syntax is the job. Having someone else make the decisions is not.**

The line is simple:

- ✅ *"How do I make a scrollable sidebar?"* → look it up, read it, type it
- ✅ *"What does `auto-fill` do again?"* → ask, understand, use it
- ❌ *"Build me the YouTube home page layout"* → the decisions were made by something else

---

## ▶️ The redo — this is a real one

**Deadline: your catch-up day this week.** The new score replaces the 5.5.

1. **Rebuild the page skeleton from an empty file.** Not the whole thing — just the outer grid: top bar, sidebar, main area. Twenty lines of CSS. No AI at all; use MDN and your own Day 3 file.
2. **Re-answer the five questions in your own words**, with the page closed. Broken English is fine and always has been. *"grid make the page and flex make the card inside"* scores full marks; a fluent paragraph you did not write scores zero.
3. **[The drill](drill/) and [the test](test/)** — both restored, both waiting.

**Do 1 and 2 and this day passes comfortably.** The layout is already proof you can build it. I just need proof it was you.

---

**The one sentence:** *You built the best-looking page of the six days and scored the lowest, because the marks are for what is in your head — and on this day you outsourced that part and honestly told me so.*
