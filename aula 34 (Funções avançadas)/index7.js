// Funções Fábrica || Factory Functions
// this se refere a quem chamou a função.
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        
        // Getter, torna a função num atributo
        // (pega o return da function)
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        fala: function(assunto) {
            return `${altura} ${peso} ${nome} está ${assunto}.`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
        },
        altura,
        peso,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
};

const p1 = criaPessoa('Vitor', 'dos Santos Barcelos', 1.73, 92)
const p2 = criaPessoa('Mi', 'Duada', 1.69, 50)

console.log(p1.fala('Falando sobre JavaScript'))
console.log(p1.imc)
console.log (p1.nomeCompleto)
p1.nomeCompleto = 'Outro nome todo ka ka'
console.log (p1.nomeCompleto)

console.log(p2.fala('Falando sobre Filosofia/Sociologia'))
console.log(p2.imc)
console.log (p2.nomeCompleto)
p2.nomeCompleto = 'Maria Eduarda Lessa Ferreira'
console.log (p2.nomeCompleto)