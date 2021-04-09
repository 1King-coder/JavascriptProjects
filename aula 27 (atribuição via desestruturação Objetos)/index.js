const pessoa = {
    nome: 'Vitor',
    sobrenome: 'dos Santos',
    contas: {
        banco1: 'poupança',
        banco2: 'corrente'
    }
};


const {cosia, sobrenome} = pessoa;

console.log(cosia, sobrenome);

const {contas: {banco1, banco2}, contas} = pessoa;

console.log(banco1, banco2, contas);

const { nome, ...resto} = pessoa;

console.log(nome, resto);
