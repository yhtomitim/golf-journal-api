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

router.post('/savehole', (req, res, next) => {
  queries.saveHole(req.body)
    .then(record => res.status(201).json({ message: 'hole saved' }))
    .then(record => console.log(req.body))
    .catch(next);
});

router.get('/rounds', (req, res, next) => {
  queries.listRounds()
    .then(rounds => res.json({rounds}))
    .catch(next);
});

router.get('/rounds/:userid', (req, res, next) => {
  console.log(req.params.userid);
  queries.roundsByUserId(req.params.userid)
    .then(rounds => res.status(200).json({ rounds }))
    .then(rounds => console.log(rounds.body));
});
router.post('/newround', (req, res, next) => {
  queries.newRound(req.body)
    .then(record => res.status(201).json(record))
    .catch(next);
});

router.get('/users', (req, res, next) => {
  queries.listUsers()
    .then(users => res.json({ users }))
    .catch(next);
});

router.get('/users/:uid', (req, res, next) => {
  console.log(req.params);
  queries.findUser(req.params)
    .then(user => {
      console.log(user);
      if (user !== undefined) {
        res.json({
          user
        });
      } else {
        queries.createUser(req.params)
          .then(user => res.status(201).json({
            user
          }));
      }
    })
    .catch(next);
});

module.exports = router;