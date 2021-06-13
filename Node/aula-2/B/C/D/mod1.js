/*
module.exports = function(x, y) {
    return x * y
};

// console.log(module.exports(2, 2))

*/

module.exports = class Dog {
    constructor(name) {
        this.name = name;
    };

    bark () {
        console.log(`${this.name} - WOOF WOOF`)
    };
};