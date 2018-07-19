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
      .returning('*')
      .then(record => record[0]);
  }
};