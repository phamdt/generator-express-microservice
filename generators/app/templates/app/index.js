'use strict';

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const env = process.env.NODE_ENV || 'development';
const app = express();

app.set('port', (process.env.LISTEN_PORT || 3000));
app.set('hostname', (process.env.LISTEN_HOSTNAME || 'localhost'));

if (env === 'development') {
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

exports.app = app;
