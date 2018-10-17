
exports.up = function(knex, Promise) {
	return knex.schema.createTable('user', function (table) {
		table.uuid('id').primary().unique()
		table.string('name');
		table.string('email');
		table.timestamps(true, true);
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('user')
};
