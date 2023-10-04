const express = require('express');
const db = require('./db.js');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(
	cors({
		origin: 'http://localhost',
	})
);

app.use(
	cors({
		methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
	})
);

app.use(express.json());

app.use(logger);

function logger(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	// res.setHeader('Access-Control-Allow-Credentials', true);

	next();
}

// ROUTES //

// Root path
app.get('/', (req, res) => {
	res.send('API is available');
});

// Get all products
app.get('/get', (req, res) => {
	db.query('SELECT * FROM products', (err, result) => {
		if (err) {
			console.log(err);
		}
		res.send(result);
	});
});

// Create new product route
app.post('/create', (req, res) => {
	const sku = req.body.sku;
	const name = req.body.name;
	const price = req.body.price;
	const size = req.body.size;
	const weight = req.body.weight;
	const dimensions = req.body.dimensions;
	const type = req.body.type;

	db.query(
		'INSERT INTO products (SKU, Name, Price, Size, Weight, Dimensions, Type) VALUES (?,?,?,?,?,?,?)',
		[sku, name, price, size, weight, dimensions, type],
		(err, result) => {
			if (err) {
				console.log(err);
			}
			console.log(result);
			res.send(result);
		}
	);
});

// Delete product
app.post('/delete', (req, res) => {
	const SKU = req.body.SKU;

	db.query('DELETE FROM products WHERE SKU = ?', SKU, (err, result) => {
		if (err) {
			console.log(err);
		}
		console.log(result);
		res.send(result);
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});

module.exports = app;
