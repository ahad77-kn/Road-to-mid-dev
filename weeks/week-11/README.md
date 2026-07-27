# Week 11 — npm, DevTools & Debugging → Phase 3 Exam

[← The Road](../../README.md) · Phase 3 · Professional Tooling · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 10](../week-10/) · **Next:** [Week 12 — React basics →](../week-12/)

> **Goal:** stop debugging with `console.log` and guesswork. Find any bug with breakpoints, and understand what `npm install` actually did to your folder.

**Why this week matters:** debugging is the skill you use most and are taught least. Juniors add `console.log` everywhere and refresh; mid-level developers set a conditional breakpoint and read the call stack. That difference is visible in an interview within five minutes. And from next week React arrives with a build tool — you should understand `node_modules` before it appears.

---

## 📖 Learning material — 1 hr/day

| Day | Read | Source |
| --- | --- | --- |
| D1 | [npm: About npm](https://docs.npmjs.com/about-npm) · [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json) · [Semantic versioning](https://semver.org/) | npm / semver |
| D2 | [Chrome DevTools: Elements](https://developer.chrome.com/docs/devtools/dom) · [CSS features reference](https://developer.chrome.com/docs/devtools/css) | Chrome |
| D3 | [Chrome DevTools: JavaScript debugging](https://developer.chrome.com/docs/devtools/javascript) · [Breakpoints guide](https://developer.chrome.com/docs/devtools/javascript/breakpoints) | Chrome |
| D4 | [Chrome DevTools: Network](https://developer.chrome.com/docs/devtools/network) · [Performance insights](https://developer.chrome.com/docs/devtools/performance) | Chrome |
| D5 | [Prettier](https://prettier.io/docs/en/index.html) · [ESLint: getting started](https://eslint.org/docs/latest/use/getting-started) | Prettier / ESLint |

### 📰 Articles worth your time this week
- [MDN: What went wrong? Troubleshooting JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong) — read every error type
- [Chrome: Console utilities reference](https://developer.chrome.com/docs/devtools/console/utilities) — `$0`, `$$()`, `monitorEvents()`, `console.table`
- [npm: `package-lock.json` explained](https://docs.npmjs.com/cli/configuring-npm/package-lock-json) — commit it, always
- [The rubber duck debugging method](https://rubberduckdebugging.com/) — genuinely works, not a joke

---

## 🗓️ The week at a glance

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | npm from zero — packages, scripts, versions | [`day-1/`](day-1/) | – |
| D2 | DevTools: Elements & Console mastery | [`day-2/`](day-2/) | – |
| D3 | Breakpoints — the Sources panel | [`day-3/`](day-3/) | – |
| D4 | **Bug hunt** — the teacher breaks your old projects | [`day-4/`](day-4/) | – |
| D5 | Prettier, ESLint & a proper project README | [`day-5/`](day-5/) | – |
| — | **Phase 3 exam** (practical) | [`exam/`](exam/) | – |

---

## Day 1 — npm

**Read first (1 hr):** npm docs — *About npm*, *package.json*, and semver.

**Build (2 hr):** In `day-1/`, build a small Node project from scratch and take it apart.

**Must have**
- [ ] `npm init -y`, then edit `package.json` by hand — every field explained in `day-1/npm-notes.md`
- [ ] Install one runtime dependency (`dayjs`) and one dev dependency (`prettier`) — explain the difference
- [ ] Look inside `node_modules` — count the folders, then explain why installing 2 packages produced hundreds
- [ ] Explain `^1.2.3` vs `~1.2.3` vs `1.2.3` with a table of what each will and will not upgrade to
- [ ] `package-lock.json`: what it is, why it is committed, what breaks without it
- [ ] Write 3 npm scripts (`start`, `format`, `dev`) and run them
- [ ] Run `npm audit` and record what it says
- [ ] A small script that actually uses `dayjs` to format 5 dates

**🧪 Test material**
1. `dependencies` vs `devDependencies` — what actually happens differently?
2. What does the caret in `^4.17.1` allow? What could break?
3. Why commit `package-lock.json` but never `node_modules`?
4. What is `npx` and how is it different from `npm`?
5. **Prove it:** delete `node_modules`, run `npm ci`, and explain how it differs from `npm install`.

---

## Day 2 — Elements & Console

**Read first (1 hr):** Chrome DevTools *Elements* + *CSS features*.

**Build (2 hr):** Take a **live production site** (any big Pakistani or international site) and investigate it. Write `day-2/devtools-report.md`.

**Must have**
- [ ] Find an element whose colour comes from an inherited rule — show the chain in the Computed tab
- [ ] Use `:hov` to force `:hover` and `:focus` states, screenshot a state you could not otherwise catch
- [ ] Find the CSS custom properties the site defines in `:root` and list 5
- [ ] Use the Layout panel to overlay their grid or flexbox and screenshot it
- [ ] Console utilities used and explained: `$0`, `$$('a')`, `console.table`, `console.group`, `copy()`, `monitorEvents($0)`
- [ ] Find one accessibility issue with the Accessibility pane and write how you would fix it
- [ ] Use the Coverage tool to find unused CSS on the page — record the percentage

**🧪 Test material**
1. What is `$0` in the console?
2. Computed tab vs Styles tab — when is each the one you want?
3. How do you inspect an element that disappears the moment you move the mouse?
4. What does `console.table` do that `console.log` does not?
5. **Prove it:** on a site you have never seen, find why a specific button is the colour it is, in under 60 seconds.

---

## Day 3 — Breakpoints

**Read first (1 hr):** Chrome *JavaScript debugging* + *Breakpoints*.

**Build (2 hr):** Debug your own Week 7 quiz app **without adding a single `console.log`**.

**Must have**
- [ ] A line-of-code breakpoint set, hit, and stepped through — screenshot the paused state with the Scope panel visible
- [ ] **Conditional breakpoint** (e.g. only when `questionIndex === 5`) — this is the one that changes your life
- [ ] A DOM change breakpoint (break when an element's attributes change)
- [ ] An event listener breakpoint (break on any click)
- [ ] Step over / step into / step out used and explained — the difference in your own words
- [ ] The Call Stack read and explained for one paused moment: what called what
- [ ] Watch expressions used to track a variable through a loop
- [ ] `day-3/debugging.md`: one real bug you found or created, and the exact steps you took to locate it

**🧪 Test material**
1. Step over vs step into — when is each right?
2. What does the Call Stack tell you that a `console.log` cannot?
3. When is a conditional breakpoint better than 50 log lines?
4. How do you pause on the exact moment an element's class changes?
5. **Prove it:** I plant a bug in your code; you find it with breakpoints in under 10 minutes, narrating as you go.

---

## Day 4 — Bug hunt

**Read first (1 hr):** Chrome *Network* panel + MDN *Troubleshooting JavaScript*.

**Build (2 hr):** The teacher takes three of your finished projects and plants **3 bugs in each** (9 total) across different categories: a logic bug, a CSS bug, an async/timing bug, an event bug, a data-shape bug.

**Rules:** you get the broken repo and the symptom description only, never the diff. Use DevTools. `git diff` against your own history is **not** allowed — that would defeat the point.

**Must have**
- [ ] All 9 bugs found and fixed
- [ ] `day-4/bug-report.md`, one entry each: **symptom → how I narrowed it down → root cause → fix → how I would have prevented it**
- [ ] Time recorded per bug
- [ ] Each fix on its own branch with its own PR
- [ ] At least one bug found in the Network panel (a request that never fires, or fires with the wrong params)

**🧪 Test material**
1. Which bug took longest and why?
2. Describe your general process for a bug with no error message.
3. What is the difference between a symptom and a root cause? Give an example from today.
4. Which bug would a test have caught?
5. **Prove it:** live, with me watching, find bug #10 that I plant right now.

---

## Day 5 — Tooling & polish

**Read first (1 hr):** Prettier docs + ESLint *Getting started*.

**Build (2 hr):** Set up the tooling a professional project has, on your best project.

**Must have**
- [ ] Prettier installed with a `.prettierrc`, and `npm run format` formatting the whole project
- [ ] ESLint installed and configured; fix **every** warning it reports (or disable a rule with a written justification)
- [ ] An `.editorconfig`
- [ ] Format-on-save enabled in your editor — screenshot the setting
- [ ] `npm run lint` and `npm run format` in `package.json` scripts
- [ ] The project README upgraded: badges, screenshot, feature list, setup steps, folder structure, a "known issues" section
- [ ] `day-5/tooling.md`: what ESLint caught that you did not know was wrong

**🧪 Test material**
1. Prettier vs ESLint — what does each one do? Where do they overlap?
2. What is a linter *rule*, and when is disabling one legitimate?
3. Why does a team need a shared formatter at all? (Hint: it is about diffs, not taste.)
4. What did ESLint find in your code that surprised you?
5. **Prove it:** deliberately write badly formatted, lint-breaking code. Show both tools catching it.

---

## 🎓 Phase 3 Exam — practical

The teacher gives you a **repo you have never seen**, containing a bug and a feature request written as an issue.

You must:
1. Clone it and get it running from the README alone
2. Reproduce the bug and find it with DevTools
3. Fix it on a branch, with a commit message explaining *why*
4. Implement the requested feature on a second branch
5. Open two PRs with clear descriptions
6. Respond to the teacher's review comments

**Passing (7/10):** clean history, working code, readable PRs, and you can explain the codebase you had never seen before this morning.

```bash
mkdir -p weeks/week-11/exam && cp _template/EXAM.md weeks/week-11/exam/EXAM.md
```

**Pass → Phase 4 unlocked.**

---

## ✅ End-of-week check

- [ ] You reach for a breakpoint before a `console.log`
- [ ] You can read a call stack and a Network waterfall
- [ ] `npm install` is no longer magic — you know what appeared and why
- [ ] Every project you touch gets Prettier and ESLint
- [ ] You can land in an unfamiliar codebase and be productive the same day

**Phase 3 done.** Now React — and everything you learned about `state → render` in Week 6 is about to be handed to you as a framework.
