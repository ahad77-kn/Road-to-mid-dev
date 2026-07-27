# 🛠️ Assignment — Week 17 Day 3 · 2 hours

[← back to the day](../) · [📖 read first](../learn/) · [⬆ Week 17](../../README.md)

## What to build

The heart of the app.

## 📦 Hand in these files — in this folder

| File | What it is |
| --- | --- |
| `src/context/CartContext.jsx` | |
| `src/reducers/cartReducer.js` | pure and testable |

## ✅ Done when — this is the checklist you are marked against

- [ ] `CartContext` backed by `useReducer`
- [ ] Actions: `ADD_ITEM` (increments if already present), `REMOVE_ITEM`, `UPDATE_QTY`, `CLEAR_CART`
- [ ] A cart drawer/page: line items, per-line subtotal, quantity controls, remove
- [ ] Totals derived: subtotal, tax (17%), shipping (free above a threshold), grand total
- [ ] A live badge in the nav
- [ ] Persisted to localStorage — a refresh keeps the cart
- [ ] Empty-cart state with a link back to the catalogue
- [ ] A discount code field: `SAVE10` = 10% off, invalid codes show an error
- [ ] The reducer is a pure function in its own file and could be unit-tested without React

## 🎤 The teacher will ask you

> Out loud, no notes. Worth **3 of the 10 marks**.

1. What happens when you add a product already in the cart? Where is that logic?
2. Which cart numbers are stored and which are derived? Justify.
3. Why a reducer rather than `useState` here?
4. How would you unit-test the cart reducer with no browser?
5. **Prove it:** add 3 items, refresh, change a quantity to 0, apply a bad code, then a good one. Every step must behave.

---

[← back to the day](../) · [📖 read first](../learn/)
