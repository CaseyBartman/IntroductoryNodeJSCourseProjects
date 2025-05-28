'use strict'

var http = require('http'); 
var fs = require('fs');

// http.createServer(function(req, res) { //Our callback is this function
//     res.writeHead(200, {'Content-Type' : 'text/html'}) //tells the browser what you are getting back is plain text
//     var html = fs.readFileSync(__dirname+ '/index.html', 'utf8');
//     var message = 'Hello world...'
//     html = html.replace('{Message}', message);
//     res.end(html); //So, our browser at localhost:1337 will have the text 'Hello world'
// }).listen(1337, '127.0.0.1'); //1337 is the port we choose

// //With streams now
// http.createServer(function(req, res) { //Our callback is this function
    // res.writeHead(200, {'Content-Type' : 'text/html'}) //tells the browser what you are getting back is plain text
    // fs.createReadStream(__dirname+ '/index.html', 'utf8').pipe(res); //Piping to our response stream!
// }).listen(1337, '127.0.0.1'); //1337 is the port we choose

//With JSON 
http.createServer(function(req, res) { //Our callback is this function
    if (req.url === '/api') {
        res.writeHead(200, {'Content-Type' : 'application/json'}); //tells the browser what you are getting back is an application/json
        var obj = { 
            firstname: 'John', 
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    } else if (req.url === '/api'){
        // es.writeHead(200, {'Content-Type' : 'text/html'}) //tells the browser what you are getting back is plain text
        fs.createReadStream(__dirname+ '/index.html', 'utf8').pipe(res); //Piping to our response stream!
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(1337, '127.0.0.1'); //1337 is the port we choose