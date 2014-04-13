'use strict';

/**
 * Module dependencies
 */

var router = require('koa-router')
var koa = require('koa');

/**
 * Initialize
 */

var app = koa();
app.use(router(app));

/**
 * Export 'app'.
 */

module.exports = app;

/**
 * Posts
 */

app
  .get('/posts', function *(next) {
  })

  .post('/posts', function *(next) {
  })

  .get('/posts/:id', function *(next) {
  })

  .get('/posts/:id/edit', function *(next) {
  })

  .patch('/posts/:id', function *(next) {
  })
  
  .delete('/posts/:id', function *(next) {
  })