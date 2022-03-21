class ErrorpageController {
    errorpage(req, res) {
        res.render('errorpage');
    }
}

module.exports = new ErrorpageController();