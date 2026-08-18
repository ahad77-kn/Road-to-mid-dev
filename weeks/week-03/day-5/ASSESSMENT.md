# 🧾 Assessment — Week 03 · Day 5

**Assignment:** Finish the portfolio to a shippable standard and deploy it live.
**Submitted:** 2026-08-16 16:25 (commit `cbe41dc`) — ☑ same day
**Reviewed by:** Adil on 2026-08-18

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **1.75** |
| 2 | Code quality | 2 | **0.75** |
| 3 | Understanding | 3 | **1.5** |
| 4 | Process | 2 | **1.25** |
| | Standing rules (S8, S10) | | **−0.75** |
| | **TOTAL** | **10** | **4.5** |

## 🏁 Verdict: 🔁 **REDO** — and the fix is about twenty minutes

**Read the good part first, because it is real and it is most of the work you did.**

---

## ✅ What you actually got right — verified, not assumed

### It is live. I loaded it.

```
https://ahad77-kn.github.io/Road-to-mid-dev/weeks/week-03/day-5/assignment/   → 200 OK
```

**Your portfolio is on the internet.** You deployed a real site to a real host and it serves. That is the first time anything you have built has existed outside your laptop, and it is the single most important thing on this page.

### Contrast: 40 text elements checked, 40 pass AA

I computed the WCAG contrast ratio for **every** element on the page that contains text — 40 of them — against its real background.

| | |
| --- | --- |
| Elements checked | **40** |
| Failures | **0** |

You changed `--color-accent` from `#2563eb` to `#174ea6`. That took the button from borderline to **7.85:1**. That was a deliberate contrast fix and it worked.

### Your first correct focus style — after four wrong attempts

```css
a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible {
    outline: 3px solid #ffbf00;
    outline-offset: 3px;
}
```

I tested all **10** focusable elements on the page. Every one paints a 3px amber ring with a 3px offset.

Look back at what this replaces: `:focus-visible` on a `<section>`, on an `<img>`, and a `transition: ease-in` that did nothing. **This time you put it on links, buttons, inputs and a textarea — the things a keyboard can actually reach.** That is the lesson landing, and it is worth saying out loud.

### Responsive at all eight widths

| 320 | 375 | 480 | 768 | 1024 | 1200 | 1440 | 1920 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

Zero horizontal scroll, zero overflowing elements, at every one. Three breakpoints, all doing something.

**Also clean:** `box-sizing` ✅ · charset + viewport + `lang` + `</html>` ✅ · 0 inline styles ✅ · **0 `!important`** ✅ · every image has real `alt` ✅ · 3 labels bound to 3 inputs ✅.

---

## 🔴 And then this, which is why it is a redo

**I opened the page. A third of your CSS is not reaching the HTML.**

You rewrote the stylesheet with clean BEM names. You did not rename the HTML to match. So the browser is looking for classes that are not there:

| CSS rule | HTML actually says | Result |
| --- | --- | --- |
| `.hero__eyebrow` | `hero_small_text` | dead |
| `.hero__title` | `hero_tite` | dead |
| `.hero__text` | `hero_text` | dead |
| `.hero__button` | `hero_button` | dead |
| `.hero__button:hover` | — | dead |
| `.about__title` | `about_title` | dead |
| `.skills` | `skilss` | dead |
| `.skills__grid` | `skills_grid` | dead |
| `.skills__grid` @900px | — | dead |
| `.skills__grid` @600px | — | dead |
| `.hero__title` @320px | — | dead |

**11 dead rules out of 59.** Here is what that looks like on the live site:

**1. Your hero button is not a button.**

`.hero__button` sets the background, the padding, the border-radius and the hover lift. None of it applies. "SEE MY PROJECTS" renders as **plain grey text** — no box, no colour, nothing to indicate it is clickable. It is the main call to action on your portfolio.

**2. Your `<h1>` is browser default.**

```
h1 class="hero_tite"   →   font-size: 32px   (the browser's default, not yours)
```

`hero_tite` is a typo for `hero_title`, and even the correct spelling would not match `.hero__title`. Your intended hero size never applies — including the `2rem` you wrote for 320px.

**3. Your skills section has no grid and no margins.**

```
.skills_grid   display: block          ← you wrote a grid; it is not a grid
4 skill cards  each 1600px wide, left: 0
```

`<section class="skilss">` — one `l`. So `.skills` never applies, and the section has no `max-width` and no `margin: 0 auto`. The heading **MY SKILLS** sits flush against the left edge of the screen while **About Me** just above it is properly indented. The four cards stack in one full-bleed column at every width, instead of forming a grid.

**4. Three of your five project cards have no card styling.**

Three different spellings for one block:

```
projects-card   ×3      ← no CSS exists for this
products-card   ×1      ← no CSS exists for this
project-card    ×2      ← this is the one your CSS styles
```

Measured on the live page:

| Card | Border | Radius | Background | Hover lift |
| --- | --- | --- | --- | --- |
| 1 `projects-card` | none | 0px | transparent | ❌ |
| 2 `products-card` | none | 0px | transparent | ❌ |
| 3 `projects-card` | none | 0px | transparent | ❌ |
| 4 `project-card` | 1px solid | 8px | white | ✅ |
| 5 `project-card` | 1px solid | 8px | white | ✅ |

And card 1's image is `projects-card__image` — also unstyled — so it renders **216px** tall against 200px for the other four, and at `object-fit: fill` instead of `cover`. The row is visibly ragged.

### Why this happened, and it is the same thing as last time

**You improved the CSS and never opened the page.**

Everything you added is good. `--color-accent` darkened for contrast. The focus ring. `.about text` → `.about__text` (that was a broken descendant selector and you fixed it). `border-radius: 6px;;` → `6px`. Named transition properties instead of bare `200ms`. Three breakpoints. Those are all correct, deliberate improvements.

But renaming a class in the stylesheet is **half** of renaming a class. The other half is the HTML, and one look at the page would have shown you a heading jammed against the left edge of the screen.

This is [the rule from Friday](../../../STATE-OF-PLAY.md) again, in a new costume:

> **A fix is finished when you have seen the thing you wanted.**

Last time it was `:focus-visible` on a `<section>`. This time it is a stylesheet written for an HTML file that does not exist. Both times the words were right and the screen was never checked.

**The sixty-second cure, which I will keep repeating until it is a habit:** click an element → DevTools → Elements → look at the Styles pane. If your rule is not in the list, it is not applying. On `<h1 class="hero_tite">` the Styles pane shows **nothing of yours at all**.

---

## ☑️ The checkboxes — you ticked 7, I can confirm 3

This is [S10](../../../STANDING-RULES.md), and this is the largest gap yet.

| # | Box you ticked | Truth |
| --- | --- | --- |
| 1 | Responsive 320→1920, no horizontal scroll | ✅ **true** — verified at 8 widths |
| 2 | Keyboard navigable, visible focus everywhere | ✅ **true** — all 10 focusables |
| 3 | Contrast passes AA | ✅ **true** — 40/40 |
| 4 | Lighthouse ≥ 90, **screenshot in the folder** | ❌ **there is no `lighthouse.png`** anywhere in the repo |
| 5 | Commented sections, **no dead rules**, no `!important` | ❌ **11 dead rules**; comments went from 11 to 2 |
| 6 | README: what it is, how to run, **a screenshot** | ⚠️ half — no screenshot, just the placeholder text |
| 7 | Deployed, **link in the README** | ⚠️ half — deployed ✅, link ❌ |

On #7, your `project.md` says, literally:

```
PASTE YOUR GITHUB PAGES LINK HERE
```

**You did the hard part and skipped the ten-second part.** The site is live and nobody can find it. Paste the URL.

On #5 — this one stings, because you went backwards on your own strength:

| | Day 4 | Day 5 |
| --- | --- | --- |
| Section comments | **11** | **2** |

Day 4 had `/*====it is header====*/`, `/*====skills portion====*/`, `/*====footer area====*/` — eleven of them, in your own voice, and I gave you credit for exactly that. Day 5 has `/* Colour palette */` and `/* Spacing scale */`. The box says "organised into commented sections" and the file has fewer comments than the file before it.

**Ticking a box you have not checked is the one habit that costs you marks on every single day.** Three of these seven you had genuinely earned. Two were false. Untick the false ones and you lose nothing — I mark what is there, not what is claimed.

---

## 🖼️ The images — third time, and now they are public

**2.8 MB**, byte-identical to Day 4. `grid-gallery.png` is still **1.99 MB** for a 345×200 box.

You wrote this in `project.md`, and I want to acknowledge it:

> *"skip images sizes this time and day 5 they wil be ok in upcomming assignments."*

**Saying it beats silently ignoring it, and I am charging you less because you said it.** That is the "disagree in writing" behaviour I asked for after the deleted-folders week, and you did it.

But the deal changed the moment you hit deploy. On Day 4 this was a local file. Today it is on the public internet, and it is the page you will send to people when you apply for work. A recruiter on a phone waits for **two megabytes** before they see one screenshot of your work.

Fifteen minutes: resize each to ~700px wide, export JPEG quality 75. All five land under 250 KB **combined**.

---

## 🎤 Your answers — correct, but not in your voice again

Q1–Q4 are all right. Q3 in particular:

> *"variables → reset → header → main sections → footer → media queries"*

That is the correct answer. It is also written in arrow notation with perfect structure, in the same submission where your notes say *"learn about light house and its testing"* and *"just with lighthouse."*

Your AI declaration says **"for learning about the light house and how to test my page there"**. That is a narrow declaration. Q3's answer is about CSS file organisation, which has nothing to do with Lighthouse.

**I am not accusing you of hiding anything** — your record on declaring is spotless and I have said so every week. I am telling you what the mark sheet sees: Understanding is 3 marks, it is measured by whether the words are yours, and these words are not.

**Q5 is not an answer at all:**

> *"Give them the phone and watch them find the contact section without help."*

That is the instruction repeated back. The question was **prove it** — hand the phone to someone, and tell me what happened. *"my brother found it in 8 seconds"* or *"he scrolled past the contact form twice"* — either one is worth full marks. What you wrote tells me you did not do it.

Your learn notes are three fragments for a four-hour day. *"learned to make page responsive in different resolutions"* — you have been doing that for three weeks.

---

## ❓ Your question

> *"what is the benifit of posting link page in github?"*

Three things, and they are worth more than they sound:

1. **It exists for other people.** Code in a folder is not a website. A URL is something you put on a CV, send to a recruiter, or paste into a WhatsApp message. Nobody will clone your repo to look at your work.
2. **It is proof you can ship.** Plenty of people can write HTML. Far fewer have ever taken something from their laptop and made it reachable by a stranger. That is a different skill and employers know it.
3. **It is honest.** A live site cannot hide behind "it works on my machine". Which is exactly why the dead CSS matters — it is public now.

---

## ▶️ The redo — 30 minutes, and this day becomes an 8

**Deadline: your catch-up day this week. The new score replaces the 4.5.**

**1. Fix the class names — 10 min.** Open the page next to your editor. In `index.html`:

```
hero_small_text  →  hero__eyebrow
hero_tite        →  hero__title
hero_text        →  hero__text
hero_button      →  hero__button
about_title      →  about__title
skilss           →  skills          (section)
skills_grid      →  skills__grid
projects-card    →  project-card    (3 articles)
products-card    →  project-card    (1 article)
projects-card__image / __content / __title / __text  →  project-card__…
```

**Then reload and look at it.** The button should be blue with rounded corners. MY SKILLS should be indented like About Me. The four skill cards should be in a grid. All five project cards should have a white box with a border. **If any of those is not true, you are not finished.**

**2. Resize the five images — 15 min.** 2.8 MB → under 250 KB.

**3. Paste the live URL into `project.md` — 30 seconds.**
`https://ahad77-kn.github.io/Road-to-mid-dev/weeks/week-03/day-5/assignment/`

**4. Run Lighthouse and screenshot it — 5 min.** DevTools → Lighthouse → Accessibility → Analyze. Save `lighthouse.png` in the folder. Whatever the number is, hand it in — a real 74 is worth more than a claimed 90.

**5. Untick anything you have not personally checked.**

---

**The one sentence:** *You deployed a real site, fixed every contrast failure on it, and wrote your first focus ring that actually works — then shipped a stylesheet written for class names your HTML does not have, so the first thing a visitor sees is an unstyled hero and a heading stuck to the edge of the screen.*

---

# 🔄 Re-mark — 18 Aug (`86bc924`) · **4.5 → 6.25** 🔁

| # | Criterion | Max | Was | Now |
| --- | --- | --- | --- | --- |
| 1 | Requirements met | 3 | 1.75 | **2.25** |
| 2 | Code quality | 2 | 0.75 | **1.25** |
| 3 | Understanding | 3 | 1.5 | **1.5** |
| 4 | Process | 2 | 1.25 | **1.5** |
| | Standing rules (S10 — Lighthouse box) | | −0.75 | **−0.25** |
| | **TOTAL** | **10** | 4.5 | **6.25** |

**Still a redo, and it is now about ten minutes of work.** Read the last section.

---

## ✅ Dead rules: 11 → **0**. I re-ran the sweep.

I audited all 57 style rules against the live DOM again:

| | Before | After |
| --- | --- | --- |
| Style rules | 59 | 57 |
| **Dead rules** | **11** | **0** ✅ |
| `!important` | 0 | 0 ✅ |

And the four things I measured as broken are all fixed — these are computed values off the live page, not a reading of your CSS:

| What | Before | After |
| --- | --- | --- |
| `<h1>` font size | 32px (browser default) | **64px** ✅ |
| Hero button | plain text | **inline-block, `#174ea6`, 12px 20px padding** ✅ |
| Skills grid `display` | `block` | **`grid`, 4 × 263px** ✅ |
| Skill cards | no border, 1600px wide | **1px border, 8px radius, white, 263px** ✅ |

The hero is the part of the page a visitor sees first, and it went from broken to genuinely good. **That is the fix that mattered most and you got it.**

### And the images — this one you did properly

| | Before | After |
| --- | --- | --- |
| `grid-gallery` | **1.91 MB** `.png` | **170 KB** `.jpg` |
| Whole folder | **2.8 MB** | **580 KB** ✅ |

You converted all five to JPEG. **An 11× reduction on the worst one.** Screenshots of web pages are photographs of colour gradients — JPEG is the right format and PNG was costing you two and a half megabytes on a public site. You worked that out and applied it across the set.

### Still verified green, unchanged

40 text elements checked for contrast → **0 AA failures.** Eight widths from 320 to 1920 → **zero overflow.** The `:focus-visible` rule covers **all 10** focusable elements.

---

## 🔴 The same bug is still there — it just changed costume

Your "no dead rules" checkbox is **now honest**. But look at what I found when I swept the *other* direction — class names in your HTML that no CSS rule targets:

| Orphan class | Elements |
| --- | --- |
| `projects-card` | 2 |
| `projects-card__content` | 4 |
| `projects-card__title` | 4 |
| `projects-card__text` | 3 |
| `products-card` | 1 |
| `projects-card__image` | 1 |
| `project-card__text` | 2 |
| `skill-card__text` | 4 |

**8 orphan classes on 21 elements.**

Your CSS styles `.project-card` — **singular**. Your five project articles are classed `projects-card`, `products-card`, `projects-card`, `project-card`, `project-card`. **Three different spellings for one component.**

Here is what that does, measured on the live page:

| Card | Class | Border | Radius | Background |
| --- | --- | --- | --- | --- |
| 1 | `projects-card` | **none** | **0px** | **transparent** |
| 2 | `products-card` | **none** | **0px** | **transparent** |
| 3 | `projects-card` | **none** | **0px** | **transparent** |
| 4 | `project-card` | 1px #ddd | 8px | white ✅ |
| 5 | `project-card` | 1px #ddd | 8px | white ✅ |

**Three of your five project cards render with no card around them.** Scroll to My Projects and compare it with My Skills directly above — the skill cards sit on white tiles with borders, the project cards float loose on the grey. It is visible in one glance.

**This is the identical bug to the eleven dead rules.** Last time the CSS pointed at names the HTML did not have. This time the HTML has names the CSS does not style. Same mismatch, opposite direction — which is exactly what happens when you fix the *symptom I named* instead of *looking at the page*.

I told you: rename the classes, **then look at the page.** The renaming happened. The looking did not — because three unstyled cards is not something you can miss once you scroll down.

### The fix is one find-and-replace

In `index.html`, replace **`projects-card`** → **`project-card`** and **`products-card`** → **`project-card`**. Fifteen occurrences. Then add a `.skill-card__text` rule, or drop the class.

*(Careful: `projects`, `projects__grid`, `projects__title` and `projects__intro` are the **section**, and they are correct. Only the `-card` ones are wrong.)*

---

## 🟡 The GitHub Pages link is not the GitHub Pages link

```
GitHub Pages:
https://github.com/ahad77-kn/Road-to-mid-dev/tree/main/weeks/week-03/day-5
```

That is the **source code** on github.com — a folder listing of your files. It is not your website.

**This is your website:**

```
https://ahad77-kn.github.io/Road-to-mid-dev/weeks/week-03/day-5/assignment/
```

I loaded it: **HTTP 200**, and it is serving today's version — I checked for `hero__title` in the deployed HTML and it is there. **Your fixes are live.**

Learn the difference, because it comes up constantly:

| | |
| --- | --- |
| `github.com/user/repo` | the code — for developers |
| `user.github.io/repo` | the running site — for everyone else |

When someone asks for your portfolio, they want the second one. Paste it into `project.md`.

**And the Lighthouse box is still ticked with no report in the folder.** There is no `lighthouse.png`. That is the third time on this assignment, and it is the whole reason there is still a standing-rules charge. Run it (DevTools → Lighthouse → Accessibility), screenshot it, drop it in — **or untick the box.** Either one closes it.

✅ The screenshot you did add — `images/portofolio-screenshot.png`, wired into `project.md` — is real and displays. *(Spelling: `portfolio`.)*

---

## ▶️ To finish — 10 minutes, and this becomes about an 8

1. **Find-and-replace `projects-card` and `products-card` → `project-card`** in `index.html` *(2 min)*
2. **Reload and scroll to My Projects.** All five cards should have a white tile and a border. **Do not skip this step — it is the entire lesson of this assignment.** *(1 min)*
3. **Paste the real Pages URL** into `project.md` *(1 min)*
4. **Run Lighthouse, save the screenshot** — or untick the box *(5 min)*
5. Add a `.skill-card__text` rule or remove the class *(1 min)*

**The one sentence:** *The hero, the skills grid and the images all went from broken to genuinely good and the dead-rule count is zero — and three of your five project cards still render with no card around them, because you fixed the mismatch I described instead of opening the page and looking at it.*
