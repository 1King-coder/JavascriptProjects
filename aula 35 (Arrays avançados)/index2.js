//               -4      -3      -2          -1
//                0       1       2           3
const nomes = ['Vitor', 'dos', 'Santos', 'Barcelos'];

// nomes.splice(índice, delete, elem1, elem2, elem3);

// nomes.splice(Start, stop, insert element in Start )

const removidos = nomes.splice(1, 1, 'Lessa');

console.log(nomes, '\n', removidos)