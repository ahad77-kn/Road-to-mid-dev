# 📊 State of play — 14 August 2026

[← The Road](README.md) · [🏆 Scoreboard](SCOREBOARD.md) · [📌 Standing rules](STANDING-RULES.md)

Six days marked in one sitting: **W2 D3, D4, D5 and W3 D1, D2, D3.** Read this before the individual assessments — it is the part that matters.

---

## The scores

| Day | Assignment | Build | Drill | Test |
| --- | --- | --- | --- | --- |
| [W2 D3](weeks/week-02/day-3/ASSESSMENT.md) | Holy grail in Grid | **8.25** | 3.0 / 5 | 7.0 / 10 |
| [W2 D4](weeks/week-02/day-4/ASSESSMENT.md) | Spanning tiles | **7.0** | ❌ 0 | ❌ 0 |
| [W2 D5](weeks/week-02/day-5/ASSESSMENT.md) | YouTube skeleton | **5.5 → 7.5** ✅ | ❌ 0 | ❌ 0 |
| [W3 D1](weeks/week-03/day-1/ASSESSMENT.md) | Survive a phone | **6.0** | – | – |
| [W3 D2](weeks/week-03/day-2/ASSESSMENT.md) | No media queries | **7.0 → 8.0** ✅ | – | – |
| [W3 D3](weeks/week-03/day-3/ASSESSMENT.md) | Motion | **6.0 → 7.0** ✅ | – | – |
| [W3 D4](weeks/week-03/day-4/ASSESSMENT.md) | Portfolio, part 1 | **7.75** | – | – |

**Week 02 average 7.95 ✅ passed.** **Week 03: 7.19 ✅ above the 6.5 gate**, one day left.

---

## 🔁 Update, 14 Aug — the fix pass, and the one pattern in it

You turned the whole list around in **under two hours** and three days moved up: **W2 D5 +2.0, W3 D2 +1.0, W3 D3 +1.0.** The redo did exactly what it was meant to.

But **five of the fixes went wrong in the same specific way**, and this is the thing worth reading twice:

| Day | What I asked for | What you changed | Result |
| --- | --- | --- | --- |
| W2 D3 | add the viewport tag | **deleted** `charset` to add it | still an S2 break |
| W2 D3 | add a focus style | `:focus-visible { transition: ease-in }` | nothing visible happens |
| W2 D4 | add a focus style | **replaced** `:hover` with `:focus-visible` on an `<img>` | hover deleted; rule can never fire |
| W3 D1 | use `min(280px, 100%)` | wrote it **without the comma** | whole rule discarded — 2 columns became 1 |
| W3 D2 | add a focus style | `:focus-visible` on a `<section>` | can never fire |
| W3 D3 | name the property | named it on **one** of the two halves | still `transition-property: all` |

**Every one of those satisfies a search for the words in my feedback, and none of them does the thing the feedback was about.**

W3 D1 is the clearest case. The 768px scrollbar is genuinely gone — because the two-column layout is gone with it. One missing comma made the browser throw the rule away, and you checked *"is the scrollbar gone?"* instead of *"do I still see two cards side by side?"*

### The rule to take from this

**A fix is finished when you have seen the thing you wanted, not when the thing you did not want has stopped appearing.**

- Added a focus style? **Press Tab and look at the screen.** If nothing lights up, it is not done.
- Fixed an overflow? **Open the width it broke at and count what you see.**
- Changed any CSS? **DevTools → Styles, look for the strike-through.** Two of these six would have been caught in ten seconds.

That last one is [S9](STANDING-RULES.md), and W3 D1 was the **fifth** silent-invalid-CSS incident: `margin: 20px opx` · `outline: 0.2rem` · `border-radius: 0.5` · `opacity: 200ms ease-out` · `minmax(min(280px,100%) 1fr)`. It is comfortably your most expensive recurring habit, and it has one sixty-second cure.

### And the good news is the bigger half

**W2 D5 went 5.5 → 7.5 with no code change at all** — you rewrote five answers in your own words. Your Q3, *"yes it can be grid item externally and flex container internally"*, is better than the fluent version it replaced: nine words, exactly right, and the way a working developer would say it.

Your voice is back on [W3 D3](weeks/week-03/day-3/ASSESSMENT.md) and [W3 D4](weeks/week-03/day-4/ASSESSMENT.md) too. **That trend has reversed, and it reversed within a day of being pointed out.**

### On the drills and tests — you were heard

Your reason for deleting them:

> *"for just every day small topics there is no need of drill and test, these should be for as a whole."*

**That is a fair criticism and it is being acted on.** The next version moves to **one drill and one test per week**, not per day — bigger, covering the whole week's topic, on Day 5. You argued the case and the format changes. Next time, argue it *before* deleting, and it costs you nothing.

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
