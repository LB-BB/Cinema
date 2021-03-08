"use strict";

const db = require("./database");
const Films = require("./models/Films");
const Genres = require("./models/Genres");
const Actors = require("./models/Actors");

// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).
// Example:
//
// const Puppy = require('./puppy')
// const Owner = require('./owner')

// After you've required all of your models into this module, you should establish
// associations (https://sequelize-guides.netlify.com/association-types/) between them here as well!
// Example:
//
// Puppy.belongsTo(Owner)
Films.belongsToMany(Actors, { through: "Films-Actors" });
Films.belongsToMany(Genres, { through: "Films-Genres" });

module.exports = {
  Films,
  Genres,
  Actors,
  // Include your models in this exports object as well!
  db,
};
