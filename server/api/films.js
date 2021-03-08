"use strict";

const router = require("express").Router();
const Films = require("../db/models/Films");

router.get("/", async (req, res, next) => {
  try {
    const films = await Films.findAll();
    console.log("film here!");
    res.json(films);
  } catch (error) {
    console.log("no film here!");
    next(error);
  }
});
//router.use has already mounted our path on 'films'!vvvv

router.get("/:id", async (req, res, next) => {
  try {
    const oneFilm = await Films.findByPk(req.params.id);
    res.json(oneFilm);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
