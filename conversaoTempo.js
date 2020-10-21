var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var segundos = parseInt(lines[0]);

var horas = segundos / 3600;
segundos = segundos % 3600;

var minutos = segundos / 60;
segundos = segundos % 60;

console.log(`${horas.toFixed(0)}:${minutos.toFixed(0)}:${segundos.toFixed(0)}`)
