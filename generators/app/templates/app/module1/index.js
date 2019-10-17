/**
 * <%= properCasedModel %> routes
 */

'use strict';

var express = require('express');
var router = express.Router();

import * as controller from './<%= modelName.toLowerCase() %>s.controller';


router.get('/', controller.index);
router.post('/', controller.create);
router.get('/:id', controller.show);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);


module.exports = router;
