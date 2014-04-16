/**
 * Created by Air on 4/15/14.
 */
var express = require('express');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//sets where the programs state is at ie development (more control_ ie production (less)

var app = express();
//start express
var config = require('./lib/config');



app.listen(config.port, function() {
    console.log('running on port ' + config.port);

});

//expose the app to export
exports = module.exports = app;

