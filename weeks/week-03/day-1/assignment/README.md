# 🛠️ Assignment — Week 03 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 03](../../README.md)

## What to build

Take the YouTube skeleton and news header from Week 2 into `day-1/` and make them genuinely responsive.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |

## ✅ Done when — this is the checklist you are marked against

- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">` — and you can explain what each part does
- [ ] **Mobile-first CSS**: base styles are the phone layout, `min-width` media queries add the desktop layout. Not the reverse.
- [ ] Sidebar collapses to icons or disappears below 768px
- [ ] Nav collapses to a simple stacked menu (CSS only — no JS yet; a `<details>`/`<summary>` is a legitimate trick)
- [ ] Breakpoints chosen because *your content* breaks there, not copied from Bootstrap — justify each one in a comment
- [ ] **No horizontal scrollbar at 320px.** Test it. This is a hard fail if it scrolls sideways.
- [ ] Tested at 320, 375, 768, 1024, 1440px in DevTools device mode

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What exactly does the viewport meta tag do? What does a phone do without it?
2. Why is mobile-first (`min-width`) preferred over desktop-first (`max-width`)?
3. How do you choose a breakpoint properly?
4. Name three things that commonly cause horizontal overflow on mobile.
5. **Prove it:** open DevTools at 320px width. If anything scrolls sideways, find the offending element using the "find the widest element" trick and fix it live.

---

[← back to the day](../) · [📖 read first](../learn/)
