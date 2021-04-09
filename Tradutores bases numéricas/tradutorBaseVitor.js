

const hexaToDecimal = (x) => {
    x = `${x}`;
    let soma = 0;
    let bases = x.length - 1;
    for (let i of x) {i = Number(numerosHexa(i)); soma += i*(36**bases); bases--;};
    return `${soma}`;
}

const decimalToHexa = (x) => {
    x = Number(x);
    let restos = [];
    let nx = x;
    while (Math.round(nx) !== 0) {restos.push(Math.floor(nx%36)); nx = nx/36;};
    let stringHexa = '';
    restos.pop()
    let i = restos.length - 1;
    while (i >= 0) {
        stringHexa += letrasHexa(`${restos[i]}`);  
        i--;
    }
    return `${stringHexa}`.replace('0', ' ');
}

const numerosHexa = (x) => {
    if (x.toUpperCase() === 'A') return '10'
    if (x.toUpperCase() === 'B') return '11'
    if (x.toUpperCase() === 'C') return '12'
    if (x.toUpperCase() === 'D') return '13'
    if (x.toUpperCase() === 'E') return '14'
    if (x.toUpperCase() === 'F') return '15'
    if (x.toUpperCase() === 'G') return '16'
    if (x.toUpperCase() === 'H') return '17'
    if (x.toUpperCase() === 'I') return '18'
    if (x.toUpperCase() === 'J') return '19'
    if (x.toUpperCase() === 'K') return '20'
    if (x.toUpperCase() === 'L') return '21'
    if (x.toUpperCase() === 'M') return '22'
    if (x.toUpperCase() === 'N') return '23'
    if (x.toUpperCase() === 'O') return '24'
    if (x.toUpperCase() === 'P') return '25'
    if (x.toUpperCase() === 'Q') return '26'
    if (x.toUpperCase() === 'R') return '27'
    if (x.toUpperCase() === 'S') return '28'
    if (x.toUpperCase() === 'T') return '29'
    if (x.toUpperCase() === 'U') return '30'
    if (x.toUpperCase() === 'V') return '31'
    if (x.toUpperCase() === 'W') return '32'
    if (x.toUpperCase() === 'X') return '33'
    if (x.toUpperCase() === 'Y') return '34'
    if (x.toUpperCase() === 'Z') return '35'
    return x
}

const letrasHexa = (x) => {
    if (x === '10') return 'A'
    if (x === '11') return 'B'
    if (x === '12') return 'C'
    if (x === '13') return 'D'
    if (x === '14') return 'E'
    if (x === '15') return 'F'
    if (x === '16') return 'G'
    if (x === '17') return 'H'
    if (x === '18') return 'I'
    if (x === '19') return 'J'
    if (x === '20') return 'K'
    if (x === '21') return 'L'
    if (x === '22') return 'M'
    if (x === '23') return 'N'
    if (x === '24') return 'O'
    if (x === '25') return 'P'
    if (x === '26') return 'Q'
    if (x === '27') return 'R'
    if (x === '28') return 'S'
    if (x === '29') return 'T'
    if (x === '30') return 'U'
    if (x === '31') return 'V'
    if (x === '32') return 'W'
    if (x === '33') return 'X'
    if (x === '34') return 'Y'
    if (x === '35') return 'Z'
    return x 
}
const x = '36381587610'
 


const numDecimal = decimalToHexa(x)

console.log(numDecimal)
