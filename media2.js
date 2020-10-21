var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n1 = parseFloat(lines[0]);
var n2 = parseFloat(lines[1]);
var n3 = parseFloat(lines[2]);

var media = (n1 * 2 + n2 * 3 + n3 * 5) /10.0;

console.log(`MEDIA = ${media.toFixed(1)}`);
