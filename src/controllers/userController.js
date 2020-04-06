const User = require("../database/models/usersModel");

module.exports = {
  async index(req, res) {
    const user = await User.findAll();
    return res.json(user);
  },
  async store(req, res) {
    const { password, email, username, loaded, age } = req.body;

    let user;
    try {
      user = await User.create(
        {
          email,
          password,
          username,
          loaded,
          age
        },
        {
          fields: ["email", "password", "username", "loaded", "age"]
        }
      );
    } catch (error) {
      if (error) throw error;
    }

    return res.json(user);
  },
  async delete(req, res) {},
  async update(req, res) {}
};
