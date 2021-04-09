/*
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' +resto
    }
    return falaResto
}
const ola = falaFrase('Olá,')
const mundo = ola('Mundo!')

console.log(mundo)
*/
function multiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
};

const double = multiplicador(2);
const triple = multiplicador(3);
const quadruple = multiplicador(4);

console.log(double(2))
console.log(triple(2))
console.log(quadruple(2))

