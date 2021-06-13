const path = require('path');
const mod = require('./B/C/D/mod1');

const toby = new mod('Toby');

console.log(toby);

toby.bark();

/*
'./' -> pasta a frente

'../' -> volta uma pasta
'../../' -> volta duas pastas
'../../../' -> - três -
...
*/

console.log(__filename);  // c:\Programação\VSCode\CursoJavascript\Node\aula-2\app.js
console.log(__dirname);  // c:\Programação\VSCode\CursoJavascript\Node\aula-2

console.log(path.resolve(__dirname, '..', '..', 'alguma pasta 2x atras'))

// path.resolve gera compatibilidade com múltiplos OS.