# 🧰 Environment test 01 — Terminal, files & Git

[← the env track](../) · [⬆ Week 02](../../weeks/week-02/) · Take this on **Day 5**

**Closed book. No terminal, no browser, no AI, no notes. 30 minutes.**

Write your answers in `ANSWERS.md` in this folder, then self-mark at the bottom.

> ⚠️ **Do not run the commands to find the answers.** The whole point is what you know
> without the machine in front of you. If you genuinely do not know one, write
> **"don't know"** — that is worth more than a guess dressed up as an answer, and it tells
> me exactly what to teach next.

---

## Section A — paths and the terminal (3 marks)

**A1.** You are in `Road-to-mid-dev/weeks/week-02/day-2/assignment/`.
Write the single command that moves you to `Road-to-mid-dev/weeks/week-01/`.

**A2.** What is the difference between a path starting with `/`, one starting with `./`,
and one starting with `~/`?

**A3.** What does `ls -la` show you that plain `ls` does not? Name **two** things.

## Section B — what Git actually is (4 marks)

**B1.** Explain the difference between the **working directory**, the **staging area**,
and a **commit**. Three sentences, one each.

**B2.** You run `git add .` and then change a file again *before* committing.
Which version ends up in the commit — the one you added, or the newer one? Why?

**B3.** What does a commit actually contain? Pick all that apply and say why:
a snapshot of every tracked file · only the lines you changed · the author · the date ·
your username and password · a pointer to the previous commit

**B4.** You run `git status` and see:
```
Changes not staged for commit:
        modified:   weeks/week-02/day-2/assignment/style.css

Untracked files:
        weeks/week-02/day-2/assignment/images/
```
Explain the difference between those two sections, in your own words.

## Section C — reading and fixing (2 marks)

**C1.** Your `git push` is rejected with:
```
! [rejected]  main -> main (fetch first)
hint: Updates were rejected because the remote contains work that you do not have locally.
```
What has happened, and what do you do next? **This has already happened to you once** —
on 30 July, when we were both pushing to this repo at the same time.

**C2.** You committed a 1.2 MB image by mistake and pushed it. You then delete the file
and commit again. **Is the 1.2 MB gone from the repository?** Explain your answer.

## Section D — defend a decision (1 mark)

**D1.** Some people commit once a day with a message like *"work"*. Others commit ten
times a day with specific messages. Pick the side you think is right, argue it in one
sentence — then give the strongest argument **for the other side**.

---

## ✍️ Your self-mark

| Section | Max | Mine |
| --- | --- | --- |
| A — paths & terminal | 3 | |
| B — what Git is | 4 | |
| C — reading & fixing | 2 | |
| D — defend | 1 | |
| **Total** | **10** | |

**How many did you write "don't know" for?** ____ — write the number honestly. It is not
scored, and it is the most useful line on this page for both of us.

---

[← the env track](../)
