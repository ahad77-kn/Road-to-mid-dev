# 🧾 Assessment — Week 04 · Day 2

**Assignment:** Six programs using conditionals — `if`/`else`, `switch`, ternary, guard clauses.
**Submitted:** 2026-08-18 12:31 (commit `6c5a7c4`) — ☑ same day
**Reviewed by:** Adil on 2026-08-18

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **1.5** |
| 2 | Code quality | 2 | **0.75** |
| 3 | Understanding | 3 | **1.75** |
| 4 | Process | 2 | **1.25** |
| | Standing rules (S10) | | **−0.25** |
| | **TOTAL** | **10** | **5.0** |

## 🏁 Verdict: 🔁 **REDO** — three renames and one character

**This is the most fixable low score you have ever had.** Read the last section before you feel bad about the number.

---

## 🔴 I ran all six. Three of them crash.

```
node grade.js        ✗  TypeError: Assignment to constant variable.
node biggest.js      ✗  ReferenceError: biggestNumber is not defined
node even-odd.js     ✓  Number: 17 · odd · positive · prime
node leap-year.js    ✓  2024 is a leap year.
node ticket-ptics.js ✓  Age: 20 · Saturday · $10.00
node login-check.js  ✗  ReferenceError: checkLogin is not defined
```

**Half your submission produces no output at all.** Not wrong output — *no* output. The programs stop on the first line that runs.

### 1. `biggest.js` — one capital letter

```js
let biggestnumber;              // declared with a small n
...
console.log(`Biggest number: ${biggestNumber}`);   // used with a capital N
```

JavaScript is case-sensitive. `biggestnumber` and `biggestNumber` are two entirely different names, and the second one was never created. **The logic above it is completely correct** — your three-way comparison with `&&` handles ties properly and would print `40`. One letter is standing between you and a working program.

### 2. `login-check.js` — the same thing again

```js
function checklogin () { ... }      // defined:  small l
console.log(checkLogin());          // called:   capital L
```

Your guard clauses are **exactly right**. This is textbook:

```js
if (username === "") return "missing username";
if (password.length < 6) return "password too short";
return "welcome";
```

That is the pattern the brief asked for and you nailed it. Then one capital letter meant nobody ever saw it run.

### 3. `grade.js` — this one is not a typo, it is a bug worth understanding

```js
if      ( marks >= MARKS_A ) { grade = "A"; }     // ✅ >=
else if ( marks =  MARKS_B ) { grade = "B"; }     // ❌ =
else if ( marks =  MARKS_C ) { grade = "C"; }     // ❌ =
else if ( marks =  MARKS_D ) { grade = "D"; }     // ❌ =
```

**One `=` is assignment. Two `==` is comparison. You need `>=`.**

Because `marks` is a `const`, `marks = 70` throws immediately and the file dies. But look at what would happen if it were a `let` — I ran it to show you:

```
marks = 45  →  grade: "B"   and marks is now 70
```

**Every student who scores under 80 gets a B, and their marks are silently rewritten to 70.** It never errors. It never warns. It just quietly hands out the wrong grades forever. That is the single most famous bug in C-family languages and you have now met it.

The `const` saved you. It turned a silent wrong answer into a loud crash — **which is exactly why the checklist says `const` by default**. Today that rule caught a real bug for you.

**Also:** the checklist says *"`===` everywhere; if you use `==` once, justify it in a comment."* You did not use `==`. You used `=`, which is a step further again.
**Also:** `grade = "f"` — lowercase, where the other four are uppercase.

---

## ✅ The three that work are genuinely good

**`even-odd.js`** — the best file in the set. Zero, even/odd and sign handled separately and correctly; a real prime loop with a `break`; a ternary used exactly where a ternary belongs:

```js
sign = number > 0 ? "positive" : "negative";
primeStatus = isPrime ? "prime" : "not prime";
```

**`leap-year.js`** — the whole rule as one named boolean:

```js
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
```

That is how a working developer writes it. And I checked your comment block against a real run:

| Year | You claimed | Truth |
| --- | --- | --- |
| 1900 | not a leap year | ✅ |
| 2000 | leap year | ✅ |
| 2024 | leap year | ✅ |
| 2025 | not a leap year | ✅ |

**All four right.** This is the only file with a test block and it is entirely correct.

**`ticket-ptics.js`** — the `switch` is used properly, with deliberate **fall-through**:

```js
case "Saturday":
case "Sunday":
    price -= WEEKEND_DISCOUNT;
    break;
```

Stacking two cases so they share one body is a real technique and you used it on day one of `switch`. Named constants throughout. Verified: age 20 on Saturday → $12 − $2 = **$10.00** ✅.

**The filename is `ticket-ptics.js`.** The brief says `ticket-price.js`. Rename it.

**Checklist items genuinely met:** one `switch` ✅ · one ternary ✅ · one guard-clause return ✅ · no nesting deeper than 2 ✅.

---

## ☑️ The box that says you tested it

> - [x] Each program tested with at least 4 different inputs, results recorded in a comment block at the bottom

| File | Test block? |
| --- | --- |
| grade.js | ❌ none |
| biggest.js | ❌ prose explaining the logic, no results |
| even-odd.js | ❌ none |
| leap-year.js | ✅ **4 inputs, all correct** |
| ticket-ptics.js | ❌ prose explaining the logic, no results |
| login-check.js | ❌ none |

**One of six.** And three of the programs cannot have been run by anyone, because they crash on the first execution.

Normally this is a −0.5 under [S10](../../../STANDING-RULES.md). **I am charging you −0.25, because of what you wrote at the bottom of your notes** — see below.

---

## ❓ Your question — and this is the whole day

> *"is there use of this simple js in modern world and is there any pages if js without html, or maybe in future i will bind js with html pages. **and still i cant go live and test the js codes without html.**"*

**That last sentence explains all three crashes, and you were right to write it down.**

You could not run your code. So you wrote six programs, read them carefully, and handed them in blind. Three of them had one-character mistakes that **any** run would have caught in two seconds. That is not carelessness — that is working without the tool.

**Here is the tool.** Open the terminal, go to the folder, and type:

```bash
node grade.js
```

That is it. `node` is already on your machine — I just ran all six of your files with it. No HTML, no browser, no server, no setup. The output appears in the terminal.

Try this right now, before anything else:

```bash
cd weeks/week-04/day-2/assignment
node biggest.js
```

You will see `ReferenceError: biggestNumber is not defined` and the exact line number. Fix the letter, run it again, see `Biggest number: 40`. **Six seconds.** That loop — write, run, read the error, fix — *is* programming. Everything else is typing.

**Where I failed you:** that instruction was written on the [Week 04 page](../../README.md), one level up from where you were working, and it names a file (`day-1/grades.js`) that does not exist in your folder. You did not find it, and I do not blame you for not finding it. **I have added it to the day briefs and to the Week 4 page properly.**

**Where you did exactly the right thing:** you were blocked, and you *wrote the blocker down in your notes* instead of staying quiet about it. After the deleted-folders week I asked you for precisely this — say it in writing rather than working around it. You did, and it is the reason your Process mark is 1.25 and not 0.5, and the S10 charge is halved.

**And your other question:** yes — JavaScript without HTML is a real and large part of the job. Every backend server, every build tool, every CLI you have used runs JS with no page anywhere. That is Node, that is what you just used, and it is Weeks 18–21 of this plan. You are not doing a toy version now and the real version later. **This is the real version.**

---

## 🎤 Your answers — 1.75 / 3

Q2 ✅ (`&&` and `||` return a value, not a boolean — correct and most people get this wrong). Q3 ✅ the `||` vs `??` distinction is exactly right. Q4 ✅. Q5 ✅ — your guard-clause rewrite is correct and your reason (*"checks problems early, so there is less nesting"*) is the right reason.

**Q1 — you were asked for six falsy values and listed seven:**

```
false, 0, -0, "", null, undefined, NaN
```

Nothing there is *wrong* — `-0` is falsy. But `-0` is the same value as `0` for this purpose, and the canonical six are **`false`, `0`, `""`, `null`, `undefined`, `NaN`**. If you had run `console.log(Boolean(-0))` you would have seen that. Which, again, comes back to running things.

**And the voice.** *"|| treats 0, "", false as missing. ?? only treats null and undefined as missing."* — correct, compact, and the same polished register as Day 1, in a file where you wrote *"im struggling to learn the new js variables because these all are new."* Your declaration says AI was used *"for understanding the assignment"*. These answers go beyond understanding the assignment.

---

## ▶️ The redo — 20 minutes, and this becomes an 8

**Deadline: your catch-up day. The new score replaces the 5.0.**

**Run `node <file>.js` after every single fix. Do not fix two things and then run.**

1. **`biggest.js`** — `biggestnumber` → `biggestNumber` (or rename the declaration). Run it. Expect `40`. *(1 min)*
2. **`login-check.js`** — `checklogin` → `checkLogin`. Run it. Expect `welcome`. Then set `password = "123"` and run again. *(2 min)*
3. **`grade.js`** — change the three `=` to `>=`. Run it. Expect `B` for 75. Then try 85, 65, 55, 30. *(3 min)*
4. **Rename `ticket-ptics.js` → `ticket-price.js`.** *(30 sec)*
5. **Add a real test block to every file** — 4 inputs, the actual output you saw:
   ```js
   /* Tested:
      85 -> A
      75 -> B
      65 -> C
      30 -> f
   */
   ```
   Change the value at the top, run, paste what appeared. Not what you think will appear.
6. **`grade = "f"` → `"F"`.**

---

**The one sentence:** *Your conditional logic is sound — the guard clauses, the fall-through switch, the leap-year rule and the prime loop are all correct on the first try — and half of it never ran because nobody ever told you to type `node grade.js`.*

---

# 🔄 Re-mark — 18 Aug (`86bc924`) · **5.0 → 7.5** ✅

**Turned around the same day.** All six run. Here is the proof, same command as before:

```
node biggest.js      ✓  Biggest number: 40
node even-odd.js     ✓  Number: 17 · odd · positive · prime
node grade.js        ✓  Marks: 75 · Grade: B
node leap-year.js    ✓  2024 is a leap year.
node login-check.js  ✓  welcome
node ticket-prics.js ✓  Age: 20 · Saturday · $10.00
```

| # | Criterion | Max | Was | Now |
| --- | --- | --- | --- | --- |
| 1 | Requirements met | 3 | 1.5 | **2.75** |
| 2 | Code quality | 2 | 0.75 | **1.25** |
| 3 | Understanding | 3 | 1.75 | **1.75** |
| 4 | Process | 2 | 1.25 | **1.75** |
| | Standing rules (S10) | | −0.25 | **0** |
| | **TOTAL** | **10** | 5.0 | **7.5** |

---

## 🏅 The test blocks — I checked all twenty claims

You added a `Test results` block to every file. **I did not take them at face value.** I re-ran each program with each of your claimed inputs substituted in, and compared to your claimed output:

| File | Claims | Verified true |
| --- | --- | --- |
| biggest.js | 4 | **4** ✅ |
| even-odd.js | 4 | **4** ✅ |
| login-check.js | 4 | **4** ✅ |
| ticket-prics.js | 4 | **4** ✅ |
| grade.js | 4 | 3 |

**19 out of 20.** That is not a number you can get by guessing — **you actually ran them.** After three weeks of me writing "a fix is finished when you have seen the thing you wanted", this is the day you did it. It is the single biggest behaviour change in eighteen days and it is why Process goes to 1.75.

### The one that slipped, and it is a good catch

```
Your block:  45 -> F
Actual:      45 -> f
```

Your code still says `grade = "f"` — lowercase, fix #6 on the list, not done. So for that one input you wrote **what you knew was correct** rather than what the terminal printed.

**And notice what that proves: you knew it should be a capital F.** Your test block is right and your code is wrong. Change `"f"` to `"F"` and the block becomes true.

---

## 🟡 You fixed the crashes in the wrong direction

Both case-mismatch bugs are gone. But look at *how*:

```js
// biggest.js — you changed the USE to match the declaration
let biggestnumber;
console.log(`Biggest number: ${biggestnumber}`);   // was biggestNumber

// login-check.js — same move
function checklogin () { ... }
console.log(checklogin());                          // was checkLogin
```

The program runs, so the bug is gone. But `biggestnumber`, `checklogin`, `firstnumber`, `secondnumber` are **not camelCase**, and the checklist asks for descriptive, conventional names. You had the correct name in the file and you deleted it to match the wrong one.

**The right direction was to fix the declaration:**

```js
let biggestNumber;                    // ← rename here
function checkLogin () { ... }        // ← and here
```

Every JavaScript codebase you will ever join uses `camelCase` for variables and functions. `biggestnumber` is readable; `biggestNumber` is what the next developer expects. **When two names disagree, rename toward the convention, not away from it.** That is 30 seconds of work and it is the difference between 1.25 and 2.0 on code quality.

### And the filename, third time

| | |
| --- | --- |
| Brief asks for | `ticket-price.js` |
| Round 1 | `ticket-ptics.js` |
| Round 2 | `ticket-prics.js` |

Still not it. **`price`** — p-r-i-c-e.

---

## ✅ What is now genuinely right

`grade.js` is correct — all three `=` are `>=`, and I verified the boundaries: 80→A, 75→B, 60→C, 45→f. Your guard clauses in `login-check.js` return the right string for all four cases including both failure paths. `biggest.js` handles the tie (50, 50, 20 → 50) correctly. The `switch` fall-through still prices weekends properly at all four ages.

**Every one of the six programs now does what the brief asked.** The logic was never the problem — it was right on the first attempt, three days ago. Today you proved it.

---

## ▶️ To finish this one — 3 minutes

1. `grade = "f"` → `"F"`. Run it with 45. *(30 sec)*
2. `biggestnumber` → `biggestNumber`, `firstnumber`/`secondnumber`/`thirdnumber` → camelCase. Run it. *(1 min)*
3. `checklogin` → `checkLogin`. Run it. *(30 sec)*
4. Rename the file to `ticket-price.js`. *(30 sec)*

**The one sentence:** *Half your submission went from crashing to correct in one pass, you verified nineteen of twenty test claims by actually running them, and the only marks left on the table are four names spelled the way you first typed them.*

---

# 🔄 Second fix pass — 18 Aug (`db3da49`) · **7.5 → 7.5** (unchanged)

| # | Criterion | Max | Round 1 | Round 2 | **Now** |
| --- | --- | --- | --- | --- | --- |
| 1 | Requirements met | 3 | 1.5 | 2.75 | **2.5** |
| 2 | Code quality | 2 | 0.75 | 1.25 | **1.75** |
| 3 | Understanding | 3 | 1.75 | 1.75 | **1.75** |
| 4 | Process | 2 | 1.25 | 1.75 | **1.5** |
| | **TOTAL** | **10** | 5.0 | 7.5 | **7.5** |

**Your score did not move, and the reason is the most useful thing I can show you all week.** Everything on the list got done. And the cleanup introduced a new crash.

---

## ✅ Everything I asked for

| | |
| --- | --- |
| `grade = "f"` → `"F"` | ✅ verified: 45 → `F` |
| `checklogin` → `checkLogin` | ✅ |
| `ticket-prics.js` → `ticket-price.js` | ✅ spelled right |
| camelCase throughout | ✅ |

I dumped every identifier across all six files. `firstNumber`, `secondNumber`, `thirdNumber`, `biggestNumber`, `checkLogin`, `evenOdd`, `primeStatus`, `isLeapYear` — all camelCase. `MARKS_A`, `CHILD_PRICE`, `WEEKEND_DISCOUNT` — all SCREAMING_SNAKE. **That is the convention, correctly applied, with no exceptions.** Code quality 1.25 → 1.75.

---

## 🔴 And here is what the rename did

`biggest.js` line 8:

```js
const firstNumber = 25;
const secondNumber = 40;
const thirdNumber = 15;

let biggestNumber;

if (firstNumber >= secondNumber && firstNumber >= thirdNumber ) {
    biggestnumber = firstnumber;        // ← line 8. BOTH still lowercase.
} else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
    biggestNumber = secondNumber;       // ✅ renamed
} else {
    biggestNumber = thirdNumber;        // ✅ renamed
}
```

**You renamed the declarations and two of the three branches.** Line 8 was missed.

Now run it:

```
$ node biggest.js
Biggest Number: 40          ← looks perfect
```

**It passes.** Because with 25, 40, 15 the biggest is the *second* number, so line 8 never executes. **The broken line is on a road the test drive never went down.**

Point the first number at it:

```
$ node biggest.js            # firstNumber = 90, secondNumber = 20, thirdNumber = 50
ReferenceError: firstnumber is not defined
    at Object.<anonymous> (biggest.js:8:5)
```

### Your own test block already told you

```
Test results:
25, 40, 15 -> 40     ✅ true
90, 20, 50 -> 90     ❌ crashes  ← first branch
10, 30, 70 -> 70     ✅ true
50, 50, 20 -> 50     ❌ crashes  ← first branch
```

**Two of your four documented test cases now crash.** This morning all four passed — I checked them. You wrote those four lines yourself, and both of the ones that exercise line 8 are now false.

**Your test claims went 19/20 → 18/20, and the file that regressed is one you were fixing.**

---

## 🎯 This is the lesson, and it is a real one

You did not do anything careless. You did a rename, you ran the file, you saw the right answer, you committed. **That is the loop I have been asking you for, and you ran it.**

The loop is not enough on its own. Here is the missing half:

> **Running a program once tests one path through it. An `if/else if/else` has three paths. You tested one.**

This is what "code coverage" means and it is why every professional codebase has automated tests. Your `grade.js` has five branches; `ticket-price.js` has six. You cannot check them by changing the value at the top six times — you will get bored by the third one, and boredom is where bugs live.

**You already wrote the fix for this.** You have a test block at the bottom of every file listing four inputs. It is a to-do list. **Run every line of it after every change** — not the default value, the list. If you had, `90, 20, 50` would have thrown in your face in two seconds.

**That is why Process went 1.75 → 1.5.** Not for the bug — for running one input when you had four written down.

### And notice which way the letters went, again

Line 8 is `biggestnumber = firstnumber` — **the old, wrong spelling**, in a file where you had just corrected everything else. Same instinct as this morning, when you fixed `biggestNumber` by lowercasing the use instead of fixing the declaration. **When you are renaming, the old spelling should end up at zero occurrences.** Search the file for it before you commit.

---

## ▶️ To fix — 60 seconds

1. Line 8 → `biggestNumber = firstNumber;`
2. **Run all four of your own test cases**, not just the one at the top. Paste what you actually see.

**The one sentence:** *Every name, the filename and the capital F are all correct now — and a rename you tested once left a crash on the one branch your test never took, which is exactly why running a program is not the same as testing it.*

---

# ⚠️ Follow-up — 19 Aug (`e9ab043`) · score unchanged at 7.5, **item still open**

You went to line 8. You edited line 8. It still crashes.

```diff
- biggestnumber = firstnumber;
+ biggestNumber = firstnumber;
```

There were **two** wrong identifiers on that line. You fixed the one on the left.

```
$ node biggest.js                    # 25, 40, 15 — branch 2
Biggest Number: 40                   ✅ looks fine

$ # your own documented case: 90, 20, 50 — branch 1
biggest.js:8
    biggestNumber = firstnumber;
    ^
ReferenceError: firstnumber is not defined

$ # your own documented case: 50, 50, 20 — branch 1
ReferenceError: firstnumber is not defined
```

Two of the four test cases **you wrote in this file** still crash, twelve days later, after a fix aimed exactly at the line that breaks them.

I am not re-scoring the day — 7.5 stands, it was graded on what you submitted. But I want you to see the shape of this, because it's the same shape three times now:

1. You read that line 8 was wrong.
2. You opened line 8 and changed what you could see was wrong.
3. **You did not run it.**

If you had typed `node biggest.js` with `firstNumber = 90` — one of the four cases already written in your own file — you'd have had the answer in one second.

The fix is `firstNumber`, capital N, on the right-hand side. Then run all four of your cases. All four.
