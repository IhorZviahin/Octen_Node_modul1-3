const users = require("../db/users");

class UserController {
    renderUsers(req, res) {
        res.json(users)
    }

    getuserbyid(req, res) {
        const {id} = req.params;
        res.json(users[id])
    }
}

module.exports = new UserController();