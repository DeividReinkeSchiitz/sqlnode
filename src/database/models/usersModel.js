const { Sequelize, DataTypes, Model } = require("sequelize");
const bscypt = require("bcryptjs");

const sequelize = require("../connect");

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    loaded: {
      type: Sequelize.BOOLEAN
    },
    age: {
      type: Sequelize.INTEGER
    }
  },
  {
    sequelize,
    tableName: "Users",
    underscored: true,

    hooks: {
      afterValidate: user => {
        user.password = bscypt.hashSync(user.password, 8);
      },
      afterCreate: user => {
        console.log("USER CREATED", user);
      }
    }
  }
);

sequelize.sync();
module.exports = User;
