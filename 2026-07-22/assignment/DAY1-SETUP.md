# Day 1 Setup — do these in order

## 1. Create GitHub account
- Go to https://github.com/signup
- Username: pick something professional — this becomes your portfolio URL (e.g. `firstname-lastname` or `firstnamelastname-dev`). No `coolboy123`.
- Verify your email.

## 2. Install Git
- Windows: https://git-scm.com/download/win (install with defaults)
- Check it works:
```bash
git --version
```

## 3. Tell Git who you are
```bash
git config --global user.name "Your Name"
git config --global user.email "same-email-as-github@example.com"
```

## 4. Create the repo on GitHub
- GitHub → New repository
- Name: `road-to-mid-dev`
- Public ✓ (portfolio must be visible)
- Do NOT add a README from GitHub (we have our own)

## 5. Connect this folder and push
Open a terminal inside the `learning-repo` folder:
```bash
git init
git add .
git commit -m "day 1: repo setup"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/road-to-mid-dev.git
git push -u origin main
```
GitHub will ask you to log in the first time — follow the browser prompt.

## 6. Verify
Open `https://github.com/YOUR-USERNAME/road-to-mid-dev` in the browser.
You must see: README, `_template/`, and today's dated folder. If yes — setup done.

## 7. Start the real work
Remaining time today = **Week 1, Day 1** from the curriculum:
build a business card in HTML/CSS inside this `assignment/` folder
(`card.html` + `card.css`). Then fill `LEARNED.md` and push again:
```bash
git add .
git commit -m "day 1: business card assignment"
git push
```

Send the teacher one thing only: the repo link. Nothing else counts.
