const octalToBin = (x) => {
    x = `${x}`;
    let pot = x.lenght - 1;
    let stringBin;
    for (let i of x) {
        stringBin += decimalToBin(i);
    }
    return stringBin.replace('undefined', '');
};

const binToOctal = (x) => {
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
    let numOctal = '';
    
    for (let j = 0; j < tamanho+3; j += 3) {
        let num = numBin.slice(start, j);
        numOctal += binToDecimal(Number(num));
        start = j;
    }
    const listOctal = []
    for (let k of numOctal) {
        listOctal.push(k)
    }
    listOctal.reverse().pop()
    numOctal = ''
    for (let l of listOctal) {
        numOctal += l
    }
    return numOctal
        
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
    restos.pop();
    let i = restos.length - 1;
    
    while (i >= 0) {;stringBin += restos[i]; i--;}
    return stringBin;
};

console.log(binToOctal(1000101))