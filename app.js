var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var api3Router = require('./routes/api3');;

var item1r = require('./routes/item1');;

var item3sale = require('./routes/item3sale');;





var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'),{extensions:['html']}));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api3', api3Router);
app.use('/item1', item1r);
app.use('/item3sale', item3sale);

module.exports = app;
