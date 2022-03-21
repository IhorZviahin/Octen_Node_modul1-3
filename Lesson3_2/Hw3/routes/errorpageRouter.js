const {Router} = require('express');

const errorpageController = require('../controllers/errorpageController');

const errorpageRouter = Router();

errorpageRouter.get('/', errorpageController.errorpage);

module.exports = errorpageRouter;