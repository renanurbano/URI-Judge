var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var pi = 3.14159;
var raio = parseFloat(lines);
var area = pi * (raio * raio);

console.log('A=' + area.toFixed(4));
