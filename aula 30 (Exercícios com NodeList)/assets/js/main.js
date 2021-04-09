const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p')

const container = document.querySelector('.container')

document.body.style.backgroundColor = 'rgb(17, 86, 102, 0.5)';

const estilosBody =  getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody)

for (let i of ps){
    i.style.backgroundColor = backgroundColorBody
    i.style.color = 'white'
};