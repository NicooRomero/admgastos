const UserModel = require('../models/UsersModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.newUser = async (req, res) => {

    const { email, password } = req.body;

    try {
        let user = await UserModel.findOne({ email });;

        if(user) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        user = new UserModel(req.body);

        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash( password, salt );

        await user.save()
        

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600
        }, (error, token) => {
            if(error) throw error;

            res.json({ token });
        });

    } catch (error) {
        console.log(error)
        res.status(400).send('Se produjo un error')
    }
}