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

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | npm from zero — packages, scripts, versions | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | DevTools: Elements & Console mastery | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | Breakpoints — the Sources panel | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | **Bug hunt** — the teacher breaks your old projects | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | Prettier, ESLint & a proper project README | [📄 open →](day-5/) | – |
| — | **Phase 3 exam** (practical) | [📄 exam →](exam/) | – |

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
