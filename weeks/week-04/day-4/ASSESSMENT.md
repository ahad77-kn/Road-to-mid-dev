# 🧾 Assessment — Week 04 · Day 4

**Assignment:** Ten functions, each returning a value, each tested three ways.
**Submitted:** 2026-08-22 16:27 (commit `ee3a25b`)
**Reviewed by:** Adil on 2026-09-02

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **2.5** |
| 2 | Code quality | 2 | **1.75** |
| 3 | Understanding | 3 | **2.25** |
| 4 | Process | 2 | **2.0** |
| | **TOTAL** | **10** | **8.5** |

## 🏁 Verdict: ✅ PASS — **joint best day in twenty-two days, and full marks on process**

---

## 30 out of 30

You wrote a `//` comment predicting the output of every single call. I extracted all thirty of them and diffed them against what `node functions.js` actually printed.

**Every one was right.**

```
✅ isEven(4)                  claim=true                   actual=true
✅ isEven(0)                  claim=true — edge case       actual=true
✅ getGrade(0)                claim=F — edge case          actual=F
✅ celsiusToF(-10)            claim=14 — negative          actual=14
✅ reverseString("")          claim="" — edge case         actual=""
✅ factorial(0)               claim=1 — edge case          actual=1
✅ factorial(-3)              claim=error message          actual=Factorial is not defined…
✅ largest(0, 0, 0)           claim=0 — edge case          actual=0
✅ calculateTotal(100,0,0.10) claim=0 — edge case          actual=0
✅ greet("Ahad", "Hi")        claim=Hi, Ahad!              actual=Hi, Ahad!
      … 30 of 30 …

VERIFIED: 30/30
```

Three days earlier it was 19/20 and I called that the biggest change in eighteen days. This is better, on a harder assignment, with genuine edge cases you chose yourself — `0`, `""`, `-10`, `-3`, `(0,0,0)`. **Process: 2.0/2.** First time.

And the contrast with Day 3 could not be sharper. Day 3 doesn't parse. Day 4 is perfect. Same week, same person, three days apart. The only difference is whether you ran it.

---

## Verified mechanically

| Requirement | Result |
| --- | --- |
| 10+ functions | **11** ✅ |
| Every function returns; none log inside | **0 `console.log` inside any function body** ✅ |
| One default parameter | `greet(name, greeting = "Hello")` ✅ |
| Written three ways | declaration + expression + arrow, all present ✅ |
| 3 test inputs each, incl. an edge case | 30 calls, edge case in all 10 ✅ |
| `scope.md` handed in | present ⚠️ (see below) |

The discipline on "no logging inside the function" is exact — I checked every function body and there is not a single `console.log` in any of them. All 40 logs are at the call site, which is the whole point of the day.

`factorial(-3)` returning a message instead of looping forever is a **guard clause**, and you reached for it without being told to. That's the pattern you'll use for the rest of your career.

---

## Two things missing

**1. The comment on the differences.** The checklist said: *one function written three ways — with a comment on the differences.* You wrote all three:

```js
// A. Function declaration
function addDeclaration(a, b) { return a + b; }

// B. Function expression
const addExpression = function (a, b) { return a + b; };

// C. Arrow function
const addArrow = (a, b) => { return a + b; };
```

Labels, not differences. "A. Function declaration" tells me which one it is; it doesn't tell me what changes. The three real differences are hoisting, `this`, and syntax — and the viva asks you which one is *not* hoisted. Add three lines.

**2. `scope.md` has a syntax error.**

```js
function showName() {
    const name = "Ahad";
    return = name;      // ← SyntaxError: Unexpected token '='
}
```

```
$ node scope.js
    return = name;
           ^
SyntaxError: Unexpected token '='
```

`return name;` — no `=`. `return` is not an assignment, it's an exit.

Your *explanation* is right: `name` isn't visible outside, and `console.log(name)` gives a `ReferenceError`. But the code you wrote to demonstrate it never reaches that line, because it doesn't compile. Also your code fence is `....js`, not ` ```js `.

The "why" is thin too. You wrote *"a variable created inside a function is normally available inside that function."* That restates the fact. The why is: **the function's variables live only as long as the call does.** When `showName()` returns, that scope is gone and `name` goes with it. Say that.

---

## Fix list — five minutes

1. `scope.md`: `return = name` → `return name`, and fix the fence to ` ```js `
2. `scope.md`: add one sentence on *why* — the scope is destroyed when the call ends
3. `functions.js`: three lines under the A/B/C block on hoisting, `this`, and syntax

None of that changes the score. The score is 8.5 because you tested it.
