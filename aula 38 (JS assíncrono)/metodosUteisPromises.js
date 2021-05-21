const rand = (max, min) => {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min); 
};


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(()=> {
            if (typeof(msg) !== 'string') {
                reject('Um erro ocorreu.');
                return;
            };
            resolve(msg.toUpperCase() + ' - Passei pela promise família');
        }, tempo);
    });
};

function baixaPagina() {
    const emCache = true;

    if (!emCache) {
        return Promise.reject('Página em cache.', 2000);
    };
    return Promise.resolve('Baixei a página com sucesso!');    
}

// Promise.all | Promise.race | Promise.resolve | Promise.reject

/*
const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(1000, rand(1, 5)),
];
*/

/*
Promise.all(promises)   // Retorna o valor de todas as promises do array.
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => {
        console.log(erro);
    });
*/

/*
Promise.race(promises)  // Retorna o primeiro valor resolvido.
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => {
        console.log(erro);
    });
*/

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERROR: ' + e));