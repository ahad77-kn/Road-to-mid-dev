# 🧾 Assessment — Week 02 · Day 3

**Assignment:** Build the classic holy-grail page layout in CSS Grid.
**Submitted:** 2026-08-05 16:23 (commit `bce2d0e`) — ☑ same day
**Reviewed by:** Adil on 2026-08-12

---

## Score

| Block | Given |
| --- | --- |
| 🛠️ **Assignment** | **8.25 / 10** |
| 🐛 **Drill** | **3.0 / 5** |
| 🧪 **Test** | **7.0 / 10** (capped — see below) |

| # | Criterion | Max | Given |
| --- | --- | --- | --- |
| 1 | Requirements met | 3 | **2.75** |
| 2 | Code quality | 2 | **1.5** |
| 3 | Understanding | 3 | **2.5** |
| 4 | Process | 2 | **2.0** |
| | Standing rules | | **−0.5** |
| | **TOTAL** | **10** | **8.25** |

## 🏁 Verdict: ✅ PASS — and **the only one of these six days you did in full**

You did the assignment, the drill **and** the test. On Days 4 and 5 you deleted those folders. More on that in [Day 4](../day-4/ASSESSMENT.md) — but this day is the proof that you *can* do all three, so it is not a capacity problem.

---

## 🔬 Verified in the browser

**The footer really is pinned.** I measured it rather than trusting the CSS:

```
.container  min-height: 800px (= 100vh)   height: 800px   top: 0
rows        69px  →  582px (1fr)  →  85px
footer      bottom = 784px, flush against the container's 1rem padding ✅
```

The middle row absorbed **582px** of free space. `grid-template-rows: auto 1fr auto` + `min-height: 100vh` is exactly the right pair, and it works.

**`grid-template-areas` parses and applies** — computed value is `"header header header" "left main right" "footer footer footer"`. Three rows, three names each, no silent discard. After yesterday's drill where one short row destroyed a whole page, you counted your columns. That is the drill doing its job the very next hour.

**`minmax(180px, 1fr) 3fr minmax(180px, 1fr)`** — this is better than the brief asked for. The rails get a real floor and the main column takes three shares. Nobody told you to do that.

**All 5 boxes ticked, all 5 verified true.** Third day running.

---

## 🔧 What cost you 1.5

**Standing rules — −0.5**

| Rule | Break |
| --- | --- |
| S2 | No `<meta name="viewport">` — the only one of your six pages missing it |
| S3 | No `:focus-visible` anywhere |

**Not responsive** — it overflows by **212px at 320px** and **52px at 480px**. Not marked down, because responsive is Week 3's job and this was Week 2. Noted because you fixed exactly this six days later on W3 D1.

`why-grid.md` is four bullets rather than three sentences, and it is unmistakably **your** writing — *"two diamensional layouts"*, terse, correct. Worth saying out loud, because five days later that voice disappears from your files. See the [state of play](../../../STATE-OF-PLAY.md).

---

## 🐛 Drill — 3.0 / 5

**You found 5 of the 6 planted bugs**, and the causes are right:

| # | Your finding | |
| --- | --- | --- |
| 1 | areas row had 2 names, needs 3 | ✅ cause right; you put it in the HTML, it is in the CSS |
| 2 | `side` → `sidebar` | ✅ |
| 3 | `gap: 20 px` — the space | ✅ |
| 4 | rows → `auto 1fr auto` | ✅ |
| 5 | `min-height: 100vh` on `.layout` | ✅ |
| 6 | logo has no size limit | ⚠️ real, but not one of mine |

The one you missed was the standing-rule bug: the masthead uses **`<h3>` as the site title above the `<h1>`**, and the logo `<img>` **has no `alt`**. You looked at the CSS and never audited the HTML.

**"How I found it" was the best part.** *"by counting them"*, *"by comparing the names"*, *"inspect image size in browser"* — those are methods, and methods scale. That is exactly what that line is for.

### Why 3.0 and not 4.5

Your declaration: *"used for my understandings about the broken css and broken html… this was first time so got help of ai to solve it."*

**"Got help of AI to solve it"** is the one thing the drill rules exclude — explaining a property is free, finding the bugs is not. I am not giving you 0, because it is your first drill, you declared it plainly, and the write-ups are in your own words with your own methods. **This is the warning, not the penalty.**

**Next drill: no AI at all, at any point.** If you are stuck after 45 minutes, write "stuck on bug 4, here is what I tried" and hand it in. A drill with 3 bugs found honestly beats 6 found with help, every time — because I need to know what *you* can see.

## 🧪 Test — 7.0 / 10

**Your raw answers were 10 out of 10.** Every one correct — A1–A4, B1–B3 (including the 200/400/200 split and `grid-column: 2 / 4` being two tracks), both spot-the-bugs, and a genuine two-sided answer on D1.

**Capped to 7.0 because it was not closed book.** You wrote: *"this was my first time i used help of ai so i cant mark, u mark me."*

That is honest and I would rather have it than a fake 10. But the daily test is the **one score AI cannot help with** — it exists precisely to measure what is in your head with everything closed. An AI-assisted 10 tells us nothing; an unaided 6 tells us everything.

**No honesty bonus** this time, because you did not self-mark. Next test: close everything, set a 15-minute timer, write your own mark at the bottom. Land within 1.0 of mine and you get **+0.5** on the day.

---

## ▶️ Fixes — 10 minutes

1. `<meta name="viewport" content="width=device-width, initial-scale=1">`
2. `:focus-visible` on the nav links

---

**The one sentence:** *This is your best-run day of the six — the only one where you did every block, and the drill visibly made the assignment better within the hour. The problem is what happened on the days after it.*
