"use strict";
var mysql = require('mysql');
exports.connection = function(){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'stb'
    });
    return connection;
};