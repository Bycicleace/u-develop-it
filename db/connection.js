const mysql = require('mysql2');

// Connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '@.}Ntvh{07bL,+jSW8Bx',
        database: 'election'
    }
);

module.exports = db;