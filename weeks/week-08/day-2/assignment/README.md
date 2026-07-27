# 🛠️ Assignment — Week 08 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 08](../../README.md)

## What to build

Restructure your apps into real ES modules in `day-2/`.

Suggested shape:
```
day-2/todo/
├── index.html
├── main.js          ← wiring only
├── state.js         ← the data + update functions
├── render.js        ← all DOM output
├── storage.js       ← localStorage helpers
└── utils.js         ← shared small functions
```

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `todo/` | main.js, state.js, render.js, storage.js, utils.js |
| `quiz/` | same treatment |
| `architecture.md` | which module imports which, and why this beats one big file |

## ✅ Done when — this is the checklist you are marked against

- [ ] `<script type="module">` — and a note in `LEARNED.md` on why the page must be served (`npx serve` or Live Server) instead of opened via `file://`
- [ ] Named exports used mostly; **one** default export, with a comment on when each is appropriate
- [ ] No module reaches into another module's internals — everything crosses through exports
- [ ] `state.js` exports functions, not the raw mutable array — the state is not directly reachable from outside
- [ ] Same for the quiz app
- [ ] `day-2/architecture.md`: a diagram (ASCII is fine) of which module imports which, and one paragraph on why this beats one 400-line file

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Why does `file://` break ES modules? What does the error look like?
2. Named vs default exports — practical difference, and which is easier to refactor?
3. What does "modules are singletons" mean — if two files import `state.js`, how many copies of the state exist?
4. Are module scripts deferred by default? What does that mean for where you put the tag?
5. **Prove it:** move one function to a different module and update the imports, live, without breaking the app.

---

[← back to the day](../) · [📖 read first](../learn/)
