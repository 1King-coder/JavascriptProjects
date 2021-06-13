const path = require('path');
const axios = require('axios')
const { Pessoa } = require('./mod1');

axios('https://pt.wikipedia.org/wiki/1992_no_Brasil')
    .then(r => {
        console.log(r.data)
        console.log(new Pessoa ('Vitu'))
    })
    .catch(e => console.error(e))