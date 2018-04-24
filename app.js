const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const crypto = require("crypto");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");

// middleware

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("index");
});

const port = 3000;

app.listen(port, () => console.log(`app working on localhost:3000`));
