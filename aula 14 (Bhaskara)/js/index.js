
const delta = (A, B, C) => {
    return (B**2 - 4 * A * C)**0.5
};

const verifica_delta = (delta, x1, x2) => {
    if (delta == 0) {
        return x1
    }
    else {
        if (delta < 0) {
            return `Delta = ${delta} -> Raízes Imaginárias`
        }
        else{
            return [x1.toFixed(2), x2.toFixed(2)]
        };
    };
};

const bhas = (A, B, Delta) => {
    const x1 = (-B + Delta) / (2*A)
    const x2 = (-B - Delta) / (2*A)
    return verifica_delta(Delta, x1, x2)
};




let a = prompt('Digite A: ');
let b = prompt('Digite B: ');
let c = prompt('Digite C: ');

a = Number(a);
b = Number(b);
c = Number(c);
const Delta = delta(a, b, c);
const efetua = bhas(a, b, Delta);


document.body.innerHTML += (`Equação: ${a}x² + ${b}x + ${c}<br>`)
document.body.innerHTML += (`Resultado: ${efetua}`)


