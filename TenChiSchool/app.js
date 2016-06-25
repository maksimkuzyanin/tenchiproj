var express = require('express');
var path = require('path');
var http = require('http');
var config = require('config');
var log = require('libs/log')(module);

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');

var ejs = require('ejs');

var app = express();

// view engine setup
app.engine('ejs', require('ejs-locals')); //layout partial block
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'images/favicon.ico'))); // /favicon.ico
if (app.get('env') == 'development') {
  app.use(logger('dev')); //res.end
}
else {
  app.use(logger('default'));
}

app.use(bodyParser.json()); //req.body....

app.use(cookieParser()); //req.cookies

app.get('/', function(req, res, next) {
  res.render("index", {
    body: '<b>Hello</b>'
  });
});

app.get('/login', function(req, res, next) {
  res.render("login", {
  });
});

app.get('/menu', function(req, res, next) {
  res.render("menu", {
  });
});

app.use(express.static(path.join(__dirname, 'public')));

/* обработчик ошибок
app.use(function(err, req, res, next){
  // NODE_ENV = 'production'
  if (app.get('env') == 'development') {
    //var errorHandler = express.errorHandler();
    //errorHandler(err, req, res, next);
    res.send('500');
  }
  else {
    res.send('');
  }
});*/

/*


var routes = require('./routes/index');
var users = require('./routes/users');





// uncomment after placing your favicon in /public
//

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/

http.createServer(app).listen(config.get('port'), function() {
  log.info('Express server listening on port' + config.get('port'));
});


module.exports = app;
