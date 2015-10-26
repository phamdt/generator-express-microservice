'use strict';

module.exports = function() {

  this.Given('a user', function(callback) {
    var token = '';
    var header = {
      'Authorization': 'Bearer' + '=' + token
    };
    this.api.addHeaders(header, callback);
  });

  this.When('requesting all <%= modelName %>s', function(callback) {
    var self = this;
    this.api
      .get(self.indexUrl)
      .then(callback);
  });

  this.Then('the service should return a list of the user\'s <%= modelName %>s', function(callback) {
    this.api
      .assertStatus(200)
      .then(callback);
  });
};
