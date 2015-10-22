'use strict';

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from '../config.json';
import Knex from 'knex';

const env = process.env.NODE_ENV || 'development';
const app = express();

Knex.knex = Knex(config.database[env]);

app.set('port', (config.port || 3000));
app.set('hostname', (config.hostname || 'localhost'));

if (env === 'development' || env === 'qa') {
  // turn on request logging
  app.use(morgan('combined'));
}

// register routes
require('./routes')(app);

// allow parsing of application/json requests
app.use(bodyParser.json());

app.listen(app.get('port'), app.get('hostname'), () => {
  console.log('Server running at http://' + app.get('hostname') + ':' + app.get('port'));
});

export.app = app;
export.db = Knex;
