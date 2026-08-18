# 📊 State of play — 18 August 2026

[← The Road](README.md) · [🏆 Scoreboard](SCOREBOARD.md) · [📌 Standing rules](STANDING-RULES.md)

**Phase 1 is over. Your portfolio is on the internet. You are writing JavaScript.**

Three days marked today: **W3 D5, W4 D1, W4 D2**. Read this first — the individual assessments are the detail.

🌐 **<https://ahad77-kn.github.io/Road-to-mid-dev/weeks/week-03/day-5/assignment/>** — I loaded it. It serves. That is yours.

---

## The scores

| Day | | Score |
| --- | --- | --- |
| [W3 D4](weeks/week-03/day-4/ASSESSMENT.md) | Portfolio, part 1 | **7.75** |
| [W3 D5](weeks/week-03/day-5/ASSESSMENT.md) | Portfolio, part 2 — deploy | **4.5** 🔁 |
| [W4 D1](weeks/week-04/day-1/ASSESSMENT.md) | First JavaScript — variables & types | **7.25** ✅ |
| [W4 D2](weeks/week-04/day-2/ASSESSMENT.md) | Conditionals | **5.0** 🔁 |

**Week 3: 6.65 ✅ PASSED** (gate 6.5). Phase 1 complete — three weeks of CSS, done.
**Week 4 so far: 6.13** — three days left to pull it above 6.5.

---

## 🎯 The one pattern, and it is the same pattern three times

Every mark you lost this week comes from **one** habit. Not three problems — one, wearing three costumes:

| Day | What you wrote | Why it failed |
| --- | --- | --- |
| W3 D5 | A stylesheet with clean BEM names | The HTML still had the old names. **11 dead rules.** |
| W4 D2 | `biggestnumber` … `${biggestNumber}` | One capital letter. **Crash.** |
| W4 D2 | `function checklogin` … `checkLogin()` | One capital letter. **Crash.** |
| W4 D2 | `else if (marks = MARKS_B)` | One `=` instead of `>=`. **Crash.** |

**Nothing here is a knowledge problem.** You know BEM — you renamed the CSS correctly. You know guard clauses — yours are textbook. You know grade boundaries — your constants are right.

**All four are "I did not run it."**

Loading the page would have shown you a heading stuck to the left edge of the screen. Typing `node biggest.js` would have printed the error and the line number in **two seconds**.

This is the third week running that I have written a version of this sentence:

> **A fix is finished when you have seen the thing you wanted.**

Two weeks ago it was `:focus-visible` on a `<section>`. Last week it was a missing comma. This week it is a stylesheet aimed at HTML that does not exist. **Same habit, higher stakes each time**, because now it is deployed.

### The two commands that end this

| Building a page | Building JavaScript |
| --- | --- |
| Reload the browser. Look at it. | `node yourfile.js` |
| Click the element → DevTools → Styles. If your rule is not listed, it is not applying. | Read the error. It names the file and the line. |

**Ten seconds each. They would have recovered about five marks this week.**

---

## 🛠️ On me — you were right about the tooling, and I fixed it

You wrote this at the bottom of your Day 2 notes:

> *"still i cant go live and test the js codes without html."*

**That explains all three crashes, and you did exactly the right thing by writing it down.**

You could not run your code. So you wrote six programs, read them over, and submitted them blind. Three had one-character mistakes that any run would have caught instantly. **That is not carelessness — that is working without the tool.**

The instruction existed, on the [Week 4 page](weeks/week-04/README.md), one level above where you were working — and it named a file that does not exist in your folder. **That is a bad signpost and it is mine.** Fixed:

- Every learn brief in Weeks 4 and 5 now has a **▶️ How to run it** section with the exact `cd` and `node` commands
- The Week 4 page now opens with it, before Day 1

**And you flagged it in writing instead of going quiet.** After the deleted-folders week I asked you for precisely that. It is why your Day 2 Process mark is 1.25 instead of 0.5, and why the checkbox penalty is halved. **Saying "I am blocked" works. Keep doing it.**

---

## ✅ Do not let the two redos bury this — the week had real wins

### Your first correct focus style, after four wrong attempts

```css
a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible {
    outline: 3px solid #ffbf00;
    outline-offset: 3px;
}
```

I tested all **10** focusable elements. Every one lights up.

Look at what this replaces: `:focus-visible` on a `<section>`, on an `<img>`, a `transition: ease-in` that did nothing. **This time you put it on the things a keyboard can actually reach.** That lesson took four attempts and it has landed.

### Every contrast failure on the portfolio, fixed

| Text elements checked | 40 |
| --- | --- |
| **AA failures** | **0** |

You darkened `--color-accent` from `#2563eb` to `#174ea6`. That was a deliberate contrast decision and it worked.

### Responsive at eight widths, zero overflow

320 · 375 · 480 · 768 · 1024 · 1200 · 1440 · 1920 — all clean.

### And Day 1 of JavaScript is the cleanest code you have ever written

| Rule | |
| --- | --- |
| `const` by default | ✅ |
| `let` only where the value changes | ✅ exactly two |
| **No `var` anywhere** | ✅ zero |
| Template literals, never `+` | ✅ every output |
| Descriptive names | ✅ `weightKg`, `heightMeters`, `convertedFahrenheit` |

**Full marks on code quality — the first time in seventeen days.** `weightKg` puts the unit in the name, which is better than the brief asked for and nobody taught you. All five programs run clean with correct output.

And on Day 2, the three programs that run are genuinely good: a `switch` with deliberate fall-through, a ternary used exactly where a ternary belongs, a real prime loop with a `break`, and the leap-year rule as one named boolean. **Your conditional logic was right on the first try.**

---

## ☑️ The checkboxes — this is now the most expensive habit

| Day | Ticked | Actually true |
| --- | --- | --- |
| W3 D5 | 7 | **3** (2 false, 2 half) |
| W4 D1 | 4 | **4** ✅ |
| W4 D2 | 4 | 3 |

Day 1 is a clean sheet — well done, that is what honest ticking looks like.

Day 5 is the worst yet. You ticked *"Lighthouse ≥ 90, screenshot in the folder"* and there is no `lighthouse.png` in the repo. You ticked *"no dead rules"* with 11 of them. You ticked *"deployed, link in the README"* and the README says, literally:

```
PASTE YOUR GITHUB PAGES LINK HERE
```

**You did the hard part — deploying — and skipped the ten-second part.** The site is live and nobody can find it.

**Three of those seven you had genuinely earned.** Responsive, keyboard, contrast — all verified true, all real work. Untick the ones you have not personally checked and you lose nothing: I mark what is in the folder, never what is claimed. Ticking a false box does not gain you a mark; it just costs you Process on a day you had already earned the marks elsewhere.

---

## 🤖 The AI trend — honest as always, and back to costing you

Your declarations remain complete. Day 1's was your most precise ever: *"about whole assignment... because i was not getting up."* **You have declared every single day since 22 July, including on the days it hurt.** That rule you have never broken, and it is the one that matters.

But the voice gap is back on all three days:

> **Your notes:** *"learned variables"* · *"learn about js"* · *"hello world of js"* · *"im struggling to learn the new js variables because these all are new"*

> **Your answers:** *"let → block-scoped, can reassign. const → block-scoped, cannot reassign. var → function-scoped, can reassign."*

Both from the same file, on the same day.

**Understanding is 3 of the 10 marks, and it is the only block AI can empty out completely.** Across these three days it cost about **4 marks** — more than the crashes did.

Here is the whole fix, using your own `typeof null` answer:

| | |
| --- | --- |
| What you submitted | *"typeof null → "object". It's a historical JavaScript bug."* |
| **What scores higher** | *"i thought typeof null will say null but it says object. its an old bug they never fixed because it will break old websites."* |

**The second one is worth 3/3 and the first is worth 1.5.** Broken English, right idea, unmistakably yours. That is not me being generous — it is the mark sheet doing exactly what it says.

Your Day 1 answers were all correct. You clearly do know it. **Type it badly yourself and take the marks.**

---

## ▶️ What happens now — about an hour, worth about 6 marks

| Priority | What | Time | Effect |
| --- | --- | --- | --- |
| **1** | [W4 D2 redo](weeks/week-04/day-2/ASSESSMENT.md) — 2 renames, 3 × `=` → `>=`, run each one | **20 min** | **5.0 → ~8** |
| **2** | [W3 D5 redo](weeks/week-03/day-5/ASSESSMENT.md) — rename 10 classes in the HTML, then **look at the page** | **10 min** | **4.5 → ~8** |
| **3** | Paste the live URL into `project.md`, run Lighthouse, save the screenshot | 6 min | clears 2 checkboxes |
| **4** | Resize the 5 images — 2.8 MB → under 250 KB | 15 min | it is public now |
| **5** | [W4 D1](weeks/week-04/day-1/ASSESSMENT.md) — `swap.js` with a third variable + why | 10 min | **7.25 → ~8** |

**Before anything else, run this and watch what happens:**

```bash
cd weeks/week-04/day-2/assignment
node biggest.js
```

You will get `ReferenceError: biggestNumber is not defined` and the line number. Fix the letter. Run it again. See `Biggest number: 40`.

**Six seconds.** That loop — write, run, read, fix — is what programming actually is. Everything else is typing.

---

## 📌 The one paragraph

**Phase 1 is finished and you passed all three weeks. Your portfolio is live on the internet.** Your first JavaScript ran clean on all five programs with the best variable discipline you have shown in seventeen days, and your conditional logic on Day 2 was correct on the first attempt.

**Everything you lost this week, you lost to code you never executed** — a stylesheet aimed at class names that were not there, and three programs with a single wrong character each. Not one of them was a gap in what you know.

**Reload the page. Type `node file.js`. Read the error.** That is the entire difference between this week's 6.1 and an 8, and it costs ten seconds a change.
