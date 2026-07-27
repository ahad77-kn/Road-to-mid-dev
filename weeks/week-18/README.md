# Week 18 — Node.js & Express: Building the API

[← The Road](../../README.md) · Phase 5 · Backend · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 17](../week-17/) · **Next:** [Week 19 — Middleware & full stack →](../week-19/)

> **Goal:** build the thing you have been `fetch`ing from for nine weeks.

**Why this week matters:** a mid-level developer understands both sides of `fetch`. Node runs your JavaScript outside the browser; Express turns it into an HTTP API. Nothing new about the *language* this week — same JavaScript, different environment. What is new is that **you** now decide the contract: the routes, the status codes, the response shapes.

**The mental shift:** in the browser, your code reacts to a user. On a server, your code reacts to a *request* — from anyone, at any time, possibly hostile, possibly malformed. Every assumption you can make in the browser disappears.

---

## 📖 Learning material — 1 hr/day

| Day | Read + type | Source |
| --- | --- | --- |
| D1 | [Node.js: Introduction](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) · [Differences between Node and the browser](https://nodejs.org/en/learn/getting-started/differences-between-nodejs-and-the-browser) | Node docs |
| D2 | [Node: HTTP module](https://nodejs.org/api/http.html) · [Express: getting started](https://expressjs.com/en/starter/installing.html) | Node / Express |
| D3 | [Express: Routing](https://expressjs.com/en/guide/routing.html) · [MDN: HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) · [restfulapi.net](https://restfulapi.net/) | Express / MDN |
| D4 | [MDN: Express/Node tutorial part 4 — routes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) | MDN |
| D5 | [MDN: HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) · [Postman: getting started](https://learning.postman.com/docs/getting-started/introduction/) | MDN / Postman |

### 📰 Articles worth your time this week
- [Node: The event loop, again — but server-side](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick) — same concept, higher stakes: one blocking loop freezes *every* user
- [Google: API design guide — resource naming](https://cloud.google.com/apis/design/resource_names)
- [RFC 9457: Problem Details for HTTP APIs](https://www.rfc-editor.org/rfc/rfc9457.html) — a standard error shape; adopt it
- [Express: Production best practices](https://expressjs.com/en/advanced/best-practice-performance.html) — skim now, revisit in Week 24

---

## 🗓️ The week at a glance

| Day | Assignment | Open the assignment | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Node basics — modules, fs, a CLI tool | [📄 day-1 →](day-1/) | – |
| [**D2**](day-2/) | Raw `http` server, then the same in Express | [📄 day-2 →](day-2/) | – |
| [**D3**](day-3/) | REST route design — the to-do API contract | [📄 day-3 →](day-3/) | – |
| [**D4**](day-4/) | Full CRUD to-do API (in-memory) | [📄 day-4 →](day-4/) | – |
| [**D5**](day-5/) | Test everything with Postman + curl; status codes | [📄 day-5 →](day-5/) | – |

---

## Day 1 — Node without a browser

📄 **[Open this day's assignment page →](day-1/)**




**Read first (1 hr):** Node *Introduction* + *Differences between Node and the browser*.

**Build (2 hr):** In `day-1/`, a small command-line tool — no HTTP yet.

**Must have**
- [ ] A CLI that reads a JSON file of contacts and supports `list`, `search <name>`, `add`, `delete <id>` via `process.argv`
- [ ] Data persisted to a JSON file with `fs/promises` — read, modify, write back
- [ ] ES modules (`"type": "module"` in `package.json`) — and a note on `require` vs `import` in `day-1/node-notes.md`
- [ ] `path.join` used for every file path — never string concatenation. Say why (cross-platform, and path traversal).
- [ ] Errors handled: missing file, corrupt JSON, bad arguments — each with a clear message and a non-zero exit code
- [ ] `day-1/node-notes.md`: five things that exist in Node but not the browser, and five the other way round

**🧪 Test material**
1. What is missing in Node that you rely on in the browser? Name five.
2. What is `process.argv`, and what are its first two elements?
3. Why `path.join` rather than `"./data/" + filename`?
4. What is `__dirname` and why does it not exist in ES modules? What replaces it?
5. **Prove it:** corrupt the JSON file, then run the tool. It must fail with a helpful message, not a stack trace dump.

---

## Day 2 — From raw `http` to Express

📄 **[Open this day's assignment page →](day-2/)**




**Read first (1 hr):** Node *Anatomy of an HTTP transaction* + Express *Getting started*.

**Build (2 hr):** Write the same tiny server twice.

**Must have**
- [ ] `day-2/raw-server.js` using only Node's `http` module: routes for `/`, `/about`, `/api/health`, plus a 404 — with manual URL parsing, manual method checks, manual `Content-Type` headers and manual JSON stringifying
- [ ] `day-2/express-server.js` — the identical API in Express
- [ ] `day-2/comparison.md`: what Express removed, line by line. Be specific.
- [ ] `nodemon` (or `node --watch`) set up as `npm run dev`
- [ ] A `PORT` read from `process.env.PORT` with a fallback — and a note on why hardcoding a port breaks deployment
- [ ] `express.json()` added and demonstrated with a POST that echoes the body — then **remove it** and show the body is `undefined`. That five-minute experiment prevents a bug you would otherwise hit twice a year.

**🧪 Test material**
1. What does Express actually give you over the `http` module?
2. What are `req` and `res` — what is the single most important thing you must do with `res`?
3. What does `express.json()` do? What happens without it?
4. What happens if you send two responses to one request?
5. **Prove it:** start the raw server and the Express server on different ports; `curl` both and show identical output.

---

## Day 3 — Designing the contract

📄 **[Open this day's assignment page →](day-3/)**




**Read first (1 hr):** Express *Routing* + MDN *HTTP methods* + restfulapi.net.

**Build (2 hr):** Design before implementing. `day-3/API.md` is today's real deliverable.

**Must have**
- [ ] `API.md` documenting every endpoint of the to-do API **before** you write it:

| Method | Path | Purpose | Request body | Success | Errors |
| --- | --- | --- | --- | --- | --- |
| GET | `/api/todos` | list, with `?done=&search=&page=` | – | 200 + array | 400 bad query |
| POST | `/api/todos` | create | `{title, dueDate?}` | 201 + created | 400 validation |
| GET | `/api/todos/:id` | one | – | 200 | 404 |
| PUT | `/api/todos/:id` | replace | full object | 200 | 400, 404 |
| PATCH | `/api/todos/:id` | partial update | partial | 200 | 400, 404 |
| DELETE | `/api/todos/:id` | remove | – | 204 | 404 |

- [ ] The exact JSON shape of a todo, a list response, and an **error** response — one consistent error shape for the whole API
- [ ] Justification for each status code chosen
- [ ] `express.Router()` used to mount routes at `/api/todos` from a separate file
- [ ] Route skeletons implemented, each returning a hardcoded example matching the doc

**🧪 Test material**
1. `PUT` vs `PATCH` — what is the actual difference, and which do your clients need?
2. Why 201 for create, and what header should accompany it?
3. Why 204 for delete rather than 200?
4. What does *idempotent* mean? Which of your endpoints are, and which are not?
5. **Prove it:** hand me API.md. I should be able to write a frontend against it without asking a single question.

---

## Day 4 — Full CRUD

📄 **[Open this day's assignment page →](day-4/)**




**Read first (1 hr):** MDN *Express tutorial — routes*.

**Build (2 hr):** Implement the API for real. Data in an in-memory array (the database arrives in Week 20).

**Must have**
- [ ] All six endpoints working exactly as documented
- [ ] Validation on create and update: title required, 1–200 chars, `done` must be boolean, `dueDate` a valid date. Invalid input → 400 with a message naming the **field**.
- [ ] 404 for a missing id, on every endpoint that takes one
- [ ] `GET /api/todos` supports `?done=true`, `?search=`, `?sort=`, `?page=&limit=` — combinable
- [ ] The list response includes pagination metadata (`{ data, page, limit, total, totalPages }`)
- [ ] Ids generated server-side (`crypto.randomUUID()`); a client-supplied id is ignored — say why in a comment
- [ ] Route handlers stay thin: validation and business logic live in separate functions
- [ ] Nothing crashes the server. Malformed JSON, missing body, wrong types, huge payloads — all return a clean error.

**🧪 Test material**
1. What happens if a client POSTs `{"title": 12345}`? Show me.
2. Why generate the id on the server?
3. How do you combine three query filters without a mess of `if`s?
4. What does your API return for `GET /api/todos?page=999`?
5. **Prove it:** I will try to crash your server with five malformed requests. It must survive all five.

---

## Day 5 — Test it like a client would

📄 **[Open this day's assignment page →](day-5/)**




**Read first (1 hr):** MDN *status codes* + Postman docs.

**Build (2 hr):** Prove the API works — from outside.

**Must have**
- [ ] A Postman collection covering every endpoint, saved and **exported into the folder** (`day-5/todo-api.postman_collection.json`)
- [ ] Happy-path *and* error requests for each endpoint, each with a name saying what it tests
- [ ] Postman tests asserting status code and response shape
- [ ] A Postman environment variable for the base URL
- [ ] `day-5/curl.md` — the same requests as `curl` commands with their output, including `-i` to show headers
- [ ] A `README.md` for the API: setup, run, endpoint table, example requests and responses
- [ ] `day-5/test-results.md`: a matrix of every endpoint × every case (valid, invalid, missing, not found) with pass/fail

**🧪 Test material**
1. Which of your endpoints was actually wrong when you tested it properly? (There is usually one.)
2. Explain the difference between 400, 401, 403, 404, 422 and 500 — and which of yours can return each.
3. How would you test that pagination is correct?
4. What is in the response headers of your POST, and what should be?
5. **Prove it:** import your Postman collection on my machine and run it against your server. Everything green.

---

## ✅ End-of-week check

- [ ] You can build a REST API from an empty folder without a tutorial
- [ ] You design the contract before writing handlers
- [ ] Your status codes are deliberate, not always 200
- [ ] Your API cannot be crashed by bad input
- [ ] You test with Postman/curl as a matter of course, not as an afterthought

Next week: middleware, error handling, and the moment your own React app talks to your own API.
