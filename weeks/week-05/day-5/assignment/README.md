# 🛠️ Assignment — Week 05 Day 5 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 05](../../README.md)

## What to build

A complete contact book in `day-5/contacts.js` — an array of contact objects, driven entirely from the console.

Required: `addContact` · `deleteContact(id)` · `updateContact(id, changes)` · `searchByName(query)` (case-insensitive, partial match) · `searchByCity(city)` · `listAll()` (sorted) · `groupByCity()` · `exportToJSON()` and `importFromJSON(str)`

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `contacts.js` | the whole contact book + a demo run at the bottom |

## ✅ Done when — this is the checklist you are marked against

- [x] Each contact: `id`, `name`, `phone`, `email`, `city`, `tags` (array)
- [x] Unique IDs generated, not hard-coded
- [x] Immutable updates throughout — no direct mutation, ever
- [x] Search is partial and case-insensitive (`"ah"` finds `"Ahad"`)
- [x] Validation: reject a contact with no name or a phone shorter than 10 chars, with a clear message
- [x] `groupByCity()` returns `{ Lahore: [...], Karachi: [...] }` — built with `reduce`
- [x] At least 10 contacts and a demo run at the bottom of the file exercising every function

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. Why generate IDs instead of using the array index?
2. How does your update function avoid mutating? Show the line.
3. Walk me through `groupByCity`'s `reduce` — what is the accumulator on each step?
4. What does `JSON.stringify` do to a `Date`, a function, and `undefined` inside your object?
5. **Prove it:** I name a new feature — "find all contacts with the tag *work*" — write it in under 3 minutes.

---

[← back to the day](../) · [📖 read first](../learn/)
