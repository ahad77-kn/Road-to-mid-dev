# 🧾 Assessment — Week 04 · Day 1

**Assignment:** Five small programs — variables, types and operators. Your first JavaScript.
**Submitted:** 2026-08-17 20:43 (commit `fed043a`) — ☑ same day
**Reviewed by:** Adil on 2026-08-18

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **2.25** |
| 2 | Code quality | 2 | **2.0** |
| 3 | Understanding | 3 | **1.5** |
| 4 | Process | 2 | **1.5** |
| | **TOTAL** | **10** | **7.25** |

## 🏁 Verdict: ✅ PASS — **and the cleanest code you have ever handed in**

Your first day of programming. Phase 1 is behind you.

---

## 🔬 I ran all five. Here is the actual output.

```
bmi.js          BMI: 22.9  ·  Category: Normal weight
temperature.js  25°C = 77.0°F  ·  98°F = 36.7°C
shopping.js     Subtotal: Rs. 2550.00  ·  GST (17%): Rs. 433.50  ·  Total: Rs. 2983.50
types.js        string · number · boolean · object · undefined · object
swap.js         Before: 10, 20  →  After: 20, 10
```

**Five programs, zero errors, every number correct.** I checked the arithmetic: 70 ÷ 1.75² = 22.857 → 22.9, and 22.9 is Normal. 25°C is 77°F. 2550 × 0.17 = 433.50. All right.

---

## ✅ Code quality — 2.0 / 2, full marks, and the first time

This is what I have been asking for since Week 1, and today you just did it:

| Rule | Verdict |
| --- | --- |
| `const` by default | ✅ every value that never changes |
| `let` only where it changes | ✅ exactly two: `category`, `futureValue` |
| **No `var` anywhere** | ✅ **zero** |
| Descriptive names | ✅ `weightKg`, `heightMeters`, `convertedFahrenheit`, `itemOnePrice` |
| Template literals, not `+` | ✅ **every** single output |

`weightKg` and `heightMeters` are better than the brief asked for — you put the **unit in the name**, so nobody can pass pounds into it by mistake. That is a professional habit and nobody taught it to you.

And this:

```js
let category;
if (bmi < 18.5)      { category = "Underweight"; }
else if (bmi < 25)   { category = "Normal weight"; }
else if (bmi < 30)   { category = "Overweight"; }
else                 { category = "Obese"; }
```

Declared once, assigned in one place, `let` because it genuinely changes. That is correct on every count. Compare it with `grade.js` from Day 2 and you will see why I am making a point of it.

---

## 🔧 What cost you marks

### 1. `swap.js` is half the assignment — −0.75

The brief:

> swap two variables' values **without** a third variable, **then again with one**. Explain **which you would use in real code and why**

You did the clever half — the arithmetic swap — and it works. The other half is missing entirely: there is no version with a third variable, and no explanation.

**And the explanation was the actual point.** Here is why:

```js
// Yours — clever, and I would reject it in code review
firstNumber = firstNumber + secondNumber;
secondNumber = firstNumber - secondNumber;
firstNumber = firstNumber - secondNumber;

// The boring one — and the one you should write
const temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;
```

The arithmetic trick **breaks on real data**: give it two large numbers and it overflows; give it decimals like `0.1` and `0.2` and floating-point error means you do not get your values back exactly; and it only works on numbers at all — you cannot swap two strings with it.

The three-line version works on anything, and the next person to read it understands it instantly. **The trick is a puzzle answer. The temp variable is an engineering answer.** Knowing the difference is what the question was testing.

Add both versions and two sentences saying that, and this becomes a 3/3.

### 2. Your learning notes are three fragments — −0.5 on Understanding

```
-learned variables
-learn about js
-hello world of js
```

For a **four-hour build**. On your first day of a new language.

I know a lot happened in those four hours, because your code proves it — you learned template literals, `toFixed`, object literals, `typeof`, and when to use `const` vs `let`. **None of that is in your notes.** Three points minimum, in your own words, is the rule, and "hello world of js" is not a point.

### 3. Your answers are correct and are not in your voice — −1.0

```
let → block-scoped, can reassign.
const → block-scoped, cannot reassign.
var → function-scoped, can reassign.
```

Every answer right. All five. Arrow notation, consistent formatting, no typos — in the same file where you wrote *"i struggled to learn and write it by my self but was my first time so ..."*.

**You declared it**, and precisely: *"used for learning about js start up and about whole assignment and got help of ai because i was not getting up."* Thank you. That declaration is why this is a 7.25 and not a 4.

But read where the marks live:

| Criterion | Marks | Comes from |
| --- | --- | --- |
| Understanding | **3** | your answers, in your words |

Your `types.js` comment is a good example of the difference:

```js
// typeof null returns "object", which is a historical JavaScript bug.
```

Correct — and it is the same sentence as your answer to Q3, which is the same sentence as your `notes.md`. Three copies of one polished line. Now here is what it would look like as yours:

> *"i thought typeof null will say null but it says object. its an old bug they never fixed because it will break old websites."*

**That scores 3/3 and the polished version scores 1.5.** Broken English, right idea, clearly yours. Every week I tell you this and every week it is worth about a mark and a half.

---

## ❓ Your question — and you are right, this one is on me

> *"i learned all the topics of today but nothing was of topic to make me able of make the today assignment."*

**Partly fair, and I want to be exact about which part.**

**Where you are right:** JavaScript.info ch. 2.1–2.8 teaches you variables, types and operators in *their* sandbox. It never shows you a whole program — read the chapters and you still have not seen a file with four `const`s, an `if/else` chain and a formatted `console.log` in it. The gap between "I know what `const` is" and "I can write `bmi.js`" is real, and the reading does not close it.

**Where the material was there:** the [Week 04 page](../../README.md) does say —

> **Where to run it:** `node day-1/grades.js` in the terminal, or the Chrome DevTools Console.

— but it is one level up from the day you were working in, and it names a file that does not exist in your assignment. That is a bad enough signpost that you did not find it, and on Day 2 that cost you real marks. **I have added it to the day briefs.** See [Day 2](../day-2/ASSESSMENT.md) for why it mattered.

**The honest answer to your point:** for the rest of Week 4, do this. After each JS.info section, close it and write **one tiny program of your own** using only what that section taught — three lines is fine. `console.log` the answer. Predict it first. That is the bridge between reading and building, and it is why the brief says *"type every example, then change one value and predict the result."*

---

## ▶️ Fixes — 15 minutes

1. **`swap.js`:** add the third-variable version, and two sentences on which you would use in real code and why *(10 min — this is the one that matters)*
2. **`learn/NOTES.md`:** three real points from those four hours, in your English
3. **Rewrite `notes.md`'s `typeof null` answer in your own words** — badly, on purpose

---

**The one sentence:** *Your first ever JavaScript runs clean on all five programs with the best variable discipline you have shown in fourteen days — and the only marks missing are the half of `swap.js` you skipped and the explanations you let something else write for you.*
