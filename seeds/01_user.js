
module.exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(() => {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          uid: 'Tim Hurley'
        },
        {
          id: 2,
          uid: 'Bailey Hurley'
        },
        {
          id: 3,
          uid: 'Hunter Hurley'
        }
      ]);
    })
    .then(() => knex.raw('ALTER SEQUENCE user_id_seq RESTART WITH 4;'));
};
