# 🧾 Assessment — Week 02 · Day 4

**Assignment:** Instagram-explore-style gallery where some tiles span two columns or rows.
**Submitted:** 2026-08-06 11:42 (commit `94df275`) — ☑ same day
**Reviewed by:** Adil on 2026-08-12

---

## Score

| Block | Given |
| --- | --- |
| 🛠️ **Assignment** | **7.0 / 10** |
| 🐛 **Drill** | **0 / 5** — deleted, not submitted |
| 🧪 **Test** | **0 / 10** — deleted, not submitted |

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **2.5** |
| 2 | Code quality | 2 | **1.5** |
| 3 | Understanding | 3 | **2.5** |
| 4 | Process | 2 | **1.0** |
| | Standing rules (S3) | | **−0.5** |
| | **TOTAL** | **10** | **7.0** |

## 🏁 Verdict: ✅ PASS on the build — **but two of the three blocks are missing**

---

## 🗑️ First, the thing we have to talk about

```
06 Aug 10:15  ahad77-kn        Delete weeks/week-02/day-4/drill directory
06 Aug 10:15  ahad77-kn        Delete weeks/week-02/day-4/test directory
06 Aug 11:35  Muhammad Ahad    Complete Week 02 Day 04
06 Aug 11:40  ahad77-kn        Delete weeks/week-02/day-5/drill directory
06 Aug 11:40  ahad77-kn        Delete weeks/week-02/day-5/test directory
```

You deleted Day 4's drill and test **eighty minutes before** submitting Day 4. Then, five minutes after submitting, you deleted Day 5's as well — a day you had not started. All four through the GitHub website.

**I am not going to guess why, so I am asking.** There are reasonable answers — the folders may have looked broken, or confusing, or like something I had left behind by mistake. If that is it, say so and nothing further happens. **Write the reason in `learn/NOTES.md` on your next submission.**

What I can say is what it costs, because that part is just the rules:

- Drill **0 / 5**, test **0 / 10** — same as not submitting.
- Process drops to **1.0 / 2**.

And one thing that is worth more than the marks: **deleting the work is the one move that removes my ability to help you.** An empty `FIXES.md` with *"could not find bug 4"* tells me exactly what to teach on Monday. A deleted folder tells me nothing, and it reads as hiding — which I do not think is what you meant, but it is what it looks like from here.

You did this drill on Day 3 and **found five of six bugs**. You were not going to fail it.

The folders are restored. [Day 4 drill](drill/) · [Day 4 test](test/) · [Day 5 drill](../day-5/drill/) · [Day 5 test](../day-5/test/) — do them on your catch-up day and I will mark them.

---

## 🔬 The build — verified in the browser

**No horizontal overflow at 320, 480, 768 or 1200px.** Clean at every width I tested. You were not asked for that this week and you got it anyway.

`grid-auto-flow: dense` ✅ · `aspect-ratio: 1/1` ✅ · `object-fit: cover` ✅ · spans ✅ · 5/5 boxes ticked and true.

---

## 🕳️ Your question — the empty gaps, answered

> *"i struggled to fill the one empty space i dont know why it remains because i used the dense but it still."*

I mapped every tile onto the grid. Letters are tiles in source order, `.` is empty:

```
A A B C
A A D E
F H . I
G G J K
G G L .
```

**There are two holes, not one** — row 3 column 3, and row 5 column 4.

And here is why `dense` was never going to fix it. It is arithmetic, not CSS:

| | Count | Cells each | Cells |
| --- | --- | --- | --- |
| 2×2 tiles (A, G) | 2 | 4 | 8 |
| 1×1 tiles | 10 | 1 | 10 |
| | | **Total content** | **18** |
| Grid: 4 columns × 5 rows | | | **20** |
| | | **Holes** | **2** |

**You have 18 cells of content and the grid needs 20.** Two cells must be empty, and no property can change that — `dense` only *reorders* items into earlier holes, it cannot *invent* content to fill them. You reached for a layout tool to solve a counting problem.

**Two ways to fix it, pick either:**

1. **Add two more 1×1 tiles** → 20 cells of content in a 20-cell grid. Exact fit.
2. **Make one 2×2 into a 2×1** (2 columns, 1 row) → 4 + 2 + 10 = **16 cells**, which is exactly 4 rows × 4 columns. Also exact.

**The general rule, worth writing down:** with `N` columns, your total spanned cells must be a multiple of `N` for the last row to come out flush. Count before you style.

This is a genuinely good struggle to have had, and you did the right thing — you tried it, failed, said so plainly, and screenshotted it. That is worth more to me than a lucky pass.

---

## 🎤 Your answers — 4.5 / 5

Q1 ✅ · Q2 ✅ (*"but this order may differ from html order"* — that is the real cost of `dense`, and it is an accessibility cost: tab order follows the DOM, not the visual grid) · Q3 ✅ · Q4 ✅ · Q5 described the DevTools grid overlay correctly.

## ▶️ Fixes

1. Close one of the two holes using either method above — **10 min**
2. `:focus-visible` on the tiles — **5 min**
3. **[The drill](drill/) and [the test](test/)** — 60 min, and write the reason for the deletion in NOTES

---

**The one sentence:** *The gallery is good and your struggle note was honest — but you deleted two of the three things you were asked to hand in, and that is the only part of this week I actually need you to explain.*
