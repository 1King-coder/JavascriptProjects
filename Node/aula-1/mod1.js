/*
const firstname = 'Vitor';
const lastname = 'dos Santos Barcelos';

const sayFullName = () => {
    console.log(firstname, lastname);
};


module.exports.firstName = firstname;
module.exports.lastname = lastname;
module.exports.sayName = sayFullName;


exports.firstName = firstname;
exports.lastname = lastname;
exports.sayName = sayFullName;

this.anything = 'what i wanna export'

console.log(exports)
*/

const name = 'Vitu'
const lastname = 'dussantusbarcelos'

class Pessoa {
    constructor(firstname) {
        this.firstname = firstname;
    };
};

module.exports = {
    name, lastname, Pessoa
};