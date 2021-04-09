let [seq, ant, atu] = [0, 1, 0];
const lista = []
for (let i = 0; i <= 200; i++) {
    seq = ant + atu;
    ant = atu;
    atu = seq;
    lista.push (seq);
};
console.log(lista)