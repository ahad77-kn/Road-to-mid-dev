# 🧾 Assessment — Week 01 · Day 5

**Assignment:** Style a full signup form with focus, error and disabled states — CSS only, no JavaScript.
**Folder:** `weeks/week-01/day-5/`
**Submitted:** 2026-07-30 14:34 (commit `739c759`) — ☑ on time (same day)
**Reviewed by:** Adil on 2026-07-30

---

## How it was solved

☑ **Self + AI used for explanation — declared**

**Your declaration:** *"ai used for explaining me the topic and for learning from it that how will i show red error message by css."*

**Matches the evidence?** ☑ yes — specific and believable. **No cap applied.**

*Small thing:* you deleted the `**AI used?** yes / no —` line from the template and wrote your own sentence. The content is fine, but keep the template line so the declaration is always in the same place and I can find it at a glance.

---

## Score

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **1.75** |
| 2 | Code quality | 2 | **1** |
| 3 | Understanding | 3 | **2** |
| 4 | Process | 2 | **1.5** |
| | **TOTAL** | **10** | **6.25 / 10** |

## 🏁 Verdict: ✅ PASS

---

## ✅ What you did well — three old habits are now dead

Look at what is **absent** from this file:

- **No `position` hacks.** Third day running.
- **No `white-space: nowrap` band-aid.** You used it three days in a row and then stopped.
- **No duplicate declarations.** First clean file in four days.
- **`box-sizing: border-box`** — correctly, deliberately, without being asked. This is the Day 2 concept you missed and the Day 3 concept you got backwards, now applied properly on your own initiative. **That is the single best thing in this submission.**
- **`rem` throughout.** The Day 4 lesson carried forward without a reminder.

That is five pieces of feedback from four days, all internalised. This is how the course is supposed to work.

Also good:
- **Real `<label for>` / `<input id>` pairs** on every field, and the checkbox label correctly placed *after* its input.
- **The error state is done properly** — `.error` red border on the field plus a separate `.error-message` paragraph underneath. Exactly what was asked.
- **The disabled state is done properly** — different background, `opacity`, and `cursor: not-allowed`.
- **`accent-color: skyblue`** — a modern property most tutorials have not caught up with. Nice.
- **`box-shadow` and `transition`** for depth and smoothness, unprompted.
- **All 5 questions answered, and 4½ are correct** — your best question performance yet.
- **You asked a genuinely sharp question.** More on that below, because it deserves a proper answer.

---

## 🔬 Two silent bugs — both the same lesson as Day 3's `opx`

### `outline: 0.2rem;` does nothing

```css
input:focus {
  outline: 0.2rem;   /* ← no outline appears */
}
```

The `outline` shorthand needs a **style**, not just a width. With no style given, `outline-style` falls back to `none` — so this line renders **no outline at all**. You have, by accident, written exactly the `outline: none` anti-pattern that the checklist warned you about.

```css
outline: 0.2rem solid #4169e1;    /* width + style + colour */
outline-offset: 0.15rem;          /* a small gap so it doesn't hug the border */
```

**You got away with it** because your `border-color: skyblue` and `box-shadow` *do* show focus — so the form is still usable by keyboard. That is luck, not design. Had you relied on the outline alone, your form would have been unusable without a mouse.

### `border-radius: 0.5;` does nothing

```css
button { border-radius: 0.5; }   /* ← no unit */
```

`0.5` is not a length. Only `0` may be unitless. So your button has **square corners** while every other element on the page is rounded. Look at it — you will see it now.

**Both of these are the Day 3 `opx` bug wearing a different hat.** Three times in three files:

| Day | Bug | Effect |
| --- | --- | --- |
| 3 | `margin: 20px opx` | margin silently dropped |
| 5 | `outline: 0.2rem` | outline silently dropped |
| 5 | `border-radius: 0.5` | radius silently dropped |

**Invalid CSS never errors. It disappears.** DevTools is the only thing that tells you: open Styles, and an invalid declaration shows struck through with a ⚠️. One scroll through that panel would have caught all three.

---

## 🔧 The corrections

### 1. You used `:focus`, not `:focus-visible` — the checklist named it specifically

```css
input:focus { … }          /* what you wrote */
input:focus-visible { … }  /* what was asked */
```

The difference — and your own Q2 answer is nearly there:

- **`:focus`** fires whenever an element has focus, **including when clicked with a mouse**. So a mouse user clicks your input and gets a focus ring they never needed.
- **`:focus-visible`** fires only when the browser judges the ring *useful* — keyboard Tab, yes; deliberate mouse click on a text field, also yes; mouse click on a button, no.

Use `:focus-visible` for the ring and you get accessibility for keyboard users without visual noise for mouse users. That is why it exists.

### 2. `:checked` styling is missing — you ticked it

There is no `:checked` selector anywhere in your CSS. `accent-color` recolours the native checkbox in *all* states; it is not a `:checked` style.

The brief wanted you to react to the checked state:

```css
input[type="checkbox"]:checked + label {
  color: #1a5e1a;
  font-weight: 700;
}
```

That is the point of the exercise — CSS can respond to form state with no JavaScript at all.

### 3. `id="confirm password"` — a space in an id is invalid HTML

```html
<label for="confirm password">
<input id="confirm password">
```

**HTML ids may not contain spaces.** Browsers are forgiving enough that it probably still works for you, but it is invalid, it will fail validation, and it breaks the moment you use that id in JavaScript or a CSS selector (`#confirm password` is read as *two* selectors).

Use `confirm-password`. Run the page through [validator.w3.org](https://validator.w3.org/#validate_by_input) — free, instant, and it catches exactly this.

### 4. The keyboard test cannot pass, and you spotted why yourself

You ticked *"you can complete the whole form with Tab and Enter only"* and your Q4 answer says *"we press tab for forwarding and enter button for submitting"*.

But your button is `<button disabled>`. **A disabled button cannot be activated, cannot be focused, and cannot be reached by Tab.** So the form can never be submitted — the test you ticked is impossible to perform.

You clearly sensed this, because you wrote it as your closing question. Which brings me to the best thing on this page:

---

## 💡 Your question — and the answer

> *"i have a question whe we disabled the create account button, instead we can use it."*

**This is the sharpest question you have asked so far.** You noticed that a permanently disabled submit button makes the form pointless. You are right, and there are two separate answers.

**Why today's brief asked for it:** `:disabled` is a *state you must be able to style*, and with no JavaScript the only way to see it is to hard-code the attribute. What you should have done is show **both** — one enabled button and one disabled — side by side, so you could style and compare each. The brief could have been clearer about that; that is on me.

**What happens in a real app:** JavaScript watches the fields and removes the attribute once the form is valid:
```js
button.disabled = !formIsValid;   // you build this in Week 7
```

**And the part worth knowing early:** many senior developers argue you should **never disable a submit button.** A disabled button gives the user no feedback about *why* they are blocked — it just sits there, dead. The better pattern is to leave it enabled, let the user press it, and then show clear errors on the fields that are wrong. Disabled buttons are a common accessibility complaint for exactly this reason.

So your instinct — *"instead we can use it"* — is the position a lot of professionals take. Hold onto it. We will build both versions in Week 7 and you can decide for yourself.

### 5. Small things

- **`<div class="checkbox"></div>`** — an empty div with a class that has no CSS rule. Dead markup, delete it.
- **`font-family: inter, …`** — you reference Inter, but this page never loads it (no `@import`, no `<link>`), so it silently falls back to Franklin Gothic. Either load the font or drop the name.
- **`font-family: monospace, serif, sans-serif`** on the `h1` — a fallback list of three *generic* families is meaningless; `monospace` always resolves, so the other two can never be reached. Also monospace clashes with your body font.
- **`<u>Sign</u> <u>Up</u> <u>Here</u>`** — three separate underline tags for three words. `<u>` is presentational; if you want an underlined heading, that is `h1 { text-decoration: underline; }`. Same for `<u>terms</u>` — those should be `<a>` links, since terms and conditions are a real page.
- **`width: 95%`** on inputs and button — arbitrary. With `box-sizing: border-box` already set, `width: 100%` does exactly what you want and leaves no stray 5% gap.
- **`transition: 0.3s`** transitions *every* property. It works, but naming them is cheaper and avoids surprises: `transition: border-color 0.2s, box-shadow 0.2s;`
- **`button:hover` only has a `transform`** — no colour change, and it sits on a permanently disabled button so you can never see it. Add a background change and enable a second button to test against.
- **NOTES "What I learned" — 2 of 3 bullets** filled. Third day this box has been short.

---

## 🎤 Your answers

| Q | Verdict |
| --- | --- |
| 1. `outline: none` | ✅ **Correct** — hides focus, hurts keyboard users, must be replaced with another clear indicator. |
| 2. `:focus` vs `:focus-visible` | ✅ **Right idea** — "focus-visible is usually for keyboard users". See correction 1 for the precise rule. |
| 3. The five pseudo-classes | ✅ **All five correct**, one line each, in your own words. |
| 4. Keyboard proof | ⚠️ Claimed, but impossible — the button is disabled. Good that you then questioned it. |
| 5. Placeholder vs label | ✅ **Correct** — *"the placeholder disappears when you type, the label remains."* That is the whole argument in one sentence. |

---

## ✅ Fix list — short today

- [ ] `outline: 0.2rem` → `outline: 0.2rem solid #4169e1` (+ `outline-offset`)
- [ ] `border-radius: 0.5` → `0.5rem`
- [ ] `:focus` → `:focus-visible`
- [ ] Add a real `:checked` rule
- [ ] `id="confirm password"` → `id="confirm-password"` (both places)
- [ ] Add a second, **enabled** button so `:hover` and the keyboard submit can actually be tested
- [ ] Delete the empty `<div class="checkbox">` and the unreachable `inter` / `serif, sans-serif` font names
- [ ] `width: 95%` → `100%`
- [ ] Third "What I learned" bullet

---

## 📌 Habit check

I have written *"read your own file before you commit"* three days in a row. Today the file was clean of duplicates for the first time — so it is landing.

**Now add one step to it:** after reading the file, **open DevTools → Styles and scroll for strike-throughs.** That single move catches `opx`, `outline: 0.2rem` and `border-radius: 0.5` — three bugs in two days that reading alone did not catch, because they *look* perfectly fine in the editor.

Editor: looks right. DevTools: tells the truth.

---

📄 **Week 1 is now complete — see [WEEK-REVIEW.md](../WEEK-REVIEW.md) for where you stand and what happens next.**
