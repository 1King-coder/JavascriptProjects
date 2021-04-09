// ? :
// (condição) ? (se verdadeiro) : (se falso)

const pontosUsuario = 999;

/*
if (pontosUsuario >= 1000) {
    usuarioNivel = '\033[1;34mUsuário VIP\033[m';
} else {
    usuarioNivel = '\033[1;38mUsuário COMUM\033[m';
};
*/
const usuarioNivel = pontosUsuario >= 1000 ? '\033[1;34mUsuário VIP\033[m' : '\033[1;38mUsuário COMUM\033[m';

console.log(usuarioNivel)

// const corUsuario = '\033[1;35mRosa\033[m';
const corUsuario = null;
const corPadrao = corUsuario || '\033[1;30mPreta\033[m';

console.log (corPadrao)