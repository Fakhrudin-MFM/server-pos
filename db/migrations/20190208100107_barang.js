exports.up = function(knex, Promise) {
  return knex.schema.createTable('barang', function(table) {
    table.increments();
    table.string('nama');
    table.string('harga');
    table.integer('kategori_id', 11);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('barang');
};
