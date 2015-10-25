/**
 * <%= properCasedModel %> routes
 */

'use strict';

import controller from './controller';


function routes(router) {
  // attach routes to controller methods
  router.get('/v1/<%= modelName.toLowerCase() %>s', controller.index);
  router.post('/v1/<%= modelName.toLowerCase() %>s', controller.create);
  router.get('/v1/<%= modelName.toLowerCase() %>s/:id', controller.show);
  router.put('/v1/<%= modelName.toLowerCase() %>s/:id', controller.update);
  router.delete('/v1/<%= modelName.toLowerCase() %>s/:id', controller.destroy);
}

module.exports = routes;
