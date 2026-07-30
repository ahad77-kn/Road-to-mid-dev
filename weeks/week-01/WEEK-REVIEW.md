# 📋 Week 01 Review — CSS Fundamentals & the Box Model

[← The Road](../../README.md) · [⬆ Week 01](README.md) · [🏆 Scoreboard](../../SCOREBOARD.md)

**Student:** Muhammad Ahad · **Week:** 22–30 July 2026 · **Reviewed:** 30 July

---

## The numbers

| Day | Assignment | Score | |
| --- | --- | --- | --- |
| [D1](day-1/) | Business card | **6.0** | ✅ |
| [D2](day-2/) | Pricing card, no flexbox | **5.0** | 🔁 redo not done |
| [D3](day-3/) | Break it 5 ways | **6.0** | ✅ |
| [D4](day-4/) | Typography page, `rem` only | **6.5** | ✅ |
| [D5](day-5/) | Signup form states | **6.25** | ✅ |
| | **Week average** | **5.95** | ⚠️ |

**Attendance:** 5 of 5 days submitted, every one pushed the same day. No missed submissions.

---

## ⚠️ The gate

**The rule is: week average ≥ 6.0 to move on. You are at 5.95.**

Five hundredths of a point. And it is entirely one thing: **Day 2 is still sitting at 5/10 because the redo was never done.** I asked on the 27th, again on the 28th, again on the 29th.

**This is not a fail. The week is not closed yet.** Do the Day 2 redo — it is about 30 minutes of work and you now know every concept it needs — and:

| If the Day 2 redo scores | Week average becomes | Result |
| --- | --- | --- |
| 7 | **6.35** | ✅ comfortable pass |
| 8 | **6.55** | ✅ strong pass |
| not done | **5.95** | 🔁 Week 1 repeats |

You are one short session away from closing a week you have actually done well in. Do not let a week you *passed* get recorded as a week you repeated, over a card you built eight days ago.

**Day 2 redo list:** [`day-2/ASSESSMENT.md`](day-2/ASSESSMENT.md) → the six items at the bottom.

---

## 🗓️ Your catch-up days — Friday 31 July & Saturday 1 August

Rule 7 of this repo: *"Day 6 & 7 are yours — finish incomplete work, redo anything marked 🔁, or rest."*

You have not used them yet. **This is not an extension or a favour — it is the schedule.** But it is the last time the Day 2 redo gets asked for, so here it is in writing.

### Deadline: **Saturday 1 August, end of day.** Assessed Sunday 2 August.

| Priority | What | Time | Effect |
| --- | --- | --- | --- |
| **1** | [Day 2 redo](day-2/ASSESSMENT.md) — the 6 items | ~30 min | **This decides the week.** The new score replaces the 5. |
| 2 | [Day 3 fixes](day-3/ASSESSMENT.md) — `opx` → `0`, `content-box` → `border-box`, duplicate `font-size` | ~10 min | Clears the oldest open defect in the repo |
| 3 | [Day 5 fixes](day-5/ASSESSMENT.md) — the outline, the radius, `:focus-visible`, `:checked` | ~10 min | Closes the week clean |

**About an hour, total.**

### What happens either way

- **Redo submitted by Saturday** → Day 2 is re-marked, week average lands near **6.35**, Week 1 ✅ passes, you start Week 02 on Monday with nothing owed.
- **Nothing by Saturday** → week average stays **5.95**, below the 6.0 gate, and **Week 1 repeats**. You would redo Week 1's five assignments before starting flexbox.

That is not a threat, it is arithmetic, and you are being told it three days early precisely so it does not happen. You did not miss a single day this week — do not lose the week to a card you built on the 27th.

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

### 2. Ticking boxes you have not done — four times in five days

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
