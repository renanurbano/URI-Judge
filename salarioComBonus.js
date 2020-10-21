var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nome = lines[0];
var salario = parseFloat(lines[1]);
var venda = parseFloat(lines[2]);

var comissao = venda * 0.15 + salario

console.log(`TOTAL = R$ ${comissao.toFixed(2)}`);
