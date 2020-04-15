exports.up = function (knex, Promise) {
	//the change we want to make to our schema
	return knex.schema.createTable('cars', (tbl) => {
		tbl.increments();
		tbl.integer('vin', 128).unique().notNullable();
		tbl.text('make', 128).notNullable();
		tbl.text('model', 128).notNullable();
		tbl.integer('mileage', 128).notNullable();
		tbl.text('transmission');
		tbl.text('title');
	});
};

exports.down = function (knex, Promise) {
	//undoing that change
	return knex.schema.dropTableIfExists('cars');
};
