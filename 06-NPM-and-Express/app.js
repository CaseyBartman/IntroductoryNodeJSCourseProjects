// var moment = require('moment');
// console.log(moment().format("ddd, hA"));
var express = require('express');
var app = express();

var port = process.env.PORT || 3000; 


//Say I want to add static files like HTML or CSS to my application
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next(); // Means "run next middleware!" This runs the next get request!
})

app.get('/', function(req, res) {
    //res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello World!</h1></body></html>');
    res.render('index');
})

app.get('/person/:id', function(req, res) {
    //res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Person: ' + req.params.id + 'World!</h1></body></html>');
        res.render('person', {ID: req.params.id});
})

app.get('/api', function(req, res) {
    res.json({ firstname: 'Casey', lastname: 'Bartman'});
});
app.listen(port);