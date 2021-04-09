const octalToDecimal = (x) => {
    x = `${x}`
    let soma = 0;
    let bases = x.length - 1;
    for (let i of x) {i = Number(i); soma += i*(8**bases); bases--;};
    return `${soma}`;
}

const decimalToOctal = (x) => {
    x = Number(x)
    let restos = [];
    let nx = x;
    while (Math.round(nx) !== 0) {restos.push(Math.floor(nx%8)); nx = nx/8;};
    let stringOctal = '';
    let i = restos.length - 1;
    while (i >= 0) {stringOctal += restos[i]; i--;}
    return stringOctal;
}

const x = 69

const numOctal = decimalToOctal(x)

const numDecimal = octalToDecimal(numOctal)

console.log (numOctal, numDecimal)