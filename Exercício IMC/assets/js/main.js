// parar o envio do form

const form = document.querySelector('#form');



form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso && !altura) {
        setResultado('Peso e altura inválidos.', false)
        return
    };

    if (!peso || peso < 0) {
        setResultado('Peso inválido.', false)
        return;
    };

    if (!altura || altura < 0) {
        setResultado('Altura inválida.', false)
        return;
    };

    const imc = getImc(peso, altura);
    const nivelImc = getNivel(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`
    
    setResultado(msg, true)
});


function getNivel (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso','Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

function getImc(peso, altura) {
    let imc = peso / (altura/100)**2;
    return imc.toFixed(2);
};

function criaP () {
    const p = document.createElement('p');
    return p;
};

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    
    if (isValid) {
        p.className = 'good'
    } else {
        p.className = 'bad'
    };

    p.innerHTML = msg;
    resultado.appendChild(p)
};
