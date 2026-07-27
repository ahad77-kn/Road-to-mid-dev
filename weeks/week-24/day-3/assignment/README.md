# 🛠️ Assignment — Week 24 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 24](../../README.md)

## What to build

Get the API live. **Expect problems** — this is why it is Wednesday.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `deployment.md` | every step and every problem you hit, with its fix |
| `prod-postman-run.png` | your collection green against production |

## ✅ Done when — this is the checklist you are marked against

- [ ] API deployed on [Render](https://render.com/docs) (or Railway/Fly)
- [ ] Production MongoDB Atlas cluster, separate from your development one, with a seeded demo dataset
- [ ] Every env var set in the host's dashboard — nothing hardcoded, nothing committed
- [ ] Atlas network access configured correctly (not `0.0.0.0/0` unless the host requires it — and if so, note the mitigation)
- [ ] CORS allowing your production frontend origin only
- [ ] HTTPS working
- [ ] A health endpoint monitored (a free uptime checker)
- [ ] `NODE_ENV=production`; stack traces not leaking to clients — verify by triggering an error in production
- [ ] Postman collection run against the **production** URL, all green
- [ ] `day-3/deployment.md`: every step, and every problem you hit with its fix. You will need this document the next time.

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What broke in production that worked locally? (Something always does.)
2. Where do your production secrets live?
3. Trigger a 500 in production — what does the client see, and what do the logs show?
4. What happens on a free-tier cold start, and what does the user experience?

---

[← back to the day](../) · [📖 read first](../learn/)
