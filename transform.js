var through = require('through');

var toUpper = function(buffer) {
  this.queue(buffer.toString().toUpperCase());
}

process.stdin.pipe(through(toUpper)).pipe(process.stdout);


/*  // Their solution

var through = require('through');
var tr = through(function(buf) {
  this.queue(buf.toString().toUpperCase());
});

process.stdin.pipe(tr).pipe(process.stdout);

*/
