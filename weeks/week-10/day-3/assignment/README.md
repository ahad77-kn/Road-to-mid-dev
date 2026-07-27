# 🛠️ Assignment — Week 10 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 10](../../README.md)

## What to build

Deliberately create trouble in `day-3/` and fix it. Document every recovery in `recovery.md`.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `recovery.md` | every conflict and every undo, with when to use each |

## ✅ Done when — this is the checklist you are marked against

- [ ] **Create a real merge conflict** on purpose (same lines edited on two branches), resolve it by hand, explain what the `<<<<<<< ======= >>>>>>>` markers mean
- [ ] Create a second conflict and resolve it the **other** way to prove you understand both sides
- [ ] `git rebase` a feature branch onto an updated `main`; compare the resulting graph with a merge
- [ ] `git stash`, `git stash pop`, `git stash list` — used in a realistic "I need to switch branches mid-work" scenario
- [ ] Undo drills, each in `recovery.md` with when to use it:
- [ ] `.gitignore` written properly for a Node project

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. When is rebase the wrong choice? (The golden rule — say it.)
2. `revert` vs `reset` — which is safe on a pushed branch, and why?
3. `--soft` vs `--mixed` vs `--hard` — where do your changes end up in each case?
4. You did `reset --hard` and lost 2 hours of commits. What do you do?
5. **Prove it:** I create a conflict in your repo; you resolve it in under 3 minutes, explaining each marker.

---

[← back to the day](../) · [📖 read first](../learn/)
