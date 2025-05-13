const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;
app.set('puerto', port);
app.use(morgan('dev'));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH, HEAD');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(require('./src/routes/users.js'));
app.use(require('./src/routes/products.js'));
app.listen(app.set('puerto'), () => {
    console.log(`El servidor esta corriendo http://localhost:${port}`);
});