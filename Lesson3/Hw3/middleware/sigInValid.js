const users = require("../db/users");

function sigInValid(req, res, next) {
    try {

        const userEmail = users.find(user => user.email === req.body.email)
        if (!userEmail) {
            throw new Error('Data is not provided');
        }

        next();

    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = sigInValid;