'use strict';

module.exports = function() {
  this.Before(function(callback) {
    callback();
  });

  this.After(function(callback) {
    callback();
  });
};