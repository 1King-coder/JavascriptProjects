// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix

// mês 0 = Janeiro | mês 11 = Dezembro | mêses = 0-11

// const data = new Date (ano, mês, dia, hora, minuto, segundo, milésimo de segundo)

// const data = new Date ('ano-mês-dia hora:minutos:segundos')

const data = new Date(Date.now())

console.log('Dia:', data.getDate());
console.log('Mês:', data.getMonth());  // Mês começa do zero
console.log('Ano:', data.getFullYear());
console.log('Hora:', data.getHours());
console.log('Minuto:', data.getMinutes());
console.log('Segundo:', data.getSeconds());
console.log('ms:', data.getMilliseconds());
console.log('Dia semana:', data.getDay()); // 0 - Domingo | 6 - Sábado

console.log(data.toString());

console.log(Date.now()); // Milésimos de segundos da época unix 
                        // até a data atual
                       // Date(Date.now); retorna Data do dia atual

