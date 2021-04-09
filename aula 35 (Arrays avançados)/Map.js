/*

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobrados = numeros.map(value => value*2);

console.log(numerosDobrados);

*/
const pessoas = [
    { nome: 'Vitor', idade: 18 },
    { nome: 'Lessa', idade: 17 },
    { nome: 'Luciana', idade: 42 },
    { nome: 'Renato', idade: 45 },
    { nome: 'Ilma', idade: 70 },
    { nome: 'Alciléa', idade: 52 }
];

const nomePessoas = pessoas.map(object => object.nome)
// const idadePuraPessoas = pessoas.map(object => {
//    delete(object.nome);
//    return object.idade;
//});
const pessoasSemNome = pessoas.map(object => ({idade: object.idade}));

const pessoasComId = pessoas.map((object, index) => {
    const newObject = { ...object };
    newObject.id = index + 1;
    return newObject;
})

console.log(nomePessoas)
// console.log(idadePuraPessoas)
console.log(pessoasSemNome)
console.log(pessoasComId)
console.log(pessoas)
