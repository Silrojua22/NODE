const express = require("express");
const mainRouter = express.Router();
const tracks = require('./tracks.js');
const storage = require('./storage.js');
const auth = require('./auth.js')

mainRouter.use('/tracks', tracks);
mainRouter.use('/storage', storage);
mainRouter.use('/auth', auth);


module.exports = mainRouter;
