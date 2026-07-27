# 🛠️ Assignment — Week 17 Day 2 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 17](../../README.md)

## What to build

`/product/:id` — the page that has to sell the thing.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/pages/ProductDetail.jsx` | |
| `src/components/RelatedProducts.jsx` | |

## ✅ Done when — this is the checklist you are marked against

- [ ] Full details: large image, title, price, description, rating, category, stock
- [ ] Quantity selector with min/max validation
- [ ] "Add to cart" with visible feedback (toast or animation)
- [ ] "Related products" from the same category
- [ ] Breadcrumbs reflecting the real navigation path
- [ ] A shareable URL; refresh loads correctly
- [ ] Invalid id → a proper not-found page
- [ ] Images: correct `aspect-ratio`, `object-fit`, lazy loading below the fold, a blur/skeleton placeholder

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. How do you prevent layout shift while the image loads? (Name the metric this affects.)
2. What happens on a direct visit to `/product/999999`?
3. Where does "add to cart" state go, and what does the user see?
4. How are related products fetched — one request or many?

---

[← back to the day](../) · [📖 read first](../learn/)
