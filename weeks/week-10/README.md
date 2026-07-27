# Week 10 — Git & GitHub, Properly

[← The Road](../../README.md) · Phase 3 · Professional Tooling · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 09](../week-09/) · **Next:** [Week 11 — npm & DevTools →](../week-11/)

> **Goal:** work the way a team works — branches, pull requests, code review, clean history. And turn nine weeks of work into a public portfolio.

**Why this week matters:** no mid-level developer works without Git, and no team merges straight to `main`. Everything you have built so far is a folder on your laptop; by Friday it is a set of public repositories with real READMEs and live URLs — the thing you actually send to an employer.

---

## 📖 Learning material — 1 hr/day

| Day | Read / do | Source |
| --- | --- | --- |
| D1 | [Pro Git ch. 1–2](https://git-scm.com/book/en/v2) — basics, staging, history | Pro Git |
| D2 | [Pro Git ch. 3](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) · [Learn Git Branching](https://learngitbranching.js.org/) — "Main" sequence | Pro Git / game |
| D3 | Learn Git Branching — "Remote" sequence · [Pro Git: Rewriting history](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) | game / Pro Git |
| D4 | [GitHub: About pull requests](https://docs.github.com/en/pull-requests) · [Reviewing changes in PRs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests) | GitHub |
| D5 | [GitHub Pages](https://docs.github.com/en/pages) · [Writing a good README](https://www.makeareadme.com/) | GitHub |

### 📰 Articles worth your time this week
- [Conventional Commits](https://www.conventionalcommits.org/) — the commit standard you will use from now on
- [Oh Shit, Git!?!](https://ohshitgit.com/) — the page every developer has bookmarked
- [Atlassian: Merging vs rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) — the clearest explanation there is
- [How to write a git commit message](https://cbea.ms/git-commit/) — old, still the best

**New rule from this week onward:** every assignment is committed with a proper message on a branch, and merged with a PR. This repo becomes your public work history.

---

## 🗓️ The week at a glance

| Day | Assignment | Open the assignment | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Git internals — commits, staging, history surgery | [📄 day-1 →](day-1/) | – |
| [**D2**](day-2/) | Branching & merging drills | [📄 day-2 →](day-2/) | – |
| [**D3**](day-3/) | Conflicts, rebase, stash, undo | [📄 day-3 →](day-3/) | – |
| [**D4**](day-4/) | Pull-request workflow with real review | [📄 day-4 →](day-4/) | – |
| [**D5**](day-5/) | Publish everything — repos, READMEs, GitHub Pages | [📄 day-5 →](day-5/) | – |

---

## Day 1 — What Git actually stores

📄 **[Open this day's assignment page →](day-1/)**




**Read first (1 hr):** Pro Git ch. 1–2.

**Build (2 hr):** In a **scratch repo** (`day-1/gitlab/`), do surgery and record every command in `day-1/log.md` with what it did and what you expected.

**Must have**
- [ ] 15 commits with proper messages, built up in stages
- [ ] `git add -p` used to stage **part** of a file — two separate commits from one edit
- [ ] `git diff`, `git diff --staged`, `git log --oneline --graph --all` — output pasted with explanations
- [ ] `git show <hash>` on an old commit
- [ ] Amend a commit message with `git commit --amend`, and note the danger of amending after pushing
- [ ] `git restore` a file to its last committed state, and `git restore --staged` to unstage — explain the difference
- [ ] `day-1/three-areas.md`: working directory / staging area / repository explained in your own words with a diagram

**🧪 Test material**
1. What are the three areas a file can be in, and what command moves it between each?
2. What does a commit actually contain — a diff, or a snapshot?
3. What does `git add -p` do and when is it worth it?
4. When is `--amend` safe and when is it dangerous?
5. **Prove it:** I describe a state ("staged changes in file A, unstaged in file B"); you produce it and show me with `git status`.

---

## Day 2 — Branching & merging

📄 **[Open this day's assignment page →](day-2/)**




**Read first (1 hr):** Pro Git ch. 3 + Learn Git Branching "Main" sequence.

**Build (2 hr):** Branch drills in `day-2/`, all recorded in `branching.md`.

**Must have**
- [ ] Complete the whole "Main" sequence of Learn Git Branching — screenshot the finished levels
- [ ] Create 3 feature branches from `main`, commit on each, merge all three back
- [ ] One **fast-forward** merge and one **three-way** merge — identify which was which and why
- [ ] A `git log --graph --all --oneline` showing a visible branch/merge structure, pasted in
- [ ] Delete merged branches; list branches before and after
- [ ] `git switch` / `git switch -c` used (not just `checkout`) — note what changed in modern Git
- [ ] `day-2/branching.md`: what a branch *is* (a pointer, not a copy) in your own words

**🧪 Test material**
1. What is a branch, physically, inside `.git`?
2. Fast-forward vs three-way merge — when does each happen?
3. What is `HEAD`? What is a detached HEAD, and how do you get out of one?
4. Why delete a branch after merging — and is the work lost?
5. **Prove it:** draw your `--graph` output on paper before running it. Then run it.

---

## Day 3 — Conflicts, rebase and undo

📄 **[Open this day's assignment page →](day-3/)**




**Read first (1 hr):** Learn Git Branching "Remote" sequence + Pro Git *Rewriting history*.

**Build (2 hr):** Deliberately create trouble in `day-3/` and fix it. Document every recovery in `recovery.md`.

**Must have**
- [ ] **Create a real merge conflict** on purpose (same lines edited on two branches), resolve it by hand, explain what the `<<<<<<< ======= >>>>>>>` markers mean
- [ ] Create a second conflict and resolve it the **other** way to prove you understand both sides
- [ ] `git rebase` a feature branch onto an updated `main`; compare the resulting graph with a merge
- [ ] `git stash`, `git stash pop`, `git stash list` — used in a realistic "I need to switch branches mid-work" scenario
- [ ] Undo drills, each in `recovery.md` with when to use it:
  - `git revert` a pushed commit
  - `git reset --soft` vs `--mixed` vs `--hard`
  - Recover a "lost" commit with `git reflog` ← the most valuable command on this page
- [ ] `.gitignore` written properly for a Node project

**🧪 Test material**
1. When is rebase the wrong choice? (The golden rule — say it.)
2. `revert` vs `reset` — which is safe on a pushed branch, and why?
3. `--soft` vs `--mixed` vs `--hard` — where do your changes end up in each case?
4. You did `reset --hard` and lost 2 hours of commits. What do you do?
5. **Prove it:** I create a conflict in your repo; you resolve it in under 3 minutes, explaining each marker.

---

## Day 4 — Pull requests & code review

📄 **[Open this day's assignment page →](day-4/)**




**Read first (1 hr):** GitHub *About pull requests* + *Reviewing changes*.

**Build (2 hr):** Take one earlier project and run it through a real team workflow.

**Must have**
- [ ] The project in its own GitHub repo, with `main` **protected** (Settings → Branches → require a PR before merging)
- [ ] Three separate feature branches, each with a focused change
- [ ] Three PRs opened, each with: a clear title, a description of *what and why*, and a screenshot or GIF if visual
- [ ] The teacher reviews and **requests changes on at least one** — you push follow-up commits to the same branch and reply to each comment
- [ ] One PR closed without merging, with an explanation of why
- [ ] Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `refactor:`)
- [ ] Squash-merge one PR and regular-merge another; compare the history and note the difference

**🧪 Test material**
1. Why do teams protect `main`? What does a PR give you that pushing directly does not?
2. What makes a PR easy to review? What makes one impossible?
3. How do you respond to review feedback you disagree with?
4. Squash merge vs merge commit vs rebase merge — what does the history look like in each?
5. **Prove it:** show me a PR where you were asked for changes and how you handled it.

---

## Day 5 — Publish everything

📄 **[Open this day's assignment page →](day-5/)**




**Read first (1 hr):** GitHub Pages docs + [makeareadme.com](https://www.makeareadme.com/).

**Build (2 hr):** Nine weeks of work becomes a public portfolio.

**Must have**
- [ ] Every substantial project from Weeks 1–9 in its **own** repo (at least 6 repos)
- [ ] Every repo has a real `README.md`: title, one-line description, screenshot/GIF, features list, tech used, how to run locally, live link
- [ ] The **4 best** deployed on GitHub Pages / Netlify with working links
- [ ] No secrets committed anywhere — audit each repo (`git log -p | grep -i "key\|password\|token"`) and note the result
- [ ] Your GitHub profile: real name, photo, bio, location, and pinned repos
- [ ] A profile README (`ahad77-kn/ahad77-kn` repo) introducing yourself and what you are learning
- [ ] `day-5/portfolio.md`: every repo, its live link, and one line on what it demonstrates

**🧪 Test material**
1. What does a hiring manager look at first in a repo? (README, then commit history — not the code.)
2. What does your commit history say about how you work?
3. Why is a screenshot in the README worth more than a paragraph?
4. What did you find in the secrets audit?
5. **Prove it:** send me one repo link. From it alone I must understand what it is, see it running, and run it locally in under 5 minutes.

---

## ✅ End-of-week check

- [ ] You branch by reflex; you have not committed to `main` directly all week
- [ ] Conflicts do not scare you
- [ ] You know `reflog` exists and what it saves you from
- [ ] Your commit messages would pass review on a real team
- [ ] You have a public GitHub profile you would put on a CV today

Next week: npm, DevTools, and finding bugs the teacher plants in your own code.
