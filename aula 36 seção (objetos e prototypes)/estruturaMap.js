const pessoas = [
    { id: 2, nome: 'João' },
    { id: 3, nome: 'Vitor' },
    { id: 1, nome: 'Kleber' }
];

/*
const novasPessoas = {};

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
};
*/

const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
};

console.log(novasPessoas)

console.log(novasPessoas.get(2))

for(const [identifier, {id, nome}] of novasPessoas) {
    console.log(`Identifier: ${identifier} \n`
    +`ID: ${id} \n`
    +`NOME: ${nome} \n`)
}