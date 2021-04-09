// Clousures


function retornaFuncao(nome) {  // Acesso a 3 escopos 
    return function() {        // Global, da própria função, e da
        return nome;          // função anônima que ela retorna
    };
}
const funcao = retornaFuncao('Lessa');
const funcao2 = retornaFuncao('Walk');
console.log(funcao(), funcao2())