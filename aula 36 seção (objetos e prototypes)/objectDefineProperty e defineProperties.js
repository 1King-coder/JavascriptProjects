function Product (name, price, stored) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Key
        value: stored,
        writable: false,  // Can change it's value
        configurable: false  // Can or not redefine.

    });

    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: true,
            configurable: true     
        },
        price: {
            enumerable: true,
            value: price,
            writable: true,
            configurable: true 
        } 
    });
};

const p1 = new Product('Smartphone', 1999, 5);

console.log(p1)
console.log(Object.keys(p1))   // Keys in a list.
