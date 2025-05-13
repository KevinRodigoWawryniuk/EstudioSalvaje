const mysql = require('mysql');
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'es'
});
console.log('base de datos conectada'); 
module.exports = database;