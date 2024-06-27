const express = require("express");
const tracksRouter = express.Router();
const authMiddleware = require("../controllers/middleware/session.js");
//const customHeaderMiddleware = require('../controllers/middleware/customHeaderMiddleware.js');
const {
  getItems,
  createItems,
  getItem,
  updateItems,
  deleteItems,
} = require("../controllers/tracksController.js");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks.js");
const checkRol = require("../controllers/middleware/rol.js");

tracksRouter.get("/:id", authMiddleware, getItem);

tracksRouter.get("/", authMiddleware, getItems);

tracksRouter.post(
  "/",
  authMiddleware,
  checkRol(["user"]),
  validatorCreateItem,
  createItems
);

tracksRouter.put(
  "/:id",
  authMiddleware,
  validatorCreateItem,
  validatorGetItem,
  updateItems
);

tracksRouter.delete("/:id", authMiddleware, deleteItems);

module.exports = tracksRouter;
