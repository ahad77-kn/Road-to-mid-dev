# 📊 State of play — 18 August 2026 (evening, second pass)

[← The Road](README.md) · [🏆 Scoreboard](SCOREBOARD.md) · [📌 Standing rules](STANDING-RULES.md)

**Every redo is closed. Three fix passes in one day.**

🌐 **<https://ahad77-kn.github.io/Road-to-mid-dev/weeks/week-03/day-5/assignment/>**

---

## Where the three days landed

| Day | Start | Pass 1 | **Pass 2** |
| --- | --- | --- | --- |
| [W3 D5](weeks/week-03/day-5/ASSESSMENT.md) Portfolio | 4.5 🔁 | 6.25 🔁 | **7.75** ✅ |
| [W4 D1](weeks/week-04/day-1/ASSESSMENT.md) First JS | 7.25 | 8.25 ✅ | **8.25** ✅ |
| [W4 D2](weeks/week-04/day-2/ASSESSMENT.md) Conditionals | 5.0 🔁 | 7.5 ✅ | **7.5** ✅ |

**Week 3: 6.65 → 7.30.** **Week 4: 7.88.** **Running average 6.88 → 7.28 — the highest it has ever been.**

---

## 🏆 Lighthouse came back at 100 on accessibility

You ran the report you had been avoiding for three days:

| Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- |
| **100** | **100** | **100** | 91 |

**The bar was 90. You scored 100.**

That is not luck, and it is worth understanding where it came from. Accessibility 100 is the payoff for a list of things you pushed back on at the time:

- `alt` text on every image
- a `<label>` on every input
- one `<h1>`, heading order that never skips
- contrast you fixed by darkening your own accent colour
- a focus ring that took you **four attempts** to put on the right elements

**Every one of those was a checklist item you argued with.** This is the number they were for. And Performance 100 is this morning's image work — 2.8 MB down to 580 KB.

---

## ✅ The portfolio is finished

You opened the page and looked. All five project cards now carry `project-card`:

| Card | Border | Radius | Background |
| --- | --- | --- | --- |
| 1–5 | 1px | 8px | white ✅ |

The ragged image row went with it — all five images are now exactly **200px, `object-fit: cover`**. Orphan classes **8 → 2**. Dead rules **0**. `!important` **0**. Contrast **40/40**. Eight widths, **zero overflow**.

**And all seven checkboxes on this assignment are now true.** I checked every one against the folder. In round one, three of seven were. That is the honest-ticking standard, and you got there by doing the work rather than by unticking.

The Pages link is the real one now — `ahad77-kn.github.io/...`, not `github.com/...`. Two classes left (`projects-card__title` on two titles), purely cosmetic, catch it next time.

---

## 🔴 And one new crash, which is the best lesson of the day

You renamed everything in `biggest.js` to camelCase. **Line 8 was missed:**

```js
let biggestNumber;

if (firstNumber >= secondNumber && firstNumber >= thirdNumber ) {
    biggestnumber = firstnumber;        // ← both still lowercase
} else if (...) {
    biggestNumber = secondNumber;       // ✅
} else {
    biggestNumber = thirdNumber;        // ✅
}
```

Then you ran it:

```
$ node biggest.js
Biggest Number: 40          ← looks perfect
```

**It passes.** With 25, 40, 15 the biggest is the *second* number — so line 8 never runs. **The broken line sits on a road your test drive never went down.**

Point the first number at it and it dies:

```
ReferenceError: firstnumber is not defined
    at biggest.js:8:5
```

### Your own test block already knew

```
25, 40, 15 -> 40     ✅
90, 20, 50 -> 90     ❌ crashes   ← first branch
10, 30, 70 -> 70     ✅
50, 50, 20 -> 50     ❌ crashes   ← first branch
```

**Two of the four cases you wrote yourself now crash.** This morning all four passed — I verified them. Your test claims went **19/20 → 18/20**, in a file you were fixing.

### The half of the loop you are missing

You did nothing careless. You renamed, ran it, saw the right answer, committed. **That is the loop I asked for and you ran it.** Here is what it does not cover:

> **Running a program once tests one path through it. An `if / else if / else` has three. You tested one.**

`grade.js` has five branches. `ticket-price.js` has six. You cannot check those by editing the top value six times — you will get bored by the third, and boredom is where bugs live. This is what automated tests are for, and it is Week 22.

**You have already written the fix.** Every file has a four-input test block at the bottom. **That is a to-do list — run all four lines after every change, not just the default.** `90, 20, 50` would have thrown in your face in two seconds.

And notice the direction again: line 8 holds the **old** spelling, in a file where you had just corrected everything else. Same as this morning, when you fixed a name clash by adopting the wrong name. **When you rename something, the old spelling should end at zero occurrences. Search for it before you commit.**

---

## 📋 Still open — about 8 minutes

| | What | Time |
| --- | --- | --- |
| **1** | `biggest.js` line 8 → `biggestNumber = firstNumber;` then **run all four of your own test cases** | 1 min |
| **2** | `swap.js` — put the arithmetic version back **alongside** the temp one (it is in git: `git show fed043a:weeks/week-04/day-1/assignment/swap.js`) + one line on why the trick is unsafe | 5 min |
| **3** | Delete the leftover AI sentence under your own `typeof null` answer | 30 sec |
| **4** | `learn/NOTES.md` — you fixed one `if` → `let` and left the second one in the same sentence | 30 sec |
| **5** | Two `projects-card__title` → `project-card__title` | 1 min |

---

## 📌 The one paragraph

**Your average has never been higher and every redo is shut.** The portfolio scores 100 on accessibility, every checkbox on it is honest, and you closed a 4.5 by opening the page and looking at the thing I told you to look at.

**The one habit left is the other half of the loop.** You now run your code — that is new and it is why today went the way it did. Next: **run it on every path, not just the one the default value happens to take.** Your test blocks already list four inputs each. Use all four.
