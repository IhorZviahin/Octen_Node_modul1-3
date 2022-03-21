function UserAllData(req, res, next) {
    try {
        const {firstName, lastName, email, age, city} = req.body;

        if (!firstName || !lastName || !email || !age || !city) {
            throw new Error('Data is not provided');
        }
        next();
    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = UserAllData;