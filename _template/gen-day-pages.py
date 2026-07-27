#!/usr/bin/env python3
"""
Generate one README.md per day folder in the Road-to-mid-dev learning repo.

Reads each weeks/week-NN/README.md, extracts every "## Day N — Title" section,
and writes weeks/week-NN/day-N/README.md containing that day's assignment with
full breadcrumb + prev/next navigation, submit instructions, the AI rule and a
file checklist. Also regenerates the DAYS.md master index and adds an "open this
day" link under each day heading in the week pages.

Idempotent: safe to re-run after editing a week page.

Usage:  python3 gen-day-pages.py [repo_path]
"""
import os
import re
import sys

REPO = sys.argv[1] if len(sys.argv) > 1 else \
    "/Users/adilm/devops/dev-training/ahad/Road-to-mid-dev"

WEEK_RE = re.compile(r"^week-(\d{2})$")
DAY_HEAD_RE = re.compile(r"^## Day (\d) — (.+?)\s*$")
OPEN_LINK_RE = re.compile(r"^📄 \*\*\[Open this day's assignment page →\].*$\n?", re.M)

PHASES = {
    0: "Phase 0 · Foundations",
    1: "Phase 1 · CSS Mastery", 2: "Phase 1 · CSS Mastery", 3: "Phase 1 · CSS Mastery",
    4: "Phase 2 · JavaScript", 5: "Phase 2 · JavaScript", 6: "Phase 2 · JavaScript",
    7: "Phase 2 · JavaScript", 8: "Phase 2 · JavaScript", 9: "Phase 2 · JavaScript",
    10: "Phase 3 · Tooling", 11: "Phase 3 · Tooling",
    12: "Phase 4 · React", 13: "Phase 4 · React", 14: "Phase 4 · React",
    15: "Phase 4 · React", 16: "Phase 4 · React", 17: "Phase 4 · React",
    18: "Phase 5 · Backend", 19: "Phase 5 · Backend",
    20: "Phase 5 · Backend", 21: "Phase 5 · Backend",
    22: "Phase 6 · Capstone", 23: "Phase 6 · Capstone", 24: "Phase 6 · Capstone",
}

# Weeks that end with a phase exam
EXAM_WEEKS = {3: 1, 9: 2, 11: 3, 17: 4, 21: 5, 24: 6}


def week_title(path):
    with open(path) as f:
        first = f.readline().strip()
    return first.lstrip("# ").strip()


def short_week_title(full):
    # "Week 01 — CSS Fundamentals, Selectors & the Box Model" -> the part after the dash
    return full.split("—", 1)[1].strip() if "—" in full else full


def parse_days(text):
    """Return [(day_number, title, body_markdown), ...] for one week page."""
    lines = text.split("\n")
    days, cur = [], None
    for line in lines:
        m = DAY_HEAD_RE.match(line)
        if m:
            if cur:
                days.append(cur)
            cur = [int(m.group(1)), m.group(2).strip(), []]
        elif cur is not None:
            if line.startswith("## "):      # next non-day section ends the last day
                days.append(cur)
                cur = None
            else:
                cur[2].append(line)
    if cur:
        days.append(cur)

    out = []
    for num, title, body in days:
        b = "\n".join(body)
        b = OPEN_LINK_RE.sub("", b)          # drop previously injected link
        b = re.sub(r"\n+---\s*$", "", b.rstrip())   # drop the trailing rule
        out.append((num, title, b.strip()))
    return out


def localise_links(body, dnum):
    """Links written relative to the week page (day-N/x) must be relative to the
    day folder once the section moves into day-N/README.md."""
    return re.sub(rf"\]\(day-{dnum}/", "](", body)


def promote_headings(body):
    """Turn the week page's inline bold labels into real headings on the day page,
    so each day renders with a clear numbered structure."""
    subs = [
        (r"^\*\*Read first \(1 hr\):\*\*\s*", "## 1️⃣ Read first — 1 hour\n\n"),
        (r"^\*\*Read first:\*\*\s*",          "## 1️⃣ Read first — 1 hour\n\n"),
        (r"^\*\*Build \((\d) hr\):\*\*\s*",   r"## 2️⃣ Build — \1 hours\n\n"),
        (r"^\*\*Must have\*\*\s*$",           "## 3️⃣ Must have — the checklist you are marked against\n"),
        (r"^\*\*🧪 Test material\*\*\s*$",
         "## 4️⃣ Test material — the teacher will ask you these\n\n"
         "> Answer them out loud, with no notes. This block is worth **3 of the 10 marks**.\n"),
        (r"^\*\*Common mistakes:?\*\*\s*",    "## ⚠️ Common mistakes\n\n"),
    ]
    for pat, rep in subs:
        body = re.sub(pat, rep, body, flags=re.M)
    return body


def commit_slug(title):
    s = re.sub(r"[`*✅]", "", title).lower()
    s = re.sub(r"[^a-z0-9]+", " ", s).strip()
    return " ".join(s.split()[:5])


def day_page(wk, dnum, dtitle, body, weeks_index, score=None):
    wnum = int(wk)
    wfull = weeks_index[wk]["title"]
    wshort = short_week_title(wfull)
    phase = PHASES.get(wnum, "")

    # ---- prev / next across week boundaries -------------------------------
    order = weeks_index["_order"]
    i = order.index(wk)
    prev = f"../day-{dnum-1}/" if dnum > 1 else (
        f"../../week-{order[i-1]}/day-5/" if i > 0 else None)
    prev_lbl = f"Day {dnum-1}" if dnum > 1 else (
        f"Week {order[i-1]} · Day 5" if i > 0 else None)
    nxt = f"../day-{dnum+1}/" if dnum < 5 else (
        f"../../week-{order[i+1]}/day-1/" if i < len(order) - 1 else None)
    nxt_lbl = f"Day {dnum+1}" if dnum < 5 else (
        f"Week {order[i+1]} · Day 1" if i < len(order) - 1 else None)

    nav = []
    nav.append(f"◀ [{prev_lbl}]({prev})" if prev else "◀ _start of the road_")
    nav.append(f"[⬆ Week {wk} — {wshort}](../README.md)")
    nav.append(f"[{nxt_lbl}]({nxt}) ▶" if nxt else "_end of the road_ 🎓")
    navline = " · ".join(nav)

    crumbs = ("[🛣️ The Road](../../../README.md) · "
              f"[📅 Week {wk}](../README.md) · "
              "[🏆 Scoreboard](../../../SCOREBOARD.md) · "
              "[📏 Grading](../../../GRADING.md) · "
              "[📚 Library](../../../RESOURCES.md)")

    slug = commit_slug(dtitle)
    status = (f"✅ **assessed — {score}/10** · see [ASSESSMENT.md](ASSESSMENT.md)"
              if score else "⬜ not started → 🟨 in progress → ✅ assessed")
    exam_note = ""
    if wnum in EXAM_WEEKS and dnum == 5:
        exam_note = (f"\n> ⚠️ **After this day comes the Phase {EXAM_WEEKS[wnum]} exam** — "
                     f"see [the week page](../README.md#-phase-{EXAM_WEEKS[wnum]}-exam) "
                     f"and put the work in [`../exam/`](../exam/).\n")

    return f"""# Week {wk} · Day {dnum} — {dtitle}

{crumbs}

{navline}

**Phase:** {phase} · **Week topic:** {wshort}
**Time budget:** 1 hr learning + 2 hr building
**Status:** {status}

---

{promote_headings(localise_links(body, dnum))}

---

## 📤 How to submit today

```bash
# from the repo root
cd weeks/week-{wk}/day-{dnum}

# 1. copy in the reflection template (once, at the start of the day)
cp ../../../_template/LEARNED.md ./LEARNED.md

# 2. build the assignment in this folder

# 3. fill in LEARNED.md — including the AI line — in your own words

# 4. push the SAME day
cd ../../..
git add .
git commit -m "week {wk} day {dnum}: {slug}"
git push
```
{exam_note}
## 🤖 The AI rule for today

Every `LEARNED.md` has this mandatory line:

```
**AI used?** yes / no — what for:
```

| What you did | Allowed? | Your maximum score |
| --- | --- | --- |
| Wrote it yourself using docs and search | ✅ | **10/10** |
| Asked AI to *explain* a concept, then wrote the code yourself | ✅ | **10/10** |
| AI wrote part of the code — and you say exactly which part | ⚠️ | 7/10 |
| AI wrote it, you say so honestly | ⚠️ | 4/10 → redo by hand |
| AI wrote it and you did not say so | ❌ | **0/10** |

Asking AI *"explain how the box model works"* costs you nothing and is smart learning.
Asking it *"write my pricing card"* and staying quiet is the one thing here that scores zero.
Full policy: [GRADING.md](../../../GRADING.md).

## 🆘 Stuck?

1. Re-read the error message. All of it — file name and line number included.
2. Go back to the **Read first** links above. The answer is usually in the paragraph you skimmed.
3. Search like a developer: `mdn <the exact property>`, not "how do I".
4. Still stuck after 30 minutes? Write the question down in `LEARNED.md` and ask the teacher.
   Being stuck is not failure — hiding that you were stuck is.
5. Deeper reading on every topic: [📚 RESOURCES.md](../../../RESOURCES.md)

## 📂 Files in this folder

| File | Who writes it | Required | Done |
| --- | --- | --- | --- |
| Your code (`.html`, `.css`, `.js`, …) | you | ✅ | ⬜ |
| `LEARNED.md` | you, the same day | ✅ | ⬜ |
| `ASSESSMENT.md` | the teacher | – | ⬜ |

**No folder + no `LEARNED.md` = this assignment does not exist.**

---

{navline}
"""


def main():
    weeks_dir = os.path.join(REPO, "weeks")
    weeks = sorted(d for d in os.listdir(weeks_dir) if WEEK_RE.match(d))
    idx = {"_order": [WEEK_RE.match(w).group(1) for w in weeks]}
    for w in weeks:
        wk = WEEK_RE.match(w).group(1)
        idx[wk] = {"title": week_title(os.path.join(weeks_dir, w, "README.md"))}

    written, index_rows, scores = 0, [], {}
    for w in weeks:
        wk = WEEK_RE.match(w).group(1)
        wpath = os.path.join(weeks_dir, w, "README.md")
        text = open(wpath).read()
        days = parse_days(text)
        if len(days) != 5:
            print(f"  !! week-{wk}: found {len(days)} day sections (expected 5)")

        for dnum, dtitle, body in days:
            folder = os.path.join(weeks_dir, w, f"day-{dnum}")
            os.makedirs(folder, exist_ok=True)

            # if the teacher has already marked this day, reflect it on the page
            apath = os.path.join(folder, "ASSESSMENT.md")
            score = None
            if os.path.exists(apath):
                m = re.search(r"\*\*(\d+(?:\.\d+)?)\s*/\s*10\*\*", open(apath).read())
                score = m.group(1) if m else "?"
            scores[(wk, dnum)] = score

            with open(os.path.join(folder, "README.md"), "w") as f:
                f.write(day_page(wk, dnum, dtitle, body, idx, score))
            gk = os.path.join(folder, ".gitkeep")
            if os.path.exists(gk):
                os.remove(gk)
            written += 1
            index_rows.append((wk, idx[wk]["title"], dnum, dtitle, score))

        # inject an "open this day" link under each day heading in the week page
        text = OPEN_LINK_RE.sub("", text)
        def inject(m):
            n = m.group(1)
            return (f"{m.group(0)}\n\n📄 **[Open this day's assignment page →]"
                    f"(day-{n}/)**")
        text = re.sub(r"^## Day (\d) — .+$", inject, text, flags=re.M)

        # make the "week at a glance" table properly clickable
        text = text.replace("| Day | Assignment | Folder | Score |",
                            "| Day | Assignment | Open the assignment | Score |")
        text = re.sub(r"^\| D(\d) \| (.+?) \| \[`day-\1/`\]\(day-\1/\) \|",
                      lambda m: f"| [**D{m.group(1)}**](day-{m.group(1)}/) | {m.group(2)} "
                                f"| [📄 day-{m.group(1)} →](day-{m.group(1)}/) |",
                      text, flags=re.M)
        text = text.replace("| [`exam/`](exam/) |", "| [📄 exam →](exam/) |")
        open(wpath, "w").write(text)

    # ---- DAYS.md master index --------------------------------------------
    out = ["# 📅 Every Day, Clickable\n",
           "[← Back to the road](README.md) · [🏆 Scoreboard](SCOREBOARD.md) · "
           "[📏 Grading](GRADING.md) · [📚 Library](RESOURCES.md)\n",
           "All 125 assignments in one place. Click any day to open its full "
           "assignment page — what to read, what to build, what it must contain, "
           "and the questions you will be asked about it.\n"]
    cur_week = None
    for wk, wtitle, dnum, dtitle, score in index_rows:
        if wk != cur_week:
            cur_week = wk
            out.append(f"\n### [{wtitle}](weeks/week-{wk}/)\n")
            out.append("| Day | Assignment | Open | Score |")
            out.append("| --- | --- | --- | --- |")
        out.append(f"| D{dnum} | {dtitle} | "
                   f"[📄 open](weeks/week-{wk}/day-{dnum}/) | "
                   f"{('**' + score + '/10**') if score else '–'} |")
    open(os.path.join(REPO, "DAYS.md"), "w").write("\n".join(out) + "\n")

    print(f"✅ wrote {written} day pages + DAYS.md")


if __name__ == "__main__":
    main()
