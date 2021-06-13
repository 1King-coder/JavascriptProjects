const path = require('path');
const writeFile = require('./modules/write');
const readFile = require('./modules/read');


const filePath = path.resolve(__dirname, 'test.txt');
/*
const people = [
    { name: 'Vitor', age: 18 },
    { name: 'Lessa', age: 17 },
    { name: 'Vitu', age: 18 },
    { name: 'Mi', age: 17}
];

const json = JSON.stringify(people, '', 2)

writeFile(filePath, json);
*/

async function readArchieve(path) {
    const data = await readFile(path);
    renderData(data);
};

function renderData(data) {
    data = JSON.parse(data);

    data.forEach(el => console.log(el));
}

readArchieve(filePath)