# Road to Mid-Level Developer — Learning Repo

**Student:** _(name)_
**Started:** 2026-07-22
**Curriculum:** see `web-dev-curriculum.html` in this repo
**Schedule:** 3 hrs/day — 1 hr learning, 2 hr assignment. 6 days/week. Day 7 = review + finish incomplete work.

---

## The Rule of the Repo

**No folder + no log = assignment doesn't exist.**
Work is only counted when it is pushed to GitHub the same day, in the correct structure.

## Folder structure

Every study day gets one folder named by date (`YYYY-MM-DD`):

```
learning-repo/
├── README.md
├── 2026-07-22/
│   ├── LEARNED.md        ← what I learned today (required, see template)
│   └── assignment/       ← today's actual work (code files)
├── 2026-07-23/
│   ├── LEARNED.md
│   └── assignment/
└── ...
```

## Daily workflow (exact commands)

```bash
# 1. Start of day — make today's folder
mkdir 2026-07-23
mkdir 2026-07-23/assignment
cp _template/LEARNED.md 2026-07-23/LEARNED.md

# 2. Do the work inside assignment/

# 3. Fill in LEARNED.md honestly

# 4. End of day — push (same day, no exceptions)
git add .
git commit -m "day 2: flexbox card gallery"
git push
```

Commit message format: `day N: short description of the assignment`.

## LEARNED.md rules

- Written in **your own words**. Copied definitions = rejected.
- Minimum 5 lines, maximum 1 page.
- The "struggled with" section is mandatory — "nothing" is not an answer. If nothing was hard, the assignment was too easy and the teacher assigns a harder one.

## Validation (teacher)

Teacher checks the repo, not screenshots, not WhatsApp messages:

1. Folder exists with today's date ✓
2. `assignment/` contains working code ✓
3. `LEARNED.md` filled in, own words ✓
4. Commit timestamp is the same day ✓ (GitHub shows this — it cannot be faked easily)
5. Random spot-check: teacher picks any line of code, student explains it out loud.

Miss 2 days in a week without reason → that week repeats.

## Exams

Phase exams are defined in the curriculum. Exam work goes in a dated folder like any other day, with `EXAM.md` instead of `LEARNED.md` describing the task and result.
