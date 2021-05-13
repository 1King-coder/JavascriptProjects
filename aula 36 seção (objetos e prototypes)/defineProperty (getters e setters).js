function Product (name, price, stored) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'stored', {
        enumerable: true, // Key
        configurable: true,  // Can or not redefine.
        get: function() {
            return stored;
        },
        set: value => {
            if (typeof value !== 'number') {
                console.error('Must be a number')
                return;
            };
            stored = value;
        }
    });
};

const p1 = new Product('Smartphone', 1999, '5');

console.log(p1)

console.log(p1.stored)
// console.log(Object.keys(p1))   // Keys in a list.
