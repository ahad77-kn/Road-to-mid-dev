# Week 00 — How Computers, the Internet & the Web Actually Work

[← The Road](../../README.md) · Phase 0 · Foundations · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Next:** [Week 01 — CSS fundamentals →](../week-01/)

> **Goal:** stop treating the computer and the browser as magic. By Friday you can draw, on paper, what happens between pressing Enter on a URL and seeing a page.

**Why this week matters:** every bug you will hit in the next 24 weeks lives in one of the boxes you draw this week — the file, the terminal, the request, the server, the response, or the render. Developers who skip this week spend three years guessing. It costs you five days now.

---

## 📖 Learning material — 1 hr/day

| Day | Read / watch | Source |
| --- | --- | --- |
| D1 | [How does the internet work](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work) · [What is a web server](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) | MDN |
| D2 | [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) · [HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) · [Status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) | MDN |
| D3 | [Command line crash course](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) · [Dealing with files](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) | MDN |
| D4 | [How browsers work](https://web.dev/articles/howbrowserswork) (skim the whole thing, read the "Rendering engine" part properly) | web.dev |
| D5 | [Pro Git ch. 1–2](https://git-scm.com/book/en/v2) · [GitHub: Hello World](https://docs.github.com/en/get-started/start-your-journey/hello-world) | git-scm / GitHub |

### 📰 Articles worth your time this week
- [What happens when you type google.com and press Enter](https://github.com/alex/what-happens-when) — long, famous, skim it; you will understand more of it every year
- [MDN: What is a URL](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [MDN: What is DNS](https://developer.mozilla.org/en-US/docs/Glossary/DNS)
- [Oh Shit, Git!?!](https://ohshitgit.com/) — bookmark it now, you will need it

---

## 🗓️ The week at a glance

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Draw the request/response journey | [`day-1/`](day-1/) | – |
| D2 | HTTP hunting in DevTools | [`day-2/`](day-2/) | – |
| D3 | Terminal drills — build a folder tree with no mouse | [`day-3/`](day-3/) | – |
| D4 | Take a page apart in DevTools | [`day-4/`](day-4/) | – |
| D5 | Git from zero — 10 commits, 1 branch, 1 revert | [`day-5/`](day-5/) | – |

---

## Day 1 — The journey of a request

**Read first (1 hr):** MDN *How does the internet work* + *What is a web server*.

**Build (2 hr):**
Create `day-1/journey.md`. In your own words, walk through what happens when you type `github.com` and press Enter — from your keyboard to pixels on screen. Cover, in order: browser cache → DNS lookup → IP address → TCP connection → HTTPS handshake (one sentence is enough) → HTTP request → server → response → browser renders.
Then draw the same thing by hand on paper, photograph it, and save it as `day-1/diagram.jpg`.

**Must have**
- [ ] `journey.md` with at least 8 numbered steps, your own words, no copy-paste
- [ ] Each step says *who* is doing it (browser / your ISP / DNS server / the web server)
- [ ] `diagram.jpg` — hand-drawn, readable
- [ ] Three terms defined in your own words: **client**, **server**, **IP address**

**🧪 Test material**
1. What is DNS, in one sentence, and what does it return?
2. Your friend's website loads for him and not for you. Name three different places in the journey that could be broken.
3. What is the difference between a URL and an IP address?
4. **Prove it:** run `ping google.com` and `nslookup google.com` in your terminal. Paste the output into `journey.md` and explain what each line means.

**Common mistakes:** writing "the internet sends the page" — *who* sends it? Be specific about which machine does each step.

---

## Day 2 — HTTP, seen with your own eyes

**Read first (1 hr):** MDN *Overview of HTTP*, *HTTP methods*, *Status codes*.

**Build (2 hr):**
Open Chrome DevTools → **Network** tab. Visit three different websites and study the traffic. Create `day-2/http-notes.md` documenting what you found.

**Must have**
- [ ] For each of 3 sites: the request **method**, **status code**, **content type**, and **size** of the main document
- [ ] A screenshot of one request's **headers** (request + response), saved in the folder
- [ ] Your own one-line explanation of these methods: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
- [ ] Your own one-line explanation of these codes: `200`, `301`, `304`, `400`, `401`, `403`, `404`, `500`
- [ ] Find and record one real `404` and one real `301` in the wild

**🧪 Test material**
1. What is the difference between `401` and `403`? Give a real-life example of each.
2. Why is `GET` not supposed to change anything on the server?
3. What does a request **header** carry that the URL does not?
4. **Prove it:** run `curl -I https://github.com` and explain three of the response headers you get back.

---

## Day 3 — The terminal, no mouse allowed

**Read first (1 hr):** MDN *Command line crash course* + *Dealing with files*.

**Build (2 hr):**
Using **only** the terminal (no Finder, no VS Code file explorer), build this tree inside `day-3/`:

```
practice/
├── notes/
│   ├── monday.txt      (contains 3 lines of text)
│   └── tuesday.txt
├── code/
│   └── hello.html      (a valid minimal HTML page)
└── archive/            (empty)
```

Then: copy `monday.txt` into `archive/`, rename it to `backup-monday.txt`, delete `tuesday.txt`, and print the whole tree.
Record **every command you used, in order**, into `day-3/commands.md` with a one-line explanation each.

**Must have**
- [ ] The tree exists exactly as specified
- [ ] `commands.md` lists every command with what it did
- [ ] You used at least: `pwd`, `ls -la`, `cd`, `mkdir -p`, `touch`, `cp`, `mv`, `rm`, `cat`
- [ ] You explain the difference between an **absolute** and a **relative** path, with an example of each from your own machine

**🧪 Test material**
1. What do `.`, `..`, `~` and `/` mean in a path?
2. What does the `-a` in `ls -la` show you, and why do those files start with a dot?
3. You are in `~/Desktop`. Write one command that goes to `~/Documents/code` without using the full path twice.
4. **Prove it:** navigate from your home folder to this repo's `day-3` folder in a single `cd` command.

**Common mistakes:** `rm -rf` is not undoable and there is no trash bin. Read the path twice before pressing Enter, every time, for the rest of your career.

---

## Day 4 — Take a real page apart

**Read first (1 hr):** web.dev *How browsers work* + [Chrome DevTools docs](https://developer.chrome.com/docs/devtools) (Elements + Console tabs).

**Build (2 hr):**
Pick any real Pakistani news site (Dawn, Geo) and, using DevTools only, produce `day-4/anatomy.md`:

**Must have**
- [ ] The page's structure sketched as an outline: header / nav / main / sidebar / footer, with the actual tag or class used for each
- [ ] 5 CSS properties you found in the Styles panel that you do not yet understand — listed, with the MDN link for each
- [ ] Live-edit the page in DevTools: change the logo text, hide one section, change the background colour. Screenshot the result. Explain in one line why this does **not** change the real website for anyone else.
- [ ] In the Console tab, run `document.title` and `document.querySelectorAll("a").length` — record what you got

**🧪 Test material**
1. What is the DOM, and how is it different from the HTML file the server sent?
2. Why does editing in DevTools disappear when you refresh?
3. What are the three things the browser needs before it can paint the page? (HTML, and…?)
4. **Prove it:** using the Elements panel, find one element whose colour comes from an inherited rule, not its own rule. Explain how you know.

---

## Day 5 — Git, properly, from zero

**Read first (1 hr):** Pro Git ch. 1–2 + GitHub *Hello World*.

**Build (2 hr):**
Inside `day-5/`, create a small project (3 files: `index.html`, `style.css`, `notes.md`). Then run a full Git workout on this repo:

**Must have**
- [ ] 10 commits, each small and each with a meaningful message (not "update", not "changes")
- [ ] One branch created, one change made on it, merged back into `main`
- [ ] One commit deliberately made wrong, then reverted with `git revert` — explain the difference between `revert` and `reset` in `day-5/git-log.md`
- [ ] `git log --oneline --graph --all` output pasted into `git-log.md`
- [ ] A `.gitignore` file that ignores `.DS_Store` and `node_modules/` — added at the repo root

**🧪 Test material**
1. What is the difference between the working directory, the staging area, and a commit?
2. What does `git add .` actually do — does it save anything permanently?
3. What is the difference between `git fetch` and `git pull`?
4. You committed a password by mistake and pushed it. Is deleting it in the next commit enough? Why not?
5. **Prove it:** show a `git log --graph` where a branch visibly splits and merges back.

**Common mistakes:** committing everything in one giant commit at the end of the day. Commit when a *thought* is finished, not when the *day* is finished.

---

## ✅ End-of-week check

Before Week 01, you should be able to, without notes:

- [ ] Draw the request/response journey on a whiteboard in under 2 minutes
- [ ] Name what `200`, `301`, `404`, `500` mean and give an example of each
- [ ] Move around your machine and create/copy/delete files with the terminal only
- [ ] Open DevTools and find *why* an element looks the way it does
- [ ] Commit, branch, merge and push without looking up the commands

If any box is unticked, use day 6 on that one box. Do not carry a gap into Phase 1 — everything after this stands on it.
