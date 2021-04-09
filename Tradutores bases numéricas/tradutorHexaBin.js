const hexaToBin = (x) => {
    x = `${x}`;
    let stringBin;
    for (let i of x) {
        stringBin += decimalToBin(numerosHexa(i));
    }
    return stringBin.replace('undefined', '');
};

const binToHexa = (x) => {
    x = `${x}`;
    let tamanho = x.length;
    const listBin = []
    for (let i of x){
        listBin.push(i)
    }
    let numBin;
    for (let i of listBin.reverse()) {
        numBin += i
    }
    numBin = numBin.replace('undefined', '')
    let start =  0
    let numHexa = '';
    
    for (let j = 0; j < tamanho+4; j += 4) {
        let num = numBin.slice(start, j);
        numHexa += letrasHexa(binToDecimal(num));
        start = j;
    }
    const listHexa = []
    for (let k of numHexa) {
        listHexa.push(k)
    }
    listHexa.reverse().pop()
    numHexa = ''
    for (let l of listHexa) {
        numHexa += l
    }
    return numHexa
        
};


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
    x = `${x}`
    if (x === '10') return 'A'
    if (x === '11') return 'B'
    if (x === '12') return 'C'
    if (x === '13') return 'D'
    if (x === '14') return 'E'
    if (x === '15') return 'F'
    return x 
}

const x = 101111101

const num = binToHexa(x)

console.log(num)

