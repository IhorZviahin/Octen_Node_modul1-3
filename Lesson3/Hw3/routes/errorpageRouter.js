const {Router} = require('express');

const errorpageRouter = Router();

errorpageRouter.get('/' ,(req, res) => {
    res.render('errorpage');
})

module.exports = errorpageRouter;