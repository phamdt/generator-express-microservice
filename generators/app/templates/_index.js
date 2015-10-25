'use strict';

// index.js is the node default starting point
// modules that must be set prior to app.js are required here
// modules that are tied to application logic are required in app.js
// index.js also allows for separation of es5 from es6 code
require('babel/register');


// keep app index requirement last
require('./app/index');