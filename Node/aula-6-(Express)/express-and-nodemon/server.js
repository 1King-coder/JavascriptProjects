const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET   PUT     DELETE

// https://site.com/about <- GET -> /about

// .get("ROUTE", FUNCTION(request, response)).listen(PORT)

app.get('/', (request, response) => {
    response.send(`
    <form action="/" method="POST">
        <label for="name">Name:</label>
        <input type="text" name="name" placeholder="type your name here">
        <input type="submit" value="Send Form">
    </form>
    `)
});

app.post('/', (request, response) => {
    response.send('<b>Form sent!</b>');
});

app.get('/', (request, response) => {
    response.send('Hello World!');
}).listen(3000, () => {
    console.log('Server started:\nhttp://localhost:3000')
});