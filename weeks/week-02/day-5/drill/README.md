# 🐛 Debug drill — Week 02 Day 5 · 45 minutes

[← back to the day](../) · [🛠️ assignment](../assignment/) · [📌 standing rules](../../../../STANDING-RULES.md)

## The situation

You have been handed `broken.html` and `broken.css` by a teammate. **They do not work.**

> **The first card has lost its channel avatar entirely** — card 2 has a grey circle, card 1 does not — and its URL bursts out past the edge of the card. The ellipsis meant to cut the long title short never appears. Both video durations are stacked on top of each other in one spot. The sidebar links have no spacing. And there is dead space to the right of the two cards where a third would go.

There are **6 planted bugs**. Some are about Grid + Flexbox together; at least one is a
[standing rule](../../../../STANDING-RULES.md) that has been broken.

## The rules of this drill

1. **Do not rewrite the files.** Fix them in place, one bug at a time.
2. **Do not ask AI to find the bugs.** Asking it to explain a property you do not
   recognise is fine and expected — say so in `FIXES.md`. Pasting the file in and
   asking "what is wrong with this" is **0 for the drill**, and it is obvious when
   it happens, because your `FIXES.md` explains bugs in language you do not use.
3. **Every fix needs a cause, not just a change.** "Changed X to Y" earns nothing.
   *Why* was it broken?

💡 **Hint:** The overflow is the most important bug you will meet this month, it is in **every** real codebase, and the fix is **two words** in one place. Ask yourself: how narrow is a flex item *allowed* to get by default? The answer is not zero — it is 'as narrow as its longest unbreakable word', and that URL has no spaces in it.

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
