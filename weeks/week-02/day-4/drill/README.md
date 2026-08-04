# 🐛 Debug drill — Week 02 Day 4 · 45 minutes

[← back to the day](../) · [🛠️ assignment](../assignment/) · [📌 standing rules](../../../../STANDING-RULES.md)

## The situation

You have been handed `broken.html` and `broken.css` by a teammate. **They do not work.**

> The tiles are scattered with huge holes between them, they are a fixed size instead of responsive, and every photo is visibly squashed — the circles in the images render as ovals, which is your clue.

There are **6 planted bugs**. Some are about Grid spans and images; at least one is a
[standing rule](../../../../STANDING-RULES.md) that has been broken.

## The rules of this drill

1. **Do not rewrite the files.** Fix them in place, one bug at a time.
2. **Do not ask AI to find the bugs.** Asking it to explain a property you do not
   recognise is fine and expected — say so in `FIXES.md`. Pasting the file in and
   asking "what is wrong with this" is **0 for the drill**, and it is obvious when
   it happens, because your `FIXES.md` explains bugs in language you do not use.
3. **Every fix needs a cause, not just a change.** "Changed X to Y" earns nothing.
   *Why* was it broken?

💡 **Hint:** One is a **single missing character** that kills a whole declaration — and once it is dead, the browser invents its own columns out of the `span` values, which is why the holes appear. One is two properties fighting over the same thing, where the loser is the one you actually wanted. And an oval that should be a circle always means the same thing.

## 📦 Hand in

| File | What it is |
| --- | --- |
| `broken.html` / `broken.css` | the same files, now working |
| `FIXES.md` | one entry per bug — use the table below |

## FIXES.md format

Copy this and fill one block per bug:

```markdown
### Bug 1 — <one-line name>
- **File / line:** broken.css:42
- **Symptom:** what you saw on screen
- **Cause:** why the browser did that
- **Fix:** what you changed
- **How I found it:** DevTools / reading / trial and error
```

That last line is not padding — **I mark it.** "Found it in DevTools, the rule had a
strike-through" is worth more than "I read the file carefully", because one of those
scales to a 40,000-line codebase and the other does not.

## 📊 Marked out of 5

| | Max |
| --- | --- |
| Bugs found and fixed (6 × 0.4) | 2.4 |
| Causes correctly explained | 1.6 |
| "How I found it" shows a real method | 0.5 |
| Nothing else broken in the process | 0.5 |

**A bug you fixed but cannot explain scores half.** A bug you "fixed" by deleting the
feature scores zero.

---

[← back to the day](../) · [🛠️ assignment](../assignment/)
