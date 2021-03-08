const Sequelize = require("sequelize");
const db = require("../database");

const Genres = db.define("genres", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Genres;
