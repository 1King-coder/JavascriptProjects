const numeros = [5, 50, 1, 2, 3, 40, 135, 30, 80, 8, 9, 100];
const reduceNumeros = numeros.reduce((ac, e) => {
    if (e % 2 === 0) ac++;
    return ac;
}, 0);
console.log(reduceNumeros)