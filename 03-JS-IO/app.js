var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding : 'utf8', highWaterMark: 2 * 1024 });
var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');
var compressed = fs.createWriteStream(__dirname + '/greetcopy.txt.gz');

var gzip = zlib.createGzip(); //A transfom stream that is readable and writeable!
readable.pipe(writeable); //The pipe function returns the destination!
readable.pipe(gzip).pipe(compressed);