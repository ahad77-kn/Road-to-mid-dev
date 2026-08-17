# 🛠️ Assignment — Week 04 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 04](../../README.md)

## What to build

Five small programs in `day-1/`, one file each, each printing labelled output with `console.log`.

1. `bmi.js` — height and weight in variables, print BMI to 1 decimal place plus the category
2. `temperature.js` — convert 25°C to Fahrenheit and 98°F to Celsius
3. `shopping.js` — 3 item prices, print subtotal, 17% GST, and total, formatted to 2 decimals
4. `types.js` — declare one of each: string, number, boolean, `null`, `undefined`, and one object. `console.log(typeof x)` for each and write a comment explaining any result that surprised you
5. `swap.js` — swap two variables' values **without** a third variable, then again **with** one. Explain which you would use in real code and why

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `bmi.js` | BMI + category |
| `temperature.js` | C↔F conversion |
| `shopping.js` | subtotal, GST, total |
| `types.js` | one of every type + typeof |
| `swap.js` | swap with and without a third variable |
| `notes.md` | what surprised you about `typeof null` |

## ✅ Done when — this is the checklist you are marked against

- [x] `const` by default; `let` only where the value genuinely changes; **no `var` anywhere** — and you can say why
- [x] Descriptive names — `totalPrice`, not `t` or `x`
- [x] Template literals for all output, not `+` concatenation
- [x] `day-1/notes.md` answering: what surprised you about `typeof null`?

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Difference between `let`, `const` and `var` — in scope, and in reassignment?
2. What are the 7 primitive types in JavaScript?
3. What does `typeof null` return, and why is it wrong?
4. What is the difference between `null` and `undefined` — when would you deliberately use each?
5. **Prove it:** predict the output of `console.log("5" + 3, "5" - 3, 5 + null, "5" == 5, "5" === 5)` *before* running it. Then run it.

---

[← back to the day](../) · [📖 read first](../learn/)
