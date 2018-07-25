const knex = require('./connection');

module.exports = {
  listHoles() {
    return knex('hole');
  },
  saveHole(hole) {
    return knex('hole')
      .insert(hole)
      .returning('*')
      .then(record => record[0]);
  },
  getHolesForRound(round) {
    return knex('hole')
      .where('round_id', round.roundId)
      .then(holes => holes);
  },
  listRounds() {
    return knex('round');
  },
  roundsByUserId(user) {
    return knex('round')
      .where('user_id', user)
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