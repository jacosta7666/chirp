"use strict";
var users = require('./controllers/users');
module.exports = function(app) {
    app.route('/')
        .get(function(req, res) {
           // res.send("Hello, you coded a lot just to display a simple message");
              res.render('layout');



        });
    app.get('/users', users.allusers);

};
