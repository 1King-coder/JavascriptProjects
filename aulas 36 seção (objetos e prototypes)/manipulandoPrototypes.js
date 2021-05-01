// new Object -> Object.prototype

const objA = {
    keyA: 'A'
    // objA.__proto__ === Object.prototype -> true
};

const objB = {
    keyB: 'B'
    // objB.__proto__ === Object.prototype -> true
};

// objB.__proto__ === objA.__proto__ -> false 

Object.setPrototypeOf(objB, objA);

// objB.__proto__ === objA.__proto__ -> true 