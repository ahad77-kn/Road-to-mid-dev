# Week 04 — JavaScript Language Fundamentals

[← The Road](../../README.md) · Phase 2 · JavaScript, Seriously · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 03](../week-03/) · **Next:** [Week 05 — Arrays & objects →](../week-05/)

> **Goal:** solve small logic problems in JavaScript, alone, in the console. No DOM, no page, no HTML. Console only.

**Why this week matters:** this is where most self-taught students quit — the jump from *describing* a page (HTML/CSS) to *instructing a machine* (programming). Two full weeks on the pure language, before touching the page. Going slow here is going fast later. Everything from Week 6 onward is built on this.

**No DOM this week.** If you find yourself writing `document.` anything, you are off the plan.

---

## 📖 Learning material — 1 hr/day

| Day | Read + type every example | Source |
| --- | --- | --- |
| D1 | [JavaScript.info ch. 2.1–2.8](https://javascript.info/first-steps) — hello world, variables, data types, operators | JS.info |
| D2 | [ch. 2.9–2.13](https://javascript.info/comparison) — comparisons, `if`, logical operators, `??` | JS.info |
| D3 | [ch. 2.14–2.15](https://javascript.info/while-for) — loops, `switch` | JS.info |
| D4 | [ch. 2.16–2.18](https://javascript.info/function-basics) — functions, function expressions, arrow functions | JS.info |
| D5 | [MDN: JS first steps](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting) — second pass on anything shaky | MDN |

### 📰 Articles worth your time this week
- [MDN: Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) — `==` vs `===`, settled forever
- [JavaScript.info: Type conversions](https://javascript.info/type-conversions) — why `"5" - 2 === 3` but `"5" + 2 === "52"`
- [MDN: Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) — memorise the six falsy values
- [JavaScript.info: Variable scope](https://javascript.info/closure) — read the first half now, the rest in Week 8

**How to study this week:** open the JS.info page on the left, your editor on the right. **Type every example. Then change a value and predict the output before you run it.** Reading code teaches nothing; predicting it teaches everything.

**Where to run it:** `node day-1/grades.js` in the terminal, or the Chrome DevTools Console. Both are fine.

---

## 🗓️ The week at a glance

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Variables, types & 5 tiny programs | [`day-1/`](day-1/) | – |
| D2 | Conditionals — 6 decision programs | [`day-2/`](day-2/) | – |
| D3 | Loop drills — sums, reversals, FizzBuzz, patterns | [`day-3/`](day-3/) | – |
| D4 | Functions — parameters, returns, scope | [`day-4/`](day-4/) | – |
| D5 | Refactor everything from D1–D3 into functions | [`day-5/`](day-5/) | – |

---

## Day 1 — Variables, types, operators

**Read first (1 hr):** JS.info ch. 2.1–2.8.

**Build (2 hr):** Five small programs in `day-1/`, one file each, each printing labelled output with `console.log`.

1. `bmi.js` — height and weight in variables, print BMI to 1 decimal place plus the category
2. `temperature.js` — convert 25°C to Fahrenheit and 98°F to Celsius
3. `shopping.js` — 3 item prices, print subtotal, 17% GST, and total, formatted to 2 decimals
4. `types.js` — declare one of each: string, number, boolean, `null`, `undefined`, and one object. `console.log(typeof x)` for each and write a comment explaining any result that surprised you
5. `swap.js` — swap two variables' values **without** a third variable, then again **with** one. Explain which you would use in real code and why

**Must have**
- [ ] `const` by default; `let` only where the value genuinely changes; **no `var` anywhere** — and you can say why
- [ ] Descriptive names — `totalPrice`, not `t` or `x`
- [ ] Template literals for all output, not `+` concatenation
- [ ] `day-1/notes.md` answering: what surprised you about `typeof null`?

**🧪 Test material**
1. Difference between `let`, `const` and `var` — in scope, and in reassignment?
2. What are the 7 primitive types in JavaScript?
3. What does `typeof null` return, and why is it wrong?
4. What is the difference between `null` and `undefined` — when would you deliberately use each?
5. **Prove it:** predict the output of `console.log("5" + 3, "5" - 3, 5 + null, "5" == 5, "5" === 5)` *before* running it. Then run it.

---

## Day 2 — Conditionals

**Read first (1 hr):** JS.info ch. 2.9–2.13.

**Build (2 hr):** Six programs in `day-2/`:

1. `grade.js` — a marks number → grade A/B/C/D/F, with the boundaries as named constants
2. `biggest.js` — biggest of three numbers, without `Math.max`
3. `even-odd.js` — for a number, print even/odd, positive/negative/zero, and whether it is prime
4. `leap-year.js` — proper leap-year rule (divisible by 4, not 100, unless 400). Test 1900, 2000, 2024, 2025
5. `ticket-price.js` — cinema price by age *and* day of week (child/adult/senior, weekday/weekend discount). Use `switch` for the day
6. `login-check.js` — given `username` and `password` variables, print one of: "missing username", "password too short", "welcome" — with the **guard clause** pattern

**Must have**
- [ ] `===` everywhere; if you use `==` once, justify it in a comment
- [ ] At least one `switch`, one ternary, and one guard-clause early return
- [ ] No nesting deeper than 2 levels — flatten with early returns
- [ ] Each program tested with at least 4 different inputs, results recorded in a comment block at the bottom

**🧪 Test material**
1. List the 6 falsy values in JavaScript.
2. What does `&&` return — a boolean, or something else? What about `||`?
3. Difference between `||` and `??`? Give a case where they behave differently.
4. When is a ternary better than an `if`, and when is it worse?
5. **Prove it:** rewrite one of your nested `if` chains as guard clauses and explain why it reads better.

---

## Day 3 — Loops

**Read first (1 hr):** JS.info ch. 2.14–2.15.

**Build (2 hr):** Ten drills in `day-3/`, one file or one clearly labelled section each:

1. Sum 1–100
2. Multiplication table for any number, 1–12
3. Reverse a string (no `.reverse()`)
4. Count the vowels in a sentence
5. FizzBuzz, 1–100
6. Factorial of n
7. Check whether a word is a palindrome
8. Print a triangle of stars, height n
9. Print a pyramid of stars, height n
10. Find the largest number in a hard-coded list, using a loop (no `Math.max`)

**Must have**
- [ ] Use all three: `for`, `while`, and `for...of` — at least once each
- [ ] `break` used once and `continue` used once, each with a comment on why
- [ ] No copy-paste between drills — type each one
- [ ] `day-3/notes.md`: which drill took the longest, and what finally made it click

**🧪 Test material**
1. When would you choose `while` over `for`?
2. What is the difference between `for...of` and `for...in`? What does each give you?
3. What does `break` do vs `continue`?
4. Walk me through the pyramid program line by line — what is each variable holding on iteration 3?
5. **Prove it:** change the star triangle to print upside down. 60 seconds.

---

## Day 4 — Functions

**Read first (1 hr):** JS.info ch. 2.16–2.18.

**Build (2 hr):** In `day-4/functions.js`, write and test at least 10 functions:

`isEven(n)` · `getGrade(marks)` · `celsiusToF(c)` · `reverseString(str)` · `countVowels(str)` · `isPalindrome(word)` · `factorial(n)` · `largest(a, b, c)` · `calculateTotal(price, qty, taxRate)` · `greet(name, greeting = "Hello")`

**Must have**
- [ ] Every function **returns** a value — none of them `console.log` inside. Logging happens only where you call them.
- [ ] One default parameter used
- [ ] One function written three ways — declaration, function expression, arrow — with a comment on the differences
- [ ] Each function called with at least 3 test inputs, including an edge case (0, empty string, negative)
- [ ] `day-4/scope.md`: demonstrate a variable that is not visible outside its function, and explain why

**🧪 Test material**
1. Difference between a parameter and an argument?
2. What does a function return if you never write `return`?
3. What is hoisting — and which of the three function forms is *not* hoisted?
4. Why is returning better than logging inside the function?
5. **Prove it:** I give you a new function name and one sentence of spec — write it, working, in under 3 minutes.

---

## Day 5 — Refactor everything into functions

**Read first (1 hr):** MDN *JS first steps* — go back over whatever was shakiest this week.

**Build (2 hr):**
Take every drill from Days 1–3 and rewrite them as clean, reusable functions in `day-5/`, organised into files: `math.js`, `strings.js`, `patterns.js`. Then a `main.js` that calls each of them and prints a tidy report.

**Must have**
- [ ] No loose code outside functions except the calls in `main.js`
- [ ] No function longer than 15 lines — split anything bigger
- [ ] Every function does exactly **one** thing, and its name says what
- [ ] A one-line comment above each function: what goes in, what comes out
- [ ] `day-5/refactor-notes.md`: three things that got clearly better, and one function you struggled to name (and why naming was hard)

**🧪 Test material**
1. Why is a 60-line function a problem, even when it works?
2. What makes a function name good? Give a bad name and its fixed version from your own code.
3. What does "one function, one job" mean in practice?
4. Which of your functions could be reused unchanged in a completely different project?
5. **Prove it:** I name any function from your files; explain its inputs, output, and one edge case that would break it.

---

## ✅ End-of-week check

- [ ] You can write a loop without looking up the syntax
- [ ] You use `const` by default and know exactly why `var` is gone
- [ ] Your functions return values instead of printing them
- [ ] You can trace a loop on paper and predict every iteration's values
- [ ] Given a small logic problem, you can start typing within 30 seconds

**If you are still copying loop syntax from tutorials, do not move on.** Spend day 6 on loops alone. Week 5 assumes this is muscle memory.
