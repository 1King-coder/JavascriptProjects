const binToDecimal = (x) => {
    x = `${x}`
    let soma = 0;
    let bases = x.length - 1;
    for (let i of x) {i = Number(i); soma += i*(2**bases); bases--;};
    return soma;
}

const decimalToBin = (x) => {
    x = Number(x)
    let restos = [];
    let nx = x;
    while (Math.round(nx) !== 0) {restos.push(Math.floor(nx%2)); nx = nx/2;};
    let stringBin = '';
    restos.pop()
    let i = restos.length - 1;
    
    while (i >= 0) {;stringBin += restos[i]; i--;}
    return stringBin;
}

const x = 5567

const numBin = decimalToBin(x)


console.log(numBin)