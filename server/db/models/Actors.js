const Sequelize = require("sequelize");
const db = require("../database");

const Actors = db.define("actors", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Actors;
