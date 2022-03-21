const {Router} = require('express');

const users = require('../db/users');
const loginController = require('../controllers/loginController');
const UserAllData = require('../middleware/UserAllData');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);

loginRouter.post('/', UserAllData, loginController.userpusharray);

module.exports = loginRouter;