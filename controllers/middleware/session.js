const { verifyToken } = require("../../utils/handleJsonWebToken");
const User = require("../../models/nosql/users");
const getProperies = require("../../utils/hanldePropertiesEngine.js");
const propertiesKey = getProperies();

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send("NOT_TOKEN");
    }
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);
    if (!dataToken) {
      res.status(401).send("NOT_PAYLOAD_DATA");
      return;
    }

    const query = {
      [propertiesKey.id]: dataToken[propertiesKey.id],
    };

    const user = await User.findOne(query);
    req.user = user;

    next();
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

module.exports = authMiddleware;
