var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressLayout = require("express-ejs-layouts"); // input modul express-ejs-layouts

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app_server','views')));
app.set('view engine','ejs');
app.use(expressLayout);
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
