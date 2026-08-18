# 🧾 Assessment — Week 03 · Day 4

**Assignment:** Start your real portfolio site — semantic structure, real content, organised files.
**Submitted:** 2026-08-13 15:47 (commit `c5c1cf1`) — ☑ same day
**Reviewed by:** Adil on 2026-08-14

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **2.5** |
| 2 | Code quality | 2 | **1.5** |
| 3 | Understanding | 3 | **2.25** |
| 4 | Process | 2 | **1.75** |
| | Standing rules (S8) | | **−0.25** |
| | **TOTAL** | **10** | **7.75** |

## 🏁 Verdict: ✅ PASS — **your best day since the format changed**

Also your longest: 10am–3:30pm, **5½ hours**. It shows.

---

## 🔬 Verified

**Semantic structure — full marks, and I checked the outline properly:**

```
header ×1   nav ×1   main ×1   section ×5   article ×9   footer ×1
headings:  h1 → h2 → h2 → h3 h3 h3 h3 → h2 → h3 h3 h3 h3 h3 → h2
```

**One `<h1>`, and not a single skipped level.** That is the thing the checkbox actually asks for and most people get wrong.

**Responsive at every width I tested** — 320, 480, 768, 1200: zero horizontal overflow, zero overflowing elements. Nobody asked for that today. You brought Week 3 with you.

**The contact form is properly built:**

```
3 <label> · 3 inputs · 3 matching for="" attributes
```

Every input has a real label bound to it. That is Week 1 Day 5 knowledge, still intact three weeks later.

**All five images have genuinely descriptive `alt`:**

> *"Screenshot of my six product cards arranged with Flexbox"*

Not `alt="project"`. Someone using a screen reader can tell your projects apart.

**`:root` custom properties** — six colours, four spacing steps, defined once. And your comment above them is unmistakably yours: *"i wrote colors and sizes with tags or ids so i can use them easily in whole code"*. That is the right idea in your own words.

**Real content.** Your name, your face on it, your five actual projects with real screenshots. No lorem ipsum anywhere.

---

## 🔧 What cost you 2.25

### 1. 2.8 MB of images — S8, and this is the third time — −0.25

| File | Size | Displayed at |
| --- | --- | --- |
| **grid-gallery.png** | **1.99 MB** | 339 × 200 |
| responsive-gallery.png | 396 KB | 339 × 200 |
| product-cards.png | 283 KB | 339 × 212 |
| youtube-layout.png | 116 KB | 339 × 200 |
| grid-layout.png | 102 KB | 339 × 200 |

Every one is a **1440×900 screenshot** displayed in a **339px box** — roughly 4× more pixels than the screen can use, in the format that compresses photos worst.

The limit is 200 KB. One file is **ten times** that.

**And of all the pages you will ever build, this is the one where it matters most.** This is the portfolio. A recruiter opens it on a phone on mobile data, waits four seconds for a blank screen, and closes it. That is the entire cost, and it is invisible from your laptop.

**Fix:** resize each to ~700px wide, export as JPEG quality 75. All five will come in under 250 KB *combined* — that is a **10× reduction** with no visible difference at 339px.

### 2. `RREADME.md` — and this one is partly my fault

The brief asks for `README.md` in the assignment folder. But `assignment/README.md` **is the brief** — so following the instruction would have deleted it. You worked around that by inventing a new name, which was the right instinct.

**That is a bug in my brief, not your work, and I have fixed it** — the deliverable is now `PROJECT.md`. Please rename `RREADME.md` → `PROJECT.md`.

No marks lost. But next time a brief asks for something impossible, **say so in NOTES** — "the README would overwrite the brief, so I called it X". That sentence is worth more than the workaround.

### 3. BEM is inconsistent — and your own question explains why

```
about__text   contact__button   footer__text   header__logo    ← correct
about_title   hero_button                                       ← single underscore
```

Two classes use `_` where every other uses `__`. In BEM those mean different things, and this is exactly what your closing question is about:

> *"What is BEM, and why are class names like project-card__title written that way?"*

**Good question — here is the answer.** BEM is `block__element--modifier`:

- **`card`** — the **block**. A thing that makes sense on its own.
- **`card__title`** — an **element**. A part that only makes sense *inside* that block. Two underscores.
- **`card--featured`** — a **modifier**. A variant of the block. Two hyphens.

So `about__text` reads as *"the text inside the about block"*. `about_title` with one underscore reads as nothing — it is just a name with a typo in it.

**Why it exists:** it kills specificity wars. Every selector is one flat class, nothing is nested, nothing needs `!important`, and you can tell what a class does from its name alone, without opening the HTML. On a big codebase that is the difference between changing a colour in ten seconds and in an hour.

You used it correctly in 14 places out of 16. Fix the two.

### 4. `object-fit` is inconsistent

`product-cards.png` computes to `object-fit: fill`; the other four are `cover`. `fill` **stretches** the image to the box and distorts it. One screenshot in your portfolio is subtly the wrong shape.

### 5. The first project screenshot shows your browser

That image includes your Chrome tab bar and the `127.0.0.1` address bar. It shows a recruiter your localhost, not your work. **Crop to just the page.**

---

## 🎤 Your answers — 4 / 5, and mostly in your own voice

Q1 ✅ *"section is a whole section while div is just a divider"* — yours, and right.
Q3 ✅ Q5 ✅ *"the html should still show readable content in the correct order because semantic html provides the structure"* — exactly.
Q2, Q4 ⚠️ noticeably more polished than the rest. Q4's Sass point is correct, but say it your way: *"css variables can change in the browser, sass ones are gone after compiling"*.

**This is a clear improvement on last week** — see the [state of play](../../../STATE-OF-PLAY.md). Q1, Q3 and Q5 read like you.

## ▶️ Fixes — 30 minutes

1. **Resize all five images**, export as JPEG. −2.5 MB. *(15 min — the one that matters)*
2. `about_title` → `about__title`, `hero_button` → `hero__button`
3. Rename `RREADME.md` → `PROJECT.md`
4. Crop the browser chrome out of the first screenshot
5. `object-fit: cover` on all five

---

**The one sentence:** *Semantically this is the cleanest page you have built — one h1, no skipped levels, labelled inputs, real alt text — and it is carrying two megabytes of screenshot into the one page where load time actually decides whether anyone sees your work.*

---

## 🔄 Fix pass — 16 Aug 16:43 (`001ca79`) · **score stays 7.75**

**2 of 5 done, and one of them was declared rather than skipped quietly.**

| # | Fix | Status |
| --- | --- | --- |
| 1 | Resize the five images | ❌ **not done — but declared** |
| 2 | `about_title` → `about__title`, `hero_button` → `hero__button` | ✅ **done** |
| 3 | Rename `RREADME.md` → `PROJECT.md` | ✅ done (as `project.md`) |
| 4 | Crop the browser chrome out of the first screenshot | ❌ not done |
| 5 | `object-fit: cover` on all five | ❌ not done |

### ✅ The BEM fix is correct

```diff
- <a class="hero_button" href="#projects">
+ <a class="hero__button" href="#projects">
- <h2 class="about_title">
+ <h2 class="about__title">
```

Both renamed, and the CSS already had `.hero__button` and `.about__title` waiting for them — so these two rules went from dead to live. **That is the right way round: rename in both files, then look at the page.** Remember that sentence when you read the [Day 5 assessment](../day-5/ASSESSMENT.md).

### ✅ You declared the skip instead of hiding it

> *"skip images sizes this time and day 5 they wil be ok in upcomming assignments."*

**This is the behaviour I asked for after the deleted-folders week** — disagree or defer *in writing*, where I can see it. It costs you nothing here and Day 4's score is unchanged.

It does not carry to Day 5, though, and for one reason: on Day 5 you deployed. The moment those 2.8 MB went onto the public internet they stopped being a style note and became the load time of the page you will send to employers. Charged there, not here.
