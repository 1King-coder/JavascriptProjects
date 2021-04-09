let a = [1, 2, 3];
let b = a;

console.log(a, b)
b.push(4)

console.log(a, b)

let c = [1, 2, 3];
let d = [...c];

console.log(c, d)
c.push(4)

console.log(c, d)

let e = 'Vitor';
let f = e;

console.log(e, f)
e = 'Lessa'

console.log(e, f)

let a1 = {
    nome: 'Vitor',
    idade: 18
};
let a2 = a1;

console.log(a1, a2)
a1.idade = 22

console.log(a1, a2)