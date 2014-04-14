/**
 * Module dependencies
 */

var React = require('react');

/**
 * Initialize ENV variables.
 */

var domainName = 'mywebsite.com';
var PORT = process.env.port || 1337;
var host = process.env.NODE_ENV == 'production' ? domainName : 'localhost:' + PORT;

/**
 * Define React class.
 */

module.exports = React.createClass({
  displayName: 'Index',
  render: function() {
    return React.DOM.html({className: 'no-js'}, 
      React.DOM.head(null, 
        React.DOM.meta({charSet: 'utf-8'}),
        React.DOM.meta({httpEquiv: 'X-UA-Compatible', content: 'IE=edge'}),
        React.DOM.title(null, domainName),
        React.DOM.meta({name: 'viewport', content: 'width=device-width, initial-scale=1'}),
        React.DOM.base({href: 'http://assets.' + host},
          React.DOM.link({rel: 'stylesheet', href:'/build.css'})
        )
      ),
      React.DOM.body(null, 'Hello world')
    )
  }
});