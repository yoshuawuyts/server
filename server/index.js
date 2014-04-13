'use strict';

/**
 * Module dependencies
 */

var assets = require('./assets/router');
var base = require('./base/router');
var vhostess = require('vhostess');
var api = require('./api/router');
var http = require('http');
var koa = require('koa');

/**
 * Initialize variables.
 */

var ENV = process.env.NODE_ENV || 'development';
var PORT = process.env.port || 1337;
var hostess = vhostess();
var app = koa();

/**
 * Routes 
 *
 * TODO: replace with native koa bindings > req.subdomains
 * 
 */

hostess.use('assets.localhost', api.callback());
hostess.use('blog.localhost', api.callback());
hostess.use('api.localhost', api.callback());
hostess.use('localhost', base.callback());

/**
 * Static file server.
 */

hostess.use(function (req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('subdomain needed');
})

/**
 * Listen to requests.
 */

http.createServer(hostess).listen(PORT);
console.log('Environment: ' + ENV);
console.log('Port: ' + PORT);