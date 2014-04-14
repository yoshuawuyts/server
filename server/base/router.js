'use strict';

/**
 * Module dependencies
 */

var MainComponent = require('../../client/index');
var router = require('koa-router');
var React = require('react');
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
  this.body = React.renderComponentToString(MainComponent());
});
