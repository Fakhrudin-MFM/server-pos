exports.up = function(knex, Promise) {
  return knex.schema.createTable('barang', function(table) {
    table
      .integer('id')
      .primary()
      .unique();
    table.string('nama');
    table.string('harga');
    table.integer('kategori_id');
    table
      .foreign('kategori_id')
      .references('id')
      .inTable('kategori')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('barang');
};
