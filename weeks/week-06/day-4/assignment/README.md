# 🛠️ Assignment — Week 06 Day 4 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 06](../../README.md)

## What to build

Make it actually calculate.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `script.js` | all the JavaScript |

## ✅ Done when — this is the checklist you are marked against

- [ ] `+ − × ÷` all work, including chained operations (`5 + 3 × 2 =`) — decide and document whether you do left-to-right or operator precedence
- [ ] Divide by zero shows a clear message, does not print `Infinity`
- [ ] `%` and `+/−` (sign toggle) work
- [ ] Keyboard support: digits, operators, Enter for `=`, Escape for clear, Backspace to delete a digit
- [ ] Results longer than the display are truncated or formatted sensibly — no overflow
- [ ] Floating point handled: `0.1 + 0.2` must not display `0.30000000000000004`. Explain the fix in a comment.
- [ ] The arithmetic lives in pure functions with **no DOM code inside them** — the UI calls them

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Why does `0.1 + 0.2 !== 0.3` in JavaScript? How did you handle it?
2. How do you listen for keyboard input, and what is on the `event` object for a key press?
3. Why keep the calculation functions free of DOM code? What does that buy you?
4. What is your app's state — list every variable it needs to remember?
5. **Prove it:** press `5 + 3 × 2 =` and explain, before the result appears, what you will get and why.

---

[← back to the day](../) · [📖 read first](../learn/)
