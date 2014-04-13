'use strict';

/**
 * Module dependencies
 */

var send = require('koa-send');
var koa = require('koa');

/**
 * Initialize 'app'.
 */

var app = koa();

/**
 * Expose 'app'.
 */

module.exports = app;

/**
 * Respond with static files.
 */

app.use(function *(next){
  var opts = {root: __dirname + '/../../build'};
  yield send(this, this.path, opts);
});