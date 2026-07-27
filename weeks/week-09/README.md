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
- [How to read API documentation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Client-side_web_APIs/Introduction)
- **Never commit an API key.** Read [GitHub: about secret scanning](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning). Frontend keys are visible to users regardless — this is a real limitation you will fix with your own backend in Phase 5.

---

## 🗓️ The week at a glance

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Movie search — list results from OMDb | [`day-1/`](day-1/) | – |
| D2 | Movie detail view + shareable URLs | [`day-2/`](day-2/) | – |
| D3 | Debounce, abort, cache, pagination | [`day-3/`](day-3/) | – |
| D4 | Phase project part 1 — build it | [`day-4/`](day-4/) | – |
| D5 | Phase project part 2 — finish, harden, deploy | [`day-5/`](day-5/) | – |
| — | **Phase 2 exam** (two parts) | [`exam/`](exam/) | – |

---

## Day 1 — Movie search

**Read first (1 hr):** MDN *Using Fetch* again + the [OMDb docs](https://www.omdbapi.com/) (free key, arrives by email in a minute).

**Build (2 hr):** A search box; type a film name, get a grid of results.

**Must have**
- [ ] Search form → results grid (poster, title, year, type)
- [ ] Loading skeleton, error state, and a "no results found" empty state — all three visibly different
- [ ] Missing posters handled with a placeholder — the API returns `"N/A"`, which is not a URL
- [ ] API key kept in a separate `config.js` that is **gitignored**, with a `config.example.js` committed instead. Note in the README that a frontend key is still visible to users and why.
- [ ] All API code in `api.js`; render code cannot see `fetch`
- [ ] The API's own error shape handled (`{ Response: "False", Error: "Movie not found!" }`) — a 200 response that is still a failure. Note this in your README: **HTTP success ≠ application success.**

**🧪 Test material**
1. What is the data shape OMDb returns for a search? Draw it from memory.
2. The API returns 200 with `Response: "False"`. Why is checking only `response.ok` not enough?
3. Where does your API key live, and who can still see it?
4. What happens when the poster URL is `"N/A"` — what did you do?
5. **Prove it:** search for `asdkjhasd`. Then break your key deliberately. Both must show sensible, different messages.

---

## Day 2 — Detail view & real URLs

**Read first (1 hr):** MDN *URLSearchParams* + *History API*.

**Build (2 hr):** Click a movie → full detail view. Plot, cast, ratings, runtime, genre, awards.

**Must have**
- [ ] Detail fetched by IMDb ID on click (a second endpoint — read the docs for it)
- [ ] A back button returning to results **without re-fetching** the search
- [ ] The URL updates with `history.pushState` (`?s=batman&id=tt0372784`) so the page is **shareable** — pasting that URL into a new tab loads the same view
- [ ] Browser back/forward buttons work correctly (`popstate`)
- [ ] Loading and error states on the detail view too
- [ ] Long plots truncated with a "read more" toggle

**🧪 Test material**
1. What does `history.pushState` do, and what does it *not* do (hint: no request is made)?
2. How do you read `?s=batman` out of the URL on page load?
3. What is `popstate` and why do you need it?
4. Why is a shareable URL a feature, not a nice-to-have?
5. **Prove it:** copy your URL into a fresh incognito tab. The same movie must load.

---

## Day 3 — Make it feel professional

**Read first (1 hr):** MDN *AbortController* + *Debounce*.

**Build (2 hr):** Same app, four upgrades — this is the day the app stops feeling like a student project.

**Must have**
- [ ] **Search-as-you-type, debounced 400ms** — you write the debounce function yourself, no library
- [ ] **`AbortController`** cancels the in-flight request when a new keystroke arrives. Show in the Network tab that old requests are cancelled, not just ignored.
- [ ] **A cache**: searching the same term twice hits a `Map`, not the network. Show the Network tab proving zero requests on a repeat search.
- [ ] **Pagination**: OMDb returns 10 per page — add "Load more" or numbered pages using `totalResults`
- [ ] Recent searches saved to localStorage and shown as clickable chips
- [ ] `day-3/performance.md`: how many requests a naive version makes for the word "batman" typed at normal speed, vs yours. Count both from the Network tab.

**🧪 Test material**
1. What is debouncing? Explain it as if to a non-programmer, then show your implementation.
2. Debounce vs throttle — when is each right?
3. What is a race condition here — how can a *slower earlier* request overwrite a *faster later* one? How does `AbortController` fix it?
4. What is your cache's invalidation strategy? What could go stale?
5. **Prove it:** type "batman" fast with the Network tab open. Show me the cancelled requests.

---

## Day 4 — Phase project, part 1

**Read first (1 hr):** the docs of whichever API you choose.

**Build (2 hr):** **Your choice, built alone**, no tutorial:
- **Prayer times app** ([AlAdhan API](https://aladhan.com/prayer-times-api)) — city search, today's times, next-prayer countdown, monthly view
- **Currency converter** ([Frankfurter](https://frankfurter.dev/) or [exchangerate.host](https://exchangerate.host/)) — convert, swap, historical rate chart, offline last-known rates
- **Weather app** ([Open-Meteo](https://open-meteo.com/en/docs)) — city search, current + 7-day forecast, geolocation

**Must have (day 4)**
- [ ] `PLAN.md` written **before** any code: the features, the API endpoints you will use, the data shape you expect back, and your file structure
- [ ] Core happy path working end to end
- [ ] Modules: `api.js`, `render.js`, `state.js`, `main.js`
- [ ] No tutorial for this specific app. Docs and MDN only — declare it honestly.

**🧪 Test material**
1. Show me your PLAN.md and where reality differed from it.
2. What was the hardest thing to work out from the API docs?
3. What is the data shape the API returns? Draw it without looking.
4. Which parts did you reuse from earlier weeks?

---

## Day 5 — Phase project, part 2

**Read first (1 hr):** MDN *CORS* + OWASP *XSS prevention*.

**Build (2 hr):** Finish it to a standard you would show an employer.

**Must have**
- [ ] Every state handled: loading, error, empty, offline, invalid input
- [ ] Fully responsive (Phase 1 skills — do not let them rot)
- [ ] Keyboard accessible, visible focus states, sensible `alt` text
- [ ] No `innerHTML` with API data anywhere — or properly escaped, and you can explain the risk
- [ ] Deployed on GitHub Pages / Netlify, link in the README
- [ ] `README.md`: screenshot, what it does, which API, how to run it, and a "what I would add next" section
- [ ] Lighthouse: Performance and Accessibility both ≥ 90, screenshot in the folder
- [ ] Tested on a real phone

**🧪 Test material**
1. What is CORS, in one sentence? What does the error look like, and can you fix it from the frontend?
2. Where could an XSS bug enter your app, and what stops it?
3. What is the slowest part of your app? How do you know? (Network tab, not a guess.)
4. What would you add with another week?
5. **Prove it:** hand your phone to someone and watch them use it without instructions. Note where they hesitate — that is your next fix.

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
