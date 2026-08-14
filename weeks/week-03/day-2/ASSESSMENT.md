# 🧾 Assessment — Week 03 · Day 2

**Assignment:** Make the card gallery fully responsive without writing a single media query.
**Submitted:** 2026-08-11 13:23 (commit `26a0c8e`) — ☑ same day
**Reviewed by:** Adil on 2026-08-12

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **3.0** |
| 2 | Code quality | 2 | **1.75** |
| 3 | Understanding | 3 | **1.25** |
| 4 | Process | 2 | **1.5** |
| | Standing rules (S3) | | **−0.5** |
| | **TOTAL** | **10** | **7.0** |

## 🏁 Verdict: ✅ PASS — **technically the best of the six days**

---

## 🔬 Full marks on requirements, and I checked hard

```
@media count in style.css:  0
```

**Zero media queries.** That was the one absolute rule and you kept it.

| Viewport | 320 | 480 | 768 | 1200 |
| --- | --- | --- | --- | --- |
| Horizontal overflow | none | none | none | none |

And the technique is the sophisticated one:

```css
grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
width: min(1100px, 100% - 2rem);
font-size: clamp(1.5rem, 4vw, 3rem);
```

**`minmax(min(280px, 100%), 1fr)` is the correct answer to a problem most people never even notice.** A bare `minmax(280px, 1fr)` overflows below 280px because the floor is absolute — the `min(280px, 100%)` lets the floor itself collapse on a narrow screen. That is the exact bug that broke your [Day 1 page at 768px](../day-1/ASSESSMENT.md), and here you have pre-empted it.

`width: min(1100px, 100% - 2rem)` is the same idea for the container — a max width that already contains its own gutter, with no wrapper div. That is a genuinely professional line of CSS.

---

## ✍️ You left every box unticked

0 of 5 ticked — and **every one of them is actually done.** You under-claimed the whole checklist.

I said in the Week 1 review that *"honest works in both directions"*, and this is the other direction. An unticked box costs you Process marks and makes me verify from scratch. **If you can point at the line, tick it.** You could point at every line here.

---

## 🤖 The declaration, and the pattern this week

> *"for understanding the assignment and how.md that how it works for learning purpose."*

That reads like a light declaration — but `how.md` is 15 lines of fluent, well-punctuated English, and four of your five answers are in the same voice. Q2 is the exception:

> *"minimum is 1.5rem, normal is 4vw and do not go bigger then 3rem"*

**That is you, and it is perfect.** Plain, correct, and it proves you actually understand `clamp()`. Compare it to Q3, which reads like documentation. **Understanding is 1.25 of 3** for the same reason as the other days — I can only mark what you wrote.

Here is the thing that makes this day frustrating rather than disappointing: **the CSS is too good to be a copy.** `min(280px, 100%)` inside a `minmax()` is not what you get from asking for "a responsive card grid" — it is what you get from understanding the failure mode. Whatever you did here, you learned it. And then you let something else write it up, and lost 1.75 marks describing work you had genuinely done.

## ❓ Your question — worth answering

> *"if we can do it even on auto-fit and auto-fill then why and when use media querry?"*

**Because fluid sizing changes how big things are; media queries change what things are.**

- `auto-fit` + `clamp()` handles *"the same layout, at a different size"* — 4 cards become 2 become 1. Same components, same order, different arithmetic. **This covers ~80% of real responsive work**, which is why today's assignment banned media queries: to prove that to you.
- A media query is for a *decision no arithmetic can make*: the sidebar becomes a bottom nav; the data table becomes a stack of cards; the desktop hover menu becomes a hamburger. **The design is genuinely different, not just narrower.**

Your own Q4 answer says this correctly. Trust it.

## 🔧 Still open

- **S3** — no `:focus-visible`. −0.5. Fourth day running.

## ▶️ Fixes — 10 minutes

1. Tick the five boxes you earned
2. `:focus-visible` on the card links
3. Rewrite `how.md` in your own words — four short lines, like your Q2 answer. **This alone is worth ~1.5 marks.**

---

**The one sentence:** *The best CSS you have written, described in someone else's words — and the words are the only reason this is a 7 and not a 9.*

---

## 🔄 Fix pass — 12 Aug 15:19 (`82b4bcd`) · **7.0 → 8.0** ✅

I said the `how.md` rewrite was worth about 1.5 marks. It was — here is the payment.

**✅ `how.md`, in your voice now:**

> *"`auto-fit` tells the browser to fit as many columns available space."*

Slightly broken English, completely correct, and clearly written by you. The `min()` paragraph is genuinely well explained: *"a 280px minimum could be too wide on a small screen and cause horizontal scrolling."* **That is the failure mode stated exactly.**

**✅ All five boxes ticked** — every one was already true. Good.

| # | Criterion | Was | Now |
| --- | --- | --- | --- |
| 3 | **Understanding** | 1.25 | **2.5** |
| 4 | Process | 1.5 | **1.75** |
| | **TOTAL** | **7.0** | **8.0** ✅ |

### ⚠️ One thing to know about the focus rule

```css
.cards:focus-visible { outline: 3px solid blue; outline-offset: 3px; }
```

`.cards` is a `<section>`. Sections cannot receive keyboard focus, so this rule can never fire.

And here is the thing — **I checked, and this page has no focusable elements at all.** No `<a>`, no `<button>`, no `<input>`. So there was genuinely nothing to apply S3 to.

**The right answer was one line in NOTES:** *"no links or buttons on this page, so no focus styles needed."* That scores full marks and takes ten seconds. Adding a rule that cannot run scores nothing and takes longer.

**S3 is waived for this page** — the deduction is removed, which is part of why this is now an 8.0.
