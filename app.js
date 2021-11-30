var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const mongoose = require('mongoose');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var recipesRouter = require('./routes/recipes');

var app = express();

mongoose.connect('mongodb://localhost:27017/babys-food');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);

app.use((err, req, res, next)=>{
    if(err.name === 'UnauthorizedError'){
        res.status(401).send({
            error: true,
            message: 'Login first!'
        })
    }
});

module.exports = app;
