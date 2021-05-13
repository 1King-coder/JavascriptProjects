class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    };

    speak() {
        console.log(`${this.name} is making a speach.`)
    };

    tellFullName () {
        console.log(`My name is ${this.name} ${this.lastname}`)
    };
};

const p1 = new Person('Vitor', 'dos Santos Barcelos');
const p2 = new Person('João', 'Kleber');

p1.speak()
p2.speak()

p1.tellFullName()
p2.tellFullName()