exports.up = function(knex, Promise) {
  return knex.schema.createTable('transaksi', function(table) {
    table
      .integer('id')
      .primary()
      .unique();
    table.integer('jumlah');
    table.integer('barang_id');
    table
      .foreign('barang_id')
      .references('id')
      .inTable('barang')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.integer('karyawan_id');
    table
      .foreign('karyawan_id')
      .references('id')
      .inTable('karyawan')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('transaksi');
};
