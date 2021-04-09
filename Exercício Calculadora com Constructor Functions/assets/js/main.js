function Calculator() {
    this.display = document.querySelector('.display')
    this.btnClear = document.querySelector('.btn-clear')

    this.inicia = () => {
        this.clickBtn();
        this.pressEnter();
    };
    this.clickBtn = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.display.value += el.innerText;
            };
            if (el.classList.contains('btn-clear')) {
                this.display.value = '';
            };
            if (el.classList.contains('btn-eq')) {
                this.performEquation();
            };
            if (el.classList.contains('btn-del')) {
                this.display.value = this.display.value.slice(0, -1)
            };
        })
    };
    this.performEquation = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);
            if (!conta) {
                alert('Conta Inválida');
                return;
            };
            this.display.value = String(conta)
        } catch(e) {
            alert('Conta Inválida')
        };
    };
    this.pressEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.performEquation();
            };
        })
    };
};

const calculadora = new Calculator();
calculadora.inicia();
