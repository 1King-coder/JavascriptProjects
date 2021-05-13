function Calculator() {};

const errorMsg = `Both values must be a Number not ${typeof(x)} and ${typeof(y)}.`;

Calculator.prototype.add = (x, y) => {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') return errorMsg
    return x + y
};

Calculator.prototype.multiply = (x, y) => {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') return errorMsg
    return x * y
};

Calculator.prototype.div = (x, y) => {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') return errorMsg
    return x / y
};

Calculator.prototype.pow = (x, y) => {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') return errorMsg
    return x ** y
};s

Calculator.prototype.sub = (x, y) => {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') return errorMsg
    return x - y
};

Calculator.prototype.divRest = (x, y) => {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') return errorMsg
    return x % y
};

Calculator.prototype.intDiv = (x, y) => {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') return errorMsg
    return Math.round(x / y)
};

const calc = new Calculator()

console.log(calc.intDiv(5, 2))