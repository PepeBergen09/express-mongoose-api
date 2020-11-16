var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var config = require('./config/configuration');

var app = express();

// for mongoose api


// cors
const cors = require("cors");
var corsOptions = {origin: "http://localhost:8081"};

app.use(cors(corsOptions));

//routes
var indexRouter = require('./routes/router.index');
var usersRouter = require('./routes/router.users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
