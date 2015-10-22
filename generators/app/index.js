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
      'Welcome to the RM ' + chalk.red('ExpressMicroservice') + ' generator!'
    ));

    var prompts = [
      {
        type    : 'input',
        name    : 'name',
        message : 'Your project name'
        // default : this.appname // Default to current folder name
      },
      {
        type    : 'input',
        name    : 'modelName',
        message : 'your model or action name'
      }
    ];
    this.prompt(prompts, function (answers) {
      this.name = answers.name;
      this.modelName = answers.modelName;
      done();
    }.bind(this));
  },
  configuring: {
    buildNames: function() {

      this.variables = {
        microserviceName            : this.name,
        upperCasedName              : this.name.toUpperCase(),
        modelName                   : this.modelName
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
  // else if (word.indexOf('src/') !== -1) {
  //   word = word.substr(4);
  // }
  return word;
}
