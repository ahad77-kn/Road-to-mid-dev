# 🛠️ Assignment — Week 18 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 18](../../README.md)

## What to build

Prove the API works — from outside.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `todo-api.postman_collection.json` | every endpoint, happy path and errors |
| `curl.md` | the same requests as curl, with output |
| `test-results.md` | endpoint × case matrix, pass/fail |
| `README.md` | the API docs |

## ✅ Done when — this is the checklist you are marked against

- [ ] A Postman collection covering every endpoint, saved and **exported into the folder** (`day-5/todo-api.postman_collection.json`)
- [ ] Happy-path *and* error requests for each endpoint, each with a name saying what it tests
- [ ] Postman tests asserting status code and response shape
- [ ] A Postman environment variable for the base URL
- [ ] `day-5/curl.md` — the same requests as `curl` commands with their output, including `-i` to show headers
- [ ] A `README.md` for the API: setup, run, endpoint table, example requests and responses
- [ ] `day-5/test-results.md`: a matrix of every endpoint × every case (valid, invalid, missing, not found) with pass/fail

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Which of your endpoints was actually wrong when you tested it properly? (There is usually one.)
2. Explain the difference between 400, 401, 403, 404, 422 and 500 — and which of yours can return each.
3. How would you test that pagination is correct?
4. What is in the response headers of your POST, and what should be?
5. **Prove it:** import your Postman collection on my machine and run it against your server. Everything green.

---

[← back to the day](../) · [📖 read first](../learn/)
