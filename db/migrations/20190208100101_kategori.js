exports.up = function(knex, Promise) {
  return knex.schema.createTable('kategori', function(table) {
    table
      .increments()
      .primary()
      .unique();
    table.string('nama');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kategori');
};
