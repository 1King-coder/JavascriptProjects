require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')  // DB module

// Stablish connection with MongoDB
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        app.emit('started')
    })
    .catch(e => console.log(e));


const session = require('express-session');  // web Session
const MongoStore = require('connect-mongo');  // MongoStore for storing session

const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { globalMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // Allow request.body
app.use(express.static(path.resolve(__dirname, 'public')));

// Session Ops
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

app.use(csrf());
// our middlewares
app.use(globalMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('started', () => {
    app.listen(3000, () => {
        console.log('Server started:\nhttp://localhost:3000')
    }); 
});

