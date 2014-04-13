'use strict';

/**
 * Module dependencies
 */

var pathToRegexp = require('path-to-regexp');
var router = require('koa-router');
var React = require('react');
var koa = require('koa');

/**
 * Stub React component
 */

var HelloMessage = React.createClass({
  displayName: 'HelloMessage',
  render: function() {
    return React.DOM.div(null, "Hello you");
  }
});

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
  this.body = React.renderComponentToString(HelloMessage());
});
