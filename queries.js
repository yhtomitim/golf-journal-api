const knex = require('./connection');

module.exports = {
  listHoles() {
    return knex('hole');
  }
};