// new Object -> Object.prototype
/*
const objA = {
    keyA: 'A'
    // objA.__proto__ === Object.prototype -> true
};

const objB = {
    keyB: 'B'
    // objB.__proto__ === Object.prototype -> true
};

// objB.__proto__ === objA.__proto__ -> false 

const objC = new Object();
objC.keyC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
 

// objB.__proto__ === objA.__proto__ -> true 
*/

function Product(name, price) {
    this.name = name;
    this.price = price;
};

Product.prototype.discount = function(percent) {
    this.price = this.price - (this.price * percent / 100);
};

Product.prototype.raisePrice = function(percent) {
    this.price = this.price + (this.price * percent / 100);
};

const smartphone = new Product('Sansuga M1N', 3999);
console.log(smartphone.price)
smartphone.discount(50)
console.log(smartphone.price)
smartphone.raisePrice(50)
console.log(smartphone.price)

const caneca = {
    name: 'Caneca',
    price: 30
};
Object.setPrototypeOf(caneca, Product.prototype);

console.log(caneca.price)
caneca.discount(10)
console.log(caneca.price)

const prod3 = Object.create(Product.prototype, {
    price: {
        writable: true,
        configurable: true, 
        enumerable: true,
        value: 120
    },
    size: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 30
    }
});
prod3.raisePrice(20)
console.log(prod3)