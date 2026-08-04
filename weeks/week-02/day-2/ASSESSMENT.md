# 🧾 Assessment — Week 02 · Day 2

**Assignment:** Build a 6-card gallery that wraps, with equal heights and buttons flush at the bottom.
**Folder:** `weeks/week-02/day-2/`
**Submitted:** 2026-08-04 12:58 (commit `a93612b`) — ☑ on time (same day)
**Reviewed by:** Adil on 2026-08-04

---

## How it was solved

☑ **Self + AI used for background explanation — declared**

**Your declaration:** *"as usual for explaining the topic and requirements and showing me the example that how cards will look like."*

**Matches the evidence?** ☑ yes. The code has your fingerprints all over it — your comment style, your spelling, your `RS.` prices, your `~Footwear & sports~` heading. **No cap applied.**

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **2.75** |
| 2 | Code quality | 2 | **1.25** |
| 3 | Understanding | 3 | **2.5** |
| 4 | Process | 2 | **2.0** |
| | **TOTAL** | **10** | **8.5 / 10** |

## 🏁 Verdict: ✅ PASS — **your best first submission, by a mile**

**6 → 7 → 6 → 6.5 → 6.25 → 7.0 → 8.5.**

Day 1 also finished on 8.5 — but that was after I sent you a fix list. **This one arrived at 8.5 straight out of the box.** Your previous best untouched submission was 7.0. That is the number that actually moved today.

---

## 🔬 I tested it, I did not just read it

Everything below is measured in the browser, not guessed from the CSS.

### Equal heights — ✅ genuinely works, and I tried to break it

Your top row renders **2, 3, 4 and 2 lines** of description. All four cards come out at **463.7px**. So the mechanism is being exercised by your own content, not just sitting there.

Then I forced it harder — I pasted an extra sentence into the jersey card only:

| | Card 1 | Card 2 | Card 3 | Card 4 |
| --- | --- | --- | --- | --- |
| Card height | 488.5 | 488.5 | 488.5 | 488.5 |
| Button bottom edge | 609 | 609 | 609 | 609 |

**Four cards, one pixel value.** `.card p { flex-grow: 1 }` did exactly what you said it would in question 3. **Checkbox earned.**

### Wrapping — ✅ correct at every width I tried

| Container | 1400 | 1100 | 900 | 700 | 560 | 420 | 360 | 320 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cards per row | 4 / 2 | 3 / 3 | 2 / 2 / 2 | 2 / 2 / 2 | 1 × 6 | 1 × 6 | 1 × 6 | 1 × 6 |
| Horizontal overflow | none | none | none | none | none | none | none | none |

**Zero overflow at 320px.** That is not luck — it is `box-sizing: border-box` plus a real `flex-shrink`. A lot of people's first card gallery blows out of the viewport on a phone. Yours does not.

### The last row — ✅ solved, and you knew why

`max-width: 320px` stops the two leftover cards inflating, `justify-content: center` puts them under the middle of the row. You explained both in your CSS comment **and** in question 5. That is the checkbox and the question, from the same understanding.

---

## 🎉 The headline: all five boxes ticked, all five true

This is the first submission since I wrote the honesty rule on 30 July where **every ticked box survives checking**. In Week 1 you ticked things you had not done on four days out of five.

| Box | Verified |
| --- | --- |
| Cards wrap | ☑ tested at 8 widths |
| Equal heights + button flush | ☑ stress-tested |
| `gap`, no margin hacks | ☑ `gap: 2rem`, nothing on the children |
| `flex: 1 1 300px` + comment | ☑ all three values explained |
| Last row doesn't stretch | ☑ solved and explained |

Five for five. **That took one week to fix. Well done.**

---

## ✅ What else you did well

- **No magic numbers. Anywhere.** Week 1 had `position: relative` hacks, then `margin-left: 350px`. Today's layout is `flex-wrap`, `gap`, `flex: 1 1 300px`, `justify-content: center` — every single one a rule the browser applies, not a number you eyeballed. **This was the "still shaky" item at the bottom of your Week 1 review. It is closed.**
- **`* { box-sizing: border-box }` unprompted, second day running.** And this time it is doing real work — it is why nothing overflows at 320px.
- **The CSS comment block at the top.** You explained grow / shrink / basis, why the `max-width` is there, and why you did not use `width: 100%` on the image. That is you reasoning in writing, and it is worth marks.
- **Every image has a real `alt`** — "Goalkeeper Gloves", "Shin Guards", not `alt="image"`. Nobody asked you to. A screen reader user can shop this page.
- **Descriptions written at different lengths** so the cards actually differ. And a `:hover` state on the button.
- **You went back and fixed two typos in Day 1's NOTES** — "flex boc", "horizontlly". Nobody asked. That is the "last five minutes" habit I said was worth two points a day.

---

## 🔧 What cost you the other 1.5

Nothing here breaks. It is all the layer above "working".

### 1. `object-fit: cover` is clipping your jersey — 0.5

```css
.image img { width: 65%; height: 100%; object-fit: cover; }
```

`cover` fills the box and **throws away whatever does not fit**. I measured where the product actually sits in each PNG against what the box keeps:

| Image | Natural size | Subject fully visible? |
| --- | --- | --- |
| jersey.png | 1220 × 2712 | ❌ **bottom of the shorts cut off** |
| cleats.png | 810 × 1466 | ☑ |
| football, gloves, guards, bottle | square | ☑ |

Zoom into your first card: the shorts run flush into the bottom border with no gap, while every other product floats with space around it. The five that survive only survive because their PNGs happen to have transparent padding. **That is luck, not design** — the next product photo you drop in that is cropped tight will get its head cut off.

**The fix is one word:**

```css
.image img { max-width: 100%; max-height: 100%; object-fit: contain; }
```

`contain` fits the *whole* image inside the box and keeps its shape. That is what you actually wanted — you wrote *"if i give 100% then image will be stretched"* in your comment, and you are right, but `contain` is the answer to that, not `cover`.

- `cover` → fill the box, crop the overflow. For backgrounds and hero images.
- `contain` → show all of it, leave empty space. **For product shots.**

And once you use `contain`, `width: 65%` can go. That 65% is the one magic number left in the file — it was you hand-tuning until it looked right. `contain` does that tuning for you, for any image.

### 2. `<h3>` is not a price, and not an eyebrow — 0.4

```html
<h3>~Footwear & sports~</h3>     <!-- before the h1 -->
<h1>- PRODUCTS -</h1>
...
<h3>RS.4999</h3>                  <!-- inside every card -->
```

Your document outline reads **h3 → h1 → h2 → h3**. Headings are the table of contents of the page — a screen reader user tabs through them to navigate. Right now yours announces "Footwear & sports" as a sub-sub-section that appears before the page even has a title, then six price tags as if they were section headings.

A price is a piece of data, not a heading. It also cost you code: you had to write `.card h3 { color: #4b4848 }` purely to undo the red you set on the other `h3`. **Two unrelated things sharing a tag is always a smell** — and here the smell was a whole extra rule.

```html
<p class="eyebrow">Footwear &amp; Sports</p>
<h1>Products</h1>
...
<p class="price">RS. 4,999</p>
```

Then `.price` styles the price and `.eyebrow` styles the eyebrow, and neither has to undo the other.

### 3. `<br>` to shape a paragraph — 0.2

```html
<p>A pure quality jersey for football players.<br>Contains shirt and a short.</p>
```

`<br>` means "this line ends here" — an address, a poem, song lyrics. It does not mean "start the next sentence lower down". Two sentences are just two sentences; let them flow and wrap on their own.

It matters because a hard break does not move when the box does. I checked what your `<br>`s change: on five of six cards, **nothing at all** — the text was going to wrap there anyway. On the cleats card it pushes the description to a fourth line that it did not need. So the tags are doing nothing useful on five cards and something mildly unhelpful on the sixth.

Same family as the `white-space: nowrap` I flagged in Week 1: **markup used to force a visual result, instead of letting the layout do its job.**

### 4. Small things — 0.4 together

| Line | What | Why it matters |
| --- | --- | --- |
| `style.css:75` | `background-color: #9f9f9f00` | 8-digit hex — the last `00` is **alpha zero**. Fully transparent. This line does nothing. Delete it. *(Credit where due: unlike Week 1's `opx` and `0.5`, this one is at least valid CSS — the browser parses it, it just paints nothing.)* |
| `index.html:72` | file ends at `</body>` | **No `</html>`.** Browsers forgive it; validators and reviewers do not. |
| `index.html:3` | no `<meta charset="utf-8">`, no `<html lang="en">` | Two lines that should be in every page you ever write. |
| `index.html:8` | raw `&` in `~Footwear & sports~` | Should be `&amp;`. |
| `style.css:90` | `button:hover` but no `button:focus-visible` | **Week 1 Day 5 was entirely about this.** Keyboard users get no visible focus ring on your Buy Now buttons. `input:focus-visible` is in your Day 5 file — the same rule belongs here. |

### 5. 2.9 MB of images for six thumbnails — no deduction, but read this

| File | Size | Displayed at |
| --- | --- | --- |
| gloves.png | **1.2 MB** | 185 × 178 |
| jersey.png | 738 KB | 185 × 178 |
| cleats.png | 341 KB | 185 × 178 |
| bottle.png | 309 KB | 185 × 178 |
| football.png | 254 KB | 185 × 178 |
| guards.png | 212 KB | 185 × 178 |
| **Total** | **2.9 MB** | |

You are shipping **2.9 megabytes to draw six images the size of a postage stamp**. On a 3G connection that is roughly thirty seconds of staring at a blank page. The gloves PNG alone is 1.2 MB — bigger than most entire web pages.

No marks lost, because nobody taught you this yet. But two habits, starting now:

1. **Resize before you commit.** 400px wide is plenty for a 185px slot. Preview on your Mac will do it in ten seconds.
2. **PNG is for logos, icons and transparency. JPG or WebP is for photographs.** These are photographs. WebP would put all six under 100 KB combined — a **30× reduction** for no visible difference.

And a warning: **git never forgets.** Those 2.9 MB are in the repository's history permanently now, even if you delete the files tomorrow. Every person who ever clones this repo downloads them. Get in the habit of looking at a file's size *before* `git add`.

---

## 🎤 Your answers — 4.5 / 5

**Q1 — the three values.** *"1=grow, 1=shrink, 300px starting width (flex-basis)"* — ✅ exact.

**Q2 — default `flex-basis`, and `flex: 1` vs `width: 100%`.** ✅ `auto` is right, and "shares the space" is the right instinct. One thing you missed, and it is the interesting half: **the shorthand `flex: 1` does not leave the basis at `auto` — it sets it to `0%`.** So `flex: 1` means "ignore my content width entirely, just give me an equal share of the row." That is why three `flex: 1` cards come out identical even with wildly different text, while three `flex-basis: auto` cards size themselves to their content. Your `flex: 1 1 300px` sets it explicitly to 300px, which is why your cards start at a sane size instead of collapsing.

**Q3 — pushing the button down, two ways.** *"flex grow 1 on paragraph or margin top auto on button"* — ✅ both correct, and you used the first. Worth knowing the difference: `flex-grow: 1` on the `<p>` gives the *paragraph* the leftover space (so the empty gap sits above the price); `margin-top: auto` on the button puts the gap directly above the *button*, below the price. Look at your jersey card — the gap is above `RS.4999`. With `margin-top: auto` it would be below it. Different look, same flush bottom. **Try both and pick.**

**Q4 — `wrap` vs `nowrap` and `flex-shrink`.** ✅ right, slightly under-said. The sharp version: **with `nowrap`, `flex-shrink` is the only thing preventing overflow** — items have nowhere to go, so they squeeze below their basis. **With `wrap`, shrink barely engages** — an item that will not fit moves to the next line instead. That is precisely why your page never overflows: `wrap` is doing the work, and shrink is the safety net at 320px.

**Q5 — delete a card.** ✅ correct, and you named the actual mechanism rather than just asserting it would be fine.

---

## ❓ Your question — and yes, you already built the answer

> *"with wrap items moved to the next row, 4 cards remain upper and 2 came down, can we do like place them same like three up and three down?"*

**Good question, and the honest answer is: your page already does it.** Look at the table above — at a container width of **1100px it lays out 3 and 3**, all by itself.

That is the whole idea behind `flex: 1 1 300px`. You never said "four per row". You said *"about 300px each, fit as many as you can"* — and the browser recomputes the answer at every width. On a wide monitor it picks 4, on a laptop 3, on a tablet 2, on a phone 1. **Your layout is already responsive and you did not write a single media query.**

So the real question is: do you want 3-up *always*, at every screen size? Because that is a different request, and it costs you something:

```css
.card { flex: 1 1 calc(33.333% - 1.333rem); }   /* 3 per row, minus the gaps */
```

That locks it to 3 — including on a phone, where you now get three 100px cards side by side. **This is the central trade in layout, and it is worth sitting with:**

- **`flex: 1 1 300px`** = *"I care how big a card should be."* The count adapts. Fewer decisions, works everywhere.
- **`flex: 1 1 33.333%`** = *"I care how many fit in a row."* The size adapts. More control, and you now own every screen size.

Neither is correct. But notice that **you picked the first one and it gave you a responsive page for free** — so I would keep it, and reach for the second only when a design genuinely demands a fixed count.

And tomorrow this gets easier still. **[Day 3 is CSS Grid](../day-3/)**, where `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` does what you built today in one line — and `repeat(3, 1fr)` does the 3-up version in one line too. **You have arrived at exactly the right question the day before the lesson that answers it.** That is not an accident; it is what happens when you actually look at what your code did.

---

## 🔁 Still open from before

Not blocking, not re-marked, but they are still sitting there:

| From | What | Time |
| --- | --- | --- |
| W1 D2 | `box-sizing` still missing from `week-01/day-2/assignment/style.css` | 1 min |
| W1 D5 | `.button:focus-visible` — you have `input:focus-visible`, buttons still have none | 5 min |
| W2 D1 | `floats.html` renders nav and search **swapped** vs `flex.html` (right-floats stack right-to-left) | 5 min |

**On `box-sizing`:** you have now written it correctly and unprompted two days running, so this is not a knowledge gap any more — it is purely an un-closed tab. Which makes it a ten-second fix that has been open for a week.

---

## ▶️ Before Day 3

Twenty minutes, in this order:

1. **`object-fit: contain`** and delete `width: 65%`. Reload, look at the jersey. *(5 min — the one that actually changes what a user sees.)*
2. **`.price` and `.eyebrow` instead of `<h3>`.** Delete the `.card h3` override you no longer need. *(5 min)*
3. **Delete `background-color: #9f9f9f00`. Add `</html>`, `<meta charset="utf-8">`, `<html lang="en">`.** *(2 min)*
4. **`button:focus-visible`** — same rule you wrote on Day 5. Then tab to a Buy Now button and check you can see where you are. *(3 min)*
5. **Resize the six images** to ~400px and re-export as JPG or WebP. *(5 min — do it once and you will never ship a 1.2 MB thumbnail again.)*

Then [**Day 3 — CSS Grid**](../day-3/), and bring today's question with you.

---

## 📌 The one sentence

**You stopped fighting the layout and started describing it.** Every number in this file is a *rule* — 300px basis, 320px cap, 2rem gap — and the browser worked out the rest, at eight different widths, without you checking any of them.

What is left is not layout at all. It is the finishing layer: the right tag for the job, the right `object-fit`, the closing tag, the file size. **That layer is the difference between 8.5 and 10, and none of it is hard — it is just the last twenty minutes.**

---

## 🔄 Same-day fixes — 15:00, two hours after this was posted

You turned the list around in two hours. **Score stays 8.5** — it was already a pass, and
the policy is that 6+ keeps its mark. Logged here because the follow-through is the habit
that matters.

### ✅ Done, and done properly

| Fix | What you did |
| --- | --- |
| `object-fit` | **`cover` → `contain`, and `width: 65%` → `100%`.** Exactly right. The jersey is whole now and it will stay whole for any image you drop in. The magic number is gone with it. |
| Dead declaration | `background-color: #9f9f9f00` deleted |
| `<br>` tags | all six removed |
| `<html lang="en">` | added |
| The eyebrow `<h3>` | removed |

That is five of the list, including the one that actually changed what a user sees.

### ⚠️ Three still open — and one is more interesting than it looks

**1. You renamed the images. You did not convert them.**

```
gloves.png  →  gloves.jpg      1,200,875 bytes
gloves.jpg                     1,200,875 bytes   ← identical
```

I checked the file contents, not the names:

```
$ file images/gloves.jpg
images/gloves.jpg: PNG image data, 1000 x 1000, 8-bit/color RGBA
```

**Every one of those six files is still a PNG.** The SHA-256 of `gloves.png` before and
`gloves.jpg` after are the same hash — not one byte changed. The folder is still 2.9 MB.

This is worth more than the marks attached to it, so sit with it for a second:

> **A file's extension is a label, not the thing itself.** It is a hint to your operating
> system about which icon to draw and which app to open. The actual format lives in the
> first few bytes of the file — PNG files begin with the bytes `89 50 4E 47`, and every
> browser and image tool reads *those*, not the name.

Renaming `.png` to `.jpg` is like writing "SUGAR" on a jar of salt. The label changed;
the contents did not; and the first person to use it gets a surprise.

**To actually convert:** open it in Preview → File → Export → Format: JPEG → Quality ~70
→ Save. Or resize to 400px first, which matters more than the format here. Then run
`file images/*.jpg` and check it says `JPEG image data` before you commit.

**This is exactly what tomorrow's [debug drill](../day-3/drill/) is for** — the difference
between a change that looks right and a change that *is* right, and how you verify which
one you made.

**2. Removing the `<br>` deleted the space with it — five times.**

```html
<p>A pure quality jersey for football players.Contains shirt and a short.</p>
```

`players.Contains` — no space. The `<br>` was providing the visual gap, and when it went,
nothing replaced it. Same in all six cards (five are visible; check them all).

This is a good small lesson about the shape of a fix: **you removed the thing I flagged
and did not re-read the result.** Sixty seconds of looking at the rendered page would have
caught it. It is the same "last five minutes" gap, just wearing new clothes.

**3. The price is still `<h3>RS.4999</h3>`** — six of them. Still `.price` on a `<p>` or a
`<span>`. And `<meta charset="utf-8">`, the viewport tag, and `button:focus-visible` are
all still missing.

### 📌 One thing to know before tomorrow

From **Week 02 Day 3**, all three of those are on the [standing rules list](../../../STANDING-RULES.md)
— S2 (head tags), S3 (focus-visible), S6 (headings), S8 (200 KB assets). They cost marks
automatically, in any file, with no reminder in the brief.

**Nothing is being backdated. This day keeps its 8.5.** But the same four items in
tomorrow's assignment would be **−1.0** before the work is even looked at. Twenty minutes
tonight is worth a mark tomorrow.
