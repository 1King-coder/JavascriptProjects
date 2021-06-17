require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        app.emit('started')
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');;

const flash = require('connect-flash');

const routes = require('./routes')
const path = require('path');
const { middlewareGloval } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // How much it will exist
//              mili   sec  min  day  days
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on('started', () => {
    app.listen(3000, () => {
        console.log('Server started:\nhttp://localhost:3000')
    }); 
});

