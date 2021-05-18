class quebradorDeCodigos {
    constructor(numeroDeDigitos) {
        this.digiNum = numeroDeDigitos;
        this.codigosGerados = {};
    };

    geraNum() {
        return String(Math.round(Math.random() * 9));
    };

    criaSenha() {
        let senhaGerada = '';

        for (let i = 0; i < this.digiNum; i++) {
            senhaGerada += this.geraNum();    
        };
        
        return senhaGerada;
    };

    geraSenhas(numDeSenhas, i=1, senha=this.criaSenha()) {
        if (i >= numDeSenhas+1) return this.codigosGerados;

        if (senha in this.codigosGerados) return this.geraSenhas(numDeSenhas, i);

        this.codigosGerados[i] = senha;
        i++;

        return this.geraSenhas(numDeSenhas, i)
    };

};

const descSenha = new quebradorDeCodigos(6)


descSenha.geraSenhas(100)

for (let i in descSenha.codigosGerados) {
    let teste  = descSenha.codigosGerados[i] === descSenha.codigosGerados[String(Number(i)+1)]
    if (teste) console.log('opa, repetiu aqui ' + i)
};

