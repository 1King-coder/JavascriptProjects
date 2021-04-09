// Função FizzBuzz
// divisível por 3 = Fizz
// divisível por 5 = Buzz
// divisível por 3 e 5 = FizzBuzz
// NÃO é divisivel por 3 nem 5 = Retorna o mesmo número
// Checa se é realmente um número.




const fizzBuzz = (x) => {
    if (typeof x !== 'number') return x

    if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
    if (x % 3 === 0) return 'Fizz';
    if (x % 5 === 0) return 'Buzz';
    return x
};

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
};