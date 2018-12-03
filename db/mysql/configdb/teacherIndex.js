var mysql = require('mysql');

var db = require('../conn');

var teachers = require('./teachers.js');
teachers.createTable();
teachers.selectAll();
teachers.addData({name:"mansour"});


