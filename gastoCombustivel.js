var input = require('fs').readFileSync('stdin', 'utf8');

var [tempo, velocidade] = input.split('\n');

var total = tempo * velocidade;
var combustivel = total /12;

console.log(`${combustivel.toFixed(3)}`);
