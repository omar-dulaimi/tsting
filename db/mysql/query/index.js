var mysql = require('mysql');

var db = require('../conn');

var createAdmin = require('./admin.js');

createAdmin.createAdminTable();
var createParents = require('./parents.js');
createParents.createTable();

