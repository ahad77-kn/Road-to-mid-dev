# 🧾 Assessment — Week 05 · Day 4

**Assignment:** Model three real things as objects with data and methods — bank account, library, shopping cart.
**Submitted:** 2026-08-27 20:39 (commit `ec66fc4`)
**Reviewed by:** Adil on 2026-09-02

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **3.0** |
| 2 | Code quality | 2 | **1.75** |
| 3 | Understanding | 3 | **2.75** |
| 4 | Process | 2 | **1.75** |
| | **TOTAL** | **10** | **9.25** |

## 🏁 Verdict: ✅ PASS — **best day of the twenty-four. Six checklist items, six hits, in all three files.**

---

## The checklist, per file

This was the longest "done when" list of any assignment so far — six separate techniques. I checked each one in each file:

| | `bankAccount.js` | `library.js` | `cart.js` |
| --- | --- | --- | --- |
| Bracket notation | ✅ | ✅ | ✅ |
| Destructuring | 1 | 3 | 3 |
| Spread | ✅ | ✅ | ✅ |
| `Object.keys` | ✅ | ✅ | ✅ |
| `Object.values` | ✅ | ✅ | ✅ |
| `Object.entries` | ✅ | ✅ | ✅ |
| `this` | 10 uses | 4 | 9 |

**Eighteen for eighteen.** You didn't do the minimum in one file and coast on the other two — you demonstrated all six in every file. Destructuring used 7 times against a requirement of 3.

And both required comments are there:

```js
// Bracket notation is required when the property name
// is stored in a variable …
```
```js
// `this` refers to the bankAccount object here.
```

---

## The methods actually work

Defining `withdraw()` is easy. Making it reject an overdraft, and then *proving it does*, is the assignment. Your output:

```
12000                                        ← deposit 2000
10500                                        ← withdraw 1500
Withdrawal rejected: insufficient balance    ← withdraw too much ✅
[
  { type: 'Deposit',    amount: 2000, balance: 12000 },
  { type: 'Withdrawal', amount: 1500, balance: 10500 }
]                                            ← getStatement ✅
```

Every method in every file is called, not just defined — I checked:

```
bankAccount:  deposit ✅  withdraw ✅ (×2)  getStatement ✅
library:      borrow ✅   return ✅   isAvailable ✅ (×2)  findByAuthor ✅
cart:         addItem ✅  removeItem ✅  updateQty ✅  total ✅  itemCount ✅
```

`library.return()` is a nice one — `return` is a reserved word, and you used it as a method name anyway, which is legal. Know why, because that's a viva-grade question.

**Cart arithmetic, checked by hand:**

```
Keyboard 2500 × 2 = 5000
Mouse    1200 × 1 = 1200
subtotal          = 6200  × 1.17 = 7254   ✅ matches output
itemCount         = 3                      ✅
after updateQty(Mouse, 2): 7400 × 1.17 = 8658  ✅
```

Correct to the rupee.

---

## Your learn notes are the best set yet

Every viva answer is right, and question 5 — the hard one — you answered with working code rather than a description:

> ```js
> const updated = { ...cart, customer: { ...cart.customer, city: "Lahore" } };
> ```
> cart.customer.city stays unchanged.

**That is the correct answer and most people get it wrong.** They write `{...cart}` and assume the nested object came along. You spread *both levels*, which means you actually understand what you said one question earlier — that `{...obj}` is shallow and *"nested objects are still shared."* You didn't just define shallow copy; you wrote the code that works around it.

Question 2 as well: *"this refers to the object calling the method. An arrow function doesn't get its own `this`; it uses the surrounding `this`."* Correct, and concise.

And this:

> damn im struggling with the whole js topics to learn by heart
> but im facing dificulties but trying to learn every new topics

I'd rather read that than a confident answer that's wrong. But look at the score at the top of this page. **You wrote that on your best day.** The struggling is what the learning feels like from the inside — it does not mean it isn't working. The evidence says it's working.

---

## Two small things

- **`library.js` has `// Bracket notation` with no explanation** — the other two files explain *when it's required*, this one just labels it. Copy the sentence across.
- **The commit is titled "Update Week 04 Day 04"** but contains Week 05 Day 4. Third mislabelled message. The commit title is how you find work again in six months; make it say what's in it.

## No fix list

Nothing here needs redoing. This is what a finished assignment looks like.
