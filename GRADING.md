# 📊 How work is marked

[← Back to the road](README.md)

Every assignment is scored **out of 10** by the teacher in an `ASSESSMENT.md` file placed inside the day's folder. Open any `weeks/week-NN/day-N/` folder and the score is right there next to the code.

---

## The rubric — 10 points

| # | Criterion | Points | What full marks looks like |
| --- | --- | --- | --- |
| 1 | **Requirements met** | 3 | Every item in the day's *Must have* checklist is done. Nothing skipped, nothing half-built. |
| 2 | **Code quality** | 2 | Sensible class/variable names, consistent indentation, no dead code, no magic numbers scattered around, no `div` soup. |
| 3 | **Understanding** | 3 | In the viva, you can explain *why* each part is written the way it is, and change it live when asked. This is the biggest single block of marks — on purpose. |
| 4 | **Process** | 2 | Correct folder, `LEARNED.md` filled in own words, committed and pushed the same day, clear commit message. |

**Pass mark: 6/10.** Below 6 the day is marked 🔁 REDO and repeated on day 6 or 7.

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

Every `LEARNED.md` has this line, and it is **mandatory**:

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
4. **`LEARNED.md` mismatch.** The "what I struggled with" section describing struggles the code shows no trace of.

None of these alone is an accusation. All of them lead to the same place: **explain your code out loud.** That is the real test, every time.

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

Every day on every week page has a **Test material** block: 3–5 questions plus a "prove it" task. Those questions are the pool the viva is drawn from. They are published in advance on purpose — there are no trick questions here, only questions you either did or did not do the reading for.

---

## Weekly & phase marks

- **Week score** = average of the 5 day scores, shown in [SCOREBOARD.md](SCOREBOARD.md).
- Week average below 6 → the week repeats.
- **Phase exams** are scored out of 10 with the same rubric but are pass/fail gates: **7/10 minimum** to enter the next phase. Exam work goes in `weeks/week-NN/exam/` with an `EXAM.md` instead of `LEARNED.md`.

---

## For the teacher — marking a day

```bash
cp _template/ASSESSMENT.md weeks/week-01/day-2/ASSESSMENT.md
# fill it in, then update SCOREBOARD.md and the week page's score column
git add . && git commit -m "assess: week 1 day 2 — 7/10" && git push
```

Mark within 24 hours. Feedback a week late is not feedback.
