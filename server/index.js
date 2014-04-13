'use strict';

/**
 * Module dependencies
 */

var responseTime = require('koa-response-time');
var assets = require('./assets/router');
var compress = require('koa-compress');
var compose = require('koa-compose');
var base = require('./base/router');
var logger = require('koa-logger');
var api = require('./api/router');
var http = require('http');
var koa = require('koa');

/**
 * Initialize variables.
 */

var ENV = process.env.NODE_ENV || 'development';
var PORT = process.env.port || 1337;
var app = koa();

/**
 * Middleware
 */

if ('test' != process.env.NODE_ENV) app.use(logger());
app.use(responseTime());
app.use(compress());

/**
 * Subdomain routes.
 */

app.use(function *(next) {
  switch (this.subdomains[0]) {

    case api: 
      return yield compose(api.middleware).call(this, next);
      break;

    case assets:
      return yield compose(assets.middleware).call(this, next);
      break;

    default:
      return yield compose(base.middleware).call(this, next);
      break;
  }
});

/**
 * Start listening
 */

app.listen(PORT);
console.log('Environment: ' + ENV);
console.log('Port: ' + PORT);