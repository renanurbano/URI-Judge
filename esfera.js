var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var pi = 3.14159;
var raio = parseFloat(lines[0]);

var esfera = (4/3) * pi * (raio * raio * raio);

console.log(`VOLUME = ${esfera.toFixed(3)}`)
