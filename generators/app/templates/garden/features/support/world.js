'use strict';

var Garden = require(require.resolve('plus.garden')).Garden;
var garden = new Garden().init();


exports.World = function(callback) {
  this.api = garden.get('ApiTester');
  this.config = garden.get('config');

  var host = process.env.LISTEN_HOSTNAME;
  var port = process.env.LISTEN_PORT;
  var url = 'http://' + host + ':' + port + '/v1';

  this.indexUrl = url;

  //Assertion
  this.chai = require('chai');
  this.should = this.chai.should();
  this.expect = this.chai.expect;
  this.assert = this.chai.assert;
};
