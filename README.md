# server

A not so tiny server.

The purpose of writing this is to get familiar with [Koa](koajs.com) servers and server-side rendering of [React](facebook.github.io/react) components, with a sprinkle of SysOps.

## Layers
````
react
=====================
koa
koa-router
react
=====================
node 0.11.12
postgres 9.3.4
=====================
phusion/baseImage
````

## Directory structure
````
.
├── server
│   ├── api
│   └── base
├── database
├── docs
├── client
│   ├── fonts
│   ├── images
│   ├── modules
│   └── styles
├── node_modules
└── test
    ├── server
    ├── client
    └── integration
````

## Subdomains
````
api.localhost
assets.localhost
localhost
````

## License
[MIT](https://tldrlegal.com/license/mit-license) © [Yoshua Wuyts](yoshuawuyts.com)