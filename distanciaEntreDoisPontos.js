var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [x1, y1] = lines[0].split(' ');
var [x2, y2] = lines[1].split(' ');

var dist = Math.sqrt(((x2 - x1) ** 2 + (y2 - y1) ** 2));

console.log(dist.toFixed(4));
