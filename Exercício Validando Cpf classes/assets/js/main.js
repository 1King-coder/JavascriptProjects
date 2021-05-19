const form = document.querySelector('#form')
const container = document.querySelector('.container')


form.addEventListener('submit', e => {
    e.preventDefault();
    const sentCpf = new ValidateCPF (e.target.querySelector('#cpf').value);
    setResult(sentCpf.validate());
});

class ValidateCPF {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D+/g, '');
    };

    static formula (total) {
        const digit = 11 - (total % 11);
        return digit < 9 ? String(digit) : '0';
    };

    calculateTotal (cpfInArray, regressive) {
        return cpfInArray.reduce((ac, e) => {
            ac += Number(e)*regressive;
            regressive--;
            return ac;
        }, 0);
    };

    validate () {
        const correctCpf = this.digitOne();
        return this.cpf === correctCpf;
    };

    digitOne () {
        const total = this.calculateTotal(Array.from(this.cpf.slice(0,9)), 10);

        const cpfWithD1 = this.cpf.slice(0,9) + ValidateCPF.formula(total);

        return this.digitTwo(cpfWithD1)
    };

    digitTwo (cpfD1) {
        const total = this.calculateTotal(Array.from(cpfD1), 11);

        const correctCpf = cpfD1 + ValidateCPF.formula(total);

        return correctCpf;
    };

};

const createDiv = () => {
    return document.createElement('div');
};

const setResult = (result) => {
    thereIsDiv()
    const div = createDiv();

    if (result) {
        div.setAttribute('class', 'Valid');
        div.innerHTML = 'CPF VÁLIDO';
    } else {
        div.setAttribute('class', 'Invalid');
        div.innerHTML = 'CPF INVÁLIDO';
    };
    
    container.appendChild(div);
};

const thereIsDiv = () => {
    const thisDiv = document.querySelector('div');
    if (thisDiv) thisDiv.remove();
};
