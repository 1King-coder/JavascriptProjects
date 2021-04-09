const criaPessoa = (nome, sobrenome, peso, altura) => {
    return {
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura
    };
};


function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.pessoas')
    /*
    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
        console.log('Enviado');
    };
    */
   let lista = []
   const recebeEventoForm = (evento) => {
       evento.preventDefault();
       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');
       const pessoa = criaPessoa(nome.value, sobrenome.value, peso.value, altura.value);
       lista.push(pessoa)
       resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} 
       ${peso.value} ${altura.value}</p>`
   };
    form.addEventListener('submit', recebeEventoForm);
};

meuEscopo();



