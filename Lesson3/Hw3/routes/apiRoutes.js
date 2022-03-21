const {Router} = require('express');
const userRouter = require('./userRouter');
const loginRouter = require("./loginRouter");
const errorpageRouter = require("./errorpageRouter");
const signInRouter = require("./signInRouter");

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/login', loginRouter);
routes.use('/signIn', signInRouter);

routes.use((req,res)=>{
    res.render('NotFoundPage');
});

module.exports = routes;