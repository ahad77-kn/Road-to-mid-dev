# 🧾 Assessment — Week 01 · Day 3

**Assignment:** Break your pricing card five ways on purpose, then fix each one and explain why it broke.
**Folder:** `weeks/week-01/day-3/`
**Submitted:** 2026-07-28 15:00 (commit `d6617d2`) — ☑ on time (same day)
**Reviewed by:** Adil on 2026-07-28

---

## How it was solved

☑ **Self + AI used for explanation and one property — declared clearly**

**Your declaration:** *"for explaining me the assignment what needed in it and i learned one more thing from it and then wrote by my self (… `white-space: nowrap` keeps the items in one line)"*

**Matches the evidence?** ☑ yes, and **this is exactly how to declare.** You said what you asked, what you learned, and that you typed it yourself. Compare it with yesterday's vague *"for knowledge learning"* — you fixed that in one day. **No cap applied.**

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **2.25** |
| 2 | Code quality | 2 | **0.75** |
| 3 | Understanding | 3 | **1.75** |
| 4 | Process | 2 | **1.25** |
| | **TOTAL** | **10** | **6 / 10** |

## 🏁 Verdict: ✅ PASS

Your best day so far, and up from 5. It is a *thin* pass — the gaps below are real — but the movement is in the right direction and I want you to see that clearly.

⚠️ **Day 2 is still 🔁 REDO and you have not done it.** See the bottom of this file.

---

## ✅ What you did well — this is a real jump

- **All five bugs, all five screenshots, all five explained.** That was the core ask and you delivered every part of it. Nobody enjoys deliberately breaking working code; you did it anyway.
- **🎉 You removed every single `position` hack.** Day 2 had five. Today: **zero**. I banned them yesterday and you complied the very next day. That is the single most important thing in this submission.
- **You answered 4 of the 5 questions.** Yesterday you answered none. Q5 is a live task, so leaving it blank is fair — that means you answered everything that *could* be answered in writing.
- **Correct filenames this time** — `index.html` and `style.css`, exactly as the artifact table asked.
- **You dropped `height: 500px`.** You may not have noticed, but that is a genuine improvement — the card can now grow with its content instead of clipping it.
- **Bug 4 and Bug 5 are correct and well reasoned**, in your own words. *"if both specificities are same then the browser will run the one which comes after"* — that is exactly right, and you worked it out by breaking it yourself.
- **You were honest about Bug 2** instead of pretending. That honesty is what lets me actually help you, which I do below.

---

## 🔧 The corrections

### 1. Your specificity numbers are wrong — and this matters

You wrote: *"`.price` (0-2-0) and `.card p` (0-1-1)"*

- `.price` is **one class** → **0-1-0**, not 0-2-0.
- `.card p` is one class + one element → **0-1-1**. That part is right.

By those real numbers, `.card p` (0-1-1) **beats** `.price` (0-1-0) — the opposite of what you observed. So why did red win?

**Because `.card` does not exist in your HTML.** Your div is `class="pricing-card"`. A selector that matches nothing never applies, no matter its specificity. Red won by walkover, not by specificity.

Read that again, because it is the most useful thing on this page: **a rule that does not apply and a rule that loses a specificity fight look identical on screen.** DevTools tells them apart — a losing rule shows struck through in the Styles panel; a non-matching rule does not appear at all.

**Counting, once more:**

| Selector | id | class | element | Value |
| --- | --- | --- | --- | --- |
| `#price` | 1 | 0 | 0 | 1-0-0 |
| `.card .price` | 0 | 2 | 0 | 0-2-0 |
| `p.price` | 0 | 1 | 1 | 0-1-1 |
| `.card p` | 0 | 1 | 1 | 0-1-1 |
| `p` | 0 | 0 | 1 | 0-0-1 |

Your Q1 ranking got 1st, 2nd and 5th right. But `p.price` and `.card p` are **tied** — same numbers. When specificity ties, source order decides. You already know this: it is your own Bug 4 answer.

### 2. Your box math counts margin — it should not

You wrote: *"width 500px, padding 30px, margin 50px, so its total becomes 580px"*

**Margin is not part of the box.** It is the empty space *outside* the border, pushing other elements away. It never adds to the element's own width.

With your real values — `width: 500px; padding: 30px; border: 5px` under `content-box`:

```
500  content
+ 30 + 30   padding left + right
+  5 +  5   border left + right
─────────
= 570px on screen
```

The `margin: 50px auto` sits outside all of that. Check it yourself: DevTools → hover the card → the box diagram shows content, padding, border and margin as four separate rings. That picture is worth more than any explanation I can type.

### 3. You ended on `content-box`. Go back to `border-box`.

Your final CSS says `box-sizing: content-box;` and your note says *"it fits for me now"*.

I understand why — with `border-box`, your 500px card had to fit content *and* 60px of padding *and* 10px of border inside 500px, so things got tight and overflowed. Switching back made the squeeze go away.

But you solved the wrong problem. **The overflow was telling you something true:** your content genuinely needs more room than you gave it. The fix is to widen the card or reduce the padding — not to switch off the measuring system.

Why essentially every real project sets `border-box`:

```css
*, *::before, *::after { box-sizing: border-box; }
```

Because with it, `width: 500px` **means 500px on screen** — always, whatever padding or border you add later. You can change padding from 30px to 40px and the layout does not shift. Under `content-box`, every padding change silently resizes the element, and in a page with 50 elements you spend your life doing arithmetic.

You now understand what both values do — that is real progress from Day 2 where the property was simply absent. Now pick the one professionals pick, and fix the content instead.

### 4. Bug 2 — here is why you could not see it

This is the one you said you did not understand. You were not failing; **your card is structurally immune to the bug, so there was nothing to see.**

Parent–child margins collapse **only when nothing separates them** — no padding, no border, no gap. Your card has:

```css
.pricing-card { padding: 30px; border: 5px solid black; }
```

Both of those sit between the parent's edge and the child's margin, so the collapse cannot happen. You had already prevented it before you tried to demonstrate it.

**To actually see it:** delete the `padding` and `border` from `.pricing-card`, then give `h2` a `margin-top: 50px`. The margin will "escape" the card and push the *whole card* down instead of moving the heading inside it. Put the padding back and the heading moves instead. That flip is the bug.

Two ways to stop it — your Q3 answer said "padding and maybe flow", which is half right:
1. **`padding` or `border` on the parent** ← what your card already does
2. **`display: flow-root` on the parent** (or making it a flex/grid container)

You were reaching for the word "flow" — the real name is `flow-root`. Good instinct.

### 5. `margin-left: 350px` is yesterday's `right: -350px` wearing a different hat

You removed `position`. Genuinely well done. But look at what replaced it:

```css
margin-left: 280px;   /* h2 */
margin-left: 350px;   /* price */
margin-left: 230px;   /* li */
margin-left: 340px;   /* button */
```

Four hand-tuned numbers that only work because the card happens to be 500px wide. Change the card to 400px and all four are wrong. Same coincidence, different property.

**What you actually want is still one line:**

```css
.pricing-card { text-align: right; }
```

Then delete all four `margin-left` values. Everything aligns right by itself, and it keeps working at *any* card width. I gave you this line yesterday — try it today, it takes 30 seconds.

Related: you added `white-space: nowrap` to stop the list items wrapping onto two lines. That is a band-aid over the same wound — they wrap because `margin-left: 230px` plus `padding: 20px` leaves them almost no room. Remove the margins and they stop wrapping on their own.

### 6. 🐛 You shipped a real bug — line 58

```css
.pricing-card ul { margin: 20px opx; }
                              ^^^^
```

`opx` is not a unit. The letter **o**, not a zero. That entire `margin` declaration is invalid, so the browser **silently discards it** — your `ul` has no margin at all and you never noticed.

This is the most valuable thing on this page for your future: **invalid CSS does not error. It vanishes.** No warning, no red text, nothing in the console. The rule simply is not there.

How to catch it every time: in DevTools → Styles, an invalid declaration shows with a ⚠️ and a strike-through. Scroll your rules for one minute before committing. VS Code will also underline it if you have the CSS language service on.

### 7. Still outstanding from yesterday

- **Duplicate `font-size`** in `.pricing-card li` — `18px` then `22px`. The 18px does nothing. I flagged it yesterday; it is still there.
- **The spacing scale is still ignored.** Your own comment declares 4/8/16/24/32/48. You used 7, 10, 12, 15, 18, 20, 22, 27, 30, 35, 50, 230, 280, 340, 350.
- **Class selectors** — still `.pricing-card h2`, `.pricing-card li`. This was one of the two Day-1 carry-overs you ticked as done. You did the other one (position) properly; this one you did not.
- **Your header comment still says "relitive positions"** — you removed them, so the comment now lies. A comment that describes code you deleted is worse than no comment. Also: "paadings" → "paddings", "relitive" → "relative".

### 8. The screenshots are 6.4 MB

Five JPGs, ~1.3 MB each. This is the third time I have raised image size — `ahad2.jpg` was 972 KB on the profile page too.

A screenshot of a browser window should be **under 200 KB**. Take it with `Cmd+Shift+4` (PNG), then run it through [squoosh.app](https://squoosh.app/) before committing. Git keeps every version of a binary file **forever**, so a repo bloated with unoptimised images gets slower to clone permanently.

Also rename `bug 1.jpg` → `bug-1.jpg`. Spaces in filenames break URLs and shell commands.

### 9. `bugs.md` is a Markdown file — write Markdown in it

You wrote raw HTML: `<h1>`, `<p>`, `<br>`. It renders, but in a `.md` file the tools are simpler:

```markdown
## Bug 1 — specificity

I set `.price` (0-1-0) to red and `.pricing-card p` (0-1-1) to blue.
Blue won because…
```

`##` for a heading, a blank line for a paragraph, backticks for code. Five minutes of [Markdown basics](https://www.markdownguide.org/basic-syntax/) and your write-ups will be much faster to produce and to read.

---

## 🔁 Day 2 is still outstanding

You went straight to Day 3 without doing the Day 2 redo. Day 2 stays at **5/10** until it is done.

**Good news: it is now much smaller than it was**, because Day 3 already fixed the position hacks and taught you `box-sizing`. What is left on `weeks/week-01/day-2/`:

- [ ] `box-sizing: border-box` (not content-box)
- [ ] 5 features, not 3
- [ ] `text-align: right` on the parent instead of the margin/position numbers
- [ ] `:focus-visible` on the button
- [ ] Numbers from your own spacing scale
- [ ] Untick the boxes you had not actually done

Then the same fixes carry into Day 3's card, since it is the same card.

**Do the Day 2 redo before starting Day 4.** Two unpassed days in one week is where a week starts repeating, and you are too close to that line for a week where you are clearly improving.

---

## ✅ FIXES DONE — 30 July 15:14, commit `0ebc7ab`

You pushed these **40 minutes after reading this assessment**, and you did them right:

| Fix | Done |
| --- | --- |
| `margin: 20px opx` → `20px 0px` | ✅ |
| `box-sizing: content-box` → `border-box` | ✅ |
| Duplicate `font-size: 18px` deleted | ✅ |
| `width: 500px` → `570px` | ✅ **and this one impressed me** |

That last change was not on the list. You read the arithmetic in section 3 above — 500 content + 60 padding + 10 border = 570 — and instead of switching `border-box` off again, you **gave the content the room it was actually asking for.** That is the correct engineering decision and you reached it by reading, not by guessing.

The score stays at 6/10 because it reflects the work as submitted at the deadline. But this is exactly the follow-through I have been asking for, and it is the reason I am confident the Day 2 redo will score well. Keep this speed.

*Still open on this file (not required, but worth doing when you next touch it): the `margin-left: 230px` magic numbers, and the header comment that still says "relitive positions".*

---

## Original fix list

- [ ] Line 58: `opx` → `0`
- [ ] `content-box` → `border-box`, then fix the content that overflows
- [ ] Delete the four `margin-left` values; add `text-align: right` to `.pricing-card`
- [ ] Delete `white-space: nowrap` once the margins are gone
- [ ] Delete the duplicate `font-size: 18px`
- [ ] Update the header comment — it still describes positions you removed
- [ ] Compress the screenshots, rename `bug 1.jpg` → `bug-1.jpg`
- [ ] Fill in the other two "What I learned" bullets — you learned far more than one thing today

---

## 📌 One habit to change

**Before you commit, read your own CSS once from top to bottom, out loud.**

You would have caught `opx`. You would have caught the duplicate `font-size`. You would have noticed the comment describing code you had deleted. That is three defects in a 92-line file, all findable in ninety seconds of reading.

You are getting better at the *thinking* — bugs 4 and 5 are genuinely well reasoned, and you removed every position hack the day after I asked. What is holding your score down now is not understanding, it is **checking**. That is the cheapest thing in this entire course to fix.

**Day 1: 6 · Day 2: 5 · Day 3: 6.** The trend is right. Close out Day 2 and it will look a lot better.
