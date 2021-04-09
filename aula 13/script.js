/*
let num1 = 2;
let num2 = 3.5;

num1 = num1.toString();
let num3 = num1 + num2;
console.log(num1 + num2);
num3 = Number(num3);
console.log(num3 + num2)
*/
//let num = 15.723812573;
//console.log(num.toString(2))  // Para Binário
//console.log(num.toFixed(2))  // Cortar casas decimais
//console.log(Number.isInteger(num));  // Verifica se é inteiro
//console.log(Number.isNaN(num));  // Verifica se não é um número

let num1 = 0.7;
let num2 = 0.1;
/*
num1 += num2;  // 0.8
num1 += num2;  // 0.9
num1 += num2;  // 1.0

console.log(num1.toFixed())  // Mostra como inteiro mas 
                            //na verdade ainda é float (0.9999...)

console.log(Number.isInteger(num1))  // Viu só?

num1 = parseFloat(num1.toFixed(2));  // Agora sim ele é inteiro

console.log(num1)  
console.log(Number.isInteger(num1))  // Viu?
*/
num1 = ((num1 * 100) + (num2 * 100)) / 100;  // Transforma em inteiros,
                                            // soma e volta,
                                           // impedindo a imprecisão.
num1 = ((num1 * 100) + (num2 * 100)) / 100;  // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100;  // 1.0
console.log(num1)
console.log(Number.isInteger(num1))

