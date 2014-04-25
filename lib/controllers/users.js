"use strict";
var sql = require('./../sql').connection();

exports.allusers = function(req, res, next){
    sql.query('SELECT * FROM user',[1, 2], function(err, rows, fields)
    {
        console.log('Connection result error '+err);
        console.log('no of records is '+rows.length);
        res.json(200, rows);
    });

};