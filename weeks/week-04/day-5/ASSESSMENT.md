# 🧾 Assessment — Week 04 · Day 5

**Assignment:** Refactor every drill from Days 1–3 into clean, reusable functions across `math.js`, `strings.js`, `patterns.js`, driven by `main.js`.
**Submitted:** 2026-08-23 21:07 (commit `40d7e0a`)
**Reviewed by:** Adil on 2026-09-02

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **2.25** |
| 2 | Code quality | 2 | **1.75** |
| 3 | Understanding | 3 | **2.5** |
| 4 | Process | 2 | **0.5** |
| | **TOTAL** | **10** | **7.0** |

## 🏁 Verdict: ✅ PASS — **the best-structured code you have written, and it does not run**

---

## The code quality is the highest in the repo

I measured every function in all three files:

```
math.js      isEven                3 lines   comment above: YES
math.js      largest               3 lines   comment above: YES
math.js      factorial            13 lines   comment above: YES
math.js      sumTo                 9 lines   comment above: YES
math.js      multiplicationTable   9 lines   comment above: YES
math.js      findLargest          11 lines   comment above: YES
math.js      calculateTotal        4 lines   comment above: YES
string.js    reverseString         9 lines   comment above: YES
string.js    countVowels          11 lines   comment above: YES
string.js    isPalindrome          3 lines   comment above: YES
pattern.js   makeTriangle          9 lines   comment above: YES
pattern.js   makePyramid          12 lines   comment above: YES
pattern.js   makeInvertedTriangle  9 lines   comment above: YES
      … 16 functions total …

over 15 lines:      0
missing comment:    0
loose code outside functions: none
```

**16 functions. Longest is 13 lines. Every single one has a comment above it. Zero loose code.** That is four checklist items at full marks, measured not eyeballed. Nobody hits 16 for 16 on the comment rule by accident — you went through and did it deliberately.

---

## And then it doesn't run

```
$ node main.js
Error: Cannot find module './strings'
```

The brief asked for `strings.js` and `patterns.js`. You created `string.js` and `pattern.js` — singular. But you wrote `main.js` correctly, requiring the plural:

```js
const math     = require("./math");
const strings  = require("./strings");    // ← file is string.js
const patterns = require("./patterns");   // ← file is pattern.js
```

So the filenames and the code disagree, and Node stops on line 2.

I renamed the two files — changed nothing else, not one character of your code — and this is what came out:

```
================================
       DAY 5 — JS REPORT
================================

MATH
4 is even: true
Largest: 45
5!: 120
Sum 1–100: 5050
Table of 7:  7 x 1 = 7 … 7 x 12 = 84
Largest in list: 89
Total: 220

STRINGS
Reverse: tpircSavaJ
Vowels: 3
Palindrome: true
Greeting: Hello, Ahad!

PATTERNS
Triangle / Pyramid / Inverted — all correct
```

A clean, tidy, correct report. Exactly what the assignment asked for. **Two file renames away.**

---

## This is the fourth filename miss

| Day | Asked for | You handed in |
| --- | --- | --- |
| W04 D2 | `ticket-price.js` | `ticket-ptics.js` |
| W04 D2 (fix) | `ticket-price.js` | `ticket-prics.js` |
| W04 D5 | `strings.js` | `string.js` |
| W04 D5 | `patterns.js` | `pattern.js` |

In HTML and CSS a wrong filename gives you a page that quietly loses its stylesheet. In JavaScript with `require`, it's a hard stop — which is better, because it tells you. But only if you run it.

**The brief's filename is a specification, not a suggestion.** When a table in the assignment says `strings.js`, copy the string.

---

## Small things

- **`celsiusToF` is in `string.js`.** It's a maths function that touches no strings. The rule for the day was *every function does exactly one thing and lives where it belongs* — this one is in the wrong file. Move it to `math.js`.
- You have both `largest(a,b,c)` and `findLargest(list)` in `math.js`. That's fine — they take different inputs and do different jobs — but the names don't say so. `largestOfThree` and `largestInList` would.

## `refactor-notes.md` — good, and honest

> i struggle to name the function that finds the largest number because there are several possible names such as `largest`, `findLargest`, and `getLargestNumber`. I chose `findLargest` because the function takes a list of numbers and searches through it to find the largest one.

That is the right way to pick a name: you justified it from what the function *does with its input*. That reasoning is worth more than the name you landed on.

The three improvements you listed are real, though two of them say "easier to reuse" in slightly different words. Three *different* improvements would have been stronger — reuse, readability, and testability are three separate wins and you earned all three.

---

## Fix list — one minute

1. `git mv string.js strings.js`
2. `git mv pattern.js patterns.js`
3. Move `celsiusToF` into `math.js`
4. `node main.js` — confirm the report prints

Do that and this is an 8.5 day. The code already is.
