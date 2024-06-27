const { encrypt, compare } = require('../utils/handlePassword')
const { matchedData } = require("express-validator");
const { tokenSign } = require('../utils/handleJsonWebToken')
const User = require('../models/nosql/users');

const registerController = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password)
        const body = { ...req, password }
        const dataUser = await User.create(body);
        console.log(dataUser);
        dataUser.set('password', undefined, { srtrict: false })

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }

        res.send({ data })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

const loginController = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await User.findOne({ email: req.email }).select('password name role email');
        if (!user) {
            res.status(404).send("Usuario no encontrado");
            return;
        }

        const hashPassword = user.get('password');
        const check = await compare(req.password, hashPassword);
        if (!check) {
            res.status(401).send('Error de autenticación');
            return;
        }

        user.set('password', undefined, { strict: false });

        const data = {
            token: await tokenSign(user),
            user
        };
        res.send({ data });
    } catch (error) {
        console.error(error); // Registra el error para propósitos de depuración, pero no lo envíes al cliente.
        res.status(403).send('Error de autenticación');
    }
};


module.exports = { registerController, loginController };