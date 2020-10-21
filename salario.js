var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nf = parseFloat(lines[0]);
var ht = parseFloat(lines[1]);
var valor = parseFloat(lines[2]);

salario = ht * valor


console.log(`NUMBER = ${nf}
SALARY = U$ ${salario.toFixed(2)}`);
