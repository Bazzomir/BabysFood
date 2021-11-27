const User = require('../models/user');

module.exports = {
    all: async (req, res) => {
        const users = await User.find();
        res.send(users);
    },
    register: async (req, res) => {
        try {
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                throw new Error('This email is alredy taken! Try new one...');
            }

            user = await User.create(req.body);

            res.send({
                error: false,
                message: 'A new user has been created!',
                user: user
            })

        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
}