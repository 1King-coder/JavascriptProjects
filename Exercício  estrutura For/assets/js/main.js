const elementos = [
    {tag: 'p', texto: 'O rato roeu a roupa do rei de Roma.'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');

const div = document.createElement('div');


// Resolução própriacom forEach
elementos.forEach (e => {
    const tagCriada = document.createElement(e.tag);
    tagCriada.innerHTML = e.texto;
    div.appendChild(tagCriada);
    
});

container.appendChild(div)

// Outra resolução com For normal
for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i]
    const tagCriada = document.createElement(tag)
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
};
container.appendChild


