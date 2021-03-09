const UserModel = require('../models/UsersModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.authUser = async (req, res) => {
    const { email, password } = (req.body);

    try {
        let user = await UserModel.findOne({ email });
        if(!user) {
            return res.status(400).json({msg: 'El usuario no existe'});
        }

        const passCheck = await bcryptjs.compare(password, user.password);
        if(!passCheck) {
            return res.status(400).json({msg: 'Password Incorrecto'});
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600
        }, (error, token) => {
            if(error) throw error;

            res.json({ token });
        });

    } catch (error) {
        console.log(error);
    }
}

exports.userAuth = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id).select('-password');
        res.json({user});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}