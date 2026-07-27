# 🛠️ Assignment — Week 15 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 15](../../README.md)

## What to build

In `day-1/`, ten small demos, each in its own component.

Effects that **are** correct:
1. Set `document.title` from state
2. Add a `window` resize listener (with cleanup) showing live width
3. `setInterval` clock (with cleanup)
4. Focus an input on mount
5. Sync a value to localStorage
6. A `keydown` listener for a keyboard shortcut (with cleanup)

Effects that are **wrong** — write the bad version, screenshot the problem, then fix without an effect:
7. An effect that computes a derived value into state (infinite loop or lag) → derive during render
8. An effect that resets state when a prop changes → use a `key` instead
9. An effect that handles a button click → put it in the handler
10. An effect with a missing dependency → show the stale closure bug, then fix it

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/components/` | the 10 drills, one component each |
| `effects.md` | your own rule for when an effect is warranted |

## ✅ Done when — this is the checklist you are marked against

- [ ] All 10, each with a comment: what it does, why it is (or is not) a legitimate effect
- [ ] Every effect that subscribes to something has a cleanup function
- [ ] `day-1/effects.md`: your own rule for when an effect is warranted
- [ ] A demonstration of Strict Mode double-invocation, with an explanation of why React does it

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is an effect *for*, in one sentence?
2. What does the cleanup function do, and when exactly does React call it?
3. `[]` vs `[dep]` vs no dependency array — what does each mean?
4. Why does your effect run twice in development? Is that a bug?
5. **Prove it:** I describe a scenario; you tell me whether it needs an effect. Five in a row.

---

[← back to the day](../) · [📖 read first](../learn/)
