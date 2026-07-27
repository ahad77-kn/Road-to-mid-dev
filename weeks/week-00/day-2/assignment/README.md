# 🛠️ Assignment — Week 00 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 00](../../README.md)

## What to build

Open Chrome DevTools → **Network** tab. Visit three different websites and study the traffic. Create `day-2/http-notes.md` documenting what you found.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `http-notes.md` | method, status, content type and size for 3 sites + your definitions |
| `headers.png` | a screenshot of one request's request/response headers |

## ✅ Done when — this is the checklist you are marked against

- [ ] For each of 3 sites: the request **method**, **status code**, **content type**, and **size** of the main document
- [ ] A screenshot of one request's **headers** (request + response), saved in the folder
- [ ] Your own one-line explanation of these methods: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
- [ ] Your own one-line explanation of these codes: `200`, `301`, `304`, `400`, `401`, `403`, `404`, `500`
- [ ] Find and record one real `404` and one real `301` in the wild

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What is the difference between `401` and `403`? Give a real-life example of each.
2. Why is `GET` not supposed to change anything on the server?
3. What does a request **header** carry that the URL does not?
4. **Prove it:** run `curl -I https://github.com` and explain three of the response headers you get back.

---

[← back to the day](../) · [📖 read first](../learn/)
