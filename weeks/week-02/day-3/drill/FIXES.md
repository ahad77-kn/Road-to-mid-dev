# Fixes — Week 02 Day 3 drill

**AI used?** yes ✅ / no — what for:  used for my understandigs about the broken css and broken html ,how they are ,for what, etc. this was first time so got help of ai to solve it.

> Explaining a property you did not recognise is fine. Asking it to find
> the bugs is 0 for the drill.

---

### Bug 1 — 
- **File / line:**  html / line 20
- **Symptom:** footer does not appear
- **Cause:** grid template colums has 3 colums but footer has 2
- **Fix:** added one more footer
- **How I found it:** by counting them

### Bug 2 — 
- **File / line:** css / 32
- **Symptom:** name was mismatch or in wrong place
- **Cause:** layout use sidebar but css says side
- **Fix:** changed from side to sidebar
- **How I found it:** by comparing the names

### Bug 3 — 
- **File / line:** css / 21
- **Symptom:** gap not working
- **Cause:** css not allow spacing 
- **Fix:** removed the space between 20 and px
- **How I found it:** when it is ignored no space so must be a bug here

### Bug 4 — 
- **File / line:** css / 16
- **Symptom:** footer appears directly not at bottom
- **Cause:** middle row does not grow 
- **Fix:** made it auto 1fr auto
- **How I found it:** footer was not at bottom so must be bug there

### Bug 5 — 
- **File / line:** css / 10,22
- **Symptom:** footeris no at bottom
- **Cause:** body has min height 100 but layout has no
- **Fix:** added min-height:100vh; to .layout
- **How I found it:** the element controlling the container needs height

### Bug 6 — 
- **File / line:** css / 32
- **Symptom:** logo takes much space breaks header
- **Cause:** img has no size restriction 
- **Fix:** add .masthead img { width:80px;}
- **How I found it:** inspect image size in browser.
