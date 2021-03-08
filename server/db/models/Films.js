const Sequelize = require("sequelize");
const db = require("../database");

const Films = db.define("films", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  country: {
    type: Sequelize.STRING,
  },
  era: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  year: {
    type: Sequelize.INTEGER,
  },
  runtime: {
    type: Sequelize.STRING,
  },
  "Imdb Rating": {
    type: Sequelize.FLOAT,
  },
  "Rotten Tomatoes Score": {
    type: Sequelize.STRING,
  },
  Oscars: {
    type: Sequelize.INTEGER,
  },
  Director: {
    type: Sequelize.STRING,
  },
});

module.exports = Films;
