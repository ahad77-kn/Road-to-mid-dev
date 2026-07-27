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

| Day | Assignment | Folder | Score |
| --- | --- | --- | --- |
| D1 | Atlas setup, concepts & first documents | [`day-1/`](day-1/) | – |
| D2 | 30 queries in `mongosh` — the raw database | [`day-2/`](day-2/) | – |
| D3 | Mongoose schemas, models & validation | [`day-3/`](day-3/) | – |
| D4 | Rebuild the to-do API on MongoDB | [`day-4/`](day-4/) | – |
| D5 | Relations, `populate`, indexes & aggregation | [`day-5/`](day-5/) | – |

---

## Day 1 — Concepts & setup

**Read first (1 hr):** MongoDB manual intro + Atlas getting started + *Documents*.

**Build (2 hr):**

**Must have**
- [ ] A free Atlas M0 cluster running, connection string in `.env` (**never** committed — check `git log` to be sure)
- [ ] Network access and a database user configured; note what you set and why in `day-1/setup.md`
- [ ] Connected from `mongosh` **and** from Compass
- [ ] A `learning` database with a `books` collection, 15 documents inserted by hand — deliberately give two of them an extra field the others do not have, then explain what that means
- [ ] `day-1/concepts.md` mapping the vocabulary: database / collection / document / field / `_id` — against the SQL words (table, row, column) and against JavaScript (array of objects)
- [ ] What an `ObjectId` is and what it contains (hint: a timestamp)
- [ ] `day-1/setup.md`: the exact steps you took, so you can repeat this in 5 minutes next time

**🧪 Test material**
1. Collection vs document vs field — map each to a JavaScript concept.
2. What is `_id`, who creates it, and what is embedded inside an `ObjectId`?
3. What does "schemaless" actually mean, and why is it dangerous without discipline?
4. Where is your connection string, and what would happen if it reached GitHub?
5. **Prove it:** insert a document from `mongosh` and see it appear in Compass without refreshing your understanding of where it went.

---

## Day 2 — The raw database

**Read first (1 hr):** MongoDB *CRUD* + *Query operators*.

**Build (2 hr):** 30 queries in `mongosh`, against a seeded dataset of 100+ documents. Save every query with its result in `day-2/queries.md`. **No Mongoose today** — knowing the layer underneath is what stops Mongoose being magic.

Cover: `insertOne`/`insertMany` · `find` with projection · `$gt`/`$lt`/`$gte`/`$in`/`$nin`/`$ne` · `$and`/`$or`/`$not` · `$regex` search · `$exists` · sort, limit, skip (pagination) · `countDocuments` · `updateOne` with `$set`/`$inc`/`$push`/`$pull` · `updateMany` · `upsert` · `deleteOne`/`deleteMany` · `distinct` · a two-stage aggregation with `$group` and `$sum` · `$match` + `$group` + `$sort` · `explain()` on one query, before and after adding an index

**Must have**
- [ ] All 30, each with the query, the result, and one line on what it demonstrates
- [ ] A seed script (`day-2/seed.js`) that generates realistic data
- [ ] Pagination proven: page 3 with 10 per page, and the correct total count
- [ ] `explain()` output before and after creating an index, with the docs-examined numbers compared

**🧪 Test material**
1. Difference between `updateOne` with `$set` and replacing the whole document?
2. How do you paginate, and what is the performance problem with a large `skip`?
3. What does `$push` vs `$addToSet` do?
4. Read me your `explain()` output — how many documents were examined before and after the index?
5. **Prove it:** I describe a query in English; you write it in `mongosh` in under 2 minutes.

---

## Day 3 — Mongoose

**Read first (1 hr):** Mongoose *Schemas*, *SchemaTypes*, *Validation*.

**Build (2 hr):** Models for a blog domain — `User`, `Post`, `Comment` — in `day-3/models/`.

**Must have**
- [ ] Every field typed, with `required`, `default`, `trim`, `lowercase`, `minlength`/`maxlength`, `min`/`max`, `enum` used where appropriate
- [ ] A custom validator (e.g. email format) with a clear message
- [ ] `timestamps: true` on every schema
- [ ] `unique: true` on email — and a note in `day-3/models.md` that this is an **index**, not a validator, and how its error differs (it surfaces as a driver error, not a Mongoose validation error). Handle both.
- [ ] A virtual field (e.g. `fullName`, or `commentCount`)
- [ ] An instance method and a static method, each used
- [ ] A `pre('save')` hook doing something visible (slug generation)
- [ ] A schema-level `toJSON` transform that removes `__v` and renames `_id` to `id` — so the API response shape is yours, not the database's
- [ ] `strict` mode understood: try to save an undeclared field and show what happens

**🧪 Test material**
1. What is a schema vs a model vs a document, in Mongoose?
2. Why is `unique: true` not really a validator? What error do you get on a duplicate?
3. Difference between an instance method, a static, and a virtual?
4. When does a `pre('save')` hook *not* run? (Hint: `updateOne`.) Why does that matter?
5. **Prove it:** try to save an invalid document. Show me the validation error object and how your API turns it into a 400.

---

## Day 4 — The to-do API, on a real database

**Read first (1 hr):** Mongoose *Queries* + *Middleware*.

**Build (2 hr):** Replace the in-memory array in your Week 19 API with MongoDB. **The API contract must not change** — the same endpoints, the same responses. Your React frontend must work untouched.

**Must have**
- [ ] Connection handled in one place with error handling and retry; the server does not start if the database is unreachable
- [ ] All CRUD through Mongoose in the **service** layer — controllers never touch the model directly
- [ ] `.lean()` used on read-only queries, with a comment on what it changes
- [ ] Filtering, search (`$regex`, case-insensitive), sorting and pagination all done in the **database**, not in JavaScript after fetching everything. Explain why that distinction matters at 100,000 records.
- [ ] Mongoose validation errors mapped to your API's 400 shape
- [ ] Invalid `ObjectId` handled → 400, not a 500 (`mongoose.isValidObjectId`)
- [ ] A seed script and an `npm run seed`
- [ ] Graceful shutdown closing the connection on `SIGINT`
- [ ] `day-4/migration.md`: what changed in your code, and everything that did **not** — that list is the value of the layered structure you built in Week 19

**🧪 Test material**
1. What did you have to change, and what did the layering save you from changing?
2. Why filter in the database instead of in JavaScript?
3. What does `.lean()` return, and what do you lose?
4. What happens on `GET /api/todos/not-an-id`? Show me.
5. **Prove it:** restart the server. The data is still there. Then point your Week 19 React app at it, unchanged, and use it.

---

## Day 5 — Relations, indexes & aggregation

**Read first (1 hr):** MongoDB *Data modelling*, *Embed vs reference*, *Indexes* + Mongoose *populate*.

**Build (2 hr):** Add relationships and make queries fast.

**Must have**
- [ ] Todos belong to a **list**, lists belong to a user: `Todo → List → User` via `ObjectId` refs
- [ ] `populate` used to fetch a todo with its list and owner — with `select` so you never over-fetch
- [ ] **One embedded relationship too** (e.g. comments/subtasks embedded in a todo) so you have built both patterns
- [ ] `day-5/modelling.md`: for each relationship, why you embedded or referenced. Use the real criteria — is it queried independently, is it unbounded in size, how often does it change, is it always needed together?
- [ ] Indexes on the fields you actually query (`owner`, `done`, `dueDate`, a text index for search), with `explain()` before/after evidence
- [ ] A compound index and an explanation of why field order matters in one
- [ ] An aggregation pipeline producing real statistics: todos per list, completion rate, overdue count, average time to complete
- [ ] The N+1 problem demonstrated (a loop of `findById`) and then fixed with `populate` or `$in`

**🧪 Test material**
1. Embed or reference — give me your decision rule in one sentence, then apply it to three examples I name.
2. What does `populate` actually do — one query or two?
3. What is the N+1 problem? Show me yours and the fix.
4. Why does field order matter in a compound index?
5. **Prove it:** show `explain()` for your dashboard query before and after indexing. Numbers, not opinions.

---

## ✅ End-of-week check

- [ ] You can model a domain and defend every embed/reference decision
- [ ] You never fetch a whole collection into JavaScript to filter it
- [ ] You index deliberately and can prove the effect
- [ ] Mongoose validation errors reach the client as clean 400s
- [ ] Your data survives restarts, deploys and your laptop dying

Next week: users, passwords and the week that most self-taught developers get wrong.
