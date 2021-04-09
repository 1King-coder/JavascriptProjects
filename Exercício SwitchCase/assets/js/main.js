/*
function getDiaSemana (diaSemana) {
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            break;
        
        case 2:
            diaSemanaTexto = 'Terça-feira';
            break;
        
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            break;
            
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            break;
        
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            break;
        
        case 6:
            diaSemanaTexto= 'Sábado';
            break;
        
        default:
            diaSemanaTexto = '';
            break;
    };
    return diaSemanaTexto;
}

function getMes (mes) {
    switch (mes) {
        case 0:
            mesTexto = 'janeiro';
            break;
        
        case 1:
            mesTexto = 'fevereiro';
            break;
        
        case 2:
            mesTexto = 'março';
            break;
        
        case 3:
            mesTexto = 'abril';
            break;
            
        case 4:
            mesTexto = 'maio';
            break;
        
        case 5:
            mesTexto = 'junho';
            break;
        
        case 6:
            mesTexto = 'julho';
            break;
        
        case 7:
            mesTexto = 'agosto';
            break;
        
        case 8:
            mesTexto = 'setembro';
            break;
        
        case 9:
            mesTexto = 'outubro';
            break;
        
        case 10:
            mesTexto = 'novembro';
            break;
            
        case 11:
            mesTexto = 'dezembro';
            break;          
        
        default:
            mesTexto = '';
            break;
    };
    return mesTexto;
}

const data = new Date(Date.now());
const diaSemana = getDiaSemana(data.getDay());
const h1 = document.querySelector('.container h1')

function formataData (data) {
    const date = []
    const dia = data.getDate();
    const mes = getMes(data.getMonth());
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    date.push(dia, mes, ano, hora, minuto);

    return  date;
};

function zeroAEsquerda (tempo) {
    return tempo >= 10 ? tempo : `0${tempo}`
};

const dataLista = formataData(data)

h1.innerHTML = `${diaSemana}, ${dataLista[0]} de ${dataLista[1]} de ${dataLista[2]}<br>
${dataLista[3]}:${dataLista[4]}`
*/

const h1 = document.querySelector('.container h1')
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes)
