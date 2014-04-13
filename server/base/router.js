'use strict';

/**
 * Module dependencies
 */

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
 * Initialize router.
 */

app.use(router(app));

/**
 * Always return files.
 */

app.use(function *(next) {
  this.status = 200;
});
