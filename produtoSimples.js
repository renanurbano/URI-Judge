var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines[0]);
var B = parseInt(lines[1]);

var prod = A * B;

console.log('PROD = ' + prod);
