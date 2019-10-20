var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// var Itemboard=require("../models/itemboard");
// var multer = require('multer');

var app = express();

// html
if (app.get('env') === 'development') {
  app.locals.pretty = true;
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//connect mongoDB
mongoose.Promise = global.Promise; // ES6 Native Promise를 mongoose에서 사용한다.
const connStr = 'mongodb://localhost/alonedb';
mongoose.connect(connStr, { useNewUrlParser: true,  useUnifiedTopology: true });
mongoose.connection.on('error', console.error);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// .js 를 사용하기 위해 app  에서 require해주는 부분
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var freeboardRouter = require('./routes/freeboard');
var basketRouter = require('./routes/basket');
var itemBoardRouter = require('./routes/itemboard');//게시판

//위와 같이 이게 있어야 실행 가능
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/freeboard',freeboardRouter);
app.use('/basket',basketRouter);
app.use('/itemboard', itemBoardRouter);//게시판 
app.use('/picture', express.static('picture'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
