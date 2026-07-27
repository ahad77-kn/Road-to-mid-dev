# Week 05 — Arrays, Objects & the Methods You Will Use Daily

[← The Road](../../README.md) · Phase 2 · JavaScript, Seriously · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 04](../week-04/) · **Next:** [Week 06 — The DOM →](../week-06/)

> **Goal:** hold data in the right shape and transform it with `map`, `filter` and `reduce` instead of hand-rolled loops.

**Why this week matters:** almost all real application code is *data going in, a different shape of data coming out*. An API returns 50 products; you need the 12 that are in stock, sorted by price, with a total. That is this week. Still console-only — the DOM starts on Monday.

---

## 📖 Learning material — 1 hr/day

| Day | Read + type | Source |
| --- | --- | --- |
| D1 | [JavaScript.info: Arrays](https://javascript.info/array) | JS.info |
| D2 | [JavaScript.info: Array methods](https://javascript.info/array-methods) — the big one | JS.info |
| D3 | [MDN: Array reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) — skim every method name once | MDN |
| D4 | [JavaScript.info: Objects](https://javascript.info/object) · [Object methods, `this`](https://javascript.info/object-methods) | JS.info |
| D5 | [JavaScript.info: Object copying by reference](https://javascript.info/object-copy) · [`Object.keys/values/entries`](https://javascript.info/keys-values-entries) | JS.info |

### 📰 Articles worth your time this week
- [MDN: `Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) — read the examples three times; `reduce` is the one that takes longest to click
- [JavaScript.info: Destructuring](https://javascript.info/destructuring-assignment) — you will use this in every React component later
- [MDN: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN: Structured clone / deep copy](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) — why `{...obj}` is not always enough

---

## 🗓️ The week at a glance

| Day | Assignment | Open the assignment | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Array basics — 10 drills with loops | [📄 day-1 →](day-1/) | – |
| [**D2**](day-2/) | Rewrite all 10 with `map`/`filter`/`reduce` | [📄 day-2 →](day-2/) | – |
| [**D3**](day-3/) | Student marks program | [📄 day-3 →](day-3/) | – |
| [**D4**](day-4/) | Objects — modelling real things | [📄 day-4 →](day-4/) | – |
| [**D5**](day-5/) | Console contact book (array of objects) | [📄 day-5 →](day-5/) | – |

---

## Day 1 — Arrays the manual way

📄 **[Open this day's assignment page →](day-1/)**




**Read first (1 hr):** JS.info *Arrays*.

**Build (2 hr):** In `day-1/`, solve all ten with **`for` loops only** — no array methods yet. This is on purpose: tomorrow you replace each one and feel the difference.

1. Sum of an array of numbers
2. Average
3. Largest and smallest
4. Count how many are above the average
5. Reverse an array without `.reverse()`
6. Remove duplicates
7. Merge two arrays and sort ascending
8. Find the index of a value (without `indexOf`)
9. Split an array into evens and odds
10. Rotate an array left by n positions

**Must have**
- [ ] Loops only — no `map`, `filter`, `reduce`, `find`, `includes`
- [ ] Each drill is a function taking the array as a parameter and returning the result
- [ ] None of them mutate the input array — prove it by logging the original after each call
- [ ] Tested with: a normal array, an empty array, and a single-element array

**🧪 Test material**
1. Are arrays a primitive type in JavaScript? What are they really?
2. What happens when you do `const a = [1,2]; const b = a; b.push(3);` — what is `a` now, and why?
3. Difference between `arr.length = 0` and `arr = []`?
4. Why can you `push` into a `const` array?
5. **Prove it:** show me one of your functions accidentally mutating the input, then fix it.

---

## Day 2 — `map`, `filter`, `reduce`

📄 **[Open this day's assignment page →](day-2/)**




**Read first (1 hr):** JS.info *Array methods* — the whole chapter.

**Build (2 hr):** Rewrite all ten of yesterday's drills using array methods, in `day-2/`, then add five more:

11. From a list of names, produce a list of their lengths
12. From a list of prices, get the total after 17% tax
13. Group a list of words by their first letter (`reduce` into an object)
14. Given `["a,1", "b,2"]`, produce `[{key:"a", value:1}, …]`
15. Chain it: from a product list, get the names of in-stock items under 1000 rupees, sorted by price

**Must have**
- [ ] Side-by-side: `day-2/comparison.md` showing the loop version and the method version of 3 drills, with a line on which reads better and why
- [ ] At least 3 uses of `reduce`, one of which reduces to an **object**, not a number
- [ ] One chained expression using `.filter().map().sort()` together
- [ ] Arrow functions throughout
- [ ] No `for` loop anywhere in this folder

**🧪 Test material**
1. What does `map` return when the array is empty? What about `reduce` with no initial value?
2. Difference between `find` and `filter`? Between `some` and `every`?
3. Explain `reduce`'s two parameters — the accumulator and the current value — using your own code as the example.
4. Which array methods mutate the original array? Name at least four.
5. **Prove it:** turn a `for` loop I write on the spot into a single chained expression, live.

---

## Day 3 — Student marks program

📄 **[Open this day's assignment page →](day-3/)**




**Read first (1 hr):** MDN *Array reference* — skim every method name so you know what exists.

**Build (2 hr):** A console program in `day-3/marks.js` operating on an array of student objects:
```js
const students = [
  { name: "Ahad", rollNo: 1, marks: { math: 82, physics: 74, english: 91 } },
  // …at least 8 students
];
```

Required functions, all pure (input → output, no globals):
- `addStudent(students, student)` → new array
- `averageFor(student)` → their average
- `classAverage(students, subject)`
- `topper(students)` and `lowest(students)`
- `passed(students, threshold)` → those above a mark
- `sortByAverage(students)` → descending
- `subjectReport(students)` → `{ math: {avg, high, low}, physics: {…}, … }`
- `printReport(students)` → a formatted table in the console

**Must have**
- [ ] Every function returns new data; the original `students` array is never mutated
- [ ] `reduce` used for at least two of the aggregations
- [ ] Handles the empty-array case without crashing
- [ ] Output is a readable aligned table (`console.table` is allowed and encouraged here)
- [ ] At least 8 students, at least 3 subjects

**🧪 Test material**
1. What does "pure function" mean, and why does it make debugging easier?
2. How would you find the topper *per subject* rather than overall?
3. Your `classAverage` on an empty array — what does it return, and is that the right answer?
4. Why is `sort()` on an array of objects risky by default? What does the comparator return?
5. **Prove it:** add a new subject to every student with one line, without touching the original array.

---

## Day 4 — Objects

📄 **[Open this day's assignment page →](day-4/)**




**Read first (1 hr):** JS.info *Objects* + *Object methods, `this`*.

**Build (2 hr):** In `day-4/`, model three real things as objects with both data and methods:

1. `bankAccount.js` — balance, `deposit()`, `withdraw()` (rejects overdraft), `getStatement()` returning a transaction history array
2. `library.js` — books with `borrow()`, `return()`, `isAvailable()`, `findByAuthor()`
3. `cart.js` — shopping cart: `addItem()`, `removeItem()`, `updateQty()`, `total()` (with tax), `itemCount()`

**Must have**
- [ ] Dot notation and bracket notation both used, with a comment on when bracket notation is *required*
- [ ] Nested objects and an array inside an object
- [ ] Object destructuring used at least 3 times
- [ ] Spread used to copy/update an object without mutating it
- [ ] `Object.keys` / `Object.values` / `Object.entries` each used at least once
- [ ] One method that uses `this` — plus a comment explaining what `this` refers to there

**🧪 Test material**
1. When *must* you use bracket notation instead of dot notation?
2. What does `this` refer to inside an object method? What happens if you make that method an arrow function?
3. `{...obj}` — is that a deep or shallow copy? Show a case where it bites you.
4. What do `Object.entries()` give you, and what shape is it?
5. **Prove it:** update a nested value in your cart object without mutating the original. Show the original unchanged.

---

## Day 5 — Console contact book

📄 **[Open this day's assignment page →](day-5/)**




**Read first (1 hr):** JS.info *Object copying by reference* + *keys/values/entries*.

**Build (2 hr):** A complete contact book in `day-5/contacts.js` — an array of contact objects, driven entirely from the console.

Required: `addContact` · `deleteContact(id)` · `updateContact(id, changes)` · `searchByName(query)` (case-insensitive, partial match) · `searchByCity(city)` · `listAll()` (sorted) · `groupByCity()` · `exportToJSON()` and `importFromJSON(str)`

**Must have**
- [ ] Each contact: `id`, `name`, `phone`, `email`, `city`, `tags` (array)
- [ ] Unique IDs generated, not hard-coded
- [ ] Immutable updates throughout — no direct mutation, ever
- [ ] Search is partial and case-insensitive (`"ah"` finds `"Ahad"`)
- [ ] Validation: reject a contact with no name or a phone shorter than 10 chars, with a clear message
- [ ] `groupByCity()` returns `{ Lahore: [...], Karachi: [...] }` — built with `reduce`
- [ ] At least 10 contacts and a demo run at the bottom of the file exercising every function

**🧪 Test material**
1. Why generate IDs instead of using the array index?
2. How does your update function avoid mutating? Show the line.
3. Walk me through `groupByCity`'s `reduce` — what is the accumulator on each step?
4. What does `JSON.stringify` do to a `Date`, a function, and `undefined` inside your object?
5. **Prove it:** I name a new feature — "find all contacts with the tag *work*" — write it in under 3 minutes.

---

## ✅ End-of-week check

- [ ] `map`/`filter`/`reduce` come to mind before a `for` loop
- [ ] You can explain the difference between copying a value and copying a reference, with an example
- [ ] You update objects and arrays immutably by habit (this is *required* for React later — it starts here)
- [ ] You can model any real-world thing as an object with sensible keys
- [ ] Destructuring and spread are comfortable, not exotic

**Next week the console output becomes a real page.** Every function you wrote this week is about to get a button attached to it.
