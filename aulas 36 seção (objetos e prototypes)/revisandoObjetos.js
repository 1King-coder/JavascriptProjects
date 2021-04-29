/*
const pessoa = {
    nome:'Vitor',
    sobrenome:'dos Santos Barcelos'
};


console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
*/
/*
const pessoa = new Object();

pessoa.name = 'Vitor';
pessoa.lastname = 'dos Santos Barcelos';
pessoa.age = 18;
pessoa.getBirthYear = function () {
    const currentYear = new Date();
    return currentYear.getFullYear() - this.age;
};
pessoa.sayName = function () {
    return `My name is ${this.name}`;
};

console.log(pessoa.sayName())
console.log(pessoa.getBirthYear())
*/
/*
function createPerson(name, lastname) {
    return {
        name,
        lastname,
        get fullName() {
            return `${this.name} ${this.lastname}`
        }
    };
};

const p1 = createPerson('Vitor', 'dos Santos Barcelos');

console.log(p1.name);
console.log(p1.lastname);
console.log(p1.fullName);
*/

function Person(name, lastname) {
    this.name = name;
    this.lastname = lastname;
};

const p2 = new Person('Vitor', 'dos Santos Barcelos');