const users = require("../db/users");

class UserController {
    renderUsers(req, res) {
        res.json(users);
    }

    findUser(req, res) {
        const User = users.find(user => user.id === +req.params.id);
        if (!User) {
            res.redirect('/errorpage')
            return
        }
        res.json(User);
    }
}

module.exports = new UserController();