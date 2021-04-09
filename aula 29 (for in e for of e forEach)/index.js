const frutasArray = ['Pêra', 'Abacaxi', 'Maçã'];

const frutaObjeto = {
    nome: 'Mamão',
    gosto: 'Doce',
    pastoso: false
};

for (let i in frutasArray) {
    console.log(i)
};

console.log('#####################')

for (let i in frutaObjeto) {
    console.log(i)
};


// for in lê os índices em caso de Array
// e as chaves em caso de Objetos.
console.log('#####################')

for (let i of frutasArray) {
    console.log(i)
};

// for of retorna os valores de um Array
console.log('#####################')

frutasArray.forEach(function(valor, indice, arrayCompleto){
    console.log(valor, indice, arrayCompleto)
});

console.log('#####################')

frutasArray.forEach( (valor, indice, arrayCompleto) => {
    console.log(valor, indice, arrayCompleto)
});