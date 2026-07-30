# 🧾 Assessment — Week 01 · Day 2

**Assignment:** Build a pricing card using only padding and margin — flexbox and grid banned.
**Folder:** `weeks/week-01/day-2/`
**Submitted:** 2026-07-27 14:55 (commit `f8452d5`) — ☑ on time (same day)
**Graded version:** `weeks/week-01/day-2/assignment/` — the 14:55 final, not the 13:57 draft you first pushed to `2026-7/27/`. Good: you added the scale/colour comment between the two.
**Reviewed by:** Adil on 2026-07-27

---

## How it was solved

☑ **Self + AI used for two specific properties — declared**

**Your declaration:** *"used for adding picture in the background of card and adding stroke to h2. for knowledge learning."*

**Matches the evidence?** ☑ yes. `background-image`/`background-size` and `-webkit-text-stroke` are exactly the two things named, and they are 4 lines out of 180. Everything else reads as your own work — the `position` offsets, the duplicated declarations and the missing `box-sizing` are not things AI produces. **No cap applied.**

**One thing to tighten:** "for knowledge learning" is ambiguous — it does not tell me whether AI *wrote* those lines or *explained* them to you. I read it the generous way. Next time write it plainly, e.g. *"AI wrote the 2 background lines"* or *"AI explained text-stroke, I typed it"*. Precision protects you.

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **1.5** |
| 2 | Code quality — naming, structure, no dead code | 2 | **1** |
| 3 | Understanding — test questions, checklist honesty | 3 | **1** |
| 4 | Process — folder, NOTES.md, same-day push | 2 | **1.5** |
| | **TOTAL** | **10** | **5 / 10** |

## 🏁 Verdict: 🔁 REDO

Below the pass mark of 6 — but read the next section before you feel bad about it. There is real progress here, and the redo is about 45 minutes of work.

---

## ✅ What genuinely improved since Day 1

These are not small things. Note them.

- **You scoped your selectors.** Day 1 was `p { }` and `h1 { }` styling the whole page. Today it is `.pricing-card h2`, `.pricing-card li`. That is the exact fix I asked for, and you applied it without being reminded.
- **`.price` is a proper class.** That is the pattern. More of that.
- **You wrote a header comment with your scale and colours** before writing the CSS. Most people never build that habit.
- **You styled the list properly** — `list-style-type: square` with `list-style-position: inside`, not `<br>` tags. Correct tool, correct place.
- **The `:hover` on the button works** and the card renders. It looks like something.
- **Your struggle note is the best thing in this submission:** *"i solved it but added a new attribute (display:inline-block) which i still dont understand."* That sentence is worth more than a perfect card. Keep writing exactly like that.

---

## ❌ What cost you the marks

### 1. The checklist is ticked, but two items are not done — this is the big one

You ticked all 6 boxes. Two of them are objectively false:

| You ticked | Reality |
| --- | --- |
| `box-sizing: border-box` set once at the top and explained | **`box-sizing` does not appear anywhere in `card.css`.** I checked. Zero occurrences. |
| Spacing scale — use **only** 4/8/16/24/32 | You used 7, 10, 12, 15, 18, 20, 22, 27, 30, 33, 35, 40, 50, 350… |
| Button with `:hover` **and `:focus-visible`** | `:hover` yes. `:focus-visible` — zero occurrences. |

The checklist is your mark sheet. If you tick things you have not done, it stops being useful to you and it stops being believable to me. **Tick honestly, leave the hard ones unticked, and tell me why in NOTES.md** — an unticked box with an honest explanation loses you almost nothing. A wrongly ticked one costs you trust, which is expensive.

### 2. You missed the entire point of the day: the box model

Today was *about* `box-sizing`. Look at your own card:

```css
.pricing-card {
  width: 500px;
  height: 500px;
  padding: 30px;
  border: 1px solid black;
}
```

**Question: how wide is that card on screen?** Not 500px. It is **562px** — 500 + 30 padding left + 30 padding right + 1 border + 1 border. The browser default is `content-box`, so padding and border are added *on top of* your width.

Add this at the top of the file and your 500 becomes a real 500:

```css
*, *::before, *::after { box-sizing: border-box; }
```

Open DevTools, hover the card, read the box diagram — before and after. That five-second experiment is the whole lesson of Day 2.

### 3. `position: relative` with `right: -350px` — you did it again, five times

Day 1's feedback said: *"`position: relative; top: -30px` is a workaround, not a fix."* Today there are **five** of them, including `right: -350px` twice.

Here is what you were actually trying to do, and the real answer:

You wanted the price and the button pushed to the right. `text-align: right` did not move them, because they are `inline-block` — so `text-align` aligned the *text inside them*, not the boxes themselves. So you shoved them with `right: -350px`.

**The fix is one line on the parent:**

```css
.pricing-card { text-align: right; }   /* children now align right by themselves */
```

Then delete every `position`, `top`, `left` and `right` in the file.

Why `-350px` is genuinely dangerous: it only works because the card happens to be 500px wide. Change the card to 400px and everything falls off the edge. **A number that only works by coincidence is a bug that has not happened yet.**

And the brief was explicit: *"you will use only `display`, `padding`, `margin`, `width` and normal document flow."* `position` was not on that list — deliberately.

### 4. Three features, not five

> *"a list of **5 features**"*

You built 3. Read the brief to the end before you start, and re-read it before you commit.

### 5. `display: inline-block` — the thing you said you do not understand

You are right that you do not understand it yet, and right to say so. Here it is:

- `display: block` → takes the **full width** of its parent, always starts a new line. (`div`, `p`, `h2`)
- `display: inline` → sits **in the text flow**, and **ignores width, height and vertical padding**. (`span`, `a`)
- `display: inline-block` → **both**: sits in the flow like inline, but obeys width, height and padding like a block.

That is why your price tag needed it. As `inline`, your `padding: 7px 15px` would have leaked over the lines above and below and the background would have looked broken. As `block`, it would have stretched the full card width instead of hugging the text. `inline-block` was genuinely the right call — you found the right answer by feel. Now you know why.

### 6. Small things

- **Duplicate and dead declarations:** `li` has `font-size: 18px` *and* `font-size: 22px` — the first does nothing. `ul` has `text-align: right` twice.
- **Every line is double-spaced** in both files. Not wrong, but it makes 90 lines look like 180 and makes it harder to see structure. One blank line between rules, none inside them.
- **Filenames:** the brief's artifact table asked for `index.html` and `style.css`. You handed in `card.html` / `card.css` (copied from Day 1). Small, but the table is there so there is no guessing.
- **`transform: scale(1.2)` on hover** is a 20% jump — that is the "circus" I warn about in Week 3. Try `1.03`.
- **Stray files:** you committed `weeks/week-09/day-5/assignment/index.html` containing `sss`, an empty `style.css`, and a stray space in `weeks/week-09/exam/README.md`. Delete them. Also: three commits called `test` — commit messages are a log you will read later, so make them mean something. Format is `week 01 day 2: pricing card`.

---

## 🎤 The five questions — you left all of them blank

This is where **3 of the 10 marks** live, and the answers were sitting in `assignment/README.md` the whole time. You wrote *"no questions cuz its not much deeper topic."*

Respectfully: you missed `box-sizing` completely and used `inline-block` without knowing what it does. The topic is deeper than you think. That is not a criticism — it is the reason the questions exist.

Answer these in `learn/NOTES.md` before the redo:

1. What is the difference between `padding` and `margin`? When does the background colour show through?
2. Why does `width: 100%` plus `padding: 20px` overflow the parent by default?
3. What does `margin: 0 auto` do, and what condition must be true for it to work?
4. Name two block-level elements and two inline elements. What is the practical difference?
5. **Prove it:** set `box-sizing: content-box` on the card, screenshot the break, set it back.

---

## 🔁 Your redo list — about 45 minutes

- [ ] Add `*, *::before, *::after { box-sizing: border-box; }` at the top, with a comment saying what it does
- [ ] Add the 2 missing features (5 total)
- [x] Delete **all five** `position: relative` blocks and every `top`/`left`/`right` offset — use `text-align: right` on `.pricing-card` instead
- [x] Add a `:focus-visible` state to the button (Tab to it — you must be able to see where you are)
- [ ] Replace every spacing number with one from your own scale: 4 / 8 / 16 / 24 / 32 / 48
- [x] Delete the duplicate `font-size` and `text-align` declarations
- [ ] Answer the 5 questions in `learn/NOTES.md`
- [x] Delete the stray files in `weeks/week-09/` (`index.html` containing `sss`, the empty `style.css`)
- [ ] Note: I removed the leftover `2026-7/27/` draft copy of this card for you — it was an older version of the same work sitting in the old folder format, and having two copies would have had you editing the wrong file tomorrow. It is still in git history (`git show 61001bf:2026-7/27/card.css`) if you want it.
- [ ] Untick any box you have not actually done

**Redo due: Saturday 1 August, end of day** — assessed Sunday 2 August.
This is the item that decides whether Week 1 passes (average 5.95 vs a 6.0 gate). See the [Week 1 review](../WEEK-REVIEW.md#-your-catch-up-days--friday-31-july--saturday-1-august).

---

## 📌 One habit to change

**Read the brief, build, then open the checklist and check each box against the actual file — not against your memory of what you meant to do.**

For `box-sizing` that is one `Cmd+F` in your CSS. Ten seconds would have caught it. Do that ten seconds before every commit, for the rest of this course.

You are not behind. Day 1 was 6, today is 5, and the gap is entirely *process* — reading to the end, checking your own work, answering the questions. Those are the cheapest marks in the whole course to win back.

---
---

# 🔁 REDO ASSESSMENT — 30 July, commit `8157ce0`

**Resubmitted:** 2026-07-30 15:58 — ☑ well inside the Sat 1 Aug deadline (44 minutes after it was set)

## Revised score

| # | Criterion | Max | Was | Now |
| --- | --- | --- | --- | --- |
| 1 | Requirements met | 3 | 1.5 | **1.75** |
| 2 | Code quality | 2 | 1 | **1.25** |
| 3 | Understanding | 3 | 1 | **1.25** |
| 4 | Process | 2 | 1.5 | **1.5** |
| | **TOTAL** | **10** | 5 | **5.75 / 10** |

**This score replaces the 5.** And it is the score that closed out your week — see the bottom of this file.

---

## ✅ What you fixed

| Redo item | |
| --- | --- |
| Add the 2 missing features (5 total) | ✅ done — and you did not even tick it |
| Delete all five `position: relative` blocks and every offset | ✅ done |
| Delete the duplicate `font-size` and `text-align` | ✅ done |
| Delete the stray files in `weeks/week-09/` | ✅ done |
| *(bonus)* rename to `index.html` / `style.css` | ✅ done — matches the artifact table |

## 🌟 And the thing I want to single out

**You ticked four boxes and honestly left five unticked — including one you had actually done.**

You completed the 5 features and left that box empty. You *under-claimed*. Compare that with the original submission, where you ticked all six boxes with two of them plainly false.

I set the "only tick what you can point at" rule **forty-four minutes** before you pushed this, and it is already in your behaviour. That is the fastest any piece of feedback has landed with you, and it is the one that matters most, because everything else I tell you depends on being able to trust your own report of your own work.

For the record: tick the ones you *have* done. Honest means accurate in both directions.

---

## ❌ What is still not done

### 1. `box-sizing` — still absent, and it was item #1

```
$ grep -c "box-sizing" weeks/week-01/day-2/assignment/style.css
0
```

Day 2's entire subject is the box model. Your card is still `width: 500px; padding: 30px; border: 1px` = **562px on screen**, and there is still nothing in the file that says so.

You *proved on Day 3 and Day 5 that you understand this property* — you set `border-box` correctly on both, and on Day 3 you even widened the card to 570px to make the content fit honestly. So this is not a knowledge gap any more. It is just an unticked line on a list.

```css
*, *::before, *::after { box-sizing: border-box; }  /* padding + border count inside width */
```

### 2. The five questions are still blank

`learn/NOTES.md` still has:
```
1.
2.
3.
4.
5.
```

**That block is worth 3 of the 10 marks** — the largest single chunk of the rubric. It is the reason this redo is 5.75 and not 7.5. The questions are in [`assignment/README.md`](assignment/README.md), they are published in advance, and answering them takes fifteen minutes.

If you had answered these five questions and added one line of `box-sizing`, this would have been a 7.5 and Day 2 would be closed.

### 3. 🐛 Your `:focus-visible` rule matches nothing

```css
.button:focus-visible { … }   /* ← a CLASS called "button" */
```

```html
<button>Order Now</button>     <!-- ← no class attribute at all -->
```

`.button` with a dot means *"an element with `class="button"`"*. Your button has no class, so this rule can never apply. Tab to the button — nothing happens.

**This is the Day 3 lesson again, from the other direction.** On Day 3 you tested `.card p` when your div was `class="pricing-card"`, and the rule silently never matched. Same mistake, same cause: **a dot means class, no dot means element.**

```css
.pricing-card button:focus-visible { … }   /* the <button> inside .pricing-card */
```

Credit where due: the *contents* of the rule are correct — `outline: 0.2rem solid rgb(0,0,0)` has a width **and** a style, which is the Day 5 fix applied here in advance. You fixed the property and then aimed it at the wrong element.

### 4. The magic numbers are still there, on two elements

```css
.price  { margin-left: 350px; }
button  { margin-left: 330px; }
```

You put `text-align: right` on `h2`, `ul` and `li` — good, that is the right tool. But `.price` and the button are `inline-block`, so `text-align` on *themselves* does nothing; it has to be on the **parent**:

```css
.pricing-card { text-align: right; }   /* then delete both margin-left values */
```

One line on the parent replaces both numbers, and it keeps working if the card is ever not 500px wide. Third time I have written this line out.

### 5. Spacing scale, and the comment that still lies

- Numbers in use: 30, 50, 350, 330, 20, 33, 7, 15, 22, 12, 27. Your own declared scale: 4 / 8 / 16 / 24 / 32 / 48.
- Your header comment still says **"width and height ; 500px"** (there is no height any more) and **"relitive positions"** (you removed them all — well done — but the comment still advertises them).

A comment describing code you deleted is actively misleading. Update it or delete it.

---

## 🏁 Verdict: 5.75/10 — still under the day pass mark of 6, **but your week passed**

| | |
| --- | --- |
| Day 2 (this day) | **5.75** — remains the weakest day of the week |
| **Week 1 average** | **(5.75 + 6 + 6 + 6.5 + 6.25) ÷ 5 = 6.1** |
| **Week 1 gate (≥ 6.0)** | ✅ **PASSED** |

**You have unlocked Week 02 — Flexbox & Grid.** You turned this around 44 minutes after the deadline was set, and that speed is what saved the week.

### Carried into Week 2 — two items, twenty minutes

Not blocking, but do them:

- [ ] Add `box-sizing: border-box` to this file. You know how; it is one line.
- [ ] Answer the five questions in `learn/NOTES.md`.

If you do both, tell me and I will re-mark this day one final time. With the questions answered it is a 7+, and I would rather your record showed the day you actually understand than the day you rushed.

**And note this:** flexbox — which you start on Monday — is the real answer to `margin-left: 350px`. Every alignment problem you have hand-tuned with pixels this week becomes `justify-content: flex-end`. You have earned that lesson the hard way, which is exactly why it will stick.
