# Week 09 — Real APIs → Phase 2 Exam

[← The Road](../../README.md) · Phase 2 · JavaScript, Seriously · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 08](../week-08/) · **Next:** [Week 10 — Git & GitHub →](../week-10/)

> **Goal:** build a complete app against an API you have never used, from a one-paragraph spec, alone.

**Why this week matters:** this is the shape of most real frontend work — read someone else's API docs, work out the data shape, handle every way it can fail, and put it on screen. Do this well and you can already be useful on a real team.

---

## 📖 Learning material — 1 hr/day

| Day | Read | Source |
| --- | --- | --- |
| D1 | [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) (second pass) · [OMDb API docs](https://www.omdbapi.com/) | MDN / OMDb |
| D2 | [MDN: `URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) · [MDN: History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) | MDN |
| D3 | [MDN: `AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) · [Debounce explained](https://developer.mozilla.org/en-US/docs/Glossary/Debounce) | MDN |
| D4 | [Open-Meteo docs](https://open-meteo.com/en/docs) · [AlAdhan API](https://aladhan.com/prayer-times-api) — pick your project's API and read its docs properly | API docs |
| D5 | [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) · [OWASP: XSS prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) | MDN / OWASP |

### 📰 Articles worth your time this week
- [public-apis](https://github.com/public-apis/public-apis) — the list to browse for project ideas
- [MDN: HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) — you should now know 200/201/400/401/403/404/429/500 cold
- [How to read API documentation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction)
- **Never commit an API key.** Read [GitHub: about secret scanning](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning). Frontend keys are visible to users regardless — this is a real limitation you will fix with your own backend in Phase 5.

---

## 🗓️ The week at a glance

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Movie search — list results from OMDb | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | Movie detail view + shareable URLs | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | Debounce, abort, cache, pagination | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | Phase project part 1 — build it | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | Phase project part 2 — finish, harden, deploy | [📄 open →](day-5/) | – |
| — | **Phase 2 exam** (two parts) | [📄 exam →](exam/) | – |

---

## 🎓 Phase 2 Exam — two parts

**Part A — 1 hour, no internet, no notes, no AI.** Five logic problems, console only:
1. Reverse the words in a sentence, keeping punctuation
2. Find all duplicates in an array and count each
3. Sum every number value in a nested object, at any depth
4. Group an array of objects by a given key
5. Given a list of transactions, return the running balance array

**Part B — 2 hours, docs allowed, no AI.** The teacher writes a one-paragraph spec for a small app against an API you have never used. You build it live.

**Passing (7/10 minimum):** the app works, states are handled, and you can explain **every line** out loud.

```bash
mkdir -p weeks/week-09/exam && cp _template/EXAM.md weeks/week-09/exam/EXAM.md
```

**Pass → Phase 3 unlocked.**

---

## ✅ End-of-week check

- [ ] You can read unfamiliar API docs and be fetching within 20 minutes
- [ ] Loading / error / empty / offline states are automatic in everything you build
- [ ] You debounce, abort and cache without being told
- [ ] You have 3 deployed apps with real URLs
- [ ] You can explain a race condition and how you prevent it

**Phase 2 done — the hard part is behind you.** Next: working like a professional, with Git, branches and pull requests.
