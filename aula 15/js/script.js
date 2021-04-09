let numero = prompt('Digite um número:');
const numero_titulo = document.getElementById('numero-titulo');
const textos = document.getElementById('texto')

numero_titulo.innerHTML = numero;
numero = Number(numero);
textos.innerHTML = `<p id="parag">Raiz quadrada: ${Math.sqrt(numero)}<br>
${numero} é inteiro: ${Number.isInteger(numero)}<br>
É NaN: ${Number.isNaN(numero)}<br>
Arrendodado para baixo: ${Math.floor(numero)}<br>
Arrendodado para cima: ${Math.ceil(numero)}<br>
Com duas casas decimais: ${numero.toFixed(2)}</p>`;