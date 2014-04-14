'use strict';

/**
 * Module dependencies
 */

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
 * Stub React component
 */

var HelloMessage = React.createClass({
  displayName: 'HelloMessage',
  render: function() {
    return React.DOM.div(null, "Hello you");
  }
});

/**
 * Always return files.
 */

app.use(function *(next) {
  this.body = React.renderComponentToString(HelloMessage());
});
