const users = require("../db/users");

class loginController {
    renderLogin(req, res) {
        res.render('login')
    }

    userpusharray(req,res){
        const userEmail = users.find(user => user.email === req.body.email)

        if (userEmail) {
            return res.redirect('/errorpage');
        }

        users.push(req.body);
        res.redirect('/users');
    }
}

module.exports = new loginController();