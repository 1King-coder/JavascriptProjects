const speak = {
    speak() {
        console.log(`${this.name} is makin' a speach.`)
    }
};
const eat = {
    eat() {
        console.log(`${this.name} is eating`)
    }
};

const tellFullName = {
    tellFullName() {
        console.log(`${this.fullname}`)
    }
};


const personPrototype = { ...speak, ...eat, ...tellFullName };


function createPerson(name, lastname) {

    return Object.create( personPrototype, {
        name: { value: name } ,
        lastname: { value: lastname },
        fullname: {  value: name + ' ' + lastname}
    });
};

const p1 = createPerson('Vitor', 'dos Santos Barcelos');

const p2 = createPerson('João', 'Kleber');

p1.speak();
p1.eat();

p2.speak();
p2.eat();

p1.tellFullName();
p2.tellFullName();