# 🛠️ Assignment — Week 11 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 11](../../README.md)

## What to build

In `day-1/`, build a small Node project from scratch and take it apart.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `package.json` | edited by hand, every field understood |
| `index.js` | uses dayjs |
| `npm-notes.md` | deps vs devDeps, semver table, why the lockfile is committed |

## ✅ Done when — this is the checklist you are marked against

- [ ] `npm init -y`, then edit `package.json` by hand — every field explained in `day-1/npm-notes.md`
- [ ] Install one runtime dependency (`dayjs`) and one dev dependency (`prettier`) — explain the difference
- [ ] Look inside `node_modules` — count the folders, then explain why installing 2 packages produced hundreds
- [ ] Explain `^1.2.3` vs `~1.2.3` vs `1.2.3` with a table of what each will and will not upgrade to
- [ ] `package-lock.json`: what it is, why it is committed, what breaks without it
- [ ] Write 3 npm scripts (`start`, `format`, `dev`) and run them
- [ ] Run `npm audit` and record what it says
- [ ] A small script that actually uses `dayjs` to format 5 dates

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. `dependencies` vs `devDependencies` — what actually happens differently?
2. What does the caret in `^4.17.1` allow? What could break?
3. Why commit `package-lock.json` but never `node_modules`?
4. What is `npx` and how is it different from `npm`?
5. **Prove it:** delete `node_modules`, run `npm ci`, and explain how it differs from `npm install`.

---

[← back to the day](../) · [📖 read first](../learn/)
