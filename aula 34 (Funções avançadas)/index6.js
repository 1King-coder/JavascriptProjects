// IIFE -> Imediately Invoked Function Expression

// Evita que a função toque o escopo global.
// Executada imediatamente depois da criação.
// Escreve o código dentro dessa IIFE.
// Ela não toca o escopo global, somente o próprio escopo léxico.

(function(idade, peso, altura) {
    
    const sobrenome = 'dos Santos Barcelos';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    };

    function falaNome() {
        console.log(criaNome('Vitor'));
    }
    falaNome();
    console.log(idade, peso, altura)
})(18, 92, 1.73)
