# 🛣️ Road to Mid-Level Developer

**Student:** Muhammad Ahad
**Teacher:** Adil
**Started:** 2026-07-22
**Length:** Week 00 (foundations) + 24 weeks · 5 study days per week · 3 hrs/day (1 hr learning + 2 hr assignment)
**Track:** Computer basics → HTML/CSS → JavaScript → Git → React → Node/Express → MongoDB → Auth → Capstone

> This README is the **road**. Click a week → you land on that week's page → each week has 5 days → each day has its learning material, its assignment, its test material, and a link to the folder where the work lives.

---

## 📖 How to read this repo

| You want to… | Go to |
| --- | --- |
| See the whole path and pick a week | [The Road](#-the-road) below |
| Know exactly what to do today | the week page → the day section |
| Know how you are marked | [GRADING.md](GRADING.md) |
| See every score so far | [SCOREBOARD.md](SCOREBOARD.md) |
| Read beyond the assignment (state, auth, sessions, guards, APIs…) | [RESOURCES.md](RESOURCES.md) |
| Copy the daily files | [`_template/`](_template/) |

---

## 🧭 The Road

### Phase 0 · Foundations
| Week | Topic | Days | Status |
| --- | --- | --- | --- |
| [Week 00](weeks/week-00/) | How computers, the internet & the web actually work | 5 | ⬜ |

### Phase 1 · CSS Mastery
| Week | Topic | Days | Status |
| --- | --- | --- | --- |
| [Week 01](weeks/week-01/) | CSS fundamentals, selectors & the box model | 5 | 🟨 in progress |
| [Week 02](weeks/week-02/) | Flexbox & Grid | 5 | ⬜ |
| [Week 03](weeks/week-03/) | Responsive design & polish → **Phase 1 exam** | 5 | ⬜ |

### Phase 2 · JavaScript, Seriously
| Week | Topic | Days | Status |
| --- | --- | --- | --- |
| [Week 04](weeks/week-04/) | Language fundamentals — types, conditions, loops, functions | 5 | ⬜ |
| [Week 05](weeks/week-05/) | Arrays & objects, `map`/`filter`/`reduce` | 5 | ⬜ |
| [Week 06](weeks/week-06/) | The DOM — selecting and changing the page | 5 | ⬜ |
| [Week 07](weeks/week-07/) | Events, forms & real interactive apps | 5 | ⬜ |
| [Week 08](weeks/week-08/) | Modern JS (ES6+), promises & `async/await` | 5 | ⬜ |
| [Week 09](weeks/week-09/) | Fetching real APIs → **Phase 2 exam** | 5 | ⬜ |

### Phase 3 · Professional Tooling
| Week | Topic | Days | Status |
| --- | --- | --- | --- |
| [Week 10](weeks/week-10/) | Git & GitHub properly — branches, PRs, deploys | 5 | ⬜ |
| [Week 11](weeks/week-11/) | npm, DevTools & debugging → **Phase 3 exam** | 5 | ⬜ |

### Phase 4 · React
| Week | Topic | Days | Status |
| --- | --- | --- | --- |
| [Week 12](weeks/week-12/) | React basics — components, JSX, props, state | 5 | ⬜ |
| [Week 13](weeks/week-13/) | Lists, keys, conditional rendering & controlled forms | 5 | ⬜ |
| [Week 14](weeks/week-14/) | State design — lifting state, `useReducer` | 5 | ⬜ |
| [Week 15](weeks/week-15/) | `useEffect`, data fetching & custom hooks | 5 | ⬜ |
| [Week 16](weeks/week-16/) | React Router & Context (shared state) | 5 | ⬜ |
| [Week 17](weeks/week-17/) | Phase project — e-commerce front → **Phase 4 exam** | 5 | ⬜ |

### Phase 5 · Backend
| Week | Topic | Days | Status |
| --- | --- | --- | --- |
| [Week 18](weeks/week-18/) | Node.js & Express — building the API | 5 | ⬜ |
| [Week 19](weeks/week-19/) | Middleware, error handling & full-stack wiring | 5 | ⬜ |
| [Week 20](weeks/week-20/) | MongoDB & Mongoose | 5 | ⬜ |
| [Week 21](weeks/week-21/) | Auth — hashing, JWT, sessions, route guards → **Phase 5 exam** | 5 | ⬜ |

### Phase 6 · Capstone
| Week | Topic | Days | Status |
| --- | --- | --- | --- |
| [Week 22](weeks/week-22/) | Plan the app & build the API | 5 | ⬜ |
| [Week 23](weeks/week-23/) | Build the frontend, connect everything | 5 | ⬜ |
| [Week 24](weeks/week-24/) | Polish, deploy, demo → **Final exam** | 5 | ⬜ |

Legend: ⬜ not started · 🟨 in progress · ✅ passed · 🔁 repeating

---

## 📂 Folder structure

Every day of work gets its own folder inside its week:

```
weeks/
└── week-01/
    ├── README.md          ← the week page (topics, links, 5 assignments, test material)
    ├── day-1/
    │   ├── LEARNED.md     ← YOU write this, same day
    │   ├── ASSESSMENT.md  ← TEACHER writes this — your score out of 10
    │   └── (your code: index.html, style.css, script.js, …)
    ├── day-2/
    └── …
```

**Open any `day-N/` folder and you see three things at once:** what was built, what was learned, and what it scored.

---

## 🔁 The daily loop

```bash
# 1. Read the week page, find today's day section
# 2. Hour 1 — read the learning material linked there. Type the examples.

# 3. Make today's folder
mkdir -p weeks/week-01/day-2
cp _template/LEARNED.md weeks/week-01/day-2/LEARNED.md

# 4. Hours 2–3 — build the assignment inside that folder
# 5. Fill LEARNED.md honestly (including the AI-usage line)

# 6. Push the SAME day
git add .
git commit -m "week 1 day 2: pricing card"
git push
```

Commit message format: `week N day M: short description`.

---

## 📏 The rules

1. **No folder + no `LEARNED.md` = the assignment does not exist.** Not "done", not "half done". Does not exist.
2. **Push the same day.** GitHub timestamps do not lie.
3. **Type every line.** Copy-pasting a tutorial teaches nothing. Reading docs and searching is encouraged — that is the actual job.
4. **Declare AI honestly.** Every `LEARNED.md` has an *AI used?* line. Using AI to explain a concept is fine and often smart. Using AI to write the assignment and calling it your own is the one thing in this repo that scores **0**. See [GRADING.md](GRADING.md).
5. **"Nothing was hard" is not an answer.** If a day was genuinely easy, the next assignment gets harder.
6. **Miss 2 days in a week without a reason → the week repeats.**
7. **Day 6 & 7 are yours** — finish incomplete work, redo anything marked 🔁, or rest.

---

## 🎯 What "done" means

An assignment is not done when it looks right on screen. It is done when:

- [ ] It meets every item in that day's **Must have** checklist
- [ ] You can answer that day's **Test material** questions out loud, with no notes
- [ ] `LEARNED.md` is filled in, in your own words
- [ ] It is committed and pushed the same day
- [ ] The teacher has written `ASSESSMENT.md` and it says **PASS**

---

## 🏁 Where this ends

24 weeks from now you should have: a GitHub profile with ~120 dated commits, a deployed full-stack app with real auth and a real database, and the ability to sit in an interview and explain every line of it. That combination is what "mid-level" actually means — not the number of frameworks you have heard of.

One-page overview of the whole track: [`web-dev-curriculum.html`](web-dev-curriculum.html) (open it in a browser).
