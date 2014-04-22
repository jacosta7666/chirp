/**
 * Created by Air on 4/22/14.
 */
var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'stb'
});

console.log('MySQL Connection details  '+connection);

http.createServer(function (request, response)
{
    console.log('Creating the http server');
    connection.query('SELECT * FROM user',[1, 2], function(err, rows, fields)
    {
        console.log('Connection result error '+err);
        console.log('no of records is '+rows.length);
        response.writeHead(200, { 'Content-Type': 'application/json'});
        response.end(JSON.stringify(rows));
        response.end();
    });

}).listen(3000);

//SELECT id, content FROM test WHERE id IN (?,?)
//works will only pull up userid 1
//    connection.query('SELECT * FROM user WHERE iduser = 1',[1, 2], function(err, rows, fields)