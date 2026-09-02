# 🧾 Assessment — Week 05 · Day 3

**Assignment:** A student-marks program on an array of objects. All functions pure, nothing mutated, empty case handled.
**Submitted:** 2026-08-26 10:38 (commit `1d1bbe9`)
**Reviewed by:** Adil on 2026-09-02

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **3.0** |
| 2 | Code quality | 2 | **1.75** |
| 3 | Understanding | 3 | **2.5** |
| 4 | Process | 2 | **1.75** |
| | **TOTAL** | **10** | **9.0** |

## 🏁 Verdict: ✅ PASS — **full requirements again. This is a real program.**

---

## Purity — proved, not asserted

The word "pure" is easy to write in a comment. I tested it: snapshot the whole `students` array, run **all seven** functions including `addStudent`, snapshot again, compare.

```
=== MUTATION PROBE ===
  ✅ students array unmutated after all 7 calls
```

`addStudent` is the one that catches people — `push` is right there and it's one character shorter than spreading into a new array. You returned a new array:

```
Original student count: 8
New student count: 9
```

Original still 8. ✅

---

## The empty case — all six, none crash

The brief said *"handles the empty-array case without crashing."* I called every function with `[]`:

| Function | Returns on `[]` | Right answer? |
| --- | --- | --- |
| `classAverage` | `0` | ✅ |
| `topper` | `null` | ✅ |
| `lowest` | `null` | ✅ |
| `passed` | `[]` | ✅ |
| `sortByAverage` | `[]` | ✅ |
| `subjectReport` | `{}` | ✅ |

**Six for six, no crashes.** And they're not all the same answer — you returned `null` where "there isn't one" is the truth, `[]` where "an empty list" is the truth, and `0` for the average. You thought about each one separately. That's the difference between handling an edge case and papering over it.

One to think about for the viva, and I genuinely don't think there's a single right answer: **is `0` the correct class average of no students?** Zero is a mark someone could actually score. `null` says "undefined, there's nobody here." Have a view.

---

## Everything else, measured

```
reduce used:      5   (needed 2)   ✅
console.table:    4                ✅
students:         8   (needed 8)   ✅
subjects:         3   (needed 3)   ✅
```

And the output is a genuinely readable report:

```
Sorted By Average:
┌─────────┬──────────┬─────────┐
│ (index) │ Name     │ Average │
├─────────┼──────────┼─────────┤
│ 0       │ 'Hassan' │ '92.00' │
│ 1       │ 'Hamza'  │ '90.00' │
│ 2       │ 'Bilal'  │ '85.00' │
│ 3       │ 'Ahad'   │ '82.33' │
…
```

Sorted correctly, descending, `toFixed(2)` throughout so the columns line up. `subjectReport` returning `{math: {avg, high, low}, …}` is the right shape and it's the most complex data structure you've built.

---

## The one wrinkle

`subjectReport` prints `77.875` while the class-average lines print `77.88`. Two different precisions for the same number in the same report:

```
Class Average - Math: 77.88
…
│ math    │ 77.875 │ 95   │ 55  │
```

Small, but it's the kind of thing a reviewer notices. Pick one and apply it everywhere — `toFixed(2)` inside `subjectReport` too.

---

## No fix list

There isn't one. This day is done.

For the viva, be ready on question 4 — *why is `sort()` on objects risky by default, and what does the comparator return?* You wrote a correct comparator; make sure you can say **why** `a.average - b.average` works and what the sign of the result means to `sort`.
