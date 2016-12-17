var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var util = require('util');
var pugUtil = require('./utils/pug-util');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
  secret: '123456'
  ,name: 'vote'
  ,cookie: {
    maxAge: 1000*60*30
  }
  ,resave: false
  ,saveUninitialized: true
}));

app.use(require('./utils/session-filter'));

app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//set routes config
var routeCfg = require('./config/conf.route');
Object.keys(routeCfg).forEach(function (item, index, arr) {
  app.use(item, routeCfg[item]);
});

// use default render router
app.use(function (renderData, req, res, next) {
  var originalUrl = req.originalUrl.replace(/^[/](.*)[^/]*/, '$1');
  if (util.isObject(renderData) && renderData.typeName == 'RenderData') {
    pugUtil.renderView(res, originalUrl, renderData);
  } else if(util.isString(renderData)){
    pugUtil.renderView(res, renderData);
  } else {
    next(renderData);
  }
});

// use original url render router
app.use(function (req, res, next) {
  if(req.method = 'GET'){
    var originalUrl = req.originalUrl.replace(/^[/](.*)[^/]*/, '$1');
    try {
      pugUtil.renderView(res, originalUrl);
    } catch (e) {
      next();
    }
  }else{
    next();
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status);
  res.json(err.toString());
  // pugUtil.renderView(res, 'common/' + err.status);
});

module.exports = app;
