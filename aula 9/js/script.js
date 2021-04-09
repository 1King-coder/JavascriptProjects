let n1 = prompt('Digite um número:');
let n2 = prompt('Digite outro número:');

n1 = Number(n1);
n2 = Number(n2);

const soma = n1 + n2

alert(`A soma é entre ${n1} e ${n2} é ${soma}`);

if (soma % 2 == 0){
    alert('A soma é um número par.');
}
else {
    alert('A soma é um número ímpar.');
};