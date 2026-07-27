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

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Polish, performance & accessibility | [`day-1/`](day-1/) | – |
| D2 | Documentation & README with screenshots | [`day-2/`](day-2/) | – |
| D3 | Deploy the API + database to production | [`day-3/`](day-3/) | – |
| D4 | Deploy the frontend; full production test | [`day-4/`](day-4/) | – |
| D5 | Demo preparation & rehearsal | [`day-5/`](day-5/) | – |
| — | **Final exam — demo & defence** | [`exam/`](exam/) | – |

---

## Day 1 — Polish

**Read first (1 hr):** web.dev *Core Web Vitals* + *Learn Accessibility*.

**Build (2 hr):** Make it feel finished. Users judge quality in the first five seconds.

**Must have**
- [ ] Lighthouse on the main pages: Performance ≥ 85, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 90 — screenshots in the folder
- [ ] Route-level code splitting; check the chunk sizes in the build output
- [ ] Images sized and lazy-loaded; no layout shift (CLS near zero)
- [ ] Keyboard navigable end to end; skip-to-content link; visible focus everywhere
- [ ] Colour contrast AA throughout
- [ ] `<title>` and meta description per route; a favicon; Open Graph tags so a shared link shows a preview
- [ ] Consistent spacing, alignment and typography — do a visual pass at 100% zoom and fix everything that is 1px off
- [ ] Loading states everywhere, including the initial app load
- [ ] Tested in Chrome, Firefox and Safari, and on a real phone

**🧪 Test material**
1. What were your three biggest performance problems and what fixed them?
2. What is your LCP element? Your CLS score?
3. Navigate the whole app with only a keyboard, in front of me.
4. What is still not perfect, and why did you accept it?

---

## Day 2 — Documentation

**Read first (1 hr):** makeareadme.com + Awesome READMEs.

**Build (2 hr):** The README is what people read instead of your code. It matters more than you think.

**Must have**
- [ ] Root `README.md` with: project name and one-line pitch · **live demo link** · a screenshot or GIF at the top · the problem it solves · feature list · tech stack with reasons · architecture diagram · local setup (clone → env → install → run, for both client and server) · `.env.example` explained · API endpoint table · folder structure · known issues · roadmap · licence
- [ ] A **demo account** (email + password) in the README so anyone can try it without signing up
- [ ] A GIF of the main user flow (use [Kap](https://getkap.co/) or ScreenToGif) — this single item raises a repo's impression more than any code change
- [ ] `/server/README.md` with the full API documentation
- [ ] A Postman collection committed
- [ ] Code comments only where the code cannot explain itself — and no commented-out dead code anywhere
- [ ] `CONTRIBUTING.md` and a licence file
- [ ] Your GitHub profile README updated to feature this project

**🧪 Test material**
1. Hand me the README. I should be able to run it locally in under 10 minutes with no questions.
2. Does the screenshot show the app at its best?
3. Does your architecture diagram match what you actually built?
4. What does "known issues" say? (Honesty here reads as senior, not weak.)

---

## Day 3 — Deploy the backend

**Read first (1 hr):** Render deployment + Atlas production network access.

**Build (2 hr):** Get the API live. **Expect problems** — this is why it is Wednesday.

**Must have**
- [ ] API deployed on [Render](https://render.com/docs) (or Railway/Fly)
- [ ] Production MongoDB Atlas cluster, separate from your development one, with a seeded demo dataset
- [ ] Every env var set in the host's dashboard — nothing hardcoded, nothing committed
- [ ] Atlas network access configured correctly (not `0.0.0.0/0` unless the host requires it — and if so, note the mitigation)
- [ ] CORS allowing your production frontend origin only
- [ ] HTTPS working
- [ ] A health endpoint monitored (a free uptime checker)
- [ ] `NODE_ENV=production`; stack traces not leaking to clients — verify by triggering an error in production
- [ ] Postman collection run against the **production** URL, all green
- [ ] `day-3/deployment.md`: every step, and every problem you hit with its fix. You will need this document the next time.

**🧪 Test material**
1. What broke in production that worked locally? (Something always does.)
2. Where do your production secrets live?
3. Trigger a 500 in production — what does the client see, and what do the logs show?
4. What happens on a free-tier cold start, and what does the user experience?

---

## Day 4 — Deploy the frontend

**Read first (1 hr):** Vercel docs + Vite production build + 12-factor config.

**Build (2 hr):** The whole thing, live.

**Must have**
- [ ] Frontend on [Vercel](https://vercel.com/docs) or Netlify, pointed at the production API
- [ ] SPA routing configured — deep links must work; test `/some/deep/route` directly in a fresh tab
- [ ] `VITE_API_URL` set in the host's env, not committed
- [ ] Auto-deploy on push to `main`; a preview deploy on a PR — show both working
- [ ] A **full production test from a phone on mobile data**, using a brand-new account, completing the app's main job
- [ ] Someone else uses the live URL and completes the main task without help
- [ ] `day-4/production-test.md`: every feature tested on production with pass/fail, plus load times on 4G
- [ ] Both URLs added to the README, your GitHub profile, and your CV

**🧪 Test material**
1. Open the live app on my phone. Sign up and complete the main task in front of me.
2. What is slower in production than locally, and why?
3. What happens if the backend is asleep (free tier) when someone visits?
4. Show me a PR preview deployment.

---

## Day 5 — Prepare the defence

**Read first (1 hr):** *How to demo software* + the STAR method.

**Build (2 hr):** Rehearse. A great project demoed badly reads as a mediocre project.

**Must have**
- [ ] A 10-minute demo script: the problem (1 min) → live walkthrough of the main flow (5 min) → one technically interesting part (2 min) → what you would do next (1 min) → questions
- [ ] **Rehearsed out loud three times**, timed. Not read in your head — spoken.
- [ ] A backup: a recorded video of the demo, in case the internet fails on the day. This is not pessimism; it is professionalism.
- [ ] Demo data prepared so the app looks used, not empty
- [ ] `day-5/defence.md`: written answers to the questions you *expect*, including:
  - Why this schema? What would you change?
  - What happens when the token expires?
  - How do you prevent user A reading user B's data?
  - What is the biggest weakness in this codebase?
  - What was the hardest bug, and how did you find it?
  - What would you do differently starting again?
  - How would this cope with 10,000 users?
- [ ] A one-page project summary for your portfolio: problem, solution, stack, your role, outcome, links

**🧪 Test material**
1. Give the demo, timed, no notes.
2. Answer three questions I pick at random from your own list.
3. What is the weakest part of your project? (An honest answer scores higher than a defensive one — every time.)

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
