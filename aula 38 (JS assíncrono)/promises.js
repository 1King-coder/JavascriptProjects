const rand = (max, min) => {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min); 
};


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof(msg) !== 'string') reject(new Error('TypeError'))
        
        setTimeout(()=> {
            resolve(msg);
        }, tempo);
    });



};

esperaAi('Frase 1', rand(1, 3))
        .then(resposta =>{
            console.log(resposta);
            return esperaAi(2, rand(1, 3));
        })
        .then(resposta => {
            console.log(resposta);
            return esperaAi('Frase 3', rand(1, 3));
        })
        .then(resposta => {
            console.log(resposta)
        })
        .then( _ => {
            console.log('Finalizei')
        })
        .catch(e => {
            console.log(e)
        });


console.log('Isso aqui vem antes de qualquer que seja o promise.')