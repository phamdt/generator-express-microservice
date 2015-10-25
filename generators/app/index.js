'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var templates = require('./templates');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the RM ' + chalk.red('Express Microservice') + ' generator!'
    ));

    var prompts = [
      {
        type    : 'input',
        name    : 'modelName',
        message : 'your model name'
      }
    ];
    this.prompt(prompts, function (answers) {
      this.modelName = answers.modelName;
      done();
    }.bind(this));
  },
  configuring: {
    buildNames: function() {

      this.variables = {
        modelName                   : this.modelName,
        properCasedModel            : properCase(this.modelName)
      };
    }
  },
  writing: {
    projectfiles: function () {
      var self = this;
      for (var ii = 0; ii < templates.length; ii++) {
        var template = templates[ii];
        self.fs.copyTpl(
          self.templatePath(template),
          self.destinationPath(prepare(template)),
          self.variables
        );
      }
    }
  },
  install: function () {
    this.npmInstall();
  }
});

function prepare(word) {
  if (word.charAt(0) === '_') {
    word = word.substr(1);
  }
  return word;
}

function properCase(word) {
  var first = word.toLowerCase().substring(0, 1).toUpperCase();
  return word.substr(0, 0) + first + word.substr(0 + 1);
}
