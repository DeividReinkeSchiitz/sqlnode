const Router = require("express").Router();
const User = require("./database/models/usersModel");
const userController = require("./controllers/userController");

Router.post("/", userController.store);
Router.get("/", userController.index);

Router.get("/dashboard", (req, res) => {
  res.end("AEAEAE");
});
module.exports = Router;
