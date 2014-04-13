var router = require('../../server/api/router');
var request = require('supertest');
var should = require('should');
var http = require('http');
var koa = require('koa');

describe('Route', function () {
  it('should return status 200', function (done) {
    request(http.createServer(router.callback()))
      .get('/')
      .expect(200)
      .end(function(err) {
        if (err) return done(err);
        done();
      })
  });
});