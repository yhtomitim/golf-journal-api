# Golf Journal API

A Node.js API built using Express. API uses Knex.js to query a PostgreSQL database. The client-side source code used to consume this API can be found [here](https://github.com/yhtomitim/golf-journal-client).

## Build Setup

```bash
#install dependendencies

$ npm install

#run dev server with hot reload

$ npm run dev

```
### Overview

The API interfaces with a PostgreSQL database using Knex.js so that the developer can write their queries in a familiar language. There are routes in the API for users, rounds of golf, and holes in each round of golf. The API can be tested using Postman or other similar apps.
