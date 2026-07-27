# Week 23 — Capstone: Build the Frontend, Connect Everything

[← The Road](../../README.md) · Phase 6 · Capstone · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 22](../week-22/) · **Next:** [Week 24 — Deploy & demo →](../week-24/)

> **Goal:** by Friday, someone can sign up, log in, and complete the app's main job, end to end, on your laptop.

**Why this week matters:** this is the week the project becomes real. It is also the week scope creep kills projects. **The rule for the whole week: no new features.** Build exactly what is in Week 22's Must list. Every "wouldn't it be cool if…" goes into a `IDEAS.md` file and is dealt with after graduation, not now.

**Work in vertical slices.** Do not build all the components, then all the pages, then all the wiring. Build one complete feature — UI, API call, loading, error, success — and finish it. Then the next. A half-finished feature is worth nothing; a finished small one is worth everything.

---

## 📖 Learning material — 1 hr/day

| Day | Read | Source |
| --- | --- | --- |
| D1 | Re-read your own Week 12–16 notes — no new material this week | your repo |
| D2 | [react.dev: Thinking in React](https://react.dev/learn/thinking-in-react) — one more time | react.dev |
| D3 | [react.dev: Keeping components pure](https://react.dev/learn/keeping-components-pure) · [react.dev: Choosing state structure](https://react.dev/learn/choosing-the-state-structure) | react.dev |
| D4 | [web.dev: Learn Forms](https://web.dev/learn/forms) — UX of real forms | web.dev |
| D5 | [MDN: Debugging a full-stack app](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) · [Express: security best practices](https://expressjs.com/en/advanced/best-practice-security.html) | MDN / Express |

**No heavy new reading this week on purpose.** All the material you need is already in [RESOURCES.md](../../RESOURCES.md) and in your own notes. This week is execution.

---

## 🗓️ The week at a glance

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Frontend skeleton — routing, layout, auth pages | [`day-1/`](day-1/) | – |
| D2 | Main feature, vertical slice #1 | [`day-2/`](day-2/) | – |
| D3 | Vertical slices #2 and #3 | [`day-3/`](day-3/) | – |
| D4 | Remaining Must-haves + all edge states | [`day-4/`](day-4/) | – |
| D5 | Full end-to-end pass; fix everything found | [`day-5/`](day-5/) | – |

> Log progress daily in `day-N/progress.md`: what shipped, what broke, what is next. That log becomes your demo script in Week 24.

---

## Day 1 — Skeleton & auth

**Build (3 hr):**

**Must have**
- [ ] Vite React app in `/client`, running against your local API
- [ ] React Router: every route from your Week 22 plan, with a root layout, nested layouts and a 404
- [ ] Signup, login and logout pages, fully working against the real API
- [ ] `AuthContext` holding the user; token attached via one fetch/axios wrapper — never repeated per call
- [ ] `<ProtectedRoute>` with return-to-intended-page after login
- [ ] Auto-logout and redirect on any 401, with a "session expired" message
- [ ] A shared layout: nav (showing the logged-in user), footer, main area
- [ ] A base design: CSS variables for colour and spacing, typography scale, button and input components. Decide the look **today** and stop deciding it later.

**🧪 Test material**
1. Show me signup → login → protected page → logout, without a hitch.
2. Where does the token live and why?
3. What happens if the API is down when the app loads?
4. Which components will every page reuse?

---

## Day 2 — First vertical slice

**Build (3 hr):** One complete feature — your app's single most important action.

**Must have**
- [ ] The full loop: list → create → view detail → edit → delete, all against the real API
- [ ] Loading skeletons, error states with retry, and an empty state — all three
- [ ] Form validation on the client, with server validation errors mapped to the right fields
- [ ] Success feedback (toast) on every mutation
- [ ] Confirmation before any destructive action
- [ ] Fully responsive
- [ ] `day-2/progress.md`: what shipped, what took longest, what you cut

**Definition of done for a slice:** a person who has never seen the app can complete this action on a phone, and every wrong turn shows a helpful message.

**🧪 Test material**
1. Demo the slice end to end on a phone-sized viewport.
2. Break it deliberately — no network, invalid input, a deleted record. All must fail gracefully.
3. What is duplicated between this slice and the next one? Should it be extracted yet?

---

## Day 3 — Slices two and three

**Build (3 hr):** The next two Must-have features, to the same standard.

**Must have**
- [ ] Both slices complete, with all states
- [ ] Shared UI extracted into reusable components once you have seen the pattern **twice** — not before. (Premature abstraction is its own bug.)
- [ ] Consistent visual language across all three slices
- [ ] Role-based UI where relevant — and the server enforcing it independently
- [ ] All API errors surfaced usefully; nothing fails silently
- [ ] `day-3/progress.md`

**🧪 Test material**
1. What did you extract, and what did you deliberately leave duplicated? Why?
2. Where is state shared between slices — is that the right place?
3. Which slice took longest and what would you do differently?

---

## Day 4 — Finish the Musts, handle the edges

**Read first (1 hr):** web.dev *Learn Forms*.

**Build (2 hr):** Everything still on the Must list, plus every unhappy path.

**Must have**
- [ ] Every Must-have story from Week 22 is done. Tick them off in `PROJECT.md` explicitly.
- [ ] Search, filter, sort and pagination wherever your app needs them — done **server-side**
- [ ] Every list has an empty state that tells the user what to do next
- [ ] Every form: labels, keyboard operable, visible focus, disabled-while-submitting, no double-submit
- [ ] Long text truncated cleanly; long lists paginated; large numbers formatted
- [ ] A user account page: change name, change password, delete account (with confirmation and the correct data cleanup)
- [ ] `day-4/edge-cases.md`: 20 things a user could do wrong, and what your app does about each

**🧪 Test material**
1. Give me your 20 edge cases and demonstrate five at random.
2. What happens if a user opens the app in two tabs and edits the same record?
3. What happens when they submit a form twice quickly?
4. Which Must-have was cut, if any, and why?

---

## Day 5 — The full pass

**Read first (1 hr):** MDN full-stack debugging + Express security best practices.

**Build (2 hr):** Use your own app, as a stranger would, and fix everything you find.

**Must have**
- [ ] Complete run-through from a **brand new account**: signup → main job → every feature → account deletion. Write down every friction point as you go.
- [ ] All bugs found are fixed or logged in `day-5/known-issues.md` with a severity
- [ ] Someone else (a family member, a friend) uses it while you watch **without helping**. Record what they struggled with — that list is more valuable than your own opinion of the app.
- [ ] `helmet` and rate limiting added to the API
- [ ] Every `console.log` removed from production code paths
- [ ] No secrets anywhere in the repo — audit the whole history
- [ ] `day-5/testing.md`: a matrix of every feature × every state (loading, error, empty, success, unauthorised) with pass/fail

**🧪 Test material**
1. What did your test user struggle with?
2. What is the worst remaining bug?
3. Show me the security audit result.
4. Is it ready to deploy? What is honestly not finished?

---

## ✅ End-of-week check

- [ ] Every Must-have story is done
- [ ] A stranger can sign up and complete the app's main job unaided
- [ ] Every state is handled — no white screens, no silent failures
- [ ] It works on a phone
- [ ] You have a written list of known issues rather than a vague feeling

Next week: deploy it, document it, and prepare to defend it.
