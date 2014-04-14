'use strict';

/**
 * Module dependencies
 */

var responseTime = require('koa-response-time');
var compress = require('koa-compress');
var compose = require('koa-compose');
var base = require('./base/router');
var logger = require('koa-logger');
var helmet = require('koa-helmet');
var api = require('./api/router');
var send = require('koa-send');
var http = require('http');
var koa = require('koa');

/**
 * Initialize variables.
 */

var ENV = process.env.NODE_ENV || 'development';
var PORT = process.env.port || 1337;
var app = koa();

/**
 * Allow for subdomain detection.
 */

app.subdomainOffset = 1;

/**
 * Middleware
 */

if ('test' != process.env.NODE_ENV) app.use(logger());
app.use(responseTime());
app.use(compress());
app.use(helmet.defaults());

/**
 * Subdomain routes.
 */

app.use(function *(next) {
  switch (this.subdomains[0]) {

    case 'api': 
      return yield compose(api.middleware).call(this, next);
      break;

    case 'assets':
      var opts = {root: __dirname + '/../build'};
      return yield send(this, this.path, opts);
      break;

    default:
      return yield compose(base.middleware).call(this, next);
      break;
  }
});

/**
 * Start listening.
 */

app.listen(PORT);
console.log('Environment: ' + ENV);
console.log('Port: ' + PORT);