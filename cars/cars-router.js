const express = require('express');
// const knex = require('knex');

const db = require('../data/db-config');

// const db = knex({
// 	client: 'sqlite3',
// 	connection: {
// 		filename: './data/cars.db3',
// 	},
// 	useNullAsDefault: true,
// });

const router = express.Router();

router.get('/', (req, res) => {
	db('cars')
		.then((cars) => {
			res.json(cars);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to retrieve cars' });
		});
});

router.get('/:id', (req, res) => {
	db('cars')
		.where({ id: req.params.id })
		.first()
		.then((cars) => {
			if (cars) {
				res.status(200).json({ data: cars });
			} else {
				res.status(400).json({ message: 'Cars not found' });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: 'Failed to retrieve cars' });
		});
});

router.post('/', (req, res) => {
	const carRouter = req.body;

	db('cars')
		.insert(carRouter)
		.then((cars) => {
			res.status(201).json(cars);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new car' });
		});
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	db('cars')
		.where({ id })
		.update(changes)
		.then((count) => {
			if (count) {
				res.json({ update: count });
			} else {
				res.status(404).json({ message: 'Invalid ID' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error updating', err });
		});
});

router.delete('/:id', (req, res) => {
	db('cars')
		.where({ id: req.params.id })
		.del()
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ message: 'Car deleted successfully' });
			} else {
				res.status(404).json({ message: 'Car not found' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Sorry ran into an error' });
		});
});

module.exports = router;
