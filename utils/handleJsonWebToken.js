const jsonWebToken = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const getProperies = require('../utils/hanldePropertiesEngine.js');
const propertiesKey = getProperies();

const tokenSign = async (user) => {
    const sign = await jsonWebToken.sign({
        [propertiesKey.id]: user[propertiesKey.id],
        role: user.role,
    }, JWT_SECRET, {
        expiresIn: "2h",
    });
    return sign;
};

const verifyToken = async (tokenJwt) => {
    try {
        return jsonWebToken.verify(tokenJwt, JWT_SECRET);
    } catch (error) {
        return null;
    }
}

module.exports = { tokenSign, verifyToken };
