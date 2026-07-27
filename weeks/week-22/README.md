# Week 22 — Capstone: Plan the App & Build the API

[← The Road](../../README.md) · Phase 6 · Capstone · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 21](../week-21/) · **Next:** [Week 23 — Frontend & wiring →](../week-23/)

> **Goal:** one real project, chosen and designed by you, with the backend built and tested by Friday.

**Why this week matters:** every project so far had its spec handed to you. This one does not. Deciding what to build, cutting scope so it can actually ship in three weeks, and designing a schema you will not regret in Week 23 — that is the work. It is also the hardest part, and the part that most distinguishes a developer from someone who can follow instructions.

**Pick a local problem.** A class result-management system, a hostel mess-management app, a small marketplace, a clinic appointment booker, a madrassah attendance tracker. Real problems make far better portfolios than another to-do clone — and you can explain the domain in an interview because you actually understand it.

---

## 📖 Learning material — 1 hr/day

| Day | Read | Source |
| --- | --- | --- |
| D1 | [Writing user stories](https://www.atlassian.com/agile/project-management/user-stories) · [MoSCoW prioritisation](https://www.productplan.com/glossary/moscow-prioritization/) | Atlassian / ProductPlan |
| D2 | [Excalidraw](https://excalidraw.com/) — wireframing · [Laws of UX](https://lawsofux.com/) | tools |
| D3 | [MongoDB: Data modelling](https://www.mongodb.com/docs/manual/data-modeling/) · [Schema design anti-patterns](https://www.mongodb.com/developer/products/mongodb/schema-design-anti-pattern-massive-arrays/) | MongoDB |
| D4 | [Google API design guide](https://cloud.google.com/apis/design) · [Swagger/OpenAPI basics](https://swagger.io/docs/specification/about/) | Google / Swagger |
| D5 | [Conventional Commits](https://www.conventionalcommits.org/) · [Keep a Changelog](https://keepachangelog.com/) | standards |

### 📰 Articles worth your time this week
- [Shape Up: fixed time, variable scope](https://basecamp.com/shapeup/1.2-chapter-03) — the single most useful idea for finishing on time
- [The "walking skeleton" approach](https://wiki.c2.com/?WalkingSkeleton) — get one thin slice working end to end before building anything wide
- [12-factor app](https://12factor.net/) — read all twelve; they take 20 minutes and explain most deployment problems

---

## 🗓️ The week at a glance

| Day | Assignment | Open the assignment | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Idea, user stories & scope cut | [📄 day-1 →](day-1/) | – |
| [**D2**](day-2/) | Wireframes & user flows | [📄 day-2 →](day-2/) | – |
| [**D3**](day-3/) | Database schema (teacher must approve before D4) | [📄 day-3 →](day-3/) | – |
| [**D4**](day-4/) | API design doc + project setup | [📄 day-4 →](day-4/) | – |
| [**D5**](day-5/) | Build the API core with auth | [📄 day-5 →](day-5/) | – |

---

## Day 1 — What are you building, and what are you not

📄 **[Open this day's assignment page →](day-1/)**




**Read first (1 hr):** *Writing user stories* + *MoSCoW*.

**Build (2 hr):** `day-1/PROJECT.md`. No code today. Resist it.

**Must have**
- [ ] **Three** candidate ideas, each with: the problem, who has it, and why software helps. Then pick one and say why you rejected the other two.
- [ ] A one-paragraph description a non-technical person would understand
- [ ] At least 12 user stories: *"As a [role], I want to [action], so that [benefit]"*
- [ ] Every story tagged **Must / Should / Could / Won't** — and at least 4 in "Won't (this version)". If nothing is in "Won't", you have not cut scope and you will not ship.
- [ ] The roles in the system and what each may do (this becomes your authorisation model)
- [ ] A definition of "done" for v1 — the specific list that means it is finished
- [ ] The riskiest unknown, and how you will test it early

**🧪 Test material**
1. Pitch it in 60 seconds. Who is it for and what does it replace?
2. What did you cut, and what did that protect?
3. Which story is riskiest to build? What is your plan if it does not work?
4. Which of your Week 12–21 skills does each Must-have need?

---

## Day 2 — Wireframes & flows

📄 **[Open this day's assignment page →](day-2/)**




**Read first (1 hr):** Excalidraw + *Laws of UX*.

**Build (2 hr):** Design the screens before you build them.

**Must have**
- [ ] Wireframes for every screen in the Must list — paper photos or Excalidraw exports in `day-2/`
- [ ] Mobile **and** desktop layout for each key screen
- [ ] The full user flow drawn: landing → signup → login → main task → success. Every arrow labelled.
- [ ] Every empty state, loading state and error state drawn — not just the happy path. This is where amateur projects fall down.
- [ ] A component inventory: which React components each screen needs, and which are shared
- [ ] The navigation structure and every URL route listed
- [ ] `day-2/flows.md`: what happens when a user does the wrong thing at each step

**🧪 Test material**
1. Walk me through the main user journey using only your wireframes.
2. What does a first-time user with no data see?
3. Which components are reused across screens?
4. Where can this app frustrate someone, and what did you design to prevent it?

---

## Day 3 — The schema ⚠️ teacher approval required

📄 **[Open this day's assignment page →](day-3/)**




**Read first (1 hr):** MongoDB *Data modelling* + *anti-patterns*.

**Build (2 hr):** `day-3/SCHEMA.md`. **You may not start Day 4 until the teacher approves this.** Fixing a schema in Week 23 costs days; fixing it now costs an hour.

**Must have**
- [ ] Every collection, every field, every type, every constraint
- [ ] An entity-relationship diagram (paper or Excalidraw)
- [ ] For **each** relationship: embed or reference, with the reasoning — is it queried independently? is it unbounded? how often does it change? is it always needed together?
- [ ] The indexes you will need, derived from your actual queries — list the query, then the index that serves it
- [ ] A sample document for every collection, filled with realistic data
- [ ] The ten most common queries your app will run, written out
- [ ] How ownership/permissions are represented in the data
- [ ] What happens on delete — cascade, soft-delete, or orphan? Decide per relationship and justify.

**🧪 Test material**
1. Defend three embed/reference decisions.
2. Show me the query that made you add each index.
3. What happens to related documents when a user deletes their account?
4. Where would this schema hurt at 100× the data?
5. What is the one part you are least sure about? (Say it now — that is the point of review.)

---

## Day 4 — API design & setup

📄 **[Open this day's assignment page →](day-4/)**




**Read first (1 hr):** Google API design guide + OpenAPI basics.

**Build (2 hr):** `day-4/API.md` plus the project skeleton.

**Must have**
- [ ] Every endpoint documented before it exists: method, path, auth required, role required, request shape, response shape, every error case
- [ ] Consistent naming and pluralisation throughout — pick a convention and never break it
- [ ] The consistent error shape, reused from Week 19
- [ ] Repo created: `/client`, `/server`, root README, `.gitignore`, `.env.example`
- [ ] Server skeleton from your Week 19 structure (config, routes, controllers, services, middleware, validators)
- [ ] MongoDB Atlas cluster for this project, connected, health endpoint returning 200
- [ ] Branch protection on `main`; you work on feature branches with PRs from here on
- [ ] A **walking skeleton**: one trivial endpoint, called by one trivial React page, both running. One thin end-to-end slice, today.

**🧪 Test material**
1. Hand me API.md — could a stranger build your frontend from it alone?
2. Why did you choose these paths and methods?
3. Which endpoints need auth, and which need a role check?
4. What does your walking skeleton prove?

---

## Day 5 — Build the API core

📄 **[Open this day's assignment page →](day-5/)**




**Read first (1 hr):** Conventional Commits + Keep a Changelog.

**Build (2 hr):** Real code, at last.

**Must have**
- [ ] Auth complete: signup, login, `me`, refresh, logout — with hashing and JWT from Week 21
- [ ] Every Mongoose model from the approved schema, with validation
- [ ] Auth + role middleware in place
- [ ] CRUD for your **main** entity, with ownership enforced on every query
- [ ] Validation on every endpoint
- [ ] Central error handling and 404s
- [ ] A seed script with realistic demo data
- [ ] A Postman collection covering everything built so far, committed
- [ ] Every commit on a branch, merged by PR, with conventional messages
- [ ] `day-5/progress.md`: what is done, what is next, what is blocked

**🧪 Test material**
1. Show me your Postman collection running green.
2. As user A, try to touch user B's data. Show every attempt failing.
3. Which part took longer than expected and why?
4. What is the riskiest thing left to build?

---

## ✅ End-of-week check

- [ ] Scope is cut to something that genuinely ships in three weeks
- [ ] The schema is approved and you can defend it
- [ ] The API contract is documented and stable
- [ ] Auth works and ownership is enforced everywhere
- [ ] One thin slice already runs end to end

Next week: the frontend, and the moment it all connects.
