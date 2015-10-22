/**
 * Microservice routes
 */

'use strict';

import controller from './controller';


function routes(router) {
  // attach routes to controller methods
  router.get('/', controller.index);
  router.post('/', controller.create);
  router.get('/:id', controller.show);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.destroy);
}

module.exports = routes;
