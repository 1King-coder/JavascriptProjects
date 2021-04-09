// NaN -> Not a Number
/*
const num1 = 10;
const num2 = Number('5.5');

console.log(num1 + num2);
*/
let pares = 0;
let impares = 0;

for (let i = 0; (i<=1302); i++){
    if (i % 2 == 0) {
        pares++;
    }
    else{
        impares++;
    }
};
console.log('Total de Pares: ', pares);
console.log('Total de Ímpares: ', impares);
let i = 0
while (i<10) {
    console.log(i);
    i++;
};