//#region  librerias, dependencias y scripts 
const express = require('express');
const path = require('path');
const database = require('../../database/connectionToTheDatabase');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config({path : path.resolve(__dirname, '../security/env')});
//#endregion
const ru = express();


module.exports = ru;