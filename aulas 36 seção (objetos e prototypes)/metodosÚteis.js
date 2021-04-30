
const product = { nome: 'Canecas', preco: 1.8};
/*
const canecaPorcelana = { 
    ...product,
    nome:'Caneca de porcelana'
};

const canecaBarro = {
    ...product,
    nome: 'Caneca de Barro'
};
*/

const canecaPorcelana = Object.assign({}, product,
    {
        nome: 'Caneca de porcelana',
        material: 'Porcelana' 
    });
    
    const canecaBarro = Object.assign({}, product,
        { 
            nome: 'Caneca de barro',
            material: 'Barro' 
        });
        
// canecaBarro.material = 'Barro';
// canecaPorcelana.material = 'Porcelana';

canecaBarro.preco = 19.99;
canecaPorcelana.preco = 25.00;

console.log(product);
console.log(canecaPorcelana);
console.log(canecaBarro);

Object.defineProperty(product, 'nome', {
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(product, 'nome'));

console.log(Object.entries(canecaPorcelana))