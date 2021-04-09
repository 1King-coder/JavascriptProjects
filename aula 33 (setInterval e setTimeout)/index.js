function mostraHora() {
    let data = new Date();

    return data.toLocaleString('pt-BR', {
        hour12: false,

    });
};



const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout (function () {
    console.log('Olá Mundo!');
}, 3000)