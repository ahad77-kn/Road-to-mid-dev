# 📋 Week 01 Review — CSS Fundamentals & the Box Model

[← The Road](../../README.md) · [⬆ Week 01](README.md) · [🏆 Scoreboard](../../SCOREBOARD.md)

**Student:** Muhammad Ahad · **Week:** 22–30 July 2026 · **Reviewed:** 30 July · **Result: ✅ PASSED (6.35)**

---

## The numbers

| Day | Assignment | Score | |
| --- | --- | --- | --- |
| [D1](day-1/) | Business card | **6.0** | ✅ |
| [D2](day-2/) | Pricing card, no flexbox | **7.0** | ✅ 5 → 5.75 → 7.0 (2 Aug) |
| [D3](day-3/) | Break it 5 ways | **6.0** | ✅ |
| [D4](day-4/) | Typography page, `rem` only | **6.5** | ✅ |
| [D5](day-5/) | Signup form states | **6.25** | ✅ |
| | **Week average** | **6.35** | ✅ **PASSED** |

**Attendance:** 5 of 5 days submitted, every one pushed the same day. No missed submissions.

---

## ✅ The gate — PASSED

**Week average 6.35, against a 6.0 gate. Week 02 is unlocked.**

You closed it with about two hours to spare on a three-day deadline. Here is the sequence, because it is worth seeing written down:

| Time | What happened |
| --- | --- |
| 14:34 | Day 5 submitted |
| 15:05 | Day 5 marked 6.25; week sitting at 5.95, under the gate |
| **15:14** | You pushed the **Day 3 fixes** — 40 min later |
| 15:35 | Catch-up deadline set for Sat 1 Aug, plus the checklist-honesty rule |
| **15:58** | You pushed the **Day 2 redo + 8 of 9 Day 5 fixes** — 23 min later |
| 16:10 | Day 2 re-marked **5.75**, week average **6.1** ✅ |
| **Sun 2 Aug 09:16** | You answered the five Day 2 questions unprompted → Day 2 **7.0**, week **6.35** |

Three separate fix lists cleared in under two hours, on the day they were issued. That is the behaviour that passed this week — not the CSS.

**Update, 2 August:** you came back on a Sunday and answered the five questions. Day 2 re-marked **7.0** — it is now a clean pass and no longer the weakest day of the week. One item is still open on it: `box-sizing` is still not in that file, and your Q5 answer had `content-box` and `border-box` swapped. See [`day-2/ASSESSMENT.md`](day-2/ASSESSMENT.md) — that property has now cost you marks on three separate days, so it is worth ten minutes.

## 🗓️ Your catch-up days — Friday 31 July & Saturday 1 August

Rule 7 of this repo: *"Day 6 & 7 are yours — finish incomplete work, redo anything marked 🔁, or rest."*

**Update, 30 July 15:14 — you have already started.** Forty minutes after I posted the Day 3 assessment you pushed the fixes, and you did them properly: `opx` → `0`, `content-box` → `border-box`, duplicate `font-size` deleted. You also widened the card `500px` → `570px` — which is exactly the number in that assessment, and exactly the right decision. You did not switch the measuring system off, you gave the content the room it was asking for. **That is the best follow-through you have shown.**

So one item is closed. Here is what is left, in writing, with a date.

### ~~Deadline: Saturday 1 August~~ — ✅ **cleared on 30 July, the same day it was set**

| Priority | What | Time | Effect |
| --- | --- | --- | --- |
| **1** | [Day 2 redo](day-2/ASSESSMENT.md) — the 6 items | ~30 min | **This decides the week.** The new score replaces the 5. |
| ~~2~~ | ~~Day 3 fixes~~ | — | ✅ **done 30 Jul 15:14** |
| 3 | [Day 5 fixes](day-5/ASSESSMENT.md) — the outline, the radius, `:focus-visible`, `:checked` | ~10 min | Closes the week clean |

**About forty minutes left, total.**

### What happens either way

✅ **Outcome: redo submitted the same day.** Day 2 re-marked 5.75, week average **6.1**, Week 1 passed, Week 02 unlocked.

That is not a threat, it is arithmetic, and you are being told it three days early precisely so it does not happen. You did not miss a single day this week — do not lose the week to a card you built on the 27th.

And on today's evidence you will not. You turned the Day 3 list around in under an hour. Do the same with Day 2.

### One new rule, starting Week 2

**Tick a checklist box only when you can point at the line in the file that satisfies it.**

You ticked items you had not done on four of five days this week — `box-sizing`, the type scale, `:focus-visible`, `:checked`, the keyboard test. If you cannot point at the line, leave the box unticked and write one sentence in `NOTES.md` about why.

An unticked box with an honest note costs you **almost nothing** — I can see you tried and I know where to help. A wrongly ticked one costs you the marks *and* makes me check everything else twice. Honesty is genuinely the cheaper option here.

---

## 📈 What genuinely improved

This is the part that matters more than the average. Habits I flagged and you killed, in order:

| I flagged | You fixed it |
| --- | --- |
| `position` hacks for layout (D1, then 5× on D2) | **Gone from D3 onward** — three clean days |
| Vague AI declaration ("for knowledge learning") | **Precise from D3 onward** — best in class now |
| Test questions left blank (0/5 on D2) | **4/5, 5/5, 5/5** on D3–D5 |
| Wrong filenames | **Correct from D3 onward** |
| Duplicate declarations (D2, D3, D4) | **Clean file on D5** |
| `white-space: nowrap` as a band-aid (D3, D4) | **Gone on D5** |
| `box-sizing` missing (D2), backwards (D3) | **Correct and unprompted on D5** |

**Seven pieces of feedback, seven changed behaviours, in nine days.** That is a genuinely good rate, and it is why your daily scores went 6 → 5 → 6 → 6.5 → 6.25 instead of flatlining.

You also **found a real gap in my curriculum** (Day 4 had no Google Fonts material) and told me instead of silently struggling. That is fixed now because of you.

And your closing question on Day 5 — *"why disable the button if instead we can use it"* — is a question professional developers actually argue about. You reasoned your way to a real position. That is the thing I cannot teach.

---

## 🎯 What is still holding you back

Two patterns, and neither is about knowing CSS.

### 1. Silent invalid CSS — three times in three days

`margin: 20px opx` · `outline: 0.2rem` · `border-radius: 0.5`

All three **look correct in the editor** and all three were **silently discarded by the browser**. Reading the file will not catch these. Only DevTools will.

**The fix, permanently:** before every commit, open DevTools → Styles, scroll your rules, look for strike-throughs and ⚠️ icons. Sixty seconds.

### 2. ~~Ticking boxes you have not done~~ — ✅ fixed the same afternoon

Four days out of five you ticked items you had not done. The rule was set at 15:35 on 30 July; at 15:58 you submitted a redo where you ticked four boxes, left five honestly unticked, **and under-claimed one you had actually finished**. Fastest turnaround on any feedback so far. Keep it — and remember honest works in both directions, so tick the ones you did do.

*The original record, for reference:*

| Day | Ticked but not done |
| --- | --- |
| D2 | `box-sizing`, spacing scale, `:focus-visible` |
| D3 | class selectors (one of the two Day-1 carry-overs) |
| D4 | type scale, vertical rhythm |
| D5 | `:focus-visible`, `:checked`, keyboard submit |

The checklist is your mark sheet, and right now it does not tell either of us the truth. **An unticked box with an honest note costs you almost nothing. A wrongly ticked one costs you trust — and trust is the expensive thing.**

New rule for Week 2: tick a box only after you have found the line in the file that satisfies it. If you cannot point at the line, leave it unticked and write one sentence in NOTES about why.

---

## 📚 What you can now actually do

Skills demonstrated this week, not just covered:

- ✅ The box model, and `box-sizing: border-box` — why it exists and when to use it
- ✅ Specificity, the cascade, source order, and why `!important` is a trap
- ✅ Margin collapsing — including *why* padding on a parent prevents it
- ✅ Sizing in `rem` and `ch`, and why `px` breaks a user's font-size setting
- ✅ Semantic form markup — real `<label for>` pairs, correct input types
- ✅ CSS state selectors — `:hover`, `:focus`, `:disabled`, and the difference between them
- ✅ Deliberately breaking working code to understand it, then explaining the break

Still shaky, and Week 2 will expose it:
- ⚠️ Aligning things without magic numbers — you swapped `position: relative` for `margin-left: 350px`, which is the same problem in a new coat. **Flexbox fixes this properly, and it is Monday's first lesson.**
- ⚠️ Typographic hierarchy — three font sizes within 0.1rem of each other, and a byline as large as a heading
- ⚠️ Spelling in the content you write

---

## ▶️ Before Week 2

1. **Do the Day 2 redo.** ~30 min. This decides whether the week passes.
2. **Day 3 quick fixes.** ~10 min: `opx` → `0`, `content-box` → `border-box`, delete the duplicate `font-size`.
3. **Day 5 quick fixes.** ~10 min: the outline, the border-radius, `:focus-visible`, `:checked`.
4. **Then** [Week 02 — Flexbox & Grid](../week-02/). Start with [Flexbox Froggy](https://flexboxfroggy.com/); it is a game and you will finish half of it in an hour.

About an hour of cleanup, and you start Week 2 with nothing owed and a passed week behind you.

---

## 📌 The one sentence

**You are learning fast and finishing slowly.** The CSS is going in — seven habits changed in nine days proves that. What is missing is the last five minutes of every task: check the file, verify the checklist, close out what you were asked to fix.

That is the cheapest improvement available to you, and it is worth about two points a day.
