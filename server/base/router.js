'use strict';

/**
 * Module dependencies
 */

var responseTime = require('koa-response-time');
var compress = require('koa-compress');
var logger = require('koa-logger');
var router = require('koa-router');
var koa = require('koa');

/**
 * Initialize variables.
 */

var app = koa();

/**
 * Export 'app'.
 */

module.exports = app;

/**
 * Middleware
 */

if (process.env.NODE_ENV != 'test') app.use(logger());
app.use(responseTime());
app.use(compress());

/**
 * Initialize router.
 */

app.use(router(app));

/**
 * Always return files.
 */

app.use(function *(next) {
  this.status = 200;
});
