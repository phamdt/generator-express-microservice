'use strict';

const <%= modelName.toLowerCase()%> = require('./module1.model');


export function index(req, res) {
  return db('<%= modelName.toLowerCase()%>')
    .select('*')
    .then( response => {
      console.log('successful indexing');
      res.json(response);
    })
    .catch( error => {
      console.log('error indexing', error);
      res.status(500).end();
    });
}

export function create(req, res, next) {
  // add strong params, validations, etc.
  return db('<%= modelName.toLowerCase()%>')
    .insert(req.params)
    .then( insert => {
      console.log('successful creation: ', insert);
      res.json(insert);
    })
    .catch( error => {
      console.log('error in creation: ', error);
      res.status(500).end();
    });
}

export function show(req, res, next) {
  // add authorization filtering
  return db('<%= modelName.toLowerCase()%>')
    .where({id: req.params.id})
    .select('*')
    .then( response => {
      console.log('successfully fetched <%= modelName.toLowerCase()%>');
    })
    .catch( error => {
      console.log('error indexing', error);
      res.status(500).end();
    });
}

export function update(req, res, next) {
  // add authorization filtering
  var updateParams = {};
  var updateable = [];
  for (var ii in updateable) {
    var column = updateable[ii];
    if (req.params[column]) {
      updateParams[column] = req.params.column;
    }
  }

  return db('<%= modelName.toLowerCase()%>')
    .where({id: req.params.id})
    .update(updateParams)
    .then( response => {
      res.json(response);
    })
    .catch( error => {
      res.status(500).end();
    });
}

export function destroy(req, res) {
  return db('<%= modelName.toLowerCase()%>')
    .where({id: req.params.id})
    .del()
    .then( response => {
      res.json(response);
    })
    .catch( error => {
      res.status(500).end();
    });
}
