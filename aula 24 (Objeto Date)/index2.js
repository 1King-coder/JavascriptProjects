function zeroAEsqueda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsqueda(data.getDate());
    const mes = zeroAEsqueda(data.getMonth()) + 1;
    const ano = zeroAEsqueda(data.getFullYear());
    const hora = zeroAEsqueda(data.getHours());
    const minuto = zeroAEsqueda(data.getMinutes());
    const segundo = zeroAEsqueda(data.getSeconds());

    return `${dia}/${mes}/${ano}/ ${hora}:${minuto}:${segundo}`

};

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);