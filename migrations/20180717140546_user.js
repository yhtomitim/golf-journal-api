
module.exports.up = (knex) => {
  return knex.schema.createTable('user', (table) => {
    table.increments('id').primary();
    table.text('uid').unique();
  });
};

module.exports.down = (knex) => {
  return knex.schema.dropTableIfExists('user');
};
