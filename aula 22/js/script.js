
function start () {
    const form = document.querySelector('.form')
    const resultados = document.querySelector('.resultados')
    const eq = resultados.querySelector('h2')
    const results = resultados.querySelector('.results')
    const x1x = results.querySelector('.x1')
    const x2x = results.querySelector('.x2')
    const x1xx = x1x.querySelector('.x1xx')
    const x2xx = x2x.querySelector('.x2xx')
    
    const recebeEventoForm =  (evento) => {
        evento.preventDefault();
        let coeficientes = [];
        const A = Number(form.querySelector('.A').value);
        const B = Number(form.querySelector('.B').value);
        const C = Number(form.querySelector('.C').value);
        coeficientes.push(A, B, C);
        const criaEquacao = (coeficientes) => {
            if (coeficientes[0] === 0) {
                console.log(coeficientes[0]);
                eq.innerHTML = `${coeficientes[1]}x + ${coeficientes[2]}`;
            }
            else if (coeficientes[1] === 0) {
                console.log(coeficientes[1]);
                eq.innerHTML = `${coeficientes[0]}x² + ${coeficientes[2]}`;
            }
            else if (coeficientes[2] === 0) {
                console.log(coeficientes[2]);
                eq.innerHTML = `${coeficientes[0]}x² + ${coeficientes[1]}x`;
            }
            else {
                eq.innerHTML = `${coeficientes[0]}x² + ${coeficientes[1]}x + ${coeficientes[2]}`;
            };
        };

        const Delta = (A, B, C) => {
            return B**2 - 4 * A * C
        };
        
        const bhaskara = (A, B, C) => {
            const x1x2 = [];
            if (A && B && C){
                const delta = Delta(A, B, C);
                const x1 = (-B + delta**0.5) / (2*A);
                const x2 = (-B - delta**0.5) / (2*A);
                x1x2.push(x1, x2);
                if (delta === 0) {
                    return x1
                }
                else if (delta < 0) {
                    return `Delta = ${delta}`
                }
                else {
                    return x1x2
                };
            }
            else if (A && B) {
                const x1 = 0;
                const x2 = -B/A;
                x1x2.push(x1, x2);
                return x1x2
            }
            else if (A && C) {
                const x = (-C/A)**0.5;
                return x
            }
            else if (B && C) {
                const x = (-C/B);
                return x
            }
            else {
                return 0
            }
        };

        const mostraResultados = (xs) => {
            if (isNaN(xs)) {
                if (xs[0] === undefined || xs[1] === undefined) {
                    x1xx.innerHTML = xs;
                    x2xx.innerHTML = xs;
                    
                } else {
                    x1xx.innerHTML = Number(xs[0]).toFixed(2);
                    x2xx.innerHTML = Number(xs[1]).toFixed(2);
                };
            }
            else {
                x1xx.innerHTML = Number(xs).toFixed(2)
                x2xx.innerHTML = "Nothing"
            };
            if (xs.slice(0, 5) === 'Delta') {
                x1xx.innerHTML = xs
                x2xx.innerHTML = 'Raízes imaginárias'
            }
        };
        criaEquacao(coeficientes);
        mostraResultados(bhaskara(A, B, C));
    };
    form.addEventListener('submit', recebeEventoForm);
};



start()