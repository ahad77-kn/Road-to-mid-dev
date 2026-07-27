# Week 24 — Capstone: Polish, Deploy, Demo → Final Exam

[← The Road](../../README.md) · Phase 6 · Capstone · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 23](../week-23/) · **Next:** [After graduation](#-after-graduation)

> **Goal:** a live URL anyone can visit, a README that sells it, and a 10-minute demo you can give without notes.

**Why this week matters:** an app on your laptop does not exist as far as an employer is concerned. This week it gets a public URL, real documentation, and a defence. Deployment always takes longer than expected — start Wednesday, not Friday.

---

## 📖 Learning material — 1 hr/day

| Day | Read | Source |
| --- | --- | --- |
| D1 | [web.dev: Core Web Vitals](https://web.dev/articles/vitals) · [web.dev: Learn Accessibility](https://web.dev/learn/accessibility) | web.dev |
| D2 | [makeareadme.com](https://www.makeareadme.com/) · [Awesome READMEs](https://github.com/matiassingers/awesome-readme) | guides |
| D3 | [Render: deploy a Node app](https://render.com/docs/deploy-node-express-app) · [MongoDB Atlas: network access in production](https://www.mongodb.com/docs/atlas/security/ip-access-list/) | Render / MongoDB |
| D4 | [Vercel docs](https://vercel.com/docs) · [Vite: production build](https://vite.dev/guide/build.html) · [12-factor: config](https://12factor.net/config) | Vercel / Vite |
| D5 | [How to demo software](https://www.nngroup.com/articles/usability-testing-101/) · [STAR method for interviews](https://www.themuse.com/advice/star-interview-method) | guides |

---

## 🗓️ The week at a glance

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Polish, performance & accessibility | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | Documentation & README with screenshots | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | Deploy the API + database to production | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | Deploy the frontend; full production test | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | Demo preparation & rehearsal | [📄 open →](day-5/) | – |
| — | **Final exam — demo & defence** | [📄 exam →](exam/) | – |

---

## 🎓 Final Exam — Demo & Defence

**Format:** 10-minute live demo, then 30 minutes of questions.

**The questions will include:**
- "Why this schema? What would break if requirements changed to X?"
- "What happens if the token expires while a user is filling a form?"
- "Show me the line that stops user A from reading user B's data."
- "Make this button do X — live, now." ← the real test
- "Where is the biggest performance problem, and how do you know?"
- "Something is broken in production. Walk me through your first five minutes."

**Passing (7/10):**
- [ ] The app is live and works from my machine
- [ ] The demo is clear and confident
- [ ] Every technical question is answered honestly — "I don't know, here is how I would find out" is a **good** answer
- [ ] The live change is completed
- [ ] The code is something you could hand to another developer

```bash
mkdir -p weeks/week-24/exam && cp _template/EXAM.md weeks/week-24/exam/EXAM.md
```

**Passing this means you are genuinely at junior-to-mid level and ready for real freelance work or an internship.**

---

## 🎓 Graduated

Look back at Week 1, Day 1. A business card with a `position: relative` hack in it. That was 24 weeks ago.

**What you have now:**
- ~120 dated commits proving 24 weeks of consistent work
- 10+ repositories with real READMEs
- 4+ deployed applications with live URLs
- A full-stack capstone with auth, a database and a real deployment
- The ability to explain every line of all of it

---

## 🚀 After graduation

**Next 3 months — in this order:**

| Priority | What | Where |
| --- | --- | --- |
| 1 | **Start applying and bidding.** You are ready. Waiting until you "feel ready" costs a year. | Upwork, Fiverr, LinkedIn, local agencies |
| 2 | **TypeScript** — the single biggest employability upgrade from here | [TS handbook](https://www.typescriptlang.org/docs/handbook/intro.html) · [Total TypeScript beginners tutorial](https://www.totaltypescript.com/tutorials/beginners-typescript) |
| 3 | **Testing** — Vitest + Testing Library; add tests to the capstone | [Vitest](https://vitest.dev/guide/) · [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) |
| 4 | **A second capstone**, built in 3 weeks instead of 3 months | — |

**Then:** Next.js, CI/CD with GitHub Actions, Docker, and data structures for interviews ([NeetCode](https://neetcode.io/roadmap)).

**The habits that got you here — keep all four:** commit every day · write down what you learned · declare it when you use AI · explain your code out loud to someone.

**Real clients teach what no course can.** Go and get one.
