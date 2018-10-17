const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: uuidv4(), name: 'root', email: 'root@gmail.com'},
        {id: uuidv4(), name: 'admin1', email: 'admin1@gmail.com'},
        {id: uuidv4(), name: 'admin2', email: 'admin2@gmail.com'}
      ]);
    });
};
