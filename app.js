var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const hbs = require('hbs')

//conexion base de datos
const mysql = require('mysql')
const myConnection = require ('express-myconnection')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//usamos las base de datos 

app.use(
  myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'root',
    port:3306,
    database:'dbcomputer'
  },'single')
   );
   /*
   var conexion= mysql.createConnection({
     host : 'localhost',
  database : 'dbnodemysql',
  user : 'root',
  password : 'root',
});

conexion.connect(function(err) {
  if (err) {
    console.error('Error de conexion: ' + err.stack);
    return;
  }
  console.log('Conectado con el identificador ' + conexion.threadId);
  
});

*/

app.use('/', indexRouter);
app.use('/users', usersRouter);




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
