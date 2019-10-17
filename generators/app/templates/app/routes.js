/**
 * Main application routes
 */

'use strict';


module.exports = function(app) {

  // application level routes
  app.get('/health', function(req, res, next) { res.end() });
  app.all('/v1/*', function(req, res, next) { console.log('always happens'); next(); });

  // module routes
  app.use('/v1/<%= modelName.toLowerCase() %>s', require('./module1'));
  app.use('/v1/module2', require('./module2'));
};
