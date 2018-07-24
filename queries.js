const knex = require('./connection');

module.exports = {
  listHoles() {
    return knex('hole');
  },
  saveHole(hole) {
    console.log(hole);
    
    return knex('hole')
      .insert(hole)
      .returning('*')
      .then(record => record[0]);
  },
  listRounds() {
    return knex('round');
  },
  roundsByUserId(userId) {
    return knex('round')
      .where('user_id', userId.userid)
      .then(rounds => rounds);
  },
  newRound(userId) {
    return knex('round')
      .insert(userId)
      .returning('id')
      .then(record => record[0]);
  },
   findUser(user) {
    return knex('user')
      .where('uid', user.uid)
      .then(foundUser => foundUser[0]);
  },
  createUser(user) {
    return knex('user')
      .insert(user)
      .returning('*')
      .then(record => record[0]);
  },
  listUsers() {
    return knex('user');
  },
};