'use strict';

/**
 * Module dependencies
 */
var triplesec = require('triplesec');
var decrypt = triplesec.decrypt;
var encrypt = triplesec.encrypt;

/**
 * Initialize key
 */

var passPhrase = new Buffer('top-secret-pw');

var buffer0 = new Buffer('the secret!');
var buffer1 = new Buffer(buffer0);

/**
 * Decrypt
 */

encrypt({key: passPhrase, data: buffer1}, function(err, ciphertext) {
  return decrypt({key: passPhrase, data: ciphertext}, function(err, data) {
    return console.log(data.toString());
  });
});

encrypt({key: passPhrase, data: buffer0}, function(err, ciphertext) {
  if (err) throw err;
  return ciphertext;
});

function (ciphertext) {
  decrypt({key: passPhrase, data: ciphertext}, function(err, data) {
    return data.toString();
  });
};

console.log(x);