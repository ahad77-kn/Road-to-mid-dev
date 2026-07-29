# 🧾 Assessment — Week 01 · Day 4

**Assignment:** Build an article page that is genuinely comfortable to read, sized entirely in `rem`.
**Folder:** `weeks/week-01/day-4/`
**Submitted:** 2026-07-29 15:10 (commit `dba108e`) — ☑ on time (same day)
**Reviewed by:** Adil on 2026-07-29

---

## How it was solved

☑ **Self + AI used to understand the Google Fonts requirement — declared**

**Your declaration:** *"for explaining me the assignment and that last requirement of google fonts i did not get that so that i took help of ai to study and learn about it."*

And in your question section: *"i studied the daily learnings but there i did not found the google fonts link to study about it, so i used ai to learn about it."*

**Matches the evidence?** ☑ yes. **And you are right — that is my fault, not yours.** The Day 4 reading links cover sizing and units but never explain how to load a web font. You noticed the gap, said so, went and learned it, and told me. That is exactly the behaviour I want. **No cap applied.** I will fix the reading list.

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **2.25** |
| 2 | Code quality | 2 | **1** |
| 3 | Understanding | 3 | **1.75** |
| 4 | Process | 2 | **1.5** |
| | **TOTAL** | **10** | **6.5 / 10** |

## 🏁 Verdict: ✅ PASS — your best day so far

**Day 1: 6 · Day 2: 5 · Day 3: 6 · Day 4: 6.5.** Four days, and the line is going up.

But read the ⚠️ section at the bottom before you feel too good about it. Something is going wrong that is not about CSS.

---

## ✅ What you did well

- **You actually did it in `rem`.** The only `px` in the whole file are two `border: 1px` — exactly the one exception the brief allows. Compare with Day 2, where you used 15 different arbitrary pixel values. This is a real change in how you write CSS.
- **`max-width: 72ch`** — you reached for the right tool for line length without being pushed.
- **`line-height: 1.6`, unitless** — correct value, correct form.
- **Google font with a proper fallback stack:** `'Inter', Arial, sans-serif`. If Inter fails to load the page still looks intentional.
- **No `position` hacks, no magic pixel offsets.** Two days running now. That habit is broken and I am pleased.
- **You wrote the content yourself.** A real article, with opinions, in your own voice. Most students paste lorem ipsum. Reading about Ronaldo made marking this more fun than it should have been.
- **All 5 questions attempted** — up from 4, up from 0 on Day 2. Three of them are solidly correct.
- **Q5, answered honestly:** *"i added the font link and stack back property but did not checked it because i did not get it full."* You could have bluffed. You did not. That is worth more to me than a correct answer.

---

## 🔬 The best bug on this page — your line length is not 72 characters

This one is subtle, genuinely interesting, and you could not have found it alone.

```css
.article { max-width: 72ch; }   /* .article has no font-size → inherits 1rem */
p        { font-size: 1.3rem; } /* but the text is 30% bigger */
```

**`ch` is measured in the font size of the element you write it on.** You put `72ch` on `.article`, which uses the inherited 1rem. But the paragraphs inside are `1.3rem`. So the container is 72 characters wide *at 1rem*, and you are filling it with characters that are 1.3× wider.

Real line length ≈ **72 ÷ 1.3 ≈ 55 characters** — under the 60–75 the brief asked for.

**The fix — put the constraint where the text is:**

```css
p { max-width: 68ch; }        /* measured in the paragraph's own font size */
```

or set the article's font-size to match, then size everything relative to it.

Open the page and count the characters in your longest line. You will find it is around 55. **The technique was right; the placement made it miss.** That is a genuinely mid-level mistake to make in week one.

---

## 🔧 The corrections

### 1. A list of numbers is not a type scale

The brief asked for *"a type scale: pick 4–5 sizes with a consistent ratio"*. Your comment lists:

> 1.3rem, 3rem, 1rem, 2rem, 0.8rem, 1.4rem, 2.7rem, 1.9rem, 0.2rem, 1.33rem

That is 10 values with no relationship between them — it is an inventory of what you happened to type, not a scale. And look at the font sizes you actually used:

**1.3 · 1.33 · 1.4 · 1.9 · 2.7**

The first three are the *same size*. Nobody can see the difference between 1.3rem and 1.33rem — but your CSS now has three separate values a future reader has to wonder about.

**A scale is one base size and one ratio.** Pick a ratio (1.25 is a safe, common choice), start at 1rem, and multiply:

```css
:root {
  --text-sm:  0.8rem;    /* 1 ÷ 1.25       — captions, byline */
  --text-base: 1rem;     /* body           */
  --text-lg:  1.25rem;   /* 1 × 1.25       — lead paragraph  */
  --text-xl:  1.563rem;  /* 1 × 1.25²      — h2 */
  --text-2xl: 1.953rem;  /* 1 × 1.25³      — h1 */
}
```

Now every size on the page is one of five, they visibly differ, and adding a sixth is a decision rather than an accident. Have a play with [type-scale.com](https://typescale.com/) — set a ratio and watch it build.

### 2. `.author` is the same size as `<h2>` — your hierarchy is upside down

```css
h2      { font-size: 1.9rem; }
.author { font-size: 1.9rem; font-weight: bold; }
```

Your byline — *"Written by M.Ahad"* — is as loud as a section heading, and bold on top of that. Size signals importance. Right now the page shouts your name as loudly as it shouts "Benefits of football".

A byline should be **smaller than body text**: `0.875rem`, normal weight, a muted grey. It is metadata, not content.

### 3. `white-space: nowrap` on the `<h1>` — this will break

```css
h1 { font-size: 2.7rem; white-space: nowrap; }
```

Your heading is *"Football Most Complete Sport Ever"* at 2.7rem, and you have told it that it may **never** wrap. It cannot fit in a 72ch container on a laptop, let alone a phone. It will punch straight out of the card and force a horizontal scrollbar.

**Open the page and drag the browser narrow. Watch it happen.**

This is the third day running you have used `nowrap` to make something behave:
- Day 3: on `li` and `h2`, because `margin-left: 230px` left no room
- Day 4: on `h1`, because it does not fit

`white-space: nowrap` has one legitimate job — stopping a short label like a price or a date from splitting across two lines. **It is not a layout tool.** When text does not fit, the honest fixes are: reduce the font size, widen the container, or let it wrap. Headings are *meant* to wrap. Delete it.

### 4. Duplicate declaration — third day in a row

```css
.article {
  margin: 2rem;        /* ← dead, overwritten two lines later */
  ...
  margin: 2rem auto;
}
```

Day 2: duplicate `font-size`. Day 3: duplicate `font-size` (still there). Day 4: duplicate `margin`.

Same defect, three days running, and each time it is findable by reading your own file once. See the habit note at the bottom — this is now *the* thing standing between you and 8/10.

### 5. Vertical rhythm — you ticked it, but the headings are on browser defaults

```css
p { margin-top: 3rem; margin-bottom: 1rem; }
```

Two things:

**(a) Your `h1` and `h2` have no margin at all**, so they use whatever the browser decides (`0.67em` and `0.83em`). Half your page spacing is deliberate and half is inherited from a 1990s stylesheet. That is not a rhythm.

**(b) 3rem top and 1rem bottom is asymmetric for no reason.** And here is a nice callback: what is the *actual* gap between two paragraphs? Not 4rem. **Margins collapse** — you learned this on Day 3 — so it is `max(1rem, 3rem)` = **3rem**. Your own bug from yesterday is quietly running on this page.

Vertical rhythm means picking a spacing unit and using multiples of it everywhere:

```css
p           { margin: 0 0 1.5rem; }
h2          { margin: 3rem 0 1rem; }
blockquote  { margin: 2rem 0; }
```

One direction (bottom), consistent multiples, headings included.

### 6. Small things

- **`hr { max-width: 80ch; }`** — the `hr` lives inside a 72ch article, so 80ch can never apply. Dead code.
- **`@import` for the font is the slow way.** An `@import` in CSS means the browser must download and parse your CSS *before* it discovers it needs a font — two round trips instead of one. Put it in the HTML head instead:
  ```html
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  ```
- **`•` typed into the text.** You have bullet characters inside `<p>` and inside `<h2>`. If it is a list, use `<ul>`. If it is a heading, it does not need a bullet. Never type a glyph to fake a structure the HTML already provides.
- **Your comment lists the px values but does not justify them.** The brief said *"no `px` anywhere except border widths — justify each one"*. The justification is one line: `/* px on borders: a border should stay hairline-thin regardless of the user's font size */`. That is a real reason and it is worth knowing.
- **Byline date says `2026:07:28`** — colons are not date separators, and you wrote this on the 29th. Use `2026-07-28`.
- **Spelling, in a page whose subject is writing:** soccor→soccer, subtitutions→substitutions, strenght→strength, decipline→discipline, Benifits→Benefits, refree→referee, Totel→Total, mints→minutes, competetion→competition, repotation→reputation, LIONAL→Lionel. On a typography assignment the words are the content — run it through a spellchecker before committing.

---

## 🎤 Your answers

| Q | Verdict |
| --- | --- |
| 1. rem vs em | ✅ **Correct.** "1rem based on the base html font size, 1em based on local or current font size." That is it. |
| 2. `1.5` vs `150%` | ✅ **Essentially right.** Unitless is inherited as a *multiplier* and recalculated per element; `%` is computed once on the parent and the resulting *pixel value* is inherited — which is why a big child inherits a too-small line-height. |
| 3. What is `1ch`? | ❌ **Confused.** You wrote *"equal to 0 zero width between characters"*. `1ch` is the **width of the character "0" (the digit zero)** in the current font. You had the zero in your head but attached it to the wrong thing. Second half — good for line length and readability — is right. |
| 4. `px` vs `rem` at 24px | ✅ **Correct.** px ignores the user's setting; rem scales with it. That is an accessibility issue, not just a style one. |
| 5. Prove it | ⬜ **Not done — honestly declared.** Do it: Chrome → Settings → Appearance → Font size → Very large. Your `rem` sizes should all grow together. It takes 30 seconds and it is the payoff for the whole day. |

---

## ⚠️ The thing that is not about CSS

**You have now skipped two redo lists in a row.**

| Day | Score | Fix list | Status |
| --- | --- | --- | --- |
| Day 2 | 5/10 🔁 | 9 items — asked twice | ❌ untouched |
| Day 3 | 6/10 | 8 items — asked once | ❌ untouched |

The `opx` typo from Day 3 is still in `day-3/assignment/style.css`. The `content-box` is still there. The duplicate `font-size` I flagged on Day 2 is still in the Day 3 file too.

Here is why I am making a point of this rather than letting it slide:

**Your new work is genuinely improving. Your old work is not being fixed.** You are moving forward and leaving a trail of known, documented, unrepaired defects behind you. In a job, that is the difference between a developer people trust and one people quietly stop giving work to — not because they cannot build, but because nothing is ever *finished*.

The feedback is only worth the time I spend writing it if you act on it. Right now you are reading it — I can tell, because the position hacks are gone and your AI declarations got precise in one day. So this is not a motivation problem. It is a **queue** problem: new work always feels more interesting than old work.

**Thursday and Friday, before anything else:**

1. Day 3, ten minutes: fix `opx` → `0`, `content-box` → `border-box`, delete the duplicate `font-size`.
2. Day 2, thirty minutes: the six items in its redo list. That day is still sitting at 5/10 and it is dragging your week average down for no good reason.
3. Then Day 5.

Day 2 is the only unpassed day this week. Clear it and Week 1 closes at roughly **6.4 average — a comfortable pass.** Leave it and you are one bad day away from repeating the week.

---

## 📌 One habit to change — and it is still the same one

**Read your own file, top to bottom, once, before you commit.**

Three days, three duplicate declarations. Today it would also have caught the dead `hr` rule, and you would have asked yourself why the byline is as big as a heading.

Ninety seconds. It is worth more marks than anything else you could do with that time.

---

**One more thing:** you flagged that the Day 4 reading list never explained Google Fonts. You were right, and I have added it. If you hit that again — a requirement the reading does not cover — tell me. That is a bug in my curriculum, and you finding it is you doing my job for me.
