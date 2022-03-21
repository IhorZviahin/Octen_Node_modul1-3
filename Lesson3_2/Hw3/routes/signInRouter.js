const {Router} = require('express');

const users = require('../db/users');
const signInController = require('../controllers/signInController');
const sigInValid = require("../middleware/sigInValid");

const signInRouter = Router();

signInRouter.get('/', signInController.render);
signInRouter.post('/', sigInValid, signInController.findUser);

module.exports = signInRouter;