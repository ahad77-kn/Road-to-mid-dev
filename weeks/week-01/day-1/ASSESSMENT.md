# 🧾 Assessment — Week 01 · Day 1

**Assignment:** Recreate a business card in HTML/CSS — exact spacing, borders, colours.
**Folder:** `weeks/week-01/day-1/`
**Submitted:** 2026-07-22 — ☑ on time
**Reviewed by:** Adil on 2026-07-27

---

## How it was solved

☑ **Self (docs + search)**
☐ Self + AI used only to explain a concept
☐ AI-assisted, declared
☐ AI-generated, declared
☐ AI-generated, **undeclared**

**Student's declaration in `LEARNED.md`:** the file predates the AI-declaration rule — no declaration given. From now on the line is mandatory.
**Matches the evidence?** ☑ yes — the code reads as genuine first-week work: tag selectors, a `position: relative; top: -30px` nudge to fix a gap, `margin-top: auto` used where it does nothing. AI-written CSS does not contain these mistakes. Accepted as self-written.

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met — card renders, all details present, separate CSS file | 3 | **2.5** |
| 2 | Code quality — naming, structure | 2 | **0.5** |
| 3 | Understanding — knows what he wrote, but not *why* the gap appeared | 3 | **1.5** |
| 4 | Process — folder, LEARNED.md, same-day push | 2 | **1.5** |
| | **TOTAL** | **10** | **6 / 10** |

## 🏁 Verdict: ☑ PASS

Solid first day. It renders, the HTML and CSS are separated, and the `LEARNED.md` is honest. The marks lost are all in *how* it is written, not *whether* it works — which is exactly right for day 1.

---

## ✅ What was good

- HTML and CSS are in separate files with a proper `<link>` — many beginners never leave `<style>` blocks
- `.card` is a real container with width, margin, padding, border and radius — the box model is being used, not fought
- `margin: 100px auto` to centre the card is correct and deliberate
- `LEARNED.md` is honest, including "I wanted to make the card look more beautiful but I did what I can" — that is the right attitude, keep it

---

## ❌ What to fix

1. **Styling by tag, not by class.** `p { }`, `h1 { }`, `h3 { }` style *every* paragraph and heading on the page. The moment there is a second card, everything breaks. Use `.card__name`, `.card__role`, `.card__contact`.
2. **`position: relative; top: -30px` is a workaround, not a fix.** The gap it hides is a **collapsed margin** (`p { margin-top: 100px }` fighting the heading's margin). Fixing the margin removes the need for `position` entirely. This is Day 3's exact assignment — bug #2 on that list is *your* bug.
3. **`margin-top: auto` on `h1`/`h3` does nothing.** `auto` only resolves to a real value in flex/grid contexts or horizontally with a set width. Remove it — code that does nothing is worse than no code, because next year you will be afraid to delete it.
4. **Uppercase `<P>` and `<b>` for labels.** Tags are lowercase by convention. `<b>` is visual; use `<strong>` if it is important, or better, a `<dl>`/`<span class="label">`.
5. **`<br><br>` for spacing.** Spacing is CSS's job — use `margin` on a block element instead.
6. **Fixed `800px × 450px`.** On a phone this overflows the screen. Not a Week-1 requirement, but note it — Week 3 will make you fix it.
7. **Magic numbers everywhere** — `50px`, `30px`, `100px`, `20px`, `15px`, `10px`. Pick a scale (4/8/16/24/32) and stick to it. Day 2 requires this.

---

## 📌 Next time

**One habit only: name your classes before you write any CSS.** Write the HTML with `class="card__name"` etc. first, then style only through those classes. Do not open the CSS file until every element you plan to style has a class.

**Redo due by:** not required — carry the fixes into Day 3, where this file gets repaired properly.
