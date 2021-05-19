const form = document.querySelector('#form')
const container = document.querySelector('.container')


form.addEventListener('submit', e => {
    e.preventDefault();
    const sentCpf = new CPF (e.target.querySelector('#cpf').value);
    setResult(sentCpf.validate());
});

function CPF (cpf) {
    Object.defineProperty(this, 'cpf', {
        enumerable: true,
        get: function() {
            return cpf.replace(/\D+/g, '');
        }
    });
};

CPF.prototype.formula = function(total) {
    digit = 11 - (total % 11)
    return digit < 9 ? String(digit) : '0'
}

CPF.prototype.validate = function() {
    if (this.cpf.length < 11) return false;
    if (this.cpf[0].repeat(this.cpf.length) === this.cpf) return false;

    let sliceCPF = this.cpf.slice(0, 9);
    let withD1 = sliceCPF + this.createDigits(sliceCPF);
    return withD1 + this.createDigits(withD1) === this.cpf;
};

CPF.prototype.createDigits = function(cpf_num) {
    let cpf = Array.from(cpf_num);

    let regressive = cpf.length + 1;

    let total = cpf.reduce((ac, e) => {
        ac += regressive * Number(e);
        regressive--;
        return ac
    }, 0);
    return this.formula(total)
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
