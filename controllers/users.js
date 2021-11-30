const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = {
    register: async (req, res) => {
        try {
            req.body.email = req.body.email.toLowerCase();
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                throw new Error('This email is alredy taken! Try new one...');
            }

            if (!req.body.confirmPW === req.body.password) {
                throw new Error('The password confirmation does not match. Please try again, but CORRECTLY (:')
            }

            req.body.password = bcrypt.hashSync(req.body.password);
            user = await User.create(req.body);

            res.send({
                error: false,
                message: 'A new user has been created!',
                user: user
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                throw new Error("Invalid credential [Email]");
            }
            if (!bcrypt.compareSync(req.body.password, user.password)) {
                throw new Error("Invalid credential [Password]");
            }

            const userToken = {
                id: user._id,
                email: user.email
            }
            const token = jwt.sign(userToken, process.env.SECRET_AUTH_TOKEN, {
                expiresIn: '50m'
            })

            res.send({
                error: false,
                message: "User is logged in.",
                token: token
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.user.id)
            res.send({
                error: false,
                message: `Info for user with id #${req.body.user}`,
                user: user
            })
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            })
        }
    },
    editUser: async (req, res) => {
        try {
            await User.findByIdAndUpdate(req.user.id, req.body);
            if (!req.body.confirmPW === req.body.password) {
                throw new Error('The password confirmation does not match. Please try again, but CORRECTLY (:')
            }
            res.send({
                error: false,
                message: `Updated profile ${req.body.first_name}`
            })
        }
        catch (error) {
            res.send({
                error: true,
                message: error.message
            })
        }
    },
    logout: (req, res) => {
        try {
            const userToken = {
                id: req.user.id,
                email: req.user.email
            }

            const token = jwt.sign(userToken, 'Invalid secret key', {
                expiresIn: '1'
            });

            successResponse(res, 'You have been logged out', token);
        } catch (error) {
            errorResponse(res, 500, error.message);
        }
    },
}
