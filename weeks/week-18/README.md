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

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Node basics — modules, fs, a CLI tool | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | Raw `http` server, then the same in Express | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | REST route design — the to-do API contract | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | Full CRUD to-do API (in-memory) | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | Test everything with Postman + curl; status codes | [📄 open →](day-5/) | – |

---

## ✅ End-of-week check

- [ ] You can build a REST API from an empty folder without a tutorial
- [ ] You design the contract before writing handlers
- [ ] Your status codes are deliberate, not always 200
- [ ] Your API cannot be crashed by bad input
- [ ] You test with Postman/curl as a matter of course, not as an afterthought

Next week: middleware, error handling, and the moment your own React app talks to your own API.
