'use strict';

import config from '../config.json';
var db = require('./app').db;

const <%= modelName.toLowerCase()%> = require('./model');


exports.index = index;
exports.create = create;
exports.show = show;
exports.update = update;
exports.destroy = destroy;


function index(req, res) {
  var response = [];
  db('<%= modelName.toLowerCase()%>')
    .select('*')
    .then( (response) => {
      console.log('successful indexing');
      res.json(response);
    })
    .catch( (error) => {
      console.log('error indexing', error);
    });
}

function create(req, res, next) {
  // add strong params, validations, etc.
  return db('<%= modelName.toLowerCase()%>')
    .insert(req.params)
    .then( (insert) => {
      console.log('successful creation: ', insert);
      res.json(insert);
    })
    .catch( (error) => {
      console.log('error in creation: ', error);
    });
}

function show(req, res, next) {
  // add authorization filtering
  var resourceIdentifier = req.params.id;
  db('<%= modelName.toLowerCase()%>')
    .where({id: resourceIdentifier})
    .select('*')
    .then( (response) => {
      console.log('successful indexing');
      res.json(response);
    })
    .catch( (error) => {
      console.log('error indexing', error);
    });
}

function update(req, res, next) {
  // add authorization filtering
  var resourceIdentifier = req.params.id;
  var updateParams = {};
  var updateable = [];
  for (var ii in updateable) {
    var column = updateable[ii];
    if (req.params[column]) {
      updateParams[column] = req.params.column;
    }
  }

  db('<%= modelName.toLowerCase()%>')
    .where({id: resourceIdentifier})
    .update(updateParams)
    .then( (response) => {
      res.json(response);
    })
    .catch( (error) => {
      res.json(error);
    });
}

function destroy(req, res) {
  var resourceIdentifier = req.params.id;
  db('<%= modelName.toLowerCase()%>')
    .where({id: resourceIdentifier})
    .del()
    .then( (response) => {
      res.json(response);
    })
    .catch( (error) => {
      res.json(error);
    });
}
