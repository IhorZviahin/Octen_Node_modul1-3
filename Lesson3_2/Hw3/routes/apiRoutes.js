const {Router} = require('express');

const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const signInRouter = require('./signInRouter');
const errorpageRouter = require('./errorpageRouter');

const router = Router();

router.use('/users', userRouter);
router.use('/login', loginRouter);
router.use('/signIn', signInRouter);
router.use('/errorpage', errorpageRouter);
router.use((req, res) => {
    res.render('NotFoundPage');
});

module.exports = router;