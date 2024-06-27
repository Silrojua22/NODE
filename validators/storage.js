const { check } = require("express-validator");
const validateResults = require('../controllers/middleware/validatorMiddleware.js')


const validatorGetItem = [
    check('mediaId').exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = { validatorGetItem }