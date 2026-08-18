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
