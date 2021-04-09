const hexaToDecimal = (x) => {
    x = `${x}`
    let soma = 0;
    let bases = x.length - 1;
    for (let i of x) {i = Number(numerosHexa(i)); soma += i*(16**bases); bases--;};
    return `${soma}`;
}

const decimalToHexa = (x) => {
    x = Number(x);
    let restos = [];
    let nx = x;
    while (Math.round(nx) !== 0) {restos.push(Math.floor(nx%16)); nx = nx/16;};
    let stringHexa = '';
    let i = restos.length - 1;
    while (i >= 0) {
        let resto = letrasHexa(`${restos[i]}`);
        stringHexa += resto; 
        i--;
    }
    return `${stringHexa}`;
}

const numerosHexa = (x) => {
    if (x === 'A') return '10'
    if (x === 'B') return '11'
    if (x === 'C') return '12'
    if (x === 'D') return '13'
    if (x === 'E') return '14'
    if (x === 'F') return '15'
    return x
}

const letrasHexa = (x) => {
    if (x === '10') return 'A'
    if (x === '11') return 'B'
    if (x === '12') return 'C'
    if (x === '13') return 'D'
    if (x === '14') return 'E'
    if (x === '15') return 'F'
    return x 
}
const x = '5567'



const numDecimal = hexaToDecimal(x)

console.log(numDecimal)

