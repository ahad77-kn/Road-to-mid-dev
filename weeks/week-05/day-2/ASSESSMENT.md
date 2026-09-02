# 🧾 Assessment — Week 05 · Day 2

**Assignment:** Rewrite the ten array drills using array methods, plus five harder ones. No `for` loop anywhere.
**Submitted:** 2026-08-26 10:38 (commit `1d1bbe9`)
**Reviewed by:** Adil on 2026-09-02

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **1.75** |
| 2 | Code quality | 2 | **1.75** |
| 3 | Understanding | 3 | **2.5** |
| 4 | Process | 2 | **1.5** |
| | **TOTAL** | **10** | **7.5** |

## 🏁 Verdict: ✅ PASS — **the JavaScript is good. The write-up is a third finished.**

---

## The code side is strong

**No `for` loop anywhere:**

```
$ grep -E '\bfor\s*\(' methods.js
(nothing)
```

Clean. ✅

**Method usage:**

| Method | Uses |
| --- | --- |
| `reduce` | **5** (needed 3) ✅ |
| `filter` | 5 |
| `map` | 4 |
| `sort` | 2 |

**`reduce` into an object** — drill 13, and it's the real thing:

```
13. Grouped Words: { a: ['apple','ant'], b: ['banana','ball'], c: ['cat'] }
```

That's the hardest single idea in the assignment and you got it. ✅

**The three-way chain** — drill 15, exactly as specified:

```js
products
    .filter((product) => product.inStock && product.price < 1000)
    .map((product) => ({ name: product.name, price: product.price }))
    .sort((a, b) => a.price - b.price);
```

`.filter().map().sort()` in one expression, with a **proper numeric comparator** `a.price - b.price`. Not `.sort()` bare. You knew. ✅

All fifteen outputs run and all fifteen are arithmetically correct — I checked drill 12's tax (500/1000/2000 at 17% → 585/1170/2340 ✓) and drill 15's ordering (500, 800, 900 ✓).

---

## `comparison.md` is 15 lines long

The brief asked for **three drills, loop version beside method version, with a line on which reads better and why.**

Here is the entire file:

```
# Loop vs Array Methods

## Drill 1 — Sum

### Loop version

```js
const sumArray = (numbers) => { … };
```
```

That's it. It ends there.

- Drills shown: **1 of 3**
- Versions shown for that one: **loop only** — no method version
- Verdict line on which reads better: **absent**

So of the three things that section had to do, it does none of them completely. The whole point of the day is *feeling the difference* between the two styles — you wrote both styles, in two files, and then didn't put them next to each other and say which you preferred. That comparison **is** the learning; the code was just the raw material for it.

This is the single reason the day isn't an 8.5.

---

## Two drills don't match the brief

**Drill 12** — the brief: *"From a list of prices, get the **total** after 17% tax."*

```js
const pricesAfterTax = (prices) => prices.map((price) => price * 1.17);
// → [585, 1170, 2340]
```

You returned a **list** of taxed prices. The brief asked for one number. You need a `.reduce()` on the end:

```js
prices.map(p => p * 1.17).reduce((sum, p) => sum + p, 0)   // → 4095
```

Ironic: that would have been your sixth `reduce`, and it's the most natural one in the whole file.

**Drill 15** — the brief: *"get the **names** of in-stock items under 1000."* You returned `{name, price}` objects.

I'll half-excuse this one, because you need `price` in the object for the `.sort()` that follows it to work. But the fix is to sort *first*, then map to names last:

```js
.filter(p => p.inStock && p.price < 1000)
.sort((a, b) => a.price - b.price)
.map(p => p.name)                            // → ['Mouse','Keyboard','Headphones']
```

**Order matters in a chain.** That's worth more than the mark.

---

## Fix list

1. `comparison.md`: add the method version of drill 1, then **two more drills** in full, each with one line on which reads better and why
2. Drill 12: add the `.reduce()` so it returns the total
3. Drill 15: reorder to `filter → sort → map` so it returns names

Items 2 and 3 are five minutes. Item 1 is the assignment.
