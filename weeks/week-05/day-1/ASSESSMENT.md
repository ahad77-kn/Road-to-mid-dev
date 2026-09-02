# 🧾 Assessment — Week 05 · Day 1

**Assignment:** Ten array drills, `for` loops only, nothing mutated.
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

## 🏁 Verdict: ✅ PASS — **full marks on requirements. Best day so far.**

First 9 in twenty-two days, and the first time any day has scored 3.0 on requirements.

---

## Every claim on this assignment, verified

**Loops only.** I grepped for all six banned methods across the file:

```
$ grep -E '\.(map|filter|reduce|find|includes|indexOf|reverse)\(' arrays.js
85:// 5. Reverse an array without .reverse()
```

One hit, and it's a comment. **Zero banned methods.** ✅

**No mutation.** I did not take your word for it and I did not read the code. I wrote my own harness: deep-snapshot the input array with `JSON.stringify`, call your function, snapshot again, compare.

```
✅ sumArray              ✅ removeDuplicates
✅ averageArray          ✅ mergeAndSort
✅ largestAndSmallest    ✅ findIndex
✅ countAboveAverage     ✅ splitEvensAndOdds
✅ reverseArray          ✅ rotateLeft

10 of 10 leave the input untouched
```

**10 for 10.** `reverseArray` and `rotateLeft` are the two that catch people out — the obvious way to write both is in-place. You built new arrays. ✅

**Three test shapes.** Normal, empty, single-element, on all ten, plus you log the original after each call the way the brief asked:

```
3. Largest and Smallest
{ largest: 50, smallest: 10 }     ← normal
null                              ← empty
{ largest: 7, smallest: 7 }       ← single
Original: [ 10, 20, 30, 40, 50 ]  ← proof of no mutation
```

Returning `null` for the empty case rather than crashing or returning `{largest: undefined}` is a real decision and it's the right one. ✅

---

## You dodged the sort trap without being warned

`mergeAndSort` had to sort without `.sort()`, so you hand-wrote it. Most people's hand-written sort is fine; most people's `.sort()` is not — because JavaScript's default sort compares strings, so `[100, 9, 80]` comes out `[100, 80, 9]`.

Your own test data (`[30,10,50]` + `[20,40]`) can't tell the difference — every value has two digits, so string order and number order agree. I fed it values that *can*:

```js
mergeAndSort([100, 9, 80], [5, 1000])
→ [ 5, 9, 80, 100, 1000 ]      ✅ correct numeric order
```

A default `.sort()` would have given `[100, 1000, 5, 80, 9]`. Yours is right.

**But note what happened there**: your test data couldn't have caught the bug if you'd had one. Two-digit numbers all sort the same either way. This is the Day 3 lesson in a new costume — *a test that passes on data too easy to fail is not a test.* When you pick test inputs, pick ones that could expose the thing you're worried about. Add `[100, 9, 1000]` to your own tests.

---

## Small things

- **`countAboveAverage` on `[7]` returns 0.** Correct — nothing is above its own average — but worth knowing you agree that's the right answer, because the viva asks this class of question.
- **Duplication.** `averageArray` recomputes the sum with its own loop instead of calling `sumArray`. So does `countAboveAverage`. Three copies of the same five lines. Tomorrow's assignment is about exactly this, so I'm not taking marks — but notice it: **a function you already wrote is a tool you already own.**
- The file is 278 lines for ten drills. That's the duplication showing up as length.

---

## What I want you to take from this

Day 3 of last week does not parse. Day 1 of this week is the cleanest, most thoroughly tested work in the repository, and I could not find a single requirement you missed.

Four days apart.

The difference is not talent and it is not difficulty — this assignment is harder than the loops one. The difference is that you ran this one and read what came out. That is the entire gap between 5.75 and 9.0.
