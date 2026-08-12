# 📊 State of play — 12 August 2026

[← The Road](README.md) · [🏆 Scoreboard](SCOREBOARD.md) · [📌 Standing rules](STANDING-RULES.md)

Six days marked in one sitting: **W2 D3, D4, D5 and W3 D1, D2, D3.** Read this before the individual assessments — it is the part that matters.

---

## The scores

| Day | Assignment | Build | Drill | Test |
| --- | --- | --- | --- | --- |
| [W2 D3](weeks/week-02/day-3/ASSESSMENT.md) | Holy grail in Grid | **8.25** | 3.0 / 5 | 7.0 / 10 |
| [W2 D4](weeks/week-02/day-4/ASSESSMENT.md) | Spanning tiles | **7.0** | ❌ 0 | ❌ 0 |
| [W2 D5](weeks/week-02/day-5/ASSESSMENT.md) | YouTube skeleton | **5.5** 🔁 | ❌ 0 | ❌ 0 |
| [W3 D1](weeks/week-03/day-1/ASSESSMENT.md) | Survive a phone | **6.0** | – | – |
| [W3 D2](weeks/week-03/day-2/ASSESSMENT.md) | No media queries | **7.0** | – | – |
| [W3 D3](weeks/week-03/day-3/ASSESSMENT.md) | Motion | **6.0** | – | – |

**Week 02 average 7.55 ✅ passed.** **Week 03 so far: 6.33 — below the 6.5 gate**, with two days left to pull it up.

---

## 🤖 The one thing to read

Your AI declarations, in order, in your own words:

| Day | What you wrote |
| --- | --- |
| W2 D3 | *"for my understandings about the broken css and broken html"* |
| W2 D4 | *"for learning purpose like why we use, where and when"* |
| **W2 D5** | *"because it was so long and tricky so i got hel from ai"* · *"how I solved it: **so i got help from ai**"* |
| **W3 D1** | *"i solved with the help of ai learned **every step, element and attribute** from it one by one"* |
| W3 D2 | *"for understanding the assignment and how.md"* |
| W3 D3 | *"but at end when i stuck i got help from ai"* |

It moved from *explain this to me* to *solve this for me* over about five days, and your scores moved with it: **8.25 → 7.0 → 5.5**.

### How I can tell, beyond the declaration

Two pieces of writing from your own files:

> **Day 3, `why-grid.md`:** *"grid is made for two diamensional layouts… building this layout with flexbox is not easy because flexbox works in one direction."*

> **Day 5, answer 2:** *"It creates as many columns of at least 280px as can fit, and each column grows to share the space; auto-fit collapses empty columns, while auto-fill keeps the available column slots."*

The second is correct, fluent, and **is not how you write**. Meanwhile the notes around it are still unmistakably yours — *"i truggled"*, *"got hel from ai"*. **Your answers changed voice while your notes did not.**

That matters because of where the marks are:

| Criterion | Marks | Where it comes from |
| --- | --- | --- |
| Understanding | **3** | your answers, in your words |
| Requirements | 3 | the code |
| Code quality | 2 | the code |
| Process | 2 | notes, timing, honesty |

**Understanding is the biggest single block, and it is the only one AI can empty out completely.** Across these six days it cost you roughly **6 marks in total** — more than every CSS mistake combined.

### What I am *not* saying

I am not telling you to stop using AI. Look at the record: you have declared it **every single day since 22 July**, including on the days it hurt your score. You have never once tried to pass off AI work as your own. **That is the rule that matters, and you have never broken it.** If you had hidden any of this, these days would be zeros.

The line is about **who makes the decisions**:

| | |
| --- | --- |
| ✅ | *"What does `auto-fill` do?"* → read it, understand it, type it yourself |
| ✅ | *"Why is my grid overflowing?"* → learn the cause, fix it yourself |
| ✅ | Looking up syntax, forever, for the rest of your career |
| ❌ | *"Build me the YouTube layout"* → the decisions were not yours |
| ❌ | Letting it write your **answers** or your **notes** — that is the part being marked |

**One firm rule from here:** the five daily questions and `NOTES.md` are **always** written by you, closed-book, no exceptions. Broken English scores full marks. *"grid make the page and flex make card inside"* is a **3/3**. A perfect paragraph you did not write is a **0**.

---

## 🗑️ The deleted folders

```
06 Aug 10:15   Delete weeks/week-02/day-4/drill directory
06 Aug 10:15   Delete weeks/week-02/day-4/test directory
06 Aug 11:40   Delete weeks/week-02/day-5/drill directory
06 Aug 11:40   Delete weeks/week-02/day-5/test directory
```

Four deletions through the GitHub website — Day 4's an hour before submitting Day 4, Day 5's before you had started it.

**All four are restored and I have not assumed why you did it.** Please write the reason in your next `NOTES.md`. If they looked broken or left-over, say so — that is a fair reaction to a format that was two days old, and nothing happens.

The cost is the mechanical part: **four zeros**, and Process marks on both days.

The part I would rather you take from it: on Day 3 you did the drill and **found five of the six planted bugs**. You were never going to fail these. And an honest *"I could not find bug 4"* is worth far more to me than a deleted folder, because one tells me what to teach you and the other tells me nothing.

---

## ✅ What genuinely improved — this is real

Do not let the above bury this. Compared with two weeks ago:

| Standing rule | Two weeks ago | Now |
| --- | --- | --- |
| S1 `box-sizing` | chased 5 times | **6 / 6 days** ✅ |
| S2 head tags, `lang`, `</html>` | almost never | **5 / 6 days** ✅ |
| S4 real `alt` text | missing | **6 / 6 days** ✅ |
| S5 no inline styles | occasional | **6 / 6 days** ✅ |
| S3 `:focus-visible` | never | ✅ **first time, W3 D3** |

**Four standing rules went from "chase him every day" to automatic, with no reminders in any brief.** That is the whole point of the list and it worked.

Technically you have moved a long way too:

- `minmax(min(280px, 100%), 1fr)` (W3 D2) is a **genuinely advanced** piece of CSS — it fixes a failure most developers never notice
- `prefers-reduced-motion` (W3 D3), unprompted — most working developers never write it
- `min-width: 0` on a card (W3 D1), remembered from the Week 2 drill
- A 320px page with **zero** overflowing elements

---

## ▶️ What happens now

**Two days left in Week 3, currently 6.33 against a 6.5 gate.**

| Priority | What | Time | Effect |
| --- | --- | --- | --- |
| **1** | [W2 D5 redo](weeks/week-02/day-5/ASSESSMENT.md) — rebuild the skeleton, re-answer the 5 questions in your own words | 1 hr | replaces the **5.5** |
| **2** | [W3 D3 fixes](weeks/week-03/day-3/ASSESSMENT.md) — the transition line, `flex-wrap`, DevTools sweep | 20 min | **6.0 → ~8** |
| **3** | [W3 D1 fix](weeks/week-03/day-1/ASSESSMENT.md) — `min(280px, 100%)` at the 768px breakpoint | 15 min | clears the week |
| **4** | The 4 restored [drills](weeks/week-02/day-4/drill/) and [tests](weeks/week-02/day-4/test/) — **no AI, closed book** | 2 hr | four zeros → real marks |
| **5** | [W3 D2](weeks/week-03/day-2/ASSESSMENT.md) — tick the 5 boxes you earned, rewrite `how.md` in your words | 15 min | **7.0 → ~8.5** |

Items 2, 3 and 5 are **50 minutes total** and worth about four marks.

---

## 📌 The one paragraph

**You are building better than you are explaining, and for the first time the gap is not a skill problem.** Every hard technical thing this fortnight you got right — the 320px page, `min(280px, 100%)`, reduced motion, the grid skeleton. What fell away was the part that proves it is yours: the answers, the notes, the drills, the tests.

**Type the explanation yourself, badly, in your own English, and most of these marks come straight back.** That is the entire fix, and it costs about fifteen minutes a day.
