'use strict';

/**
 * Module dependencies
 */

var router = require('koa-router');
var koa = require('koa');

/**
 * Initialize 'app'.
 */

var app = koa();

/**
 * Export 'app'.
 */

module.exports = app;

/**
 * Always return files.
 */

app.use(function *(next) {
  this.status = 200;
});
