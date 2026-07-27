# 🛠️ Assignment — Week 07 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 07](../../README.md)

## What to build

A working quiz with questions from an array of objects.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `script.js` | all the JavaScript |

## ✅ Done when — this is the checklist you are marked against

- [ ] At least 10 questions in an array: `{ id, question, options: [], correctIndex, explanation }`
- [ ] One question on screen at a time, with a progress indicator ("Question 3 of 10")
- [ ] Selecting an answer highlights it; you can change it before confirming
- [ ] Next/Previous navigation with answers remembered
- [ ] A 20-second-per-question timer that auto-advances when it runs out
- [ ] Final score screen: score, percentage, which ones you got wrong, and the explanation for each
- [ ] "Try again" resets everything cleanly, including the timer
- [ ] Questions shuffled on each run (write your own shuffle, then read about Fisher–Yates)

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Where is the user's state — how do you remember answers across navigation?
2. How do `setTimeout` and `setInterval` differ? What does `clearInterval` prevent, and what bug appears if you forget it?
3. Why must you clear the timer when the user clicks Next early?
4. How would you add a "review your answers" screen without restructuring everything?
5. **Prove it:** rapidly click Next 5 times. Does the timer break? Does the score break? Show me.

---

[← back to the day](../) · [📖 read first](../learn/)
