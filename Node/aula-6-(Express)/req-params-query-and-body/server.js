const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))

// /profiles/1234?campanha=googleads & nome_campanha=seila
//          |---------------------params------------------|

app.get('/', (request, response) => {
    response.send(`
    <form action="/" method="POST">
        <label for="name">Name:</label>
        <input type="text" name="name" placeholder="type your name here">
        <input type="submit" value="SEND">
    </form>
    `);
});

app.get('/tests/:idUsers?/:optionalParam?', (request, response) => {
    response.send(request.query);
    // response.send(request.params);
});

app.post('/', (request, response) => {
    response.send(`What you sent me:<br>
    Name:<b> ${request.body.name}</b>
    `)
})

app.get('/', (request, response) => {
    response.send('Hello World!');
}).listen(3000, () => {
    console.log('Server started:\nhttp://localhost:3000')
});