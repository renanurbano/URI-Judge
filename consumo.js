var input = require('fs').readFileSync('stdin', 'utf8');


var [distancia, combustivel] = input.split('\n');

var consumo = distancia / combustivel;

console.log(`${consumo.toFixed(3)} km/l`)

