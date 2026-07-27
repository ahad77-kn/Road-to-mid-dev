# Week 20 — MongoDB & Mongoose

[← The Road](../../README.md) · Phase 5 · Backend · [Scoreboard](../../SCOREBOARD.md) · [Grading](../../GRADING.md) · [Library](../../RESOURCES.md)
**Prev:** [← Week 19](../week-19/) · **Next:** [Week 21 — Auth →](../week-21/)

> **Goal:** data that survives a restart — and a data model you designed on purpose rather than by accident.

**Why this week matters:** every app you have built loses everything when the process stops. MongoDB is a document database: it stores JSON-like documents, which maps naturally onto the objects you already think in. The easy part is CRUD — you will have that by Tuesday. The part that actually matters, and the part interviewers probe, is **modelling**: what is one document, what is embedded, what is referenced, and what needs an index.

**Warning about MongoDB's flexibility:** "no schema required" is a trap. A collection where half the documents have `dueDate` and half have `due_date` is a bug factory. You will use Mongoose schemas from Day 3 and treat them as a real contract.

---

## 📖 Learning material — 1 hr/day

| Day | Read + do | Source |
| --- | --- | --- |
| D1 | [MongoDB: What is MongoDB](https://www.mongodb.com/docs/manual/) · [Atlas: getting started](https://www.mongodb.com/docs/atlas/getting-started/) · [Documents & BSON](https://www.mongodb.com/docs/manual/core/document/) | MongoDB |
| D2 | [CRUD operations](https://www.mongodb.com/docs/manual/crud/) · [Query operators](https://www.mongodb.com/docs/manual/reference/operator/query/) · [mongosh](https://www.mongodb.com/docs/mongodb-shell/) | MongoDB |
| D3 | [Mongoose: schemas](https://mongoosejs.com/docs/guide.html) · [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) · [Validation](https://mongoosejs.com/docs/validation.html) | Mongoose |
| D4 | [Mongoose: queries](https://mongoosejs.com/docs/queries.html) · [Middleware/hooks](https://mongoosejs.com/docs/middleware.html) | Mongoose |
| D5 | [Data modelling](https://www.mongodb.com/docs/manual/data-modeling/) · [Embed vs reference](https://www.mongodb.com/docs/manual/data-modeling/concepts/embedding-vs-references/) · [Indexes](https://www.mongodb.com/docs/manual/indexes/) · [Mongoose: populate](https://mongoosejs.com/docs/populate.html) | MongoDB / Mongoose |

### 📰 Articles worth your time this week
- [MongoDB: Schema design anti-patterns](https://www.mongodb.com/developer/products/mongodb/schema-design-anti-pattern-massive-arrays/) — the mistakes you would otherwise make
- [The 6 rules of thumb for schema design](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design)
- [OWASP: NoSQL injection](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/05.6-Testing_for_NoSQL_Injection) — yes, NoSQL injects too. Read it Wednesday.
- [MongoDB Atlas free tier](https://www.mongodb.com/pricing) — M0 is free forever and enough for everything in this course

**Setup:** use [Atlas](https://www.mongodb.com/docs/atlas/getting-started/) (free, hosted, works from anywhere) and install [MongoDB Compass](https://www.mongodb.com/products/compass) to see your data visually.

---

## 🗓️ The week at a glance

| Day | Assignment | Open | Score |
| --- | --- | --- | --- |
| [**D1**](day-1/) | Atlas setup, concepts & first documents | [📄 open →](day-1/) | – |
| [**D2**](day-2/) | 30 queries in `mongosh` — the raw database | [📄 open →](day-2/) | – |
| [**D3**](day-3/) | Mongoose schemas, models & validation | [📄 open →](day-3/) | – |
| [**D4**](day-4/) | Rebuild the to-do API on MongoDB | [📄 open →](day-4/) | – |
| [**D5**](day-5/) | Relations, `populate`, indexes & aggregation | [📄 open →](day-5/) | – |

---

## ✅ End-of-week check

- [ ] You can model a domain and defend every embed/reference decision
- [ ] You never fetch a whole collection into JavaScript to filter it
- [ ] You index deliberately and can prove the effect
- [ ] Mongoose validation errors reach the client as clean 400s
- [ ] Your data survives restarts, deploys and your laptop dying

Next week: users, passwords and the week that most self-taught developers get wrong.
