// Funções Contrutoras
// Fabrica x Construtora || Criam Objetos
// convenção:
// Fabrica "criaPessoa"
// Construtora "Pessoa" -> (new)


// Função construtora           (Não precisa de return)
function Pessoa(nome, sobrenome) {
    // Atributos / métodos privados
    const ID = 1234567890;

    const metodoInterno = () => {

    };
    // Atributos / métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ' ' + this.sobrenome + ' ' +'Sou um método')
    }
}

const p1 = new Pessoa('Vitor', 'dos Santos Barcelos')
const p2 = new Pessoa('Mi', 'Duada')

p1.metodo();