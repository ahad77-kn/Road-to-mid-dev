# 🎓 Phase 5 Exam — Backend

[🛣️ The Road](../../../README.md) · [📅 Week 21](../README.md) · [🏆 Scoreboard](../../../SCOREBOARD.md) · [📏 Grading](../../../GRADING.md) · [📚 Library](../../../RESOURCES.md)

◀ [Day 5](../day-5/) · [⬆ Week 21](../README.md)

**Gate:** you need **7/10** to unlock Phase 6.
**Format:** Take-home, 2 days + a 30-minute viva. Docs allowed, no AI for the code.
**Status:** ⬜ not taken

---

## 📋 The task

Build a **notes API**: users, signup/login, full CRUD on notes, MongoDB, each user seeing only their own notes — plus a minimal React frontend.

Then the viva: explain the auth flow end to end, explain one query, explain one middleware line by line, and **add a small feature live**.

## ✅ Passing means

- Proper password hashing
- Working auth middleware
- Ownership enforced on every query
- Validation and a consistent error shape
- README with the endpoint table + a Postman collection

### ❌ Automatic fail, regardless of everything else

- A password stored in a recoverable form
- A route that trusts a client-supplied user id
- A query that does not filter by owner

## 🤖 AI in exams

**None.** Not for explanation, not for code, not for debugging. Docs and search only, and only where the format above allows them. An exam is the one place where the point is to find out what *you* can do unaided.

## 📤 How to submit

```bash
cd weeks/week-21/exam
cp ../../../_template/EXAM.md ./EXAM.md
# build here, then:
cd ../../..
git add . && git commit -m "week 21 exam: phase 5" && git push
```

## 📂 Files in this folder

| File | Who writes it | Required |
| --- | --- | --- |
| Your exam code | you | ✅ |
| `EXAM.md` (spec, result, teacher's marks) | you + teacher | ✅ |

---

◀ [Day 5](../day-5/) · [⬆ Week 21](../README.md)
