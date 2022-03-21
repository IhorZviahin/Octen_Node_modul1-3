const users = require("../db/users");

class loginController {
    renderLogin(req, res) {
        res.render('login');
    }
    pushNewUser(req,res){
        const userEmail = users.find(user => user.email === req.body.email);
        if (userEmail) {
            return res.redirect('/errorpage')
        }
        users.push({...req.body, id: users[users.length - 1].id + 1});
        res.redirect('/users');
    }
}

module.exports = new loginController();