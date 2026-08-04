# 📊 How work is marked

[← Back to the road](README.md)

Every day is scored by the teacher in an `ASSESSMENT.md` file placed inside the day's folder. Open any `weeks/week-NN/day-N/` folder and the score is right there next to the code.

> **Changed from Week 02 Day 3 — the internship track.** The day went from 3 hours to
> **5½ hours** and from one score to **three**. See [what changed and why](#-whats-new-from-w02-d3).

## The three scores

| Block | Out of | What it measures |
| --- | --- | --- |
| 🛠️ **Assignment** | **10** | can you *build* the thing |
| 🐛 **Drill** | **5** | can you *fix* something you did not write |
| 🧪 **Test** | **10** | do you *actually know it* with the editor closed |

A day is only **complete** when all three are handed in. A missing drill or test is not
a partial day — it is scored **0** for that block, the same as not submitting.

---

## The rubric — 10 points

| # | Criterion | Points | What full marks looks like |
| --- | --- | --- | --- |
| 1 | **Requirements met** | 3 | Every item in the day's *Must have* checklist is done. Nothing skipped, nothing half-built. |
| 2 | **Code quality** | 2 | Sensible class/variable names, consistent indentation, no dead code, no magic numbers scattered around, no `div` soup. |
| 3 | **Understanding** | 3 | In the viva, you can explain *why* each part is written the way it is, and change it live when asked. This is the biggest single block of marks — on purpose. |
| 4 | **Process** | 2 | Correct folder, `learn/NOTES.md` filled in own words, committed and pushed the same day, clear commit message. |

**Pass mark: 6/10** up to Week 02. **From Week 03 the pass mark rises to 6.5, and from Phase 2 to 7.0.**
Below the pass mark the day is marked 🔁 REDO and repeated on day 6 or 7.

**Why the bar moves:** you passed Week 1 at 6.35 and you are now scoring 8.5. A gate you
clear by two and a half marks has stopped measuring anything. The bar rises as you do, so
the pressure stays the same size — which is the only reason it works.

**Standing rules apply on top.** Every day is also checked against
[STANDING-RULES.md](STANDING-RULES.md) — the list of things already taught, which are now
permanent and unwarned. **Up to −2.0 per day.**

| Score | Meaning |
| --- | --- |
| 9–10 | Better than asked. Went past the requirement and understands it. |
| 7–8 | Solid. Requirement met, small quality or understanding gaps. |
| 6 | Pass. It works, but it is thin — the gaps are named in the assessment. |
| 3–5 | 🔁 Redo. Something core is missing or not understood. |
| 1–2 | 🔁 Redo from scratch. Effort was not there. |
| 0 | Undeclared AI, or copied work presented as your own. |

---

## 🤖 The AI rule — read this twice

AI is a tool you will use for the rest of your career. Hiding that you used it is the problem, not using it.

Every day's `learn/NOTES.md` has this line, and it is **mandatory**:

```
**AI used?** yes / no — what for:
```

| How the work was produced | Allowed? | Effect on score |
| --- | --- | --- |
| **Self** — written by you, using docs and search | ✅ | Full marks available |
| **Self + AI explanation** — you asked AI to *explain* a concept, then wrote the code yourself | ✅ | Full marks available. This is smart learning. |
| **AI-assisted, declared** — AI wrote part of the code, you say exactly which part and can explain it line by line | ⚠️ | Capped at **7/10**. Only the parts you can defend count. |
| **AI-generated, declared** — "I asked AI and pasted it" | ⚠️ | Capped at **4/10** → 🔁 REDO by hand. No punishment beyond that. Honesty keeps you safe. |
| **AI-generated, undeclared** — presented as your own work | ❌ | **0/10**, day marked 🔁, and the whole week repeats on the second offence. |

### How the teacher can tell

Not by guessing. By these:

1. **The viva.** Any line, picked at random: *"what does this do, and what breaks if I delete it?"* AI-written code you did not write cannot survive two follow-up questions.
2. **Skill jump.** Code that uses `grid-template-areas` and CSS custom properties the day after you struggled with `margin` is a flag, not proof — it just triggers a longer viva.
3. **Commit shape.** Real work is built in several commits with mistakes in between. One giant perfect commit at 11:55 PM is a flag.
4. **`learn/NOTES.md` mismatch.** The "what I struggled with" section describing struggles the code shows no trace of.

None of these alone is an accusation. All of them lead to the same place: **explain your code out loud.** That is the real test, every time.

---

## ☑️ The checklist rule

Each day's `assignment/README.md` ends with a **Done when** checklist. That is your mark sheet.

**Tick a box only when you can point at the line in the file that satisfies it.**

If you cannot point at it, leave it unticked and write one sentence in `learn/NOTES.md` saying why.

| | Cost |
| --- | --- |
| Unticked box + honest note | Almost nothing — the teacher can see the attempt and knows where to help |
| Ticked box that is not done | The marks for that item, **and** the teacher now verifies every other claim you make |

Honesty is the cheaper option, every time.

---

## The viva (spot-check)

Short, verbal, no notes, 5–10 minutes. The teacher picks 2–3 lines from your code and asks:

- What does this line do?
- Why did you use *this* instead of the alternative?
- What happens if I delete it? Delete it — was I right?
- Change it to do X — live, now.

This is where the 3 "Understanding" points are won or lost. It is also exactly what a real job interview is, so you may as well get used to it now.

---

## Test material

Every day's `assignment/README.md` ends with a **"The teacher will ask you"** block: 3–5 questions plus a "prove it" task. Those questions are the pool the viva is drawn from. They are published in advance on purpose — there are no trick questions here, only questions you either did or did not do the reading for.

---

## Weekly & phase marks

- **Week score** = average of the 5 assignment scores, shown in [SCOREBOARD.md](SCOREBOARD.md).
- **Three gates now, not one.** A week passes only if **all three** clear:

| Gate | Threshold |
| --- | --- |
| Assignment average | ≥ 6.0 (W02) · **≥ 6.5 (W03+)** · **≥ 7.0 (Phase 2+)** |
| Test average | **≥ 7.0** |
| Drill average | **≥ 3.0 / 5** |

  Building it, fixing it, and knowing it are three different skills, and a week where one
  of them is missing is not a week you passed. The test gate is the strictest on purpose:
  it is the only score AI cannot help you with.

- **Environment test** — one per week, in [`env/`](env/). Terminal, git, DevTools, the
  tools of the job. Scored out of 10 and reported separately; **below 6 twice in a row and
  the week repeats**.
- **Phase exams** are scored out of 10 with the same rubric but are pass/fail gates: **7/10 minimum** to enter the next phase. Exam work goes in `weeks/week-NN/exam/` with an `EXAM.md` instead of the usual day files.

---

## For the teacher — marking a day

```bash
cp _template/ASSESSMENT.md weeks/week-01/day-2/ASSESSMENT.md
# fill it in, then update SCOREBOARD.md and the week page's score column
git add . && git commit -m "assess: week 1 day 2 — 7/10" && git push
```

Mark within 24 hours. Feedback a week late is not feedback.


---

## 🆕 What's new from W02 D3

You are logging **5–6 hours a day** against a plan written for 3. That gap is why this
changed. Four additions:

### 1. 🐛 The debug drill — 45 min, scored /5

You are handed working-ish code **you did not write**, with planted bugs. You fix it in
place and explain each bug: symptom, cause, fix, and **how you found it**.

This exists because of a simple fact about the job: **you will spend far more of your
career reading and repairing other people's code than writing your own from a blank
file.** Every assignment so far has started from nothing. That is the easy half, and it
is the half nobody pays for.

The `how I found it` line is marked. *"DevTools showed the rule struck through"* beats
*"I read it carefully"* — because one of those still works in a 40,000-line codebase.

### 2. 🧪 The daily test — 15–20 min, closed book, scored /10

No editor, no browser, no notes, **no AI**. Four sections: recall, predict-the-output,
spot-the-bug, and **defend a decision**.

That last section is the point of the whole thing. Up to now you have been asked *what
does `flex-basis` default to* — a question with one right answer that you can look up in
four seconds. From now on you also get: *you chose X, Y was available, argue for your
choice — then argue against it.* **Knowing the answer is junior. Defending a decision
under pushback is mid.** That is the gap this repo is named after.

**You mark your own test first.** Then I re-mark it.

| Your self-mark vs mine | Effect |
| --- | --- |
| Within 1.0 | **+0.5** on the day's assignment |
| More than 2.0 optimistic | **−0.5** |

Judging your own work accurately is what makes someone trustworthy without supervision,
and it is worth practising deliberately.

### 3. 📌 Standing rules — [STANDING-RULES.md](STANDING-RULES.md)

Taught once, then permanent, then unwarned. You were reminded about `box-sizing` five
times in nine days. On a team you get told once; the second time, people stop trusting
your work and start re-checking all of it.

### 4. 🗣️ Standup — three lines at the top of `learn/NOTES.md`

`Yesterday / Today / Blockers`. Every morning, before you start. Not marked as its own
score, but a missing standup costs Process marks — because turning up and saying what
you are doing is most of what a junior is actually judged on.

---

## The day, in full

| | Block | Time | Scored |
| --- | --- | --- | --- |
| 📖 | `learn/` | 1 hr | part of Process |
| 🛠️ | `assignment/` | 2½ hr | **/10** |
| 🐛 | `drill/` | 45 min | **/5** |
| 🧪 | `test/` | 15–20 min | **/10** |
| ✅ | ship checklist + `NOTES.md` | 30 min | part of Process |
| | **Total** | **≈ 5½ hr** | |
