const users = require("../db/users");

class signInController {
    render(req, res) {
        res.render('signIn');
    }

    findUser(req, res) {
        const {password, email} = req.body;
        const userInfo = users.find((user) => user.password === password && user.email === email)

        if (!userInfo) {
            res.redirect('/errorpage');
            return;
        }
        res.redirect(`/users/${userInfo.id}`);
    }
}

module.exports = new signInController();