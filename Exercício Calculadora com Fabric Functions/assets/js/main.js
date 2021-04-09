function criaCalculadora () {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        
        
        
        
        inicia() {
            this.clickBotoes();
            this.pressEnter();
        },
        clickBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                };
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                };
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                };
                if (el.classList.contains('btn-eq')) {
                    this.efetua();
                }
            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        clearDisplay() {
            this.display.value = '';
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        efetua() {
            let conta = this.display.value;
            try {
                conta = eval(conta)
                if (!conta) {
                    alert('Conta inválida');
                    return;
                };
                this.display.value = String(conta);

            } catch(e) {
                alert('Conta inválida')
            };
        },
        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.efetua();
                }
            })
        }
    };
};

const calculadora = criaCalculadora();
calculadora.inicia()