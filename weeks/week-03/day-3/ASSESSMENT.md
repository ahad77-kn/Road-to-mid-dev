# 🧾 Assessment — Week 03 · Day 3

**Assignment:** Add restrained motion — transitions and hover effects a user feels but does not notice.
**Submitted:** 2026-08-12 13:15 (commit `9e8f277`) — ☑ same day
**Reviewed by:** Adil on 2026-08-12

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **2.0** |
| 2 | Code quality | 2 | **1.0** |
| 3 | Understanding | 3 | **1.75** |
| 4 | Process | 2 | **1.75** |
| | Standing rules (S9) | | **−0.5** |
| | **TOTAL** | **10** | **6.0** |

## 🏁 Verdict: ✅ PASS — under the **6.5** Week 3 gate

---

## 🎉 Two firsts, both unprompted

**1. `prefers-reduced-motion` — your first accessibility media query.**

```css
@media (prefers-reduced-motion: reduce) {
  button, a, input, .card { transition: none; }
  .skeleton { animation: none; }
  html { scroll-behavior: auto; }
}
```

That is correct and complete. For some people motion on a screen causes genuine nausea and migraine; they set a system preference, and your page now respects it. **Most working developers never write this.**

**2. `:focus-visible` — three of them.** After four days of −0.5, S3 is finally closed. The standing rule worked exactly as intended: no reminder, and you did it anyway.

---

## 🐛 But the file contradicts itself

Line 21, your own comment:

> *"Only transform and opacity are animated. They are preferred because browsers can usually animate them smoothly without changing the page layout."*

Line 32, the actual rule:

```css
button, a, input, .card {
    transition: 200ms ease-out;      /* ← no property named */
    opacity: 200ms ease-out;         /* ← not valid CSS */
}
```

**Two separate bugs, and they are the day's whole lesson.**

### Bug 1 — `transition: 200ms ease-out` animates *everything*

When you omit the property name, `transition-property` falls back to its default: **`all`**. So this transitions width, height, margin, colour, box-shadow, `top` — every property that changes, on every one of those elements. That is precisely the expensive behaviour your comment says you avoided.

### Bug 2 — `opacity: 200ms ease-out` is invalid and silently discarded

`opacity` takes a **number between 0 and 1**. Handing it a duration and an easing function is meaningless, so the browser throws the whole declaration away without a word. **DevTools would have shown it struck through** — which is Standing Rule **S9**, and this is the fourth time silent-invalid CSS has cost you marks (`margin: 20px opx`, `outline: 0.2rem`, `border-radius: 0.5`, now this). **−0.5.**

**What you meant, and what both bugs collapse into:**

```css
transition: transform 200ms ease-out, opacity 200ms ease-out;
```

One line. Names both properties, animates only those two, and makes your comment true.

---

## 📱 And it broke at 320px

| Viewport | 320 | 480 | 768 | 1200 |
| --- | --- | --- | --- | --- |
| Overflow | ❌ **+137px** | ok | ok | ok |

```
nav.nav          width 275px, right edge 360px   (viewport is 320px)
a.header-button  right edge 457px
```

```css
.header { display: flex; justify-content: space-between; padding: 1rem 5%; }
.nav    { display: flex; gap: 1.5rem; }        /* ← no flex-wrap */
```

Neither flex container can wrap, so at 320px the nav simply runs off the side of the screen — **137 pixels of horizontal scroll.**

This is a regression, and that is why it costs more than the pixels suggest: **two days ago, [Day 1](../day-1/) was entirely about this**, and you passed it at 320px with zero overflow. The knowledge is there; it just is not being applied to new files yet.

**Fix:** `flex-wrap: wrap` on both `.header` and `.nav`.

---

## 🎤 Your answers — 3.5 / 5, and these are yours again

Q1 ✅ *"transorm and opacity Usually avoid layout recalculation"* — correct, and in your own voice, which is a real improvement on the last three days.
Q2 ✅ all four parts named.
Q4 ✅ transitions for state changes, keyframes for continuous — exactly right.
Q3 ⚠️ *"it reduces the animation motions"* — describes *what* it does, not **who it helps**. It is an accessibility feature for people with vestibular disorders, where motion causes real physical symptoms. Your code respects it; your answer should know why.
Q5 ⚠️ you described the DevTools steps without saying what you saw. **Actually run Paint Flashing and report the result** — that was the "prove it".

## ▶️ Fixes — 20 minutes, and this day becomes an 8

1. `transition: transform 200ms ease-out, opacity 200ms ease-out;` — delete the invalid `opacity` line
2. `flex-wrap: wrap` on `.header` and `.nav`, then check 320px
3. Open DevTools → Styles and scroll the whole file for strike-throughs. **Sixty seconds, every commit.**

---

**The one sentence:** *You wrote your first accessibility feature and closed a four-day standing rule on the same day you shipped a comment that your own code contradicts — read the file after you write it, in the browser, not in the editor.*

---

## 🔄 Fix pass — 12 Aug 15:19 (`82b4bcd`) · **6.0 → 7.0** ✅

Two of the three fixes landed.

**✅ `flex-wrap: wrap` on `.header` and `.nav`** — the 320px overflow is **gone**. Re-tested: `scrollWidth 320, clientWidth 320`, zero overflowing elements. That was 137px of horizontal scroll and it is fixed properly.

**⚠️ The transition is half-fixed:**

```css
transition: 200ms ease-out, opacity 200ms ease-out;
```

You added the property name to the **second** half and not the first. I read the computed value back from the browser:

```
transition-property:  "all, opacity"
```

**Still `all`.** The first segment has a duration and an easing but no property, so it still falls back to `all` — the exact thing your comment above it says you avoided. You are now transitioning everything *and* opacity twice.

```css
transition: transform 200ms ease-out, opacity 200ms ease-out;
```

**One word — `transform` — in front of the first `200ms`.** That is the entire remaining fix.

| # | Criterion | Was | Now |
| --- | --- | --- | --- |
| 1 | Requirements met | 2.0 | **2.5** |
| 2 | Code quality | 1.0 | **1.5** |
| | Standing rules (S9) | −0.5 | **−0.25** |
| | **TOTAL** | **6.0** | **7.0** ✅ |

Add the one word and this becomes an 8.
