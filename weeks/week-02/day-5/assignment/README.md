# 🛠️ Assignment — Week 02 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 02](../../README.md)

## What to build

The YouTube home page skeleton with dummy grey boxes — no real content needed. Top bar (logo, search, avatar), left sidebar (nav items with icons), main area (a responsive grid of video cards; each card = thumbnail, avatar, title, channel, views).

**This is the week's real test:** page skeleton in **Grid**, individual components in **Flexbox**. Making that choice correctly is the skill.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `index.html` | the page markup |
| `style.css` | all the styling — no inline styles, no `<style>` block |
| `decisions.md` | for each region: Grid because… / Flex because… |

## ✅ Done when — this is the checklist you are marked against

- [ ] Page skeleton in Grid (`grid-template-areas`)
- [ ] Top bar and video-card internals in Flexbox
- [ ] `day-5/decisions.md`: for each of the 4 main regions, one line — "Grid because…" / "Flex because…"
- [ ] Video grid uses `repeat(auto-fill, minmax(280px, 1fr))` — no media queries yet
- [ ] Sidebar scrolls independently of the main area (`overflow-y: auto` + fixed height)
- [ ] At least 12 video cards

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Give one layout that is genuinely easier in Flexbox, and one genuinely easier in Grid. Say why.
2. What does `repeat(auto-fill, minmax(280px, 1fr))` do as the screen widens? Difference from `auto-fit`?
3. Can an element be both a grid item and a flex container? What does that mean in practice?
4. How does `overflow: auto` interact with a grid track's height?
5. **Prove it:** resize the browser from 1400px to 700px and narrate what the grid is doing at each break.

---

[← back to the day](../) · [📖 read first](../learn/)
