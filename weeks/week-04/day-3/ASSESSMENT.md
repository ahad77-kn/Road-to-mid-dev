# 🧾 Assessment — Week 04 · Day 3

**Assignment:** Ten loop drills — `for`, `while`, `for...of`, `break`, `continue`.
**Submitted:** 2026-08-19 13:27 (commit `e9ab043`)
**Reviewed by:** Adil on 2026-09-02

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **2.0** |
| 2 | Code quality | 2 | **1.0** |
| 3 | Understanding | 3 | **2.5** |
| 4 | Process | 2 | **0.25** |
| | **TOTAL** | **10** | **5.75** |

## 🏁 Verdict: 🔁 REDO — the file does not run

Nine of your ten drills are correct. I know that because I fixed one character and ran them.

You did not, and that one character is a `SyntaxError` that stops the entire file from loading.

```
$ node loops.js
loops.js:142
const number = [12, 45, 7, 89, 34, 67, 23];
      ^
SyntaxError: Identifier 'number' has already been declared
```

Nothing executed. Not drill 1, not the pyramid you were proud of. Zero of the ten.

---

## The bug, and why it is the same bug as Monday

Line 18, drill 2:

```js
const number = 7;
```

Line 142, drill 10:

```js
const number  = [12, 45, 7, 89, 34, 67, 23];   // ← same name, second declaration
let largest   = numbers[0];                     // ← but you use `numbers`
for (const number of numbers) {                 // ← and here too
```

You **declared** it `number` and **used** it `numbers`, twice. Same name in two places, spelled two different ways.

That is the third time in three weeks:

| Day | Declared | Used | Result |
| --- | --- | --- | --- |
| W04 D2 `biggest.js` | `biggestNumber` | `biggestnumber` | crash |
| W04 D2 `biggest.js` (after the fix) | `firstNumber` | `firstnumber` | still crashing |
| W04 D3 `loops.js` | `number` | `numbers` | crash |

I renamed line 142 to `numbers` — one character — and every drill ran:

```
1. Sum 1–100 → 5050 ✅        6. Factorial 5! → 120 ✅
2. Table of 7 → correct ✅     7. Palindrome → level ✅
3. Reverse → tpircSavaJ ✅     8. Triangle → correct ✅
4. Vowels → 4 ✅               9. Pyramid → correct ✅
                              10. Largest → 89 ✅
```

You were one keystroke from a clean sheet.

---

## FizzBuzz is broken, and it would still be broken after the rename

This is the one that isn't a typo. It's a logic bug, and you would have caught it in two seconds if you had looked at the output.

```js
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
        continue;                    // ← everything below is now unreachable
         if (i % 3 === 0) {          // ← this is INSIDE the i%15 block
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
}
```

Your Fizz / Buzz / number block is **nested inside** the `i % 15` block, **after** a `continue`. Code after an unconditional `continue` can never run. So the loop only ever prints on multiples of 15.

Actual output — six lines, for a drill that should print one hundred:

```
FizzBuzz
FizzBuzz
FizzBuzz
FizzBuzz
FizzBuzz
FizzBuzz
```

That is 15, 30, 45, 60, 75, 90. Nothing else in 1–100 printed at all.

The `continue` was correct instinct — you wanted it for the checklist and it belongs there. The braces went wrong. Count your closing braces: you have two `}` at the end where the structure needs them one level apart.

---

## Your `break` hardcodes the answer

```js
if (largest === 89) {
    break; // Stop because 89 is known to be the largest in this list.
}
```

Read your own comment back. "89 is known to be the largest" — known by whom? By you, because you looked at the list. The drill is *find the largest number*. If you already know it's 89, there is nothing to find.

Change the list to `[12, 45, 7, 90, 34]` and your program stops early on a number that isn't there, or never breaks at all.

A `break` should stop the loop when **more looping cannot change the answer** — not when the answer matches a number you typed in by hand. In this drill there is no such moment: you have to see every element. The honest answer is that drill 10 doesn't need a `break`, and you should have used it somewhere it earns its place (drill 8's search, for instance).

---

## What was genuinely good

**`notes.md` is the best writing you have done.** This is real:

> realising each loop represents one row. the number of spaces decreases while the number of the stars increases, so i can calculate both values from the current row.

That is the pyramid. That's not a definition you copied — that's the thing clicking, and you wrote it in your own words. The viva answers are correct too: `for...of` gives values, `for...in` gives keys; `while` when you don't know the count in advance. You understand loops.

Which is exactly why 5.75 stings. **You know this material. You handed in a file that doesn't parse.**

---

## To close the redo

1. Line 142: `const number` → `const numbers`
2. Fix the FizzBuzz braces so the Fizz/Buzz/else block sits *outside* the `i % 15` block
3. Move the `break` to a drill where stopping early is actually justified, and rewrite the comment to say why
4. **Run `node loops.js` and read all 100 FizzBuzz lines** before you push

Two minutes of typing. Thirty seconds of reading the output.
