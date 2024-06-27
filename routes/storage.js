const express = require("express");
const storageRouter = express.Router();
const uploadMiddleware = require("../controllers/middleware/uploadMiddleware.js");
const {
  createItems,
  getItems,
  getItem,
  deleteItems,
} = require("../controllers/storageControllers.js");

const checkRol = require("../controllers/middleware/rol.js");

storageRouter.get("/", checkRol("admin"), getItems);

storageRouter.get("/:id", getItem);

storageRouter.post("/", uploadMiddleware.single("myfile"), createItems);

storageRouter.delete("/:id", deleteItems);

module.exports = storageRouter;
