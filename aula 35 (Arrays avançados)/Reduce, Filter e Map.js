const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosParesDobradosSomados = numeros
    .filter(e => e % 2 === 0)
    .map(e => e*2)
    .reduce((ac, e) => ac += e);;
console.log(numerosParesDobradosSomados)