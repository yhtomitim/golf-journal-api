const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get('/', (req, res, next) => {
  res.send({
      message: 'welcome to the golf journal api, please see our docs'
    })
    .catch(next);
});

router.get('/holes', (req, res, next) => {
  queries.listHoles()
    .then(holes => res.json({holes}))
    .catch(next);
});

module.exports = router;