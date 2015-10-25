'use strict';

var Garden = require(require.resolve('plus.garden')).Garden;
var garden = new Garden().init();

var config = require('../config');
var env = process.env.NODE_ENV || 'development';

exports.World = function(callback) {
  this.api = garden.get('ApiTester');
  this.config = garden.get('config');

  var host = config[env].host;
  var port = config[env].port;
  var url = 'http://' + host + ':' + port + '/v1';

  this.indexUrl = url;

  //Assertion
  this.chai = require('chai');
  this.should = this.chai.should();
  this.expect = this.chai.expect;
  this.assert = this.chai.assert;
};
