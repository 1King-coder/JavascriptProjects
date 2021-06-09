import './assets/css/style.css';
import genPassword from './Modules/geradores'

const passwordH3 = document.querySelector('h3');

const btn = document.querySelector('#gen');

const length = document.querySelector('#length');
const upper = document.querySelector('#chk-upper');
const lower = document.querySelector('#chk-lower');
const numbers = document.querySelector('#chk-numbers');
const symbols = document.querySelector('#chk-symbols');
function setPass () {
    passwordH3.innerText = genPassword(
        length.value,
        upper.checked,
        lower.checked,
        numbers.checked,
        symbols.checked
    );
}

setPass();

btn.addEventListener('click', e => {
    setPass();
})
