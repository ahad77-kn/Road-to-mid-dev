# 📌 Standing rules — the list that never resets

[← The Road](README.md) · [📊 Grading](GRADING.md) · [🏆 Scoreboard](SCOREBOARD.md)

**Every rule here was taught on a specific day. Once it is on this list it applies to every file you write for the rest of the 24 weeks — with no reminder in the assignment brief.**

This is the single biggest change to how you are marked, and it is worth understanding why.

In Week 1 you were told about `box-sizing` on Day 2. You were reminded on Day 3, Day 5, Week 2 Day 1 and Week 2 Day 2. **That is five reminders for one property.** On a real team you get told once. The second time someone finds it, they stop trusting your work and start checking all of it — and that is expensive for them, which makes you expensive.

So: taught once, then permanent. **Breaking a standing rule costs marks with no warning, in any file, on any day.**

---

## 🔒 The list

### Active from Week 02 Day 3

| # | Rule | Taught | Costs |
| --- | --- | --- | --- |
| S1 | `box-sizing: border-box` at the top of every stylesheet | W1 D2 | −0.25 |
| S2 | Every page: `<!DOCTYPE html>`, `<html lang="en">`, `<meta charset="utf-8">`, `<meta name="viewport">`, and a closing `</html>` | W2 D2 | −0.25 |
| S3 | Every interactive element has a visible `:focus-visible` style | W1 D5 | −0.25 |
| S4 | Every `<img>` has a real, descriptive `alt` | W1 D1 | −0.25 |
| S5 | No inline `style=` attributes, no `<style>` blocks | W1 D1 | −0.25 |
| S6 | Headings describe **structure**, never appearance. A price, a label or an eyebrow is not an `<h3>` | W2 D2 | −0.25 |
| S7 | No magic numbers for layout. If you cannot say *why* it is that number, it is wrong | W1 D3 | −0.5 |
| S8 | No asset over **200 KB**. Photographs are JPG or WebP, never PNG | W2 D2 | −0.25 |
| S9 | Open DevTools → Styles before every commit. **Zero strike-throughs, zero ⚠️** | W1 D3 | −0.5 |
| S10 | Tick a checklist box only when you can point at the line that satisfies it | W1 D5 | −1.0 |

**Maximum a single day can lose to standing rules: −2.0.** Below that it is capped, because the day's own work still has to be marked on its own merits.

---

## 📉 How this actually plays out

Your last three assessments, re-marked under these rules:

| Day | Score given | Standing-rule breaks | Would now be |
| --- | --- | --- | --- |
| W1 D5 | 6.25 | S3 | 6.0 |
| W2 D1 | 8.5 | — | 8.5 |
| W2 D2 | 8.5 | S2, S3, S6, S8 | **7.5** |

**Nothing is being re-marked retroactively — those scores stand.** This table exists so you can see the size of it: one megabyte of PNGs and a missing `</html>` is a full point, and today it costs you nothing.

---

## ➕ How rules get added

At the end of each week I add anything that was taught that week and is now permanent. You will see it in the week review before it is ever used against you. **A rule is never applied on the day it is taught.**

You can also argue one off the list. If you think a rule is wrong or does not apply to a particular file, **say so in `NOTES.md` and make the case**. A rule you have argued with and lost costs you nothing extra; a rule you silently ignored costs the full amount. Disagreeing in writing is always cheaper than hoping I do not notice.

---

[← The Road](README.md) · [📊 Grading](GRADING.md) · [🏆 Scoreboard](SCOREBOARD.md)
