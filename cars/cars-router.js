const express = require('express');
const knex = require('knex');

const db = knex({
	client: 'sqlite3',
	connection: {
		filename: './data/cars.db3',
	},
	useNullAsDefault: true,
});

const router = express.Router();

router.get('/', (req, res) => {});

router.get('/:id', (req, res) => {});

router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
