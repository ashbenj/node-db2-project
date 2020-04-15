exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex('cars')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('cars').insert([
				{
					vin: '1G1JC124627237595',
					make: 'Chevrolet',
					model: 'Cavalier',
					mileage: '1000',
				},
				{
					vin: '1GBJ7D1B4BV132373',
					make: 'Chevrolet',
					model: 'C6500',
					mileage: '1001',
				},
				{
					vin: 'JTDBE30K620061417',
					make: 'Toyota',
					model: 'Camry',
					mileage: '1002',
				},
				{
					vin: 'JH4DA9350PS016433',
					make: 'Acura',
					model: 'Integra',
					mileage: '1003',
				},
				{
					vin: '4A3AK24FX6E028812',
					make: 'Mitsubishi',
					model: 'Eclipse',
					mileage: '1004',
				},
				{
					vin: 'JH4KA8160NC005601',
					make: 'Acura',
					model: 'Legend',
					mileage: '1005',
				},
				{
					vin: '2CNBJ13C3Y6924710',
					make: 'Chevrolet',
					model: 'Tracker',
					mileage: '1006',
				},
				{
					vin: '1GKFK16K0RJ736886',
					make: 'GMC',
					model: 'Suburban',
					mileage: '1007',
				},
				{
					vin: '3HGCM56364G702777',
					make: 'Honda',
					model: 'Accord',
					mileage: '1008',
				},
				{
					vin: 'JF2AC53B3GE202643',
					make: 'Subaru',
					model: 'GL',
					mileage: '1009',
				},
			]);
		});
};
