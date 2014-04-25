"use strict";

var express = require('express'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    config = require('./config');

module.exports = function (app) {

    //app.engine('jade', require('jade').renderFile);
    app.set('view engine', 'jade');
    app.use(morgan({format: 'dev'}));
    app.use(errorHandler());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(methodOverride());
    app.set('views', config.root + './views');
};