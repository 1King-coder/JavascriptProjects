// escopo léxico


const nome = 'Vitor';

function falaNome() {
    console.log(nome);  // Busca dentro dela e DEPOIS fora (escopo global)
};

function usaFalaNome() {
    const nome = 'dos Santos';
    falaNome();  // busca dentro da outra função
};

usaFalaNome();