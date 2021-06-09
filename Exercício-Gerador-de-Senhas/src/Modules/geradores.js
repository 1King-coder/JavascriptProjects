const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)

const genUpper = () => String.fromCharCode(rand(65, 91))
const genLower = () => String.fromCharCode(rand(97, 123))
const genNumber = () => String.fromCharCode(rand(48, 58))
const symbols = '!@#$%¨&*(){}[]_+-=^~?;:.,';
const genSymbol = () => symbols[rand(0, symbols.length)];

export default function genPassword(length, upper, lower, numbers, symbols) {
    const password = [];

    length = Number(length);


    for (let i = 0; i<length; i++) {
        upper && password.push(genUpper());
        lower && password.push(genLower());
        numbers && password.push(genNumber());
        symbols && password.push(genSymbol());
    };

    return length? password.join('').slice(0, length):'Nada Selecionado.';
};
