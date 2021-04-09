// Filter -> Sempre retorna um array, com a mesma quantidade de elementos
//           ou menos.

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosFiltrados = numeros.filter(value => value > 10);

/*
const numerosFiltrados = numeros.filter((value, index, array) => {
    console.log(value, index, array)
    return value > 10;
});
*/
// console.log(numerosFiltrados)

const pessoas = [
    { nome: 'Vitor', idade: 18 },
    { nome: 'Lessa', idade: 17 },
    { nome: 'Luciana', idade: 42 },
    { nome: 'Renato', idade: 45 },
    { nome: 'Ilma', idade: 70 },
    { nome: 'Alciléa', idade: 52 },
]

const pessoasComNomeGrande = pessoas.filter(object => object.nome.length > 5);
const pessoasVelhas = pessoas.filter(object => object.idade > 40);
const pessoasNovas = pessoas.filter(object => object.idade < 30);
const nomeTerminaComA = pessoas.filter(object => object.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande)
console.log(pessoasVelhas)
console.log(pessoasNovas)
console.log(nomeTerminaComA)
