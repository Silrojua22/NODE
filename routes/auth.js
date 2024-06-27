const express = require("express");
const authRouter = express.Router();
const { validatorRegister, validatorLogin } = require('../validators/auth');
const { registerController, loginController } = require('../controllers/auth.js')

authRouter.post("/login", validatorLogin, loginController);

authRouter.post("/register", validatorRegister, registerController);

module.exports = authRouter;
