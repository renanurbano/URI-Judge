var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var item1 = lines.shift().split(' ');
var item2 = lines.shift().split(' ');

var id1 = item1.shift();
var qtd1 = item1.shift();
var valor1 = item1.shift();
var total1 = qtd1 * valor1;

var id2 = item2.shift();
var qtd2 = item2.shift();
var valor2 = item2.shift();
var total2 = qtd2 * valor2;

totalCompra = total1 + total2;


console.log(`VALOR A PAGAR: R$ ${totalCompra.toFixed(2)}`);
