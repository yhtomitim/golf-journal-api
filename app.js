const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./router/routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/v1', routes);

// app.use('/', (req, res, next) => {
//   res.send({ message: 'welcome to the golf journal api, please use /api/v1 as the base endpoint' })
//     .catch(next);
// });


app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  });
});

module.exports = app;
