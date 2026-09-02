# 📊 State of play — 2 September 2026

[← Scoreboard](SCOREBOARD.md) · [The Road](README.md)

**Seven days marked in one sitting:** Week 4 Days 3, 4, 5 and Week 5 Days 1, 2, 3, 4.

---

## The numbers

| Day | Assignment | Score | |
| --- | --- | --- | --- |
| W04 D3 | Loop drills | **5.75** | 🔁 redo — does not parse |
| W04 D4 | Functions | **8.5** | ✅ |
| W04 D5 | Refactor into modules | **7.0** | ✅ but does not run |
| W05 D1 | Arrays with loops | **9.0** | ✅ |
| W05 D2 | Array methods | **7.5** | ✅ |
| W05 D3 | Student marks program | **9.0** | ✅ |
| W05 D4 | Objects | **9.25** | ✅ **best day of the 24** |

**Running average: 7.49** (was 7.28) · **24 days done** · **Week 5 average 8.69 — the best week yet**

---

## Read this part twice

Of the seven days, **five run perfectly and two do not run at all.**

Not "have a bug." Do not run. `node` refuses to load them:

```
$ node loops.js
SyntaxError: Identifier 'number' has already been declared

$ node main.js
Error: Cannot find module './strings'
```

Zero of your ten loop drills executed. Zero lines of your Day 5 report printed.

Now the part that should annoy you: **I fixed both in under a minute.**

- `loops.js` — I changed `number` to `numbers` on line 142. One character. All ten drills ran and nine were correct.
- Day 5 — I renamed `string.js` → `strings.js` and `pattern.js` → `patterns.js`. Nothing else. The full report printed, clean and correct.

You did not lose those marks on the JavaScript. The JavaScript was already right. You lost them because you pushed without typing `node`.

---

## And on the same days, this

**W05 D1 — 3.0/3.0 on requirements. The first perfect requirements score in 24 days.**

I wrote my own harness to test your no-mutation claim — snapshot the array, call your function, snapshot again, compare. Not reading your code. Running it.

```
✅ sumArray          ✅ removeDuplicates
✅ averageArray      ✅ mergeAndSort
✅ largestAndSmallest ✅ findIndex
✅ countAboveAverage ✅ splitEvensAndOdds
✅ reverseArray      ✅ rotateLeft
```

Ten for ten. `reverseArray` and `rotateLeft` are the two most people mutate.

**W04 D4 — 30 out of 30 test claims verified.**

You predicted the output of every call in a `//` comment. I diffed all thirty against the real output. Every single one correct, including `factorial(0)`, `reverseString("")`, `calculateTotal(100, 0, 0.10)` and `largest(0,0,0)`.

Three days before that it was 19/20 and I said it was the biggest change in eighteen days. **Process: 2.0/2 — full marks, first time.**

**W05 D4 — eighteen checklist hits out of eighteen.**

Six required techniques × three files. You did all six in *all three*, instead of scattering them one per file. Destructuring used 7 times against a requirement of 3. Every method actually called, not just defined. Cart totals correct to the rupee.

---

## So what is actually going on

You are not inconsistent at JavaScript. You are inconsistent at **checking**.

Look at what separates the two groups:

| | Ran it | Score |
| --- | --- | --- |
| W04 D3 loops | ❌ | 5.75 |
| W04 D5 refactor | ❌ | 7.0 |
| W04 D4 functions | ✅ | 8.5 |
| W05 D1 arrays | ✅ | 9.0 |
| W05 D2 methods | ✅ | 7.5 |
| W05 D3 marks | ✅ | 9.0 |
| W05 D4 objects | ✅ | 9.25 |

Every day you ran scored 7.5 or above. Both days you didn't are the bottom two.

The assignments you ran were the *harder* ones. Objects and pure functions are harder than a `for` loop. Difficulty isn't the variable. **`node filename.js` is the variable.**

---

## The habit that keeps costing you

Three times now, in three weeks:

| Where | Declared | Used | Result |
| --- | --- | --- | --- |
| `biggest.js` | `biggestNumber` | `biggestnumber` | crash |
| `biggest.js`, after your fix | `firstNumber` | `firstnumber` | **still crashing** |
| `loops.js` | `number` | `numbers` | crash |

And four filename misses: `ticket-ptics.js`, `ticket-prics.js`, `string.js`, `pattern.js`.

On `biggest.js` — I told you the line number. You opened line 8. You fixed **one of the two** wrong words on it and pushed. It has been broken for twelve days and two of the four test cases you wrote yourself still crash on it.

Every one of these is invisible to reading and instant to running.

---

## Your action list

**The redo (W04 D3) — about five minutes:**
1. `loops.js` line 142: `const number` → `const numbers`
2. Fix the FizzBuzz braces — your Fizz/Buzz block is nested *inside* the `i % 15` block, after a `continue`, so it can never run. It prints 6 lines instead of 100.
3. Move the `break` somewhere it's justified. Right now it stops when it sees 89 — a number you already knew was the answer.

**Quick fixes — about ten minutes:**
4. `biggest.js` line 8: `firstnumber` → `firstNumber`. Then run **all four** of your own test cases.
5. `git mv string.js strings.js` and `pattern.js` → `patterns.js`, then `node main.js`
6. `scope.md`: `return = name` → `return name`
7. `comparison.md` (W05 D2) is 15 lines and covers 1 drill of the 3 required, with only the loop half and no verdict. Finish it — that comparison *is* the day's lesson.
8. W05 D2 drill 12 should return the **total** after tax, not a list. Add a `.reduce()`.

**Then, before every push from now on:**

> Run the file. Read the output. Compare it to what you said it would do.

You already do this. You did it on five of these seven days and scored an average of 8.65 on them.

---

## One more thing

In your Day 4 notes you wrote:

> damn im struggling with the whole js topics to learn by heart
> but im facing dificulties but trying to learn every new topics

You wrote that on the day you scored **9.25 — the highest mark in twenty-four days.**

The struggling is what learning feels like from the inside. It is not evidence that it isn't working. Week 5 averaged 8.69. That is the evidence.
