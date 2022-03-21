const {Router} = require('express');

const users = require('../db/users');
const signInController = require('../controllers/signInController');
const sigInValid = require("../middleware/sigInValid");

const signInRouter = Router();

signInRouter.get('/', signInController.rendersignIn);

signInRouter.post('/', sigInValid, signInController.signInlogin);

module.exports = signInRouter;