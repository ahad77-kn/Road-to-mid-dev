# 📝 Feedback — Profile page, 23 July (unscheduled work)

**What this is:** a personal profile site you built on **Thu 23 July** — 60 lines of HTML, 153 lines of CSS, two photos.
**Pushed:** Mon 27 July 13:57, in a commit called `test`, 4 days after you built it.
**Scheduled assignment?** No. Week 01 Day 2 was the pricing card. This was your own initiative.

---

## 🏁 Not scored — and here is exactly why

**No score on the scoreboard, no redo, no penalty.** Two reasons:

1. **`LEARNED.md` is empty.** The whole template is untouched — every section blank except *"learning from 10:30am"*. The rule in this repo is *no notes = the assignment does not exist*, and I am holding to it. But since this was not a set assignment, it costs you nothing.
2. **It was not on the curriculum**, so scoring it against a checklist it was never written for would be unfair to you.

**But I am giving you full feedback anyway, because you did the work and the work has one habit in it that I need to kill right now, before Week 2.**

---

## ✅ What is good here

- **You built it on your own initiative.** Nobody set this. That instinct is worth more than any single day's mark, and it is the reason I am writing this file instead of ignoring the folder.
- **You used semantic tags** — `<header>`, `<nav>`, `<section>`, `<footer>`. Most beginners use `<div>` for everything. This is Week 3 material and you reached for it in Week 1.
- **`id` anchors wired to nav links** (`#about`, `#skills`) — you worked out in-page navigation by yourself.
- **`alt` text on both images.** Small thing, almost nobody does it unprompted.
- **You gave the skill cards a class and a container** — you were thinking in components before anyone taught you the word.

---

## 🚨 The one thing that must stop: laying out a page with `position`

Your CSS has **12 positioning offsets**. The page is assembled at fixed coordinates:

```css
top: 250px;   left: 1%;
top: 420px;   left: 1%;
top: 550px;   left: 40%;
top: 650px;
top: 750px;   left: 40%;
```

This is the third time in three pieces of work — Day 1 (`top: -30px`), Day 2 (five offsets, `right: -350px`), and here (twelve). It is becoming your default, so let me be blunt about why it is a dead end:

**A page built this way cannot survive anything.**

- Change the text in "About Me" to two paragraphs → it slides under the Skills section, because Skills is nailed to `top: 550px` and does not know the text above it grew.
- Open it on a phone → everything overlaps. You have `left: 40%` and no media queries.
- Add one new section → you must hand-recalculate every `top:` below it.

**Normal document flow already does this for you, for free, forever.** Block elements stack top to bottom automatically. You space them with `margin`. That is the entire job. When you write `top: 550px` you are switching that system *off* and taking the work back onto yourself.

**Try this experiment, it takes 2 minutes:** delete every `position`, `top`, `left`, `right` from `profile.css`. The page will look plainer — but every section will be in the right order, nothing will overlap, and it will already half-work on a phone. That is the starting point you actually want.

Positioning is a real tool with a narrow job — badges on a corner, a modal overlay, a sticky header. It is not a layout system. Flexbox and Grid are, and you get both next week.

---

## The other fixes

| # | Issue | Why it matters |
| --- | --- | --- |
| 1 | **`<link rel="stylesheet">` is inside `<body>`** | It belongs in `<head>`. In the body it works by luck — the browser has already started rendering, which causes a flash of unstyled content. |
| 2 | **Unclosed `<div>`s** — `.skills-container` and the last `.skill-card` never close before `</section>` | Broken nesting. The browser guesses, and its guess will not match yours. Run it through [validator.w3.org](https://validator.w3.org/) — free, instant, and it will find these for you. |
| 3 | **No `box-sizing: border-box`** | Same gap as Day 2. This is the Week 1 concept you keep skipping. |
| 4 | **`ahad2.jpg` is 972 KB**, displayed at 700×350 | Nearly a megabyte for a photo shown small. On Pakistani mobile data that is a real cost to a real visitor. Resize before committing. |
| 5 | **10 blank lines mid-HTML**, images floating outside any section | Structure should read top-to-bottom like the page does. |
| 6 | **`<h1>Welcome to My Personal<span>Profile</span></h1>`** | No space before the span, and the `span` has no styling purpose. |
| 7 | **`"I am known as..."` placeholder left in** | Never commit placeholder text. Either write it or delete the line. |
| 8 | **Empty `script.js` and empty `<footer></footer>`** | Delete empty files and empty tags. Code that does nothing still has to be read by someone. |
| 9 | **Pushed 4 days late, in a commit called `test`** | The work was done Thursday and invisible until Monday. As far as the repo was concerned, it did not exist. Push the day you build. |

---

## 🎯 What to do with this

**Do not throw it away, and do not fix it now.** Keep it exactly where it is.

In **[Week 03 Day 4](../../weeks/week-03/day-4/)** the assignment is *"Start your real portfolio site"* — that is this page, done properly, with flexbox, grid, media queries and no positioning at all. When you get there, open this folder side by side and rebuild it. The difference between the two files will show you six weeks of progress better than any mark I could give you.

That is the real value of this folder: it is your **before** picture. Keep it.

---

## 📌 The habit

**Build in the flow first. Reach for `position` only when you have tried margin and it genuinely cannot do the job — which is roughly never in Week 1.**

For the rest of this week, treat `position`, `top`, `left`, `right` and `bottom` as **banned**. If you find yourself needing one, that is a signal you have the wrong layout tool, and the answer is to ask me — not to nudge the box.

---

*Filed 27 July by Adil. Not scored. Real work, real feedback.*
