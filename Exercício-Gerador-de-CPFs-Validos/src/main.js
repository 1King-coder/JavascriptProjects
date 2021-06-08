import './assets/css/style.css';
import ValidateCPF from './Validate'

function genNum (times, __num='') {
    for (let i = 1; i<=times; i++) {
        __num += Math.floor(Math.random() * (9-0) - 0).toString();
    };
    return __num;
};

const createDiv = () => document.createElement('div');
const createH1 = () => document.createElement('h1');

class GenerateCpf {

    static buildCpf (cpf) {
        return ValidateCPF.digitOne(cpf);
    }

    static formatedCpf (cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 12)
        )
    };
};

const div = createDiv();
const h1 = createH1();

h1.setAttribute('class', 'cpf');
div.setAttribute('class', 'generated-cpf');

const cpfContainer = document.querySelector('.cpf-container')
cpfContainer.appendChild(div);


h1.innerText = GenerateCpf.formatedCpf(GenerateCpf.buildCpf(genNum(9)));
div.appendChild(h1);




document.querySelector('[type="button"]').addEventListener('click', e => {
    
    h1.innerText = GenerateCpf.formatedCpf(GenerateCpf.buildCpf(genNum(9)));

    if (div.childElementCount !== 0) div.removeChild(h1);


    div.appendChild(h1);
});
