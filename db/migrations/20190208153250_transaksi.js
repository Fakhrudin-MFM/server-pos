exports.up = function(knex, Promise) {
  return knex.schema.createTable('transaksi', function(table) {
    table.increments();
    table.integer('jumlah');
    table.integer('barang_id');
    table.integer('karyawan_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('transaksi');
};
