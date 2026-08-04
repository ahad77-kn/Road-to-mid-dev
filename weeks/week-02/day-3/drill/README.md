# 🐛 Debug drill — Week 02 Day 3 · 45 minutes

[← back to the day](../) · [🛠️ assignment](../assignment/) · [📌 standing rules](../../../../STANDING-RULES.md)

## The situation

You have been handed `broken.html` and `broken.css` by a teammate. **They do not work.**

> Open it. **Every single element is stacked on top of every other one** in one pile — you can only see the footer, because it is painted last. This is what one bad character in a grid declaration does to a whole page.

There are **6 planted bugs**. Some are about CSS Grid; at least one is a
[standing rule](../../../../STANDING-RULES.md) that has been broken.

## The rules of this drill

1. **Do not rewrite the files.** Fix them in place, one bug at a time.
2. **Do not ask AI to find the bugs.** Asking it to explain a property you do not
   recognise is fine and expected — say so in `FIXES.md`. Pasting the file in and
   asking "what is wrong with this" is **0 for the drill**, and it is obvious when
   it happens, because your `FIXES.md` explains bugs in language you do not use.
3. **Every fix needs a cause, not just a change.** "Changed X to Y" earns nothing.
   *Why* was it broken?

💡 **Hint:** Fix them **in order** — this one peels like an onion. Bug 1 is hiding bugs 3, 4 and 5, and you will not see them until it is gone. Two of the six are **silently invalid CSS**: the browser throws the whole declaration away and says nothing. You will never find those by reading the file. DevTools → Styles, look for strike-throughs.

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
