# 🛠️ Assignment — Week 18 Day 1 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 18](../../README.md)

## What to build

In `day-1/`, a small command-line tool — no HTTP yet.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `cli.js` | list / search / add / delete via process.argv |
| `contacts.json` | the data file it reads and writes |
| `node-notes.md` | 5 things Node has that the browser does not, and vice versa |

## ✅ Done when — this is the checklist you are marked against

- [ ] A CLI that reads a JSON file of contacts and supports `list`, `search <name>`, `add`, `delete <id>` via `process.argv`
- [ ] Data persisted to a JSON file with `fs/promises` — read, modify, write back
- [ ] ES modules (`"type": "module"` in `package.json`) — and a note on `require` vs `import` in `day-1/node-notes.md`
- [ ] `path.join` used for every file path — never string concatenation. Say why (cross-platform, and path traversal).
- [ ] Errors handled: missing file, corrupt JSON, bad arguments — each with a clear message and a non-zero exit code
- [ ] `day-1/node-notes.md`: five things that exist in Node but not the browser, and five the other way round

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is missing in Node that you rely on in the browser? Name five.
2. What is `process.argv`, and what are its first two elements?
3. Why `path.join` rather than `"./data/" + filename`?
4. What is `__dirname` and why does it not exist in ES modules? What replaces it?
5. **Prove it:** corrupt the JSON file, then run the tool. It must fail with a helpful message, not a stack trace dump.

---

[← back to the day](../) · [📖 read first](../learn/)
