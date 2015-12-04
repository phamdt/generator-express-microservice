/**
 * <%= properCasedModel %> routes
 */

'use strict';

var express = require('express');
var router = express.Router();

import * as controller from './module1.controller';


router.get('/<%= modelName.toLowerCase() %>s', controller.index);
router.post('/<%= modelName.toLowerCase() %>s', controller.create);
router.get('/<%= modelName.toLowerCase() %>s/:id', controller.show);
router.put('/<%= modelName.toLowerCase() %>s/:id', controller.update);
router.delete('/<%= modelName.toLowerCase() %>s/:id', controller.destroy);


module.exports = router;
