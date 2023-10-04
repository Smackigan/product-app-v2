const mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'scandiwebapp',
});

module.exports = db;
