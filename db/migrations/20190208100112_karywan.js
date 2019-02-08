exports.up = function(knex, Promise) {
  return knex.schema.createTable('karyawan', function(table) {
    table
      .integer('id')
      .primary()
      .unique();
    table.string('nama');
    table.string('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('karyawan');
};
