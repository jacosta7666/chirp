"use strict";

module.exports = function(app) {
    app.route('/')
        .get(function(req, res) {
           // res.send("Hello, you coded a lot just to display a simple message");
           // res.send('view engine', 'jade');
            app.get('./views/layout', function (req, res)
            {
                res.render('layout.jade');
            });

            //use jade file
        })
};
