/*
try {
    console.log(sadasd)
} catch (e) {
    console.log(`${e}`)
}

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números.');
    };
    return x + y;
}

try {
    console.log(soma(5, 7))
    console.log(soma('5', 7))
} catch (e) {
    console.log(`${e}`)
} finally {
    console.log('FINALLY: Sempre executado')
}
*/

function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Não é instância de Date.')
    }
    if (!data) {
        data = new Date();
    };

    return data.toLocaleString('pt-BR', {
        hour12: false
    });
}

try {
    const data = new Date('10-04-2004 07:59:24')
    const hora = retornaHora(data);
    console.log (hora)
} catch (e) {
    console.log(`${e}`)
} finally {
    console.log('Tenha um bom dia!')
}
