const pessoa1 = {
    nome: 'Vitor',
    sobrenome: 'dos Santos',
    idade: 18,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }

};

pessoa1.fala();



/*
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
};

const pessoa1 = criaPessoa('Vitor', 'dos Santos', 18)
const pessoa2 = criaPessoa('Mi', 'Duada', 17)

const listaPessoa = (pessoa) => {
    console.log(`Nome: ${pessoa.nome}
Sobrenome: ${pessoa.sobrenome}
Idade: ${pessoa.idade}\n====================`)
};

listaPessoa(pessoa1)
listaPessoa(pessoa2)
*/