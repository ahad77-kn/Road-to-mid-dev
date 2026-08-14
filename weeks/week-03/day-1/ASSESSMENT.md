# 🧾 Assessment — Week 03 · Day 1

**Assignment:** Make last week's layouts survive a 320px phone, mobile-first, with no sideways scroll.
**Submitted:** 2026-08-11 11:56 (commit `9b1ca77`) — ☑ same day
**Reviewed by:** Adil on 2026-08-12

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **2.0** |
| 2 | Code quality | 2 | **1.5** |
| 3 | Understanding | 3 | **1.25** |
| 4 | Process | 2 | **1.75** |
| | Standing rules (S3) | | **−0.5** |
| | **TOTAL** | **10** | **6.0** |

## 🏁 Verdict: ✅ PASS — but under the new **6.5** Week 3 gate

---

## 🔬 The headline requirement: passed

I loaded your page in a real 320px viewport and measured every element:

```
viewport 320px   →   scrollWidth 320px   →   HORIZONTAL SCROLL: none
                     elements wider than the viewport: 0
```

**Zero.** That was the whole job, and you did it. Mobile-first with `min-width` breakpoints at 768 / 1024 / 1440, `min-width: 0` on `.card` (you remembered the flex-overflow fix), `1fr` base column. The structure is right.

## ⚠️ But you only checked one width

| Viewport | Result |
| --- | --- |
| 320px | ✅ clean |
| 480px | ✅ clean |
| **768px** | ❌ **overflows by 4px** |
| 1200px | ✅ clean |

You ticked *"no sideways scroll at any width"*. At 768px it is false — by four pixels, which is exactly the kind of thing that never gets noticed until a client does.

### The cause, precisely

Two rules fire at the same breakpoint and fight:

```css
@media (min-width: 768px) {
  .page       { grid-template-columns: 180px 1fr; }        /* sidebar appears */
  .video-grid { grid-template-columns: repeat(2, minmax(280px, 1fr)); }
}
```

At exactly 768px: **180px sidebar + gap + two columns with a hard 280px floor** does not fit in 768px. `minmax(280px, 1fr)` means *"never below 280"* — so instead of shrinking, it overflows. The sidebar arrives before there is room for it.

**And you already know the fix — you used it the next day:**

```css
grid-template-columns: repeat(2, minmax(min(280px, 100%), 1fr));
```

That is the `min(280px, 100%)` from [Day 2](../day-2/), which you applied perfectly there. Same bug, same fix, one day apart. Alternatively move the sidebar breakpoint to 900px, where there is genuinely room for it.

**The lesson is the process, not the CSS:** you tested the width you were told to test. Real testing means dragging the edge slowly through *every* width, watching for the moment it breaks. Your own answer to Q5 describes exactly how to do this — you just did not do it.

---

## 🤖 The declaration

> *"i solved with the help of ai learned every step, element and attribute from it one by one"*

282 lines of CSS carrying long explanatory comments in fluent English, and five answers in the same register. As on [Day 5](../../week-02/day-5/ASSESSMENT.md), **Understanding is where this costs you** — 1.25 of 3 — because the answers are not in your voice, so there is nothing of yours to mark.

Your Q4 is the exception and it is a good one: *"fixed widths, large images and long unbreakable text"* — short, blunt, correct, and exactly the three things I would have said. **That is the register I want the other four answers in.**

## ✅ Credit where it is due

- `min-width: 0` on the card, unprompted — that is the Week 2 Day 5 flex-overflow bug, remembered
- Mobile-first `min-width` throughout, not a single `max-width` — you understood the direction
- **Standing rules S1, S2, S4, S5 all clean.** Viewport tag, charset, lang, closing tag, box-sizing, alts. Two weeks ago I was chasing you for these every day; now they are just there.

## 🔧 Still open

- **S3** — no `:focus-visible` anywhere in 282 lines. −0.5.

## ▶️ Fixes — 15 minutes

1. `minmax(min(280px, 100%), 1fr)` in the 768px block, then re-test at 760, 768, 780
2. `:focus-visible` on links and buttons
3. **Drag the browser edge from 1440 to 320 slowly** and watch. Every time. It takes ten seconds.

---

**The one sentence:** *You solved the hard width and missed the easy one, because you tested the number in the brief instead of the whole range — and the fix is a technique you had already mastered by the following morning.*

---

## 🔄 Fix pass — 12 Aug 15:19 (`82b4bcd`) · **stays 6.0** — read this one carefully

**The 768px overflow is gone.** I re-tested at 320, 480, 768, 900 and 1200: no horizontal scroll anywhere.

**But it is gone because the two-column layout is gone.**

```css
grid-template-columns: repeat(2, minmax(min(280px, 100%) 1fr));
                                                          ↑ missing comma
```

`minmax()` takes **two comma-separated** arguments. I handed both versions to the browser's own CSS parser:

```js
el.style.gridTemplateColumns = 'repeat(2, minmax(min(280px, 100%) 1fr))'   // yours
→ ""                                    ← REJECTED, declaration discarded

el.style.gridTemplateColumns = 'repeat(2, minmax(min(280px, 100%), 1fr))'  // correct
→ "repeat(2, minmax(min(280px, 100%), 1fr))"
```

So the whole declaration is thrown away, the 768px block does nothing, and `.video-grid` falls back to the base `1fr`. Measured at 800px wide:

```
grid-template-columns:  588px      ← ONE column
cards per row:          1          ← you intended 2
```

**Between 768px and 1023px your video grid is now a single column.** Above 1024px the other breakpoint still works, so it looks fine on your laptop. On a tablet it is broken, and nothing warns you.

### This is the lesson, and it is bigger than the comma

**The symptom disappeared because the feature disappeared.** You checked "is there still a scrollbar?", saw no, and stopped. But the goal was never *"no scrollbar"* — it was *"two columns that fit"*. A deleted layout has no scrollbar either.

**When you fix something, verify the thing you wanted, not the absence of the thing you did not want.** At 800px the check was: *do I see two cards side by side?*

And it is the fifth silent-invalid-CSS incident ([S9](../../../STANDING-RULES.md)): `margin: 20px opx`, `outline: 0.2rem`, `border-radius: 0.5`, `opacity: 200ms ease-out`, now this. **All five would have shown a strike-through in DevTools → Styles.** Sixty seconds, every commit.

**Fix:** add the comma. Then load it at 800px and count the cards.
